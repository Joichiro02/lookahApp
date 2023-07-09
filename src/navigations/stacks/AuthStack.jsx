import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "screens/LoginScreen";
import SignupScreen from "screens/SignupScreen";

const Stack = createNativeStackNavigator();

export default function AuthStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="SignupScreen" component={SignupScreen} />
        </Stack.Navigator>
    );
}
