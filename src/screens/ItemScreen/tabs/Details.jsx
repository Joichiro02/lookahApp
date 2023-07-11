// ** react and react-native imports
import React from "react";
import { ScrollView, Text, View } from "react-native";

// ** libraries imports
import MapView, { Marker } from "react-native-maps";
import { MaterialIcons } from "react-native-vector-icons";

export default function Details() {
    return (
        <ScrollView
            className="flex-1 bg-white"
            showsVerticalScrollIndicator={false}
        >
            <View className="flex-1">
                <Text className="font-bold text-lg">Location</Text>
                <View className="flex-row items-center">
                    <MaterialIcons
                        name="location-on"
                        color="#000000"
                        size={14}
                    />
                    <Text className="text-sm">
                        FM Gems Bldg. L. Sumulong, Circumferencial Rd.
                    </Text>
                </View>

                <MapView
                    initialRegion={{
                        //   latitude: restaurant.lat,
                        //   longitude: restaurant.lng,
                        latitude: 13.2507,
                        longitude: 121.9735,
                        latitudeDelta: 0.3,
                        longitudeDelta: 0.3,
                    }}
                    className="flex-1 h-60 my-2"
                    mapType="mutedStandard"
                >
                    <Marker
                        coordinate={{
                            latitude: 13.2507,
                            longitude: 121.9735,
                        }}
                        title={"FM Gems Bldg. L. Sumulong, Circumferencial Rd."}
                        description={"Maganda"}
                        identifier="origin"
                        pinColor="#00CCBB"
                    />
                </MapView>

                <View className="border-t border-b py-2 my-2 ">
                    <Text className="font-bold text-lg">Payment</Text>
                    <View>
                        <Text>Cash Debit / Cridet</Text>
                    </View>
                </View>

                <View>
                    <Text className="font-bold text-lg">
                        Restaurant Features
                    </Text>
                    <View className="flex-row flex-wrap mb-24">
                        <Text className="w-1/3">Dine in</Text>
                        <Text className="w-1/3">Indoor Dining</Text>
                        <Text className="w-1/3">WiFi</Text>
                        <Text className="w-1/3">Take Out</Text>
                        <Text className="w-1/3">Outdoor Dining</Text>
                        <Text className="w-1/3">Free Parking</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}
