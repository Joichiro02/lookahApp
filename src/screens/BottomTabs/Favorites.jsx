// ** react and react-native imports
import React from "react";
import { Text } from "react-native";

// ** libraries imports
import { SafeAreaView } from "react-native-safe-area-context";

// ** local imports
import All from "./Tabs/All";
import BarGrill from "./Tabs/BarGrill";
import BodyCont from "components/layouts/BodyCont";
import HeaderCont from "components/layouts/HeaderCont";
import Hotel from "./Tabs/Hotel";
import Restaurant from "./Tabs/Restaurant";
import TopTabs from "navigations/tabs/TopTabs";

const tabs = [
    {
        name: "All",
        component: () => <All />,
    },
    {
        name: "Hotel",
        component: () => <Hotel />,
    },
    {
        name: "Bar & Grill",
        component: () => <BarGrill />,
    },
    {
        name: "Restaurant",
        component: () => <Restaurant />,
    },
];

export default function Favorites() {
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
                <TopTabs initialRouteName="Restaurant" tabs={tabs} />
            </BodyCont>
        </>
    );
}
