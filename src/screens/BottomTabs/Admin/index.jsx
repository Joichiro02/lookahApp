// ** react and react-native imports
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

// ** libraries imports
import * as ImagePicker from "expo-image-picker";
import Toast from "react-native-toast-message";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";

// ** local imports
import All from "./Tabs/All";
import AddContent from "./Tabs/AddContent";
import BodyCont from "components/layouts/BodyCont";
import HeaderCont from "components/layouts/HeaderCont";
import TopTabs from "navigations/tabs/TopTabs";

const tabs = [
    {
        name: "All",
        component: All,
    },
    {
        name: "Add Content",
        component: AddContent,
    },
];

export default function index() {
    return (
        <>
            <HeaderCont>
                <SafeAreaView className="items-center pt-8">
                    <Text className="text-white font-bold text-4xl">
                        Administrator
                    </Text>
                </SafeAreaView>
            </HeaderCont>
            <BodyCont style={"p-0"}>
                <TopTabs
                    initialRouteName="Restaurant"
                    tabs={tabs}
                    radius={{ radius: 80 }}
                />
            </BodyCont>
        </>
    );
}
