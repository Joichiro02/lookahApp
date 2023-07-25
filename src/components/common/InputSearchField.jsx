import React from "react";
import { TextInput, View } from "react-native";
import { Feather } from "react-native-vector-icons";

export default function InputSearchField({ placeholder }) {
    return (
        <View className="flex-row items-center bg-white w-48 rounded-md py-1 px-2 space-x-3 shadow-lg shadow-black">
            <Feather name="search" size={20} />
            <TextInput placeholder={placeholder} />
        </View>
    );
}
