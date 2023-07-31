// ** react and react-native imports
import React, { useCallback, useEffect, useState } from "react";
import { Image, RefreshControl, Text, View } from "react-native";

// ** libraries imports
import { FlashList } from "@shopify/flash-list";
import { Ionicons, MaterialIcons, Octicons } from "react-native-vector-icons";

// ** firebase
import { collection, getDocs, query, where } from "firebase/firestore";
import { database } from "config/firebase";

// ** local imports
import Container from "components/layouts/Container";
import Loading from "components/common/Loading";
import NoData from "components/common/NoData";
import { colors } from "themes";

export default function DynamicContainer({ category }) {
    // ** states
    const [fetchData, setFetchData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    const fetchAllData = async () => {
        try {
            const dataRef = collection(database, "data");
            const dataReturn = query(
                dataRef,
                where("category", "==", category)
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
    }, [category]);

    return (
        <Container>
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
                    data={fetchData}
                    renderItem={({ item, index }) => (
                        <View key={index} className="flex-row my-2 space-x-2">
                            <Image
                                className="rounded-lg"
                                source={{ uri: item.photo.link }}
                                style={{ height: 100, width: "50%" }}
                                resizeMode="cover"
                            />
                            <View className="relative w-1/2 justify-evenly">
                                <Ionicons
                                    className="absolute right-2 top-2"
                                    name="heart-sharp"
                                    color="#EB4335"
                                    size={15}
                                />
                                <Text
                                    className="font-bold text-lg"
                                    numberOfLines={2}
                                >
                                    {item.title}
                                </Text>
                                <View className="flex-row items-center space-x-1">
                                    <Octicons
                                        name="star-fill"
                                        color="#FFC700"
                                    />
                                    <Text numberOfLines={1}>
                                        4.0 - 18 reviews
                                    </Text>
                                </View>
                                <View className="flex-row items-center space-x-1">
                                    <MaterialIcons
                                        name="location-on"
                                        color="#4285F4"
                                    />
                                    <Text numberOfLines={1}>
                                        {item.address}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    )}
                    ListEmptyComponent={() => <NoData />}
                />
            )}
        </Container>
    );
}
