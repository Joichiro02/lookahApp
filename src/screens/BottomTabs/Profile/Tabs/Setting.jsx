import React, { useState } from "react";
import { Switch, Text, TouchableOpacity, View } from "react-native";

import { signOut } from "firebase/auth";
import { Entypo } from "react-native-vector-icons";

import { auth } from "config/firebase";

export default function Setting() {
    const [isEnabled, setIsEnabled] = useState(false);

    const onSignOut = () => {
        signOut(auth).catch((error) =>
            console.log("Error logging out: ", error)
        );
    };

    return (
        <View className="flex-1 bg-white py-5">
            <View className="mb-6">
                <Text className="text-[#7B7B7B] text-base">Display</Text>
                <View className="flex-row items-center justify-between border-b-0.5 border-[#7B7B7B]">
                    <Text className="font-semibold text-base">Dark Mode</Text>
                    <Switch
                        trackColor={{ false: "#e4e3e3", true: "#FF0844" }}
                        thumbColor={"#FFFFFF"}
                        value={isEnabled}
                        onValueChange={setIsEnabled}
                    />
                </View>
            </View>

            <View className="mb-6">
                <Text className="text-[#7B7B7B] text-base">Preferences</Text>
                <View className="flex-row items-center justify-between border-b-0.5 border-[#7B7B7B]">
                    <Text className="font-semibold text-base">
                        Notification
                    </Text>
                    <Switch
                        trackColor={{ false: "#e4e3e3", true: "#FF0844" }}
                        thumbColor={"#FFFFFF"}
                        value={isEnabled}
                        onValueChange={setIsEnabled}
                    />
                </View>
                <View className="flex-row items-center justify-between border-b-0.5 border-[#7B7B7B]">
                    <Text className="font-semibold text-base">
                        Alert and Promos
                    </Text>
                    <Switch
                        trackColor={{ false: "#e4e3e3", true: "#FF0844" }}
                        thumbColor={"#FFFFFF"}
                        value={isEnabled}
                        onValueChange={setIsEnabled}
                    />
                </View>
                <View className="flex-row items-center justify-between border-b-0.5 border-[#7B7B7B]">
                    <Text className="font-semibold text-base">
                        Auto Location
                    </Text>
                    <Switch
                        trackColor={{ false: "#e4e3e3", true: "#FF0844" }}
                        thumbColor={"#FFFFFF"}
                        value={isEnabled}
                        onValueChange={setIsEnabled}
                    />
                </View>
            </View>

            <View className="mb-6">
                <Text className="text-[#7B7B7B] text-base">Security</Text>
                <TouchableOpacity className="flex-row items-center justify-between border-b-0.5 border-[#7B7B7B] py-2">
                    <Text className="font-semibold text-base">
                        Change Password
                    </Text>
                    <Entypo
                        name="chevron-small-right"
                        color="#7B7B7B"
                        size={25}
                    />
                </TouchableOpacity>
                <TouchableOpacity className="flex-row items-center justify-between border-b-0.5 border-[#7B7B7B] py-2">
                    <Text className="font-semibold text-base text-[#FF0844]">
                        Delete Account
                    </Text>
                    <Entypo
                        name="chevron-small-right"
                        color="#7B7B7B"
                        size={25}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    className="flex-row items-center justify-between border-b-0.5 border-[#7B7B7B] py-3"
                    onPress={onSignOut}
                >
                    <Text className="font-semibold text-base">Log Out</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
