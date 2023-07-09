import React from "react";
import { View } from "react-native";

// ** style props is to modify the the styles of the container
export default function Container({ children, style }) {
    return <View className={`flex-1 bg-white p-5 ${style}`}>{children}</View>;
}
