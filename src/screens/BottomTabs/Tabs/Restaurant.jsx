// ** react and react-native imports
import React from "react";
import { FlatList, Image, Text, View } from "react-native";

// ** libraries imports
import { Ionicons, MaterialIcons, Octicons } from "react-native-vector-icons";

// ** local imports
import Container from "components/layouts/Container";
import FoodImage from "assets/images/foodImage.jpg";

export default function Restaurant() {
    return (
        <Container>
            <FlatList
                scrollEnabled
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
                renderItem={() => (
                    <View className="flex-row my-2 space-x-2">
                        <Image
                            className="rounded-lg"
                            source={FoodImage}
                            style={{ height: 100, width: "50%" }}
                            resizeMode="cover"
                        />
                        <View className="relative w-1/2 justify-evenly">
                            <Ionicons
                                className="absolute right-2 top-2"
                                name="heart-sharp"
                                color="#EB4335"
                                size={15}
                            />
                            <Text
                                className="font-bold text-lg"
                                numberOfLines={2}
                            >
                                Tahanan Bistro
                            </Text>
                            <View className="flex-row items-center space-x-1">
                                <Octicons name="star-fill" color="#FFC700" />
                                <Text numberOfLines={1}>4.0 - 18 reviews</Text>
                            </View>
                            <View className="flex-row items-center space-x-1">
                                <MaterialIcons
                                    name="location-on"
                                    color="#4285F4"
                                />
                                <Text numberOfLines={1}>
                                    22 Loresville Drive, Antipolo
                                </Text>
                            </View>
                        </View>
                    </View>
                )}
            />
        </Container>
    );
}
