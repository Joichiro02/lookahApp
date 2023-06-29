import React from "react";
import { View } from "react-native";

export default function BodyCont({ children }) {
  return (
    <View className="z-10 -mt-16 bg-white flex-1 rounded-l-3xl rounded-r-3xl p-5">
      {children}
    </View>
  );
}
