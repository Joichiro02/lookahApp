import { Text, TextInput, View } from "react-native";

export default function InputField({ label, value, setValue, ...params }) {
    return (
        <View className="relative border border-[#7B7B7B] rounded-lg py-2 px-4 my-2">
            <Text className="absolute text-[#7B7B7B] -top-2 left-3 bg-white px-1">
                {label}
            </Text>
            <TextInput
                className="text-lg"
                value={value}
                onChangeText={setValue}
                {...params}
            />
        </View>
    );
}
