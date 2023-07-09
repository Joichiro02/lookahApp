import React from "react";
import { View } from "react-native";

// ** style props is to modify the the styles of the container
export default function BodyCont({ children, style }) {
    return (
        <View
            className={`z-10 -mt-16 bg-white flex-1 rounded-l-3xl rounded-r-3xl p-5 ${style}`}
        >
            {children}
        </View>
    );
}
