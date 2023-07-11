// ** react and react-native imports
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

const TextField = ({ label, value, setValue, ...params }) => {
    return (
        <View className="relative border border-[#7B7B7B] rounded-lg py-2 px-4 my-2">
            <Text className="absolute text-[#7B7B7B] -top-2 left-3 bg-white px-1">
                {label}
            </Text>
            <TextInput
                value={value}
                onChangeText={setValue}
                className="text-lg"
                {...params}
            />
        </View>
    );
};

export default function MyProfile() {
    const [name, setName] = useState("Mark Anthony");
    return (
        <View className="flex-1 bg-white py-6">
            <TextField label={"First Name"} value={name} setValue={setName} />
            <TextField label={"Last Name"} value={name} setValue={setName} />
            <TextField label={"Nickname"} value={name} setValue={setName} />
            <TextField
                label={"Email Address"}
                value={name}
                setValue={setName}
            />

            <Text className="text-[#7B7B7B] mb-3">
                Make sure we can reach you at your new email
            </Text>

            <View className="flex-row w-full space-x-2">
                <View className="border border-[#7B7B7B] rounded-lg py-2 px-4 items-center justify-center my-2">
                    <Text>+63</Text>
                </View>
                <View className="flex-1">
                    <TextField
                        label={"Mobile Number"}
                        value={name}
                        setValue={setName}
                    />
                </View>
            </View>

            <Text className="text-[#7B7B7B]">
                If you change to a new number, we’ll take you through a
                verification process.
            </Text>

            <TouchableOpacity className="bg-[#FF0844] mt-8 py-3 rounded-lg items-center justify-center">
                <Text className="text-white uppercase font-bold text-base">
                    Update
                </Text>
            </TouchableOpacity>
        </View>
    );
}
