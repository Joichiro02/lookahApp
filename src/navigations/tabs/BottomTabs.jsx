// ** react and react-native imports
import React, { useEffect, useState } from "react";

// ** libaries imports
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
    MaterialCommunityIcons,
    MaterialIcons,
    Octicons,
} from "react-native-vector-icons";

import { doc, getDoc } from "firebase/firestore";
import { auth, database } from "config/firebase";

// ** local imports
import Admin from "screens/BottomTabs/Admin";
import Favorites from "screens/BottomTabs/Favorites";
import Home from "screens/BottomTabs/Home";
import LoadingModal from "components/common/LoadingModal";
import Profile from "screens/BottomTabs/Profile";
import Vouchers from "screens/BottomTabs/Vouchers";
import { colors } from "themes";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
    // ** states
    const [isAdmin, setIsAdmin] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const getUser = async () => {
        setIsLoading(true);
        try {
            const user = await getDoc(
                doc(database, "users", auth.currentUser.uid)
            );
            if (Object.keys(user.data()).length > 0) {
                setIsAdmin(user.data().is_admin);
                setIsLoading(false);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getUser();
    }, []);

    if (isLoading) {
        return (
            <LoadingModal
                isVisible={true}
                backdropOpacity={0}
                text={"Fetching Data..."}
            />
        );
    }

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    marginHorizontal: 20,
                    marginBottom: 10,
                    borderRadius: 10,
                    position: "absolute",
                },
                tabBarHideOnKeyboard: true,
                tabBarActiveTintColor: colors.Primary,
            }}
        >
            <Tab.Screen
                options={{
                    tabBarIcon: ({ color }) => (
                        <Octicons color={color} name="home" size={20} />
                    ),
                }}
                name="Home"
                component={Home}
            />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ color }) => (
                        <Octicons color={color} name="heart-fill" size={20} />
                    ),
                }}
                name="Favorites"
                component={Favorites}
            />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            color={color}
                            name="ticket"
                            size={20}
                        />
                    ),
                }}
                name="Vouchers"
                component={Vouchers}
            />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons color={color} name="person" size={20} />
                    ),
                }}
                name="Profile"
                component={Profile}
            />
            {isAdmin && (
                <Tab.Screen
                    options={{
                        tabBarIcon: ({ color }) => (
                            <MaterialIcons
                                color={color}
                                name="admin-panel-settings"
                                size={20}
                            />
                        ),
                    }}
                    name="Admin"
                    component={Admin}
                />
            )}
        </Tab.Navigator>
    );
}
