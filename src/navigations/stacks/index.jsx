import { createContext, useContext, useEffect, useState } from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottomTabs from "navigations/tabs/BottomTabs";
import GridNavScreen from "screens/GridNavScreen";
import AuthStack from "navigations/stacks/AuthStack";

const Stack = createNativeStackNavigator();
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
        <NavigationContainer>
            {user ? <ChatStack /> : <AuthStack />}
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

// export default function index() {
//     return (
//         <AuthenticatedUserProvider>
//             <RootNavigation />
//         </AuthenticatedUserProvider>
//     );
// }

export default function index() {
    return <AuthStack />;
}
