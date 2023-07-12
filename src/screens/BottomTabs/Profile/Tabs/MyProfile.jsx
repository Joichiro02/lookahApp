// ** react and react-native imports
import React, { useRef, useState } from "react";
import {
    Text,
    TextInput,
    TouchableOpacity,
    View,
    findNodeHandle,
} from "react-native";

import { doc, addDoc, setDoc, collection } from "firebase/firestore";
import { database } from "config/firebase";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const TextField = ({ label, value, setValue, ...params }) => {
    return (
        <View className="relative border border-[#7B7B7B] rounded-lg py-2 px-4 my-2">
            <Text className="absolute text-[#7B7B7B] -top-2 left-3 bg-white px-1">
                {label}
            </Text>
            <TextInput
                value={value}
                onChangeText={setValue}
                className="text-lg"
                {...params}
            />
        </View>
    );
};

export default function MyProfile() {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [nickname, setNickname] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNum, setPhonenum] = useState("");
    const ref = useRef(null);

    const postData = async () => {
        await addDoc(collection(database, "users"), {
            firstname,
            lastname,
            nickname,
            email,
            phone_number: phoneNum,
        });
    };

    const scrollToInput = (reactNode) => {
        // Add a 'scroll' ref to your ScrollView
        ref.scrollToFocusedInput(reactNode);
    };

    return (
        <KeyboardAwareScrollView
            className="flex-1 bg-white p-5 pb-0"
            innerRef={(ref) => {
                keyref = ref;
            }}
            extraHeight={50}
        >
            <TextField
                label={"First Name"}
                value={firstname}
                setValue={setFirstname}
            />
            <TextField
                label={"Last Name"}
                value={lastname}
                setValue={setLastname}
            />
            <TextField
                label={"Nickname"}
                value={nickname}
                setValue={setNickname}
            />
            <TextField
                label={"Email Address"}
                value={email}
                setValue={setEmail}
                textContentType="emailAddress"
                onFocus={(event) => {
                    // `bind` the function if you're using ES6 classes
                    scrollToInput(findNodeHandle(event.target));
                }}
            />

            <Text className="text-[#7B7B7B] mb-3">
                Make sure we can reach you at your new email
            </Text>

            <View className="flex-row w-full space-x-2">
                <View className="border border-[#7B7B7B] rounded-lg py-2 px-4 items-center justify-center my-2">
                    <Text>+63</Text>
                </View>
                <View className="flex-1">
                    <TextField
                        label={"Mobile Number"}
                        value={phoneNum}
                        setValue={setPhonenum}
                    />
                </View>
            </View>

            <Text className="text-[#7B7B7B]">
                If you change to a new number, we’ll take you through a
                verification process.
            </Text>

            <TouchableOpacity
                className="bg-[#FF0844] mt-8 py-3 rounded-lg items-center justify-center"
                onPress={postData}
            >
                <Text className="text-white uppercase font-bold text-base">
                    Update
                </Text>
            </TouchableOpacity>
        </KeyboardAwareScrollView>
    );
}
