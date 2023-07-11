// ** react and react-native imports
import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

// ** libraries imports
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "react-native-vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

// ** local imports
import BodyCont from "components/layouts/BodyCont";
import HeaderCont from "components/layouts/HeaderCont";

// ** images imports
import Profile from "assets/profile.jpg";

const TextField = ({ value, setValue, ...params }) => {
    return (
        <View className="relative border border-[#7B7B7B] rounded-lg py-2 px-4 my-2">
            <TextInput
                value={value}
                onChangeText={setValue}
                className="text-lg"
                {...params}
            />
        </View>
    );
};

export default function Settings() {
    const [name, setName] = useState("Mark Anthony");

    const { goBack } = useNavigation();
    return (
        <View className="flex-1">
            <HeaderCont>
                <SafeAreaView className="relative items-center flex-1 pt-6">
                    <TouchableOpacity
                        onPress={goBack}
                        className="absolute top-10 h-8 w-8 left-5 rounded-full"
                    >
                        <Ionicons name="chevron-back" color="white" size={30} />
                    </TouchableOpacity>

                    <Text className="text-white font-bold text-4xl">
                        Settings
                    </Text>
                    <Text className="text-white text-base">
                        Lorem ipsum dolor
                    </Text>
                </SafeAreaView>
            </HeaderCont>
            <BodyCont>
                <View className="flex-row items-center space-x-4">
                    <Image
                        className="rounded-full"
                        source={Profile}
                        style={{ height: 150, width: 150 }}
                        resizeMode="contain"
                    />
                    <View className="relative flex-1 justify-center">
                        <Text className="font-bold text-3xl">Rein Selorio</Text>
                        <Text>@IamRein</Text>
                        <Text className="absolute text-[#FF0844] font-bold text-base -bottom-10">
                            Change Password
                        </Text>
                    </View>
                </View>
                <View className="mt-5">
                    <Text className="font-semibold text-base my-4">
                        Changing your password? Go for at least 6 characters
                    </Text>

                    <TextField placeholder="Current Password" />
                    <TextField placeholder="New Password" />
                    <TextField placeholder="Re-Type Password" />

                    <TouchableOpacity className="bg-[#FF0844] mt-16 py-3 rounded-lg items-center justify-center">
                        <Text className="text-white uppercase font-bold text-base">
                            Update
                        </Text>
                    </TouchableOpacity>
                </View>
            </BodyCont>
        </View>
    );
}
