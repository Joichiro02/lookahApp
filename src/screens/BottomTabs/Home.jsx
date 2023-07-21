// ** react and react-native imports
import React, { useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

// ** libraries imports
import { useNavigation } from "@react-navigation/native";
import { Foundation } from "react-native-vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

// ** local imports
import AppLogo from "assets/AppLogo.png";
import BodyCont from "components/layouts/BodyCont";
import HeaderCont from "components/layouts/HeaderCont";
import TextField from "components/common/InputField";

// ** images imports
import Carousel from "assets/Carousel.png";
import CockTail from "assets/Cocktail.png";
import Company from "assets/Company.png";
import DoubleBed from "assets/DoubleBed.png";
import Image1 from "assets/Image1.jpg";
import Park from "assets/Park.png";
import Percentage from "assets/Percentage.png";
import Restaurant from "assets/Restaurant.png";
import TravelGuide from "assets/TravelGuide.png";

const navItems = [
    {
        icon: DoubleBed,
        label: "Hotel",
        title: "Hotels",
        subTitle: "Lorem ipsum dolor",
        navigation: "GridNavScreen",
    },
    {
        icon: CockTail,
        label: "Bar & Grill",
        title: "Bar and Grill",
        subTitle: "Lorem ipsum dolor",
        navigation: "GridNavScreen",
    },
    {
        icon: Restaurant,
        label: "Restaurant",
        title: "Restaurants",
        subTitle: "Lorem ipsum dolor",
        navigation: "GridNavScreen",
    },
    {
        icon: Park,
        label: "Park",
        title: "Park",
        subTitle: "Lorem ipsum dolor",
        navigation: "GridNavScreen",
    },
    {
        icon: TravelGuide,
        label: "Tourist Spot",
        title: "Tourist Spot",
        subTitle: "Lorem ipsum dolor",
        navigation: "GridNavScreen",
    },
    {
        icon: Company,
        label: "Establishment",
        title: "Establishment",
        subTitle: "Lorem ipsum dolor",
        navigation: "GridNavScreen",
    },
    {
        icon: Carousel,
        label: "Activities",
        title: "Activities",
        subTitle: "Lorem ipsum dolor",
        navigation: "GridNavScreen",
    },
    {
        icon: Percentage,
        label: "Promos",
        title: "Promos",
        subTitle: "Lorem ipsum dolor",
        navigation: "GridNavScreen",
    },
];

export default function Home() {
    // ** states
    const [itemPressIndex, setItemPressIndex] = useState(-1);

    // ** navigation methods
    const { navigate } = useNavigation();

    return (
        <>
            <HeaderCont>
                <View className="flex-1 flex-row items-center justify-evenly space-x-4">
                    <Image
                        source={AppLogo}
                        className="h-10 w-32"
                        resizeMode="contain"
                    />
                    <TextField placeholder="What do you have in mind?" />
                </View>
            </HeaderCont>

            <BodyCont>
                <View className="flex-1">
                    <View className="flex-row items-center justify-between px-2">
                        <View className="flex-row items-center space-x-2">
                            <Foundation name="target-two" size={15} />
                            <View>
                                <Text className="text-lg font-bold">
                                    371 A. Mabini Street
                                </Text>
                                <Text>Baliwag, Bulacan</Text>
                            </View>
                        </View>
                        <TouchableOpacity
                            onPress={() => navigate("UploadScreen")}
                        >
                            <Text className="text-lg font-bold underline">
                                Change Location
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <SafeAreaView>
                        <FlatList
                            numColumns={4}
                            data={navItems}
                            keyExtractor={(_, index) => index.toString()}
                            renderItem={({ item, index }) => (
                                <View
                                    key={index}
                                    className="mb-4 flex-1 items-center space-y-1"
                                >
                                    <TouchableOpacity
                                        onPress={() => {
                                            navigate(item.navigation, {
                                                title: item.title,
                                                subTitle: item.subTitle,
                                            });
                                        }}
                                        onPressOut={() => setItemPressIndex(-1)}
                                        onPressIn={() =>
                                            setItemPressIndex(index)
                                        }
                                        activeOpacity={1}
                                        className="rounded-md items-center justify-center p-1 shadow-md shadow-black"
                                        style={{
                                            backgroundColor:
                                                itemPressIndex === index
                                                    ? "#EB4335"
                                                    : "#FFFFFF",
                                        }}
                                    >
                                        <Image
                                            source={item.icon}
                                            resizeMode="contain"
                                            style={{ height: 50, width: 50 }}
                                        />
                                    </TouchableOpacity>
                                    <Text>{item.label}</Text>
                                </View>
                            )}
                        />
                    </SafeAreaView>

                    <View className="flex-1">
                        <View className="flex-row items-center justify-between">
                            <Text className="font-bold text-3xl">
                                Nearby Activities
                            </Text>
                            <Text className="underline">See All</Text>
                        </View>
                        <FlatList
                            scrollEnabled
                            data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
                            renderItem={() => (
                                <View className="flex-row my-2 space-x-2">
                                    <Image
                                        className="rounded-lg"
                                        source={Image1}
                                        style={{ height: 100, width: "50%" }}
                                        resizeMode="cover"
                                    />
                                    <View className="space-y-2 w-1/2">
                                        <Text
                                            className="font-bold text-lg"
                                            numberOfLines={2}
                                        >
                                            San Rafael River Adventure
                                        </Text>
                                        <Text>10:00 AM - 10:00 PM</Text>
                                        <View>
                                            <Text>0.3km</Text>
                                        </View>
                                    </View>
                                </View>
                            )}
                        />
                    </View>
                </View>
            </BodyCont>
        </>
    );
}
