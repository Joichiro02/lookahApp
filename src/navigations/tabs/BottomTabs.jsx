// ** libaries imports
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// ** local imports
import Favorites from "screens/BottomTabs/Favorites";
import Home from "screens/BottomTabs/Home";
import Profile from "screens/BottomTabs/Profile";
import Vouchers from "screens/BottomTabs/Vouchers";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Vaouchers" component={Vouchers} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
