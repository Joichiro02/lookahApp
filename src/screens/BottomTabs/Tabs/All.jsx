// ** react and react-native imports
import React, { useCallback, useEffect, useState } from "react";
import {
    Image,
    ImageBackground,
    RefreshControl,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

// ** libraries imports
import { FlashList } from "@shopify/flash-list";

// ** firebase imports
import { collection, getDocs } from "firebase/firestore";
import { database } from "config/firebase";

// ** local imports
import ModalCont from "components/layouts/ModalCont";
import { colors } from "themes";

import Chives from "assets/images/chives.png";
import VoucherBg from "assets/images/VoucherBg.png";
import VoucherBg2 from "assets/images/VoucherBg2.png";
import Kwinsole from "assets/images/Kwinsole.png";
import Illumina from "assets/images/Illumina.png";
import Ribbon from "assets/images/ribbon.png";

const data = [
    {
        img: Chives,
        title: "10% off",
        subtitle: "Chives Bistro & Market",
    },
    {
        img: Kwinsole,
        title: "Free refill",
        subtitle:
            "Free one refill for every purchase of iced or hot coffee everyday from 10 AM to 12 NN",
    },
    {
        img: Illumina,
        title: "₱999",
        subtitle:
            "Two Wizards Magical Passes at Tales of Illumina Ever Commonwealth",
        promo: {
            save: "save 75%",
            price: "₱3998",
        },
    },
];

const VoucherComponent = ({ item, setOpen }) => {
    return (
        <TouchableOpacity onPress={() => setOpen((prev) => !prev)}>
            <ImageBackground
                className="relative items-center flex-row space-x-6 my-2"
                source={VoucherBg}
                style={{ height: 110, width: "100%" }}
                resizeMode="contain"
            >
                {item?.promo && (
                    <View className="absolute right-1 top-2 items-end">
                        <ImageBackground
                            className="h-4 w-16 items-center justify-center"
                            source={Ribbon}
                            resizeMode="contain"
                        >
                            <Text className="text-white font-semibold mr-1 uppercase">
                                {item?.promo.save}
                            </Text>
                        </ImageBackground>
                        <Text className="text-xs line-through text-[#898989] mr-1">
                            {item?.promo.price}
                        </Text>
                    </View>
                )}

                <View className="ml-6 w-28 items-center justify-center">
                    <Image
                        className="h-20 w-24"
                        source={{ uri: item.photo.link }}
                        // style={{ height: 80, width: 80 }}
                        resizeMode="contain"
                    />
                </View>
                <View className="w-44">
                    <Text className="font-bold text-2xl text-[#FF0844] uppercase">
                        {item.title}
                    </Text>
                    <Text className="font-medium">{item.description}</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    );
};

export default function All() {
    // ** state
    const [fetchData, setFetchData] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [open, setOpen] = useState(false);

    const fetchAllData = async () => {
        const dataRef = collection(database, "vouchers");

        const data = await getDocs(dataRef);
        setFetchData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            fetchAllData();
            setRefreshing(false);
        }, 2000);
    }, []);

    useEffect(() => {
        fetchAllData();
    }, []);

    return (
        <>
            <View className="bg-white flex-1 px-5 py-2">
                <FlashList
                    refreshControl={
                        <RefreshControl
                            colors={[colors.Primary]}
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                            progressViewOffset={50}
                        />
                    }
                    data={fetchData}
                    estimatedItemSize={200}
                    renderItem={({ item, index }) => (
                        <VoucherComponent
                            item={item}
                            key={index}
                            setOpen={setOpen}
                        />
                    )}
                />
            </View>

            <ModalCont open={open} setOpen={setOpen}>
                <View className="h-5/6 bg-white rounded-tl-3xl rounded-tr-3xl items-center justify-center">
                    <ImageBackground
                        source={VoucherBg2}
                        className="w-96 h-96 p-10 space-y-6"
                        resizeMode="contain"
                    >
                        <View className="h-52 items-center justify-center">
                            <Image source={Chives} resizeMode="contain" />
                        </View>
                        <View className="px-4">
                            <Text className="font-semibold text-2xl">
                                10% OFF
                            </Text>
                            <Text className="font-medium text-base">
                                Chives Bistro & Market
                            </Text>
                            <View className="space-y-.5 mt-1">
                                <Text className="pl-3">
                                    One voucher is good for one transaction.
                                </Text>
                                <Text className="pl-3">
                                    Valid daily from 1:00 PM to 8:00 PM.
                                </Text>
                                <Text className="pl-3">
                                    Not applicable with other discounts.
                                </Text>
                            </View>
                        </View>
                    </ImageBackground>

                    <View className="w-full">
                        <TouchableOpacity className="bg-[#FF0844] mt-8 mx-10 py-3 rounded-lg items-center justify-center">
                            <Text className="text-white uppercase font-bold text-base">
                                Redeem Now
                            </Text>
                        </TouchableOpacity>
                        <View className="items-center justify-center">
                            <TouchableOpacity
                                className="w-24 mt-5"
                                onPress={() => setOpen((prev) => !prev)}
                            >
                                <Text className="uppercase font-bold text-base underline">
                                    Redeem Later
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ModalCont>
        </>
    );
}
