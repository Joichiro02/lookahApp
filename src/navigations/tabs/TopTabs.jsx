// ** libraries imports
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { colors } from "themes";

const Tab = createMaterialTopTabNavigator();

export default function TopTabs({ tabs }) {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: "#00000000",
                    shadowColor: "#00000000",
                    // borderBottomColor: "#000",
                    // borderBottomWidth: 2,
                },
                tabBarLabelStyle: {
                    fontWeight: "bold",
                },
                tabBarActiveTintColor: colors.Primary,
                tabBarInactiveTintColor: colors.TextColor,
                tabBarIndicatorStyle: {
                    backgroundColor: colors.Primary,
                },
            }}
        >
            {tabs.map((tab, index) => (
                <Tab.Screen
                    key={index}
                    name={tab.name}
                    component={tab.component}
                />
            ))}
        </Tab.Navigator>
    );
}
