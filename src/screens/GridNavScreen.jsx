// ** react and react-native imports
import React, { useCallback, useEffect, useState } from "react";
import {
    Image,
    RefreshControl,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

// ** libraries imports
import { useNavigation, useRoute } from "@react-navigation/native";
import { FlashList } from "@shopify/flash-list";
import { Ionicons, Octicons } from "react-native-vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

// ** firebase
import { collection, getDocs, query, where } from "firebase/firestore";
import { database } from "config/firebase";

// ** local imports
import BodyCont from "components/layouts/BodyCont";
import HeaderCont from "components/layouts/HeaderCont";
import Loading from "components/common/Loading";
import NoData from "components/common/NoData";
import TextField from "components/common/InputSearchField";
import { colors } from "themes";

export default function GridNavScreen() {
    // ** states
    const [fetchData, setFetchData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    // ** navigations
    const { goBack, navigate } = useNavigation();
    const { params } = useRoute();

    const fetchAllData = async () => {
        try {
            const dataRef = collection(database, "data");
            const dataReturn = query(
                dataRef,
                where("category", "==", params.value)
            );

            const data = await getDocs(dataReturn);
            setFetchData(
                data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            );
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            fetchAllData();
            setRefreshing(false);
        }, 2000);
    }, []);

    useEffect(() => {
        // ** set loading here to not display the loading when refreshing the list
        setIsLoading(true);
        fetchAllData();
    }, [params.value]);

    return (
        <>
            <HeaderCont>
                <SafeAreaView className="relative items-center flex-1 pt-6">
                    <TouchableOpacity
                        onPress={goBack}
                        className="absolute top-10 h-8 w-8 left-5 rounded-full"
                    >
                        <Ionicons name="chevron-back" color="white" size={30} />
                    </TouchableOpacity>

                    <Text className="text-white font-bold text-4xl">
                        {params.title}
                    </Text>
                    <Text className="text-white text-base">
                        {params.subTitle}
                    </Text>
                </SafeAreaView>
            </HeaderCont>

            <BodyCont>
                <View className="flex-row items-center space-x-4">
                    <TextField placeholder="Search" />
                    <TouchableOpacity className="bg-[#FF0844] flex-1 items-center justify-center py-2.5 rounded-md ">
                        <Text className="text-white font-semibold">Filter</Text>
                    </TouchableOpacity>
                </View>

                <View className="flex-1 mt-2">
                    {isLoading ? (
                        <Loading />
                    ) : (
                        <FlashList
                            refreshControl={
                                <RefreshControl
                                    colors={[colors.Primary]}
                                    refreshing={refreshing}
                                    onRefresh={onRefresh}
                                    progressViewOffset={50}
                                />
                            }
                            estimatedItemSize={200}
                            showsVerticalScrollIndicator={false}
                            scrollEnabled
                            data={fetchData}
                            renderItem={({ item, index }) => (
                                <TouchableOpacity
                                    key={index}
                                    onPress={() => navigate("ItemScreen")}
                                    className="my-2 space-y-1"
                                >
                                    <View className="relative">
                                        <Ionicons
                                            className="absolute z-10 right-2 top-2"
                                            name="heart-sharp"
                                            color="#EB4335"
                                            size={25}
                                        />
                                        <Image
                                            className="rounded-lg"
                                            source={{ uri: item.photo.link }}
                                            style={{
                                                height: 200,
                                                width: "100%",
                                            }}
                                            resizeMode="cover"
                                        />
                                    </View>
                                    <View className="flex-row justify-between items-center">
                                        <View className="w-3/4">
                                            <Text
                                                className="font-bold text-lg"
                                                numberOfLines={1}
                                            >
                                                {item.title}
                                            </Text>
                                            <Text className="text-[#878787] font-medium">
                                                {item.operation_hour}
                                            </Text>
                                        </View>
                                        <View className="items-end">
                                            <View className="flex-row items-center space-x-1">
                                                <Octicons
                                                    name="star-fill"
                                                    color="#FFC700"
                                                />
                                                <View className="flex-row space-x-1 items-center">
                                                    <Text className="font-semibold">
                                                        4.2
                                                    </Text>
                                                    <Text className="text-[#878787] font-medium">
                                                        (8)
                                                    </Text>
                                                </View>
                                            </View>
                                            <View className="flex-row space-x-1 items-center">
                                                <Text className="font-medium">
                                                    Distance
                                                </Text>
                                                <Text className="text-[#34373c] font-medium">
                                                    0.8km
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )}
                            ListEmptyComponent={() => <NoData />}
                        />
                    )}
                </View>
            </BodyCont>
        </>
    );
}
