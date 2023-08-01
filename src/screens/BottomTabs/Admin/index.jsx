// ** react and react-native imports
import React from "react";
import { Text } from "react-native";

// ** libraries imports
import { SafeAreaView } from "react-native-safe-area-context";

// ** local imports
import All from "./Tabs/AllContent";
import AddContent from "./Tabs/AddContent";
import BodyCont from "components/layouts/BodyCont";
import HeaderCont from "components/layouts/HeaderCont";
import TopTabs from "navigations/tabs/TopTabs";

const tabs = [
    {
        name: "All Content",
        component: () => <All />,
    },
    {
        name: "Add Content",
        component: () => <AddContent />,
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
