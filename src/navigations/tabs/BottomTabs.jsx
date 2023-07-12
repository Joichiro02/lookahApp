// ** libaries imports
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
    MaterialCommunityIcons,
    MaterialIcons,
    Octicons,
} from "react-native-vector-icons";

// ** local imports
import Favorites from "screens/BottomTabs/Favorites";
import Home from "screens/BottomTabs/Home";
import Profile from "screens/BottomTabs/Profile";
import Vouchers from "screens/BottomTabs/Vouchers";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    marginHorizontal: 20,
                    marginBottom: 10,
                    borderRadius: 10,
                },
                tabBarHideOnKeyboard: true,
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
        </Tab.Navigator>
    );
}
