// ** react and react-native imports
import { createContext, useContext, useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

// ** libraries imports
import { onAuthStateChanged } from "firebase/auth";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

// ** local imports
import AuthStack from "navigations/stacks/AuthStack";
import ScreenStack from "./ScreenStack";
import { auth } from "config/firebase";

// ** color theme of react-navigation
const NavTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: "#FFFFFF",
    },
};

const AuthenticationUserContext = createContext();

function RootNavigation() {
    const { user, setUser } = useContext(AuthenticationUserContext);
    const [isloading, setIsLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(
            auth,
            async (authenticatedUser) => {
                authenticatedUser ? setUser(authenticatedUser) : setUser(null);
                setIsLoading(false);
            }
        );

        return unsubscribe;
    }, [user]);

    if (isloading) {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (
        <NavigationContainer theme={NavTheme}>
            {user ? <ScreenStack /> : <AuthStack />}
        </NavigationContainer>
    );
}

const AuthenticatedUserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    return (
        <AuthenticationUserContext.Provider value={{ user, setUser }}>
            {children}
        </AuthenticationUserContext.Provider>
    );
};

export default function index() {
    return (
        <AuthenticatedUserProvider>
            <RootNavigation />
        </AuthenticatedUserProvider>
    );
}
