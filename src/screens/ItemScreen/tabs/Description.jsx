// ** react and react-native imports
import React from "react";
import { ScrollView, Text, View } from "react-native";

// ** libraries imports
import { Feather, FontAwesome } from "react-native-vector-icons";

export default function Description({ data }) {
    return (
        <ScrollView className="flex-1 bg-white">
            <Text
                className="mt-2 text-base text-justify max-h-60"
                numberOfLines={12}
            >
                {data?.description}
            </Text>

            <View className="flex-row mt-4 border-t-2 pt-4 justify-around">
                <View className="flex-row items-center space-x-1">
                    <Feather name="watch" size={25} />
                    <View>
                        <Text className="font-bold">Operating Hours</Text>
                        <Text className="font-medium">
                            {data?.operation_hour}
                        </Text>
                    </View>
                </View>
                <View className="flex-row items-center space-x-2">
                    <View className="bg-[#309234] h-8 w-8 items-center justify-center rounded-full">
                        <FontAwesome name="phone" size={20} color="white" />
                    </View>
                    <View>
                        <Text className="text-[#309234] font-bold">
                            Call us now
                        </Text>
                        <Text className="font-medium">
                            {data?.phone_number}
                        </Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}
