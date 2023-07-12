import React from "react";
import { View } from "react-native";

// ** style props is to modify the the styles of the container
export default function BodyCont({ children, style }) {
    return (
        <View
            className={`flex-1 z-10 -mt-16 bg-white rounded-tl-3xl rounded-tr-3xl pt-5 px-5 ${style}`}
        >
            {children}
        </View>
    );
}
