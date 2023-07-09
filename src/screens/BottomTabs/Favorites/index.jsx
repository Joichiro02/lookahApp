// ** react and react-native imports
import React from "react";
import { Text, View } from "react-native";

// ** libraries imports
import { SafeAreaView } from "react-native-safe-area-context";

// ** local imports
import BodyCont from "components/layouts/BodyCont";
import HeaderCont from "components/layouts/HeaderCont";
import All from "./Tabs/All";
import Hotel from "./Tabs/Hotel";
import BarGrill from "./Tabs/BarGrill";
import Restaurant from "./Tabs/Restaurant";
import TopTabs from "navigations/tabs/TopTabs";

const tabs = [
    {
        name: "All",
        component: All,
    },
    {
        name: "Hotel",
        component: Hotel,
    },
    {
        name: "Bar & Grill",
        component: BarGrill,
    },
    {
        name: "Restaurant",
        component: Restaurant,
    },
];

export default function index() {
    return (
        <>
            <HeaderCont>
                <SafeAreaView className="items-center flex-1 pt-6">
                    <Text className="text-white font-bold text-4xl">
                        Favorites
                    </Text>
                    <Text className="text-white text-base">
                        Lorem ipsum dolor
                    </Text>
                </SafeAreaView>
            </HeaderCont>
            <BodyCont style={"p-0 pt-3"}>
                <TopTabs tabs={tabs} />
            </BodyCont>
        </>
    );
}
