// ** react and react-native imports
import React from "react";
import { FlatList, Image, Text, View } from "react-native";

// ** libraries imports
import { Octicons } from "react-native-vector-icons";

// ** images imports
import Image1 from "assets/Image1.jpg";

export default function Reviews() {
    return (
        <View className="flex-1 bg-white">
            <FlatList
                contentContainerStyle={{ paddingBottom: 70 }}
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
                showsVerticalScrollIndicator={false}
                renderItem={(item, index) => (
                    <View
                        key={index}
                        className="flex-row flex-1 rounded-md bg-white m-2 shadow-lg shadow-black p-3 space-x-4"
                    >
                        <View className="w-1/4 items-center justify-center space-y-1">
                            <Image
                                className="rounded-full"
                                source={Image1}
                                style={{ height: 60, width: 60 }}
                                resizeMode="cover"
                            />
                            <Text className="font-semibold">Mark Anthony</Text>
                        </View>
                        <View className="flex-1">
                            <View className="flex-row items-center justify-between">
                                <View className="flex-row space-x-2">
                                    <Octicons
                                        name="star-fill"
                                        color="#FFC700"
                                    />
                                    <Octicons
                                        name="star-fill"
                                        color="#FFC700"
                                    />
                                    <Octicons
                                        name="star-fill"
                                        color="#FFC700"
                                    />
                                    <Octicons
                                        name="star-fill"
                                        color="#FFC700"
                                    />
                                    <Octicons
                                        name="star-fill"
                                        color="#DADADA"
                                    />
                                </View>
                                <Text className="text-[#7a7a7a]">8hrs ago</Text>
                            </View>
                            <Text
                                className="text-lg font-bold"
                                numberOfLines={1}
                            >
                                Good Food!
                            </Text>
                            <Text
                                className="text-[#7a7a7a] text-justify"
                                numberOfLines={3}
                            >
                                When in Antipolo, this quaint restaurant should
                                be part of your to-go-list When in Antipolo,
                                this quaint restaurant should be part of your
                                to-go-list
                            </Text>
                        </View>
                    </View>
                )}
            />
        </View>
    );
}
