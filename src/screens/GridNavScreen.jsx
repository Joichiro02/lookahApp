// ** react and react-native imports
import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

// ** libraries imports
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons, MaterialIcons, Octicons } from "react-native-vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

// ** local imports
import BodyCont from "components/layouts/BodyCont";
import HeaderCont from "components/layouts/HeaderCont";
import TextField from "components/common/InputSearchField";

// ** images imports
import Image1 from "assets/images/Image1.jpg";

export default function GridNavScreen() {
    const { goBack, navigate } = useNavigation();
    const { params } = useRoute();

    return (
        <>
            <HeaderCont>
                <SafeAreaView className="relative items-center flex-1 pt-6">
                    <TouchableOpacity
                        onPress={goBack}
                        className="absolute top-10 h-8 w-8 left-5 rounded-full"
                    >
                        <Ionicons name="chevron-back" color="white" size={30} />
                    </TouchableOpacity>

                    <Text className="text-white font-bold text-4xl">
                        {params.title}
                    </Text>
                    <Text className="text-white text-base">
                        {params.subTitle}
                    </Text>
                </SafeAreaView>
            </HeaderCont>

            <BodyCont>
                <View className="flex-row items-center space-x-4">
                    <TextField placeholder="Search" />
                    <TouchableOpacity className="bg-[#FF0844] flex-1 items-center justify-center py-2.5 rounded-md ">
                        <Text className="text-white font-semibold">Filter</Text>
                    </TouchableOpacity>
                </View>

                <View className="flex-1 mt-2">
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        scrollEnabled
                        data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
                        renderItem={() => (
                            <TouchableOpacity
                                onPress={() => navigate("ItemScreen")}
                                className="my-2 space-y-1"
                            >
                                <View className="relative">
                                    <Ionicons
                                        className="absolute z-10 right-2 top-2"
                                        name="heart-sharp"
                                        color="#EB4335"
                                        size={25}
                                    />
                                    <Image
                                        className="rounded-lg"
                                        source={Image1}
                                        style={{ height: 200, width: "100%" }}
                                        resizeMode="cover"
                                    />
                                </View>
                                <View className="flex-row justify-between items-center">
                                    <View className="w-3/4">
                                        <Text
                                            className="font-bold text-lg"
                                            numberOfLines={1}
                                        >
                                            San Rafael River Adventure
                                        </Text>
                                        <Text className="text-[#878787] font-medium">
                                            10:00 AM - 9:00 PM
                                        </Text>
                                    </View>
                                    <View className="items-end">
                                        <View className="flex-row items-center space-x-1">
                                            <Octicons
                                                name="star-fill"
                                                color="#FFC700"
                                            />
                                            <View className="flex-row space-x-1 items-center">
                                                <Text className="font-semibold">
                                                    4.2
                                                </Text>
                                                <Text className="text-[#878787] font-medium">
                                                    (8)
                                                </Text>
                                            </View>
                                        </View>
                                        <View className="flex-row space-x-1 items-center">
                                            <Text className="font-medium">
                                                Distance
                                            </Text>
                                            <Text className="text-[#2D86FF] font-medium">
                                                0.8km
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </BodyCont>
        </>
    );
}
