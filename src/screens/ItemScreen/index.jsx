// ** react and react-native imports
import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

// ** libraries imports
import { useNavigation, useRoute } from "@react-navigation/native";
import { AntDesign, Ionicons, Octicons } from "react-native-vector-icons";
import { BlurView } from "expo-blur";

// ** firebase
import { doc, getDoc } from "firebase/firestore";
import { database } from "config/firebase";

// ** local imports
import Description from "./tabs/Description";
import Details from "./tabs/Details";
import Reviews from "./tabs/Reviews";
import TopTabs from "navigations/tabs/TopTabs";

// ** image
import DefaultImage from "assets/images/DefaultImage.png";

export default function ItemScreen() {
    // ** states
    const [fetchData, setFetchData] = useState();

    // ** navigation
    const { goBack } = useNavigation();
    const { params } = useRoute();

    // ** tabs
    const tabs = [
        {
            name: "Description",
            component: () => <Description data={fetchData} />,
        },
        {
            name: "Details",
            component: () => <Details data={fetchData} />,
        },
        {
            name: "Reviews",
            component: () => <Reviews data={fetchData} />,
        },
    ];

    const fetchAllData = async () => {
        try {
            const dataRef = doc(database, "data", params.id);

            const data = await getDoc(dataRef);
            setFetchData(data.data());
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchAllData();
    }, []);

    return (
        <View className="flex-1 bg-white">
            <View className="relative h-96 rounded-3xl shadow-2xl shadow-black">
                <TouchableOpacity
                    onPress={goBack}
                    className="absolute top-10 h-8 w-8 left-5 rounded-full z-10"
                >
                    <Ionicons name="chevron-back" color="white" size={30} />
                </TouchableOpacity>
                {fetchData?.photo.link ? (
                    <Image
                        className="rounded-3xl"
                        source={{ uri: fetchData?.photo.link }}
                        style={{ height: "100%", width: "100%" }}
                        resizeMode="cover"
                    />
                ) : (
                    <Image
                        className="rounded-3xl"
                        source={DefaultImage}
                        style={{ height: "100%", width: "100%" }}
                        resizeMode="cover"
                    />
                )}
                <BlurView
                    className="absolute flex-row justify-between w-full bottom-0 pt-2 pb-4 px-6 rounded-bl-3xl rounded-br-3xl"
                    tint="dark"
                    intensity={75}
                >
                    {/* <View className="absolute flex-row justify-between w-full bottom-0 pt-2 pb-4 px-6 rounded-bl-3xl rounded-br-3xl"> */}
                    <View>
                        <Text className="text-[#DADADA] text-xl font-semibold">
                            {fetchData?.title}
                        </Text>
                        <View className="flex-row items-center space-x-1">
                            <Octicons name="star-fill" color="#FFC700" />
                            <Text className="text-white">
                                <Text className="font-bold">4.0</Text> - 18
                                reviews
                            </Text>
                        </View>
                    </View>
                    <View className="flex-row items-center space-x-2">
                        <AntDesign name="sharealt" color="#FFFFFF" size={25} />
                        <Ionicons
                            name="heart-outline"
                            color="#FFFFFF"
                            size={30}
                        />
                    </View>
                    {/* </View> */}
                </BlurView>
            </View>
            <View className="relative flex-1 mt-2 mx-5">
                <View className="absolute w-full bottom-6 z-10">
                    <TouchableOpacity className="items-center justify-center bg-[#FF0844] mx-4 py-3 rounded-xl">
                        <Text className="text-white text-lg font-bold uppercase">
                            See Available Voucher
                        </Text>
                    </TouchableOpacity>
                </View>
                <TopTabs tabs={tabs} />
            </View>
        </View>
    );
}
