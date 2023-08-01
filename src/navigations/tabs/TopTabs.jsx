// ** libraries imports
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

// ** local imports
import { colors } from "themes";

const Tab = createMaterialTopTabNavigator();

export default function TopTabs({
    initialRouteName,
    tabs,
    tabBarStyle,
    radius,
}) {
    return (
        <Tab.Navigator
            initialRouteName={initialRouteName}
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: "#00000000",
                    shadowColor: "#00000000",
                    // borderBottomColor: "#000",
                    // borderBottomWidth: 2,
                    ...tabBarStyle,
                },
                tabBarLabelStyle: {
                    fontWeight: "bold",
                },
                tabBarActiveTintColor: colors.Primary,
                tabBarInactiveTintColor: colors.TextColor,
                tabBarIndicatorStyle: {
                    backgroundColor: colors.Primary,
                },
                tabBarAndroidRipple: {
                    borderless: false,
                    ...radius,
                },
            }}
        >
            {tabs.map((tab, index) => (
                <Tab.Screen key={index} name={tab.name}>
                    {tab.component}
                </Tab.Screen>
            ))}
        </Tab.Navigator>
    );
}
