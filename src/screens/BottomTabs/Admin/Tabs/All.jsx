// ** react and react-native imports
import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

// ** libraries imports
import { collection, getDocs } from "firebase/firestore";

// ** firebase
import { database } from "config/firebase";

// ** local imports
import Container from "components/layouts/Container";
import Modal from "../Modal";
import TextField from "components/common/InputSearchField";

export default function All() {
    // ** states
    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState();
    const [fetchData, setFetchData] = useState();

    useEffect(() => {
        const fetchAllData = async () => {
            const data = await getDocs(collection(database, "data"));
            setFetchData(
                data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            );
        };

        fetchAllData();
    }, []);

    return (
        <>
            <Container>
                <View className="flex-row items-center space-x-4">
                    <TextField placeholder="Search" />
                    <TouchableOpacity className="bg-[#FF0844] flex-1 items-center justify-center py-2.5 rounded-md ">
                        <Text className="text-white font-semibold">Filter</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView className="py-3">
                    {fetchData?.map((item, index) => (
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
                                source={{ uri: item.photo }}
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
                    ))}
                </ScrollView>
            </Container>
            <Modal
                data={modalData}
                showModal={showModal}
                setShowModal={setShowModal}
            />
        </>
    );
}
