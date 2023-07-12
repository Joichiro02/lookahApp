// ** libraries imports
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// ** local imports
import BottomTabs from "navigations/tabs/BottomTabs";
import GridNavScreen from "screens/GridNavScreen";
import ItemScreen from "screens/ItemScreen";
import Settings from "screens/Settings";
import Upload from "screens/Upload";

const Stack = createNativeStackNavigator();

export default function ScreenStack() {
    return (
        <Stack.Navigator
            initialRouteName="MainScreen"
            screenOptions={{
                headerShown: false,
                animation: "slide_from_right",
            }}
        >
            <Stack.Screen name="GridNavScreen" component={GridNavScreen} />
            <Stack.Screen name="ItemScreen" component={ItemScreen} />
            <Stack.Screen name="MainScreen" component={BottomTabs} />
            <Stack.Screen name="SettingsScreen" component={Settings} />
            <Stack.Screen name="UploadScreen" component={Upload} />
        </Stack.Navigator>
    );
}
