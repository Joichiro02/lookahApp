import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

// ** local imports
import StackScreens from "./src/navigations/stacks";

export default function App() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <StackScreens />
                <StatusBar style="auto" />
            </NavigationContainer>
        </SafeAreaProvider>
    );
}
