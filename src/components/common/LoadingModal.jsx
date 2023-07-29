// ** react and react-native imports
import React from "react";
import { ActivityIndicator, Text, View } from "react-native";

// ** libraries imports
import Modal from "react-native-modal";

// ** local imports
import { colors } from "themes";

export default function LoadingModal({
    isVisible,
    backdropOpacity = 0.7,
    text,
}) {
    return (
        <Modal
            backdropOpacity={backdropOpacity}
            isVisible={isVisible}
            className="items-center"
        >
            <View className="bg-white py-10 w-44 rounded-xl items-center">
                <ActivityIndicator size={50} color={colors.Primary} />
                {!!text ? <Text>{text}</Text> : null}
            </View>
        </Modal>
    );
}
