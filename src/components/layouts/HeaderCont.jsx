import React from "react";
import { ImageBackground, Text } from "react-native";

import HeaderBg from "assets/images/HeaderBg.png";

export default function HeaderCont({ children }) {
    return (
        <ImageBackground
            className="h-52"
            style={{ width: "100%" }}
            resizeMode="cover"
            source={HeaderBg}
        >
            {children}
        </ImageBackground>
    );
}
