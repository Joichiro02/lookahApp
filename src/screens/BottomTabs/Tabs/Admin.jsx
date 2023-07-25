// ** react and react-native imports
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

// ** libraries imports
import { SafeAreaView } from "react-native-safe-area-context";

// ** local imports
import DropdownField from "components/common/DropdownField";
import InputField from "components/common/InputField";

import DefaultImage from "assets/images/DefaultImage.png";

const data = [
    { label: "Hotel", value: "hotel" },
    { label: "Bar & Grill", value: "barAndGrill" },
    { label: "Restaurant", value: "restaurant" },
    { label: "Park", value: "Park" },
    { label: "Tourist Spot", value: "touristSpot" },
    { label: "Establishment", value: "establishment" },
    { label: "Activities", value: "activities" },
    { label: "Promos", value: "promos" },
];

export default function Admin() {
    const [value, setValue] = useState(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [contact, setContact] = useState("");
    const [operationHour, setOperationHour] = useState("");
    const [address, setAddress] = useState("");
    return (
        <SafeAreaView className="flex-1 bg-white p-5">
            <Text className="text-2xl text-center font-bold">Admin</Text>
            <DropdownField
                data={data}
                placeholder="Select Category"
                value={value}
                setValue={setValue}
            />
            <View className=" py-5">
                <Image
                    source={DefaultImage}
                    resizeMode="contain"
                    className="h-44 w-44 self-center"
                />
                <TouchableOpacity className="bg-[#FF0844] mt-8 py-3 rounded-lg items-center justify-center">
                    <Text className="text-white uppercase font-bold text-base">
                        Choose Image
                    </Text>
                </TouchableOpacity>
            </View>
            <InputField label={"Title"} value={title} setValue={setTitle} />
            <InputField
                label={"Description"}
                value={description}
                setValue={setDescription}
            />
            <InputField
                label={"Contact Number"}
                value={contact}
                setValue={setContact}
            />
            <InputField
                label={"Operation Hours"}
                value={operationHour}
                setValue={setOperationHour}
            />
            <InputField
                label={"Address"}
                value={address}
                setValue={setAddress}
            />
        </SafeAreaView>
    );
}
