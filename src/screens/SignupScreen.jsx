import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

// ** local imports
import AppLogo from "assets/AppLogoColored.png";
import FacebookLogo from "assets/Facebook.png";
import GoogleLogo from "assets/Google.png";
import LinkInLogo from "assets/LinkIn.png";

export default function SignupScreen() {
    const { navigate } = useNavigation();

    return (
        <View className="flex-1 bg-white px-5">
            <SafeAreaView className="flex-1">
                <View className=" h-52 items-center justify-center">
                    <Text className="text-[#FF0844] font-bold text-5xl">
                        Let’s Get Started
                    </Text>
                    <Text className="font-semibold">
                        Create your account and start exploring!
                    </Text>
                </View>

                <View>
                    <TextInput
                        className="bg-[#f6f7f8] my-3 py-2 px-2 rounded-md shadow-lg shadow-black text-lg"
                        placeholder="Name"
                        autoCapitalize="none"
                        keyboardType="default"
                        textContentType="emailAddress"
                        autoFocus={true}
                        // value={email}
                        // onChangeText={(text) => setEmail(text)}
                    />
                    <TextInput
                        className="bg-[#f6f7f8] my-3 py-2 px-2 rounded-md shadow-lg shadow-black text-lg"
                        placeholder="Email Address"
                        autoCapitalize="none"
                        keyboardType="email-address"
                        textContentType="emailAddress"
                        // value={email}
                        // onChangeText={(text) => setEmail(text)}
                    />
                    <TextInput
                        className="bg-[#f6f7f8] my-3 py-2 px-2 rounded-md shadow-lg shadow-black text-lg"
                        placeholder="Password"
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry={true}
                        textContentType="password"
                        // value={password}
                        // onChangeText={(text) => setPassword(text)}
                    />
                </View>

                <View className="my-10 space-y-10 items-center">
                    <View className="w-full items-center space-y-1">
                        <Text className="font-semibold">
                            By signing up, you agree to our Terms and Conditions
                        </Text>
                        <TouchableOpacity className="w-full bg-[#FF0844] rounded-xl p-3 items-center">
                            <Text className="text-white font-bold text-xl uppercase">
                                Sign Up
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <Text className="font-bold">or continue with</Text>

                    <View className="flex-row">
                        <TouchableOpacity>
                            <Image
                                source={FacebookLogo}
                                style={{ height: 40 }}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                source={GoogleLogo}
                                style={{ height: 40 }}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                source={LinkInLogo}
                                style={{ height: 40 }}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    );
}
