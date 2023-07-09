// ** react and react-native imports
import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

// ** libraries imports
import { SafeAreaView } from "react-native-safe-area-context";
import { Foundation } from "react-native-vector-icons";

// ** local imports
import AppLogo from "assets/AppLogo.png";
import HeaderCont from "components/layouts/HeaderCont";
import TextField from "components/common/InputField";
import BodyCont from "components/layouts/BodyCont";

// ** images imports
import Carousel from "assets/Carousel.png";
import CockTail from "assets/Cocktail.png";
import Company from "assets/Company.png";
import DoubleBed from "assets/DoubleBed.png";
import Park from "assets/Park.png";
import Percentage from "assets/Percentage.png";
import Restaurant from "assets/Restaurant.png";
import TravelGuide from "assets/TravelGuide.png";
import Image1 from "assets/Image1.jpg";

const navItems = [
    {
        icon: DoubleBed,
        title: "Hotel",
        navigation: "",
    },
    {
        icon: CockTail,
        title: "Bar & Grill",
        navigation: "",
    },
    {
        icon: Restaurant,
        title: "Restaurant",
        navigation: "",
    },
    {
        icon: Park,
        title: "Park",
        navigation: "",
    },
    {
        icon: TravelGuide,
        title: "Tourist Spot",
        navigation: "",
    },
    {
        icon: Company,
        title: "Establishment",
        navigation: "",
    },
    {
        icon: Carousel,
        title: "Activities",
        navigation: "",
    },
    {
        icon: Percentage,
        title: "Promos",
        navigation: "",
    },
];

export default function Home() {
    return (
        <>
            <HeaderCont>
                <View className="flex-1 flex-row items-center justify-evenly space-x-4">
                    <Image
                        source={AppLogo}
                        className="h-10 w-32"
                        resizeMode="contain"
                    />
                    <TextField />
                </View>
            </HeaderCont>

            <BodyCont>
                <View className="px-2 flex-1">
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
                        <Text className="text-lg font-bold underline">
                            Change Location
                        </Text>
                    </View>
                    <SafeAreaView>
                        <FlatList
                            numColumns={4}
                            data={navItems}
                            keyExtractor={(_, index) => index.toString()}
                            renderItem={({ item, index }) => (
                                <View className="mb-4 flex-1 items-center space-y-1">
                                    <TouchableOpacity className=" bg-white rounded-md items-center justify-center p-1 shadow-md shadow-black">
                                        <Image
                                            source={item.icon}
                                            resizeMode="contain"
                                            style={{ height: 50, width: 50 }}
                                        />
                                    </TouchableOpacity>
                                    <Text>{item.title}</Text>
                                </View>
                            )}
                        />
                    </SafeAreaView>

                    <View className="flex-1 mb-12">
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
