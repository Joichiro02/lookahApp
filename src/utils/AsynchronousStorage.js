import AsyncStorage from "@react-native-async-storage/async-storage";

export default function AsynchronousStorage() {
    const storeData = async (key, value) => {
        try {
            await AsyncStorage.setItem(key, value);
        } catch (error) {
            console.log(error);
        }
    };

    const getData = async (key) => {
        try {
            const value = await AsyncStorage.getItem(key);
            if (value !== null) {
                return value;
            }
            return null;
        } catch (error) {
            console.log(error);
        }
    };

    const removeValue = async (key) => {
        try {
            await AsyncStorage.removeItem(key);
        } catch (error) {
            console.log(error);
        }
    };

    return { storeData, getData, removeValue };
}
