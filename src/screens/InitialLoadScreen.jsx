// ** react and react-native imports
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

// ** libraries imports
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

// ** images imports
import GetStarted from "assets/GetStarted.png";

export default function InitialLoadScreen() {
    const { navigate } = useNavigation();
    return (
        <SafeAreaView className="flex-1">
            <View className="flex-1 px-10 items-center justify-center">
                <Image
                    source={GetStarted}
                    style={{ width: 355, height: 355 }}
                    resizeMode="contain"
                />
                <View className="px-10 items-center space-y-1">
                    <Text className="text-[#FF0844] font-bold text-lg">
                        Plan your trip ahead.
                    </Text>
                    <Text className="text-center">
                        Search for the amazing restaurants and places you may
                        visit wherever you go.
                    </Text>
                </View>
            </View>

            <TouchableOpacity
                onPress={() => navigate("LoginScreen")}
                className="bg-[#FF0844] items-center justify-center m-6 p-3 rounded-xl"
            >
                <Text className="text-white font-bold text-lg uppercase">
                    Get Started
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}
