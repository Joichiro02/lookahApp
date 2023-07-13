// ** react and react-native imports
import React, { useState } from "react";
import {
    Image,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

// ** libraries imports
import Toast from "react-native-toast-message";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

// ** local imports
import { auth, database } from "config/firebase";

// ** images imports
import FacebookLogo from "assets/Facebook.png";
import GoogleLogo from "assets/Google.png";
import LinkInLogo from "assets/LinkIn.png";

export default function SignupScreen() {
    // ** state
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [nickname, setNickname] = useState("");
    const [phoneNum, setPhonenum] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { navigate } = useNavigation();

    const onHandleSignup = () => {
        if (email !== "" && password !== "") {
            createUserWithEmailAndPassword(auth, email, password)
                .then(async (data) => {
                    await setDoc(doc(database, "users", data.user.uid), {
                        firstname,
                        lastname,
                        nickname,
                        phone_number: phoneNum,
                        user: {
                            _id: data.user.uid,
                            name: data.user.email,
                        },
                    });
                })
                .then(() => {
                    Toast.show({
                        type: "success",
                        text1: "Account Successfully Created",
                    });
                })
                .catch((error) => {
                    Toast.show({
                        type: "error",
                        text1: "Error",
                        text2: error.toString(),
                    });
                });
        }
    };

    return (
        <ScrollView className="flex-1 bg-white">
            <SafeAreaView className="flex-1">
                <View className=" h-40 items-center justify-center">
                    <Text className="text-[#FF0844] font-bold text-5xl">
                        Let’s Get Started
                    </Text>
                    <Text className="font-semibold">
                        Create your account and start exploring!
                    </Text>
                </View>

                <View className="px-5">
                    <TextInput
                        className="bg-[#f6f7f8] my-3 py-2 px-2 rounded-md shadow-lg shadow-black text-lg"
                        placeholder="Firstname"
                        autoCapitalize="none"
                        keyboardType="default"
                        textContentType="givenName"
                        autoFocus={true}
                        value={firstname}
                        onChangeText={(text) => setFirstname(text)}
                    />
                    <TextInput
                        className="bg-[#f6f7f8] my-3 py-2 px-2 rounded-md shadow-lg shadow-black text-lg"
                        placeholder="Lastname"
                        autoCapitalize="none"
                        keyboardType="default"
                        textContentType="familyName"
                        value={lastname}
                        onChangeText={(text) => setLastname(text)}
                    />
                    <TextInput
                        className="bg-[#f6f7f8] my-3 py-2 px-2 rounded-md shadow-lg shadow-black text-lg"
                        placeholder="Nickname"
                        autoCapitalize="none"
                        keyboardType="default"
                        textContentType="nickname"
                        value={nickname}
                        onChangeText={(text) => setNickname(text)}
                    />
                    <TextInput
                        className="bg-[#f6f7f8] my-3 py-2 px-2 rounded-md shadow-lg shadow-black text-lg"
                        placeholder="Mobile Number"
                        autoCapitalize="none"
                        keyboardType="number-pad"
                        textContentType="telephoneNumber"
                        value={phoneNum}
                        onChangeText={(text) => setPhonenum(text)}
                    />
                    <TextInput
                        className="bg-[#f6f7f8] my-3 py-2 px-2 rounded-md shadow-lg shadow-black text-lg"
                        placeholder="Email Address"
                        autoCapitalize="none"
                        keyboardType="email-address"
                        textContentType="emailAddress"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                    <TextInput
                        className="bg-[#f6f7f8] my-3 py-2 px-2 rounded-md shadow-lg shadow-black text-lg"
                        placeholder="Password"
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry={true}
                        textContentType="password"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />
                </View>

                <View className="my-10 space-y-10 items-center  px-5">
                    <View className="w-full items-center space-y-1">
                        <Text className="font-semibold">
                            By signing up, you agree to our Terms and Conditions
                        </Text>
                        <TouchableOpacity
                            className="w-full bg-[#FF0844] rounded-xl p-3 items-center"
                            onPress={onHandleSignup}
                        >
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
        </ScrollView>
    );
}
