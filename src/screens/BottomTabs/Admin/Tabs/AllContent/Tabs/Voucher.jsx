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
import { collection, getDocs } from "firebase/firestore";
import { FlashList } from "@shopify/flash-list";

// ** firebase
import { database } from "config/firebase";

// ** local imports
import Container from "components/layouts/Container";
import Modal from "../../../Modal";
import { colors } from "themes";

export default function Content() {
    // ** states
    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState();
    const [fetchData, setFetchData] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const fetchAllData = async () => {
        const dataRef = collection(database, "vouchers");

        const data = await getDocs(dataRef);
        setFetchData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            fetchAllData();
            setRefreshing(false);
        }, 2000);
    }, []);

    useEffect(() => {
        fetchAllData();
    }, []);

    return (
        <>
            <Container>
                <FlashList
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
                            className="flex-row mb-4 space-x-2"
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
                                <Text>{item.description}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </Container>

            {/* <Modal
                data={modalData}
                showModal={showModal}
                setShowModal={setShowModal}
            /> */}
        </>
    );
}
