import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

import TextField from "components/common/InputSearchField";
import Container from "components/layouts/Container";

import Image1 from "assets/images/Image1.jpg";
import ModalCont from "components/layouts/ModalCont";

export default function All() {
    const [showModal, setShowModal] = useState(false);
    return (
        <Container>
            <View className="flex-row items-center space-x-4">
                <TextField placeholder="Search" />
                <TouchableOpacity className="bg-[#FF0844] flex-1 items-center justify-center py-2.5 rounded-md ">
                    <Text className="text-white font-semibold">Filter</Text>
                </TouchableOpacity>
            </View>
            <ScrollView className="py-3">
                <TouchableOpacity
                    onPress={() => setShowModal(true)}
                    className="flex-row my-2 space-x-2"
                >
                    <Image
                        className="rounded-lg"
                        source={Image1}
                        style={{ height: 100, width: "50%" }}
                        resizeMode="cover"
                    />
                    <View className="space-y-2 w-1/2">
                        <Text className="font-bold text-lg" numberOfLines={2}>
                            San Rafael River Adventure
                        </Text>
                        <Text>10:00 AM - 10:00 PM</Text>
                        <View>
                            <Text>0.3km</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </ScrollView>

            <ModalCont open={showModal} setOpen={setShowModal}>
                <View className="h-[90%] bg-white rounded-tl-3xl rounded-tr-3xl items-center justify-center">
                    <ScrollView className="flex-1 w-full p-5">
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                        <Text>Mark</Text>
                    </ScrollView>
                </View>
            </ModalCont>
        </Container>
    );
}
