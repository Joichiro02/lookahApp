// ** react and react-native imports
import React from "react";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";

// ** libraries imports
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

// ** images imports
import GetStarted1 from "assets/images/GetStarted-1.png";
import GetStarted2 from "assets/images/GetStarted-2.png";
import GetStarted3 from "assets/images/GetStarted-3.png";
import CarouselSlider from "components/common/CarouselSlider";

const CarouselData = [
    {
        image: GetStarted1,
        title: "Plan your trip ahead.",
        message:
            "Search for the amazing restaurants and places you may visit wherever you go.",
    },
    {
        image: GetStarted2,
        title: "Stay where the best is.",
        message: "Find the best place that suits you and your travel goals. ",
    },
    {
        image: GetStarted3,
        title: "Only the best and true.",
        message:
            "See what other people say. Learn about their experiences through reviews and rating.",
    },
];

export default function InitialLoadScreen() {
    const { navigate } = useNavigation();

    return (
        <SafeAreaView className="flex-1">
            <View className="flex-1 px-10 items-center justify-center">
                <CarouselSlider
                    data={CarouselData}
                    renderItem={({ item, index }) => (
                        <React.Fragment key={index}>
                            <Image
                                source={item.image}
                                style={{ width: 355, height: 355 }}
                                resizeMode="contain"
                            />
                            <View className="px-10 items-center space-y-1">
                                <Text className="text-[#FF0844] font-bold text-lg">
                                    {item.title}
                                </Text>
                                <Text className="text-center">
                                    {item.message}
                                </Text>
                            </View>
                        </React.Fragment>
                    )}
                />
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
