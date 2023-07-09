import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottomTabs from "navigations/tabs/BottomTabs";
import GridNavScreen from "screens/GridNavScreen";

const Stack = createNativeStackNavigator();

export default function ScreenStack() {
    return (
        <Stack.Navigator
            initialRouteName="mainScreen"
            screenOptions={{
                headerShown: false,
                animation: "slide_from_right",
            }}
        >
            <Stack.Screen name="mainScreen" component={BottomTabs} />
            <Stack.Screen name="GridNavScreen" component={GridNavScreen} />
        </Stack.Navigator>
    );
}
