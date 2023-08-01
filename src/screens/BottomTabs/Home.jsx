// ** react and react-native imports
import React, { useCallback, useEffect, useState } from "react";
import {
    FlatList,
    Image,
    RefreshControl,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

// ** libraries imports
import { collection, getDocs, query, limit } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import { FlashList } from "@shopify/flash-list";
import { Foundation } from "react-native-vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

// ** firebase
import { database } from "config/firebase";

// ** local imports
import AppLogo from "assets/images/AppLogo.png";
import BodyCont from "components/layouts/BodyCont";
import HeaderCont from "components/layouts/HeaderCont";
import TextField from "components/common/InputSearchField";
import { colors } from "themes";

// ** images imports
import Carousel from "assets/images/Carousel.png";
import CockTail from "assets/images/Cocktail.png";
import Company from "assets/images/Company.png";
import DoubleBed from "assets/images/DoubleBed.png";
import Park from "assets/images/Park.png";
import Percentage from "assets/images/Percentage.png";
import Restaurant from "assets/images/Restaurant.png";
import TravelGuide from "assets/images/TravelGuide.png";
import CarouselSlider from "components/common/CarouselSlider";

const navItems = [
    {
        icon: DoubleBed,
        label: "Hotel",
        title: "Hotels",
        subTitle: "Lorem ipsum dolor",
        navigation: "GridNavScreen",
        value: "hotel",
    },
    {
        icon: CockTail,
        label: "Bar & Grill",
        title: "Bar and Grill",
        subTitle: "Lorem ipsum dolor",
        navigation: "GridNavScreen",
        value: "barAndGrill",
    },
    {
        icon: Restaurant,
        label: "Restaurant",
        title: "Restaurants",
        subTitle: "Lorem ipsum dolor",
        navigation: "GridNavScreen",
        value: "restaurant",
    },
    {
        icon: Park,
        label: "Park",
        title: "Park",
        subTitle: "Lorem ipsum dolor",
        navigation: "GridNavScreen",
        value: "park",
    },
    {
        icon: TravelGuide,
        label: "Tourist Spot",
        title: "Tourist Spot",
        subTitle: "Lorem ipsum dolor",
        navigation: "GridNavScreen",
        value: "touristSpot",
    },
    {
        icon: Company,
        label: "Establishment",
        title: "Establishment",
        subTitle: "Lorem ipsum dolor",
        navigation: "GridNavScreen",
        value: "establishment",
    },
    {
        icon: Carousel,
        label: "Activities",
        title: "Activities",
        subTitle: "Lorem ipsum dolor",
        navigation: "GridNavScreen",
        value: "activities",
    },
    {
        icon: Percentage,
        label: "Promos",
        title: "Promos",
        subTitle: "Lorem ipsum dolor",
        navigation: "GridNavScreen",
        value: "promos",
    },
];

export default function Home() {
    // ** states
    const [itemPressIndex, setItemPressIndex] = useState(-1);
    const [fetchBannersData, setFetchBannersData] = useState([]);
    const [fetchData, setFetchData] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    // ** navigation methods
    const { navigate } = useNavigation();

    const fetchAllBannersData = async () => {
        const dataRef = collection(database, "banners");

        const data = await getDocs(dataRef);
        setFetchBannersData(
            data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
    };

    const fetchAllData = async () => {
        const dataRef = query(collection(database, "data"), limit(10));

        const data = await getDocs(dataRef);
        setFetchData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            fetchAllBannersData();
            setRefreshing(false);
        }, 2000);
    }, []);

    useEffect(() => {
        fetchAllBannersData();
        fetchAllData();
    }, []);

    return (
        <>
            <HeaderCont>
                <View className="flex-1 flex-row items-center justify-evenly space-x-4">
                    <Image
                        source={AppLogo}
                        className="h-10 w-32"
                        resizeMode="contain"
                    />
                    <TextField placeholder="What do you have in mind?" />
                </View>
            </HeaderCont>

            <BodyCont>
                <View className="flex-1">
                    <View className="flex-row items-center justify-between px-2">
                        <View className="flex-row items-center space-x-2">
                            <Foundation name="target-two" size={15} />
                            <View>
                                <Text className="text-lg font-bold">
                                    371 A. Mabini Street
                                </Text>
                                <Text>Baliwag, Bulacan</Text>
                            </View>
                        </View>
                        <TouchableOpacity
                        // onPress={() => navigate("UploadScreen")}
                        >
                            <Text className="text-lg font-bold underline">
                                Change Location
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <SafeAreaView>
                        <FlatList
                            numColumns={4}
                            data={navItems}
                            keyExtractor={(_, index) => index.toString()}
                            renderItem={({ item, index }) => (
                                <View
                                    key={index}
                                    className="mb-4 flex-1 items-center space-y-1"
                                >
                                    <TouchableOpacity
                                        onPress={() => {
                                            navigate(item.navigation, {
                                                title: item.title,
                                                subTitle: item.subTitle,
                                                value: item.value,
                                            });
                                        }}
                                        onPressOut={() => setItemPressIndex(-1)}
                                        onPressIn={() =>
                                            setItemPressIndex(index)
                                        }
                                        activeOpacity={1}
                                        className="rounded-md items-center justify-center p-1 shadow-md shadow-black"
                                        style={{
                                            backgroundColor:
                                                itemPressIndex === index
                                                    ? "#EB4335"
                                                    : "#FFFFFF",
                                        }}
                                    >
                                        <Image
                                            source={item.icon}
                                            resizeMode="contain"
                                            style={{ height: 50, width: 50 }}
                                        />
                                    </TouchableOpacity>
                                    <Text>{item.label}</Text>
                                </View>
                            )}
                        />
                    </SafeAreaView>

                    <View className="flex-1 mb-16">
                        <FlashList
                            estimatedItemSize={200}
                            refreshControl={
                                <RefreshControl
                                    colors={[colors.Primary]}
                                    refreshing={refreshing}
                                    onRefresh={onRefresh}
                                    progressViewOffset={50}
                                />
                            }
                            ListHeaderComponent={() => (
                                <View>
                                    <Text className="font-bold text-3xl">
                                        Explore around you
                                    </Text>

                                    <CarouselSlider
                                        data={fetchBannersData}
                                        padding={40}
                                        dinaminator={5}
                                        renderItem={({ item, index }) => (
                                            <Image
                                                source={{
                                                    uri: item.photo.link,
                                                }}
                                                resizeMode="cover"
                                                className="h-40 w-full rounded-lg"
                                            />
                                        )}
                                    />
                                    <View className="flex-row items-center justify-between">
                                        <Text className="font-bold text-3xl">
                                            Latest Activities
                                        </Text>
                                        <Text className="underline">
                                            See All
                                        </Text>
                                    </View>
                                </View>
                            )}
                            scrollEnabled
                            data={fetchData}
                            renderItem={({ item, index }) => (
                                <TouchableOpacity
                                    key={index}
                                    onPress={() =>
                                        navigate("ItemScreen", { id: item.id })
                                    }
                                    className="flex-row my-2 space-x-2"
                                >
                                    <Image
                                        className="rounded-lg"
                                        source={{ uri: item.photo.link }}
                                        style={{ height: 100, width: "50%" }}
                                        resizeMode="cover"
                                    />
                                    <View className="space-y-2 w-1/2">
                                        <Text
                                            className="font-bold text-lg"
                                            numberOfLines={2}
                                        >
                                            {item.title}
                                        </Text>
                                        <Text>{item.operation_hour}</Text>
                                        <View>
                                            <Text>0.3km</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </View>
            </BodyCont>
        </>
    );
}
