// ** react and react-native imports
import React from "react";

// ** local imports
import Banner from "./Tabs/Banner";
import Content from "./Tabs/Content";
import TopTabs from "navigations/tabs/TopTabs";
import Voucher from "./Tabs/Voucher";

const tabs = [
    {
        name: "Content",
        component: Content,
    },
    {
        name: "Voucher",
        component: Voucher,
    },
    {
        name: "Banner",
        component: Banner,
    },
];

export default function index() {
    return (
        <TopTabs
            initialRouteName="Content"
            tabs={tabs}
            radius={{ radius: 80 }}
        />
    );
}
