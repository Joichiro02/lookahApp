import Toast from "react-native-toast-message";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

// ** local imports
import StackScreens from "./src/navigations/stacks";

export default function App() {
    return (
        <SafeAreaProvider>
            <StackScreens />
            <StatusBar style="auto" />
            <Toast />
        </SafeAreaProvider>
    );
}
