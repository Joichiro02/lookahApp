// ** libraries imports
import InitialLoadScreen from "screens/InitialLoadScreen";
import LoadingModal from "components/common/LoadingModal";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";

// ** local imports
import LoginScreen from "screens/LoginScreen";
import SignupScreen from "screens/SignupScreen";
import AsynchronousStorage from "utils/AsynchronousStorage";

const Stack = createNativeStackNavigator();

export default function AuthStack() {
    // ** state
    const [initailScreen, setInitialScreen] = useState("InitialLoadScreen");
    const [isLoading, setIsLoading] = useState(true);
    // ** asyn storage
    const { getData, storeData } = AsynchronousStorage();

    const hasLoadedChecker = async () => {
        const data = await getData("initial");
        if (data === null) {
            storeData("initial", "true");
            setIsLoading(false);
        } else {
            setInitialScreen("LoginScreen");
            setIsLoading(false);
        }
    };

    useEffect(() => {
        hasLoadedChecker();
    }, []);

    if (isLoading) {
        return <LoadingModal />;
    }

    return (
        <Stack.Navigator
            initialRouteName={initailScreen}
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
