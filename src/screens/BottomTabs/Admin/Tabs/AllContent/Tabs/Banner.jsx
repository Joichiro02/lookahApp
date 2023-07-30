// ** react and react-native imports
import React, { useCallback, useEffect, useState } from "react";
import {
    RefreshControl,
    Text,
    TouchableOpacity,
    ImageBackground,
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

export default function Banner() {
    // ** states
    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState();
    const [fetchData, setFetchData] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const fetchAllData = async () => {
        const dataRef = collection(database, "banners");

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
                            className="mb-4 rounded-lg"
                        >
                            <ImageBackground
                                className="rounded-lg justify-end"
                                source={{ uri: item.photo.link }}
                                style={{ height: 150, width: "100%" }}
                                resizeMode="cover"
                            >
                                {/* <View className="space-y-2 w-1/2"> */}
                                <Text
                                    className="font-bold text-lg text-white px-2 py-2 bg-gray-500 opacity-80"
                                    numberOfLines={1}
                                >
                                    {item.title}
                                </Text>
                                {/* </View> */}
                            </ImageBackground>
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
