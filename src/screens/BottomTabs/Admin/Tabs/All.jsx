// ** react and react-native imports
import React, { useCallback, useEffect, useState } from "react";
import {
    RefreshControl,
    Image,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

// ** libraries imports
import { collection, getDocs, query, where } from "firebase/firestore";
import { FlashList } from "@shopify/flash-list";

// ** firebase
import { database } from "config/firebase";

// ** local imports
import Container from "components/layouts/Container";
import DropdownField from "components/common/DropdownField";
import Modal from "../Modal";
import { colors } from "themes";

const data = [
    { label: "All", value: "" },
    { label: "Hotel", value: "hotel" },
    { label: "Bar & Grill", value: "barAndGrill" },
    { label: "Restaurant", value: "restaurant" },
    { label: "Park", value: "park" },
    { label: "Tourist Spot", value: "touristSpot" },
    { label: "Establishment", value: "establishment" },
    { label: "Activities", value: "activities" },
    { label: "Promos", value: "promos" },
];

export default function All() {
    // ** states
    const [category, setCategory] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState();
    const [fetchData, setFetchData] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const fetchAllData = async (category) => {
        const dataRef = collection(database, "data");
        const dataReturn = query(dataRef, where("category", "==", category));
        if (category.length > 0) {
            const data = await getDocs(dataReturn);
            setFetchData(
                data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            );
        } else {
            const data = await getDocs(dataRef);
            setFetchData(
                data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            );
        }
    };

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            fetchAllData();
            setRefreshing(false);
        }, 2000);
    }, []);

    useEffect(() => {
        fetchAllData(category);
    }, [category]);

    return (
        <>
            <Container>
                <DropdownField
                    data={data}
                    placeholder="Select Category"
                    value={category}
                    setValue={setCategory}
                />

                <FlashList
                    contentContainerStyle={{ paddingTop: 10 }}
                    refreshControl={
                        <RefreshControl
                            colors={[colors.Primary]}
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                            progressViewOffset={50}
                        />
                    }
                    data={fetchData}
                    estimatedItemSize={200}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => {
                                setModalData(item);
                                setShowModal(true);
                            }}
                            className="flex-row my-2 space-x-2"
                        >
                            <Image
                                className="rounded-lg"
                                source={{ uri: item.photo.link }}
                                style={{ height: 100, width: "50%" }}
                                resizeMode="cover"
                            />
                            <View className="space-y-2 w-1/2">
                                <Text
                                    className="font-bold text-lg"
                                    numberOfLines={2}
                                >
                                    {item.title}
                                </Text>
                                <Text>{item.operation_hour}</Text>
                                <View>
                                    <Text>{item.category}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </Container>

            <Modal
                data={modalData}
                showModal={showModal}
                setShowModal={setShowModal}
            />
        </>
    );
}
