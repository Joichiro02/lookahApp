// ** react and react-native imports
import React from "react";
import { ActivityIndicator, View } from "react-native";

// ** libraries imports
import Modal from "react-native-modal";

// ** local imports
import { colors } from "themes";

export default function LoadingModal({ isVisible }) {
    return (
        <Modal isVisible={isVisible} className="items-center">
            <View className="bg-white py-10 w-44 rounded-xl">
                <ActivityIndicator size={50} color={colors.Primary} />
            </View>
        </Modal>
    );
}
