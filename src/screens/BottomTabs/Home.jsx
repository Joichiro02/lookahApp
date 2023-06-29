// ** react and react-native imports
import React from "react";
import { Image, Text, View } from "react-native";

// ** libraries imports
import { SafeAreaView } from "react-native-safe-area-context";

// ** local imports
import AppLogo from "assets/AppLogo.png";
import HeaderCont from "components/layouts/HeaderCont";
import TextField from "components/common/InputField";

export default function Home() {
  return (
    <>
      <HeaderCont>
        <View className="flex-1 flex-row items-center justify-evenly space-x-4">
          <Image source={AppLogo} className="h-10 w-32" resizeMode="contain" />
          <TextField />
        </View>
      </HeaderCont>
      <SafeAreaView></SafeAreaView>
    </>
  );
}
