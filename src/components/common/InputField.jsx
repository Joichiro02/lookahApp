import React from "react";
import { TextInput, View } from "react-native";
import { Feather } from "react-native-vector-icons";

export default function InputField() {
  return (
    <View className="flex-row items-center bg-white w-48 rounded-md py-1 justify-around">
      <Feather name="search" size={20} />
      <TextInput placeholder="What do you have in mind?" />
    </View>
  );
}
