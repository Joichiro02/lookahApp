// ** libraries imports
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import InitialLoadScreen from "screens/InitialLoadScreen";

// ** local imports
import LoginScreen from "screens/LoginScreen";
import SignupScreen from "screens/SignupScreen";

const Stack = createNativeStackNavigator();

export default function AuthStack() {
    return (
        <Stack.Navigator
            initialRouteName="InitialLoadScreen"
            screenOptions={{
                headerShown: false,
                animation: "slide_from_right",
            }}
        >
            <Stack.Screen
                name="InitialLoadScreen"
                component={InitialLoadScreen}
            />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="SignupScreen" component={SignupScreen} />
        </Stack.Navigator>
    );
}
