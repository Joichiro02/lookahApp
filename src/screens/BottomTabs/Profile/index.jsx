// ** react and react-native imports
import React from "react";
import { Image, Text, View } from "react-native";

// ** libraries imports
import { SafeAreaView } from "react-native-safe-area-context";

// ** local imports
import BodyCont from "components/layouts/BodyCont";
import HeaderCont from "components/layouts/HeaderCont";
import MyProfile from "./Tabs/MyProfile";
import Setting from "./Tabs/Setting";
import TopTabs from "navigations/tabs/TopTabs";

// ** images imports
import Profile from "assets/profile.jpg";

const tabs = [
    {
        name: "My Profile",
        component: MyProfile,
    },
    {
        name: "Settings",
        component: Setting,
    },
];

export default function index() {
    return (
        <View className="flex-1">
            <HeaderCont>
                <SafeAreaView className="items-center flex-1 pt-6">
                    <Text className="text-white font-bold text-4xl">
                        Account
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
                    <View>
                        <Text className="font-bold text-3xl">Rein Selorio</Text>
                        <Text>@IamRein</Text>
                    </View>
                </View>
                <View className="flex-1 -mt-12">
                    <TopTabs
                        tabs={tabs}
                        tabBarStyle={{ width: 200, marginLeft: "auto" }}
                    />
                </View>
            </BodyCont>
        </View>
    );
}
