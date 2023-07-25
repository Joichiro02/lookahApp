// ** react and react-native imports
import React, { useEffect, useRef, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import {
    collection,
    doc,
    addDoc,
    getDoc,
    query,
    setDoc,
    where,
} from "firebase/firestore";
import { auth, database } from "config/firebase";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import InputField from "components/common/InputField";

export default function MyProfile() {
    // ** state
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [nickname, setNickname] = useState("");
    const [phoneNum, setPhonenum] = useState("");
    const [edit, setEdit] = useState(false);

    const postData = async () => {
        await setDoc(doc(database, "users", auth.currentUser.uid), {
            firstname,
            lastname,
            nickname,
            phone_number: phoneNum,
            user: {
                _id: auth.currentUser.uid,
                name: auth.currentUser.email,
            },
        });
        setEdit(false);
    };

    const getUser = async () => {
        try {
            const user = await getDoc(
                doc(database, "users", auth.currentUser.uid)
            );
            if (Object.keys(user.data()).length > 0) {
                setFirstname(user.data().firstname);
                setLastname(user.data().lastname);
                setNickname(user.data().nickname);
                setPhonenum(user.data().phone_number);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getUser();
    }, []);

    return (
        <KeyboardAwareScrollView
            className="flex-1 bg-white p-5 pb-0"
            innerRef={(ref) => {
                keyref = ref;
            }}
            extraHeight={50}
        >
            <InputField
                label={"First Name"}
                value={firstname}
                setValue={setFirstname}
                editable={edit}
            />
            <InputField
                label={"Last Name"}
                value={lastname}
                setValue={setLastname}
                editable={edit}
            />
            <InputField
                label={"Nickname"}
                value={nickname}
                setValue={setNickname}
                editable={edit}
            />
            <InputField
                label={"Email Address"}
                value={auth.currentUser.email}
                textContentType="emailAddress"
                editable={false}
            />

            <Text className="text-[#7B7B7B] mb-3">
                Make sure we can reach you at your new email
            </Text>

            <View className="flex-row w-full space-x-2">
                <View className="border border-[#7B7B7B] rounded-lg py-2 px-4 items-center justify-center my-2">
                    <Text>+63</Text>
                </View>
                <View className="flex-1">
                    <InputField
                        label={"Mobile Number"}
                        value={phoneNum}
                        setValue={setPhonenum}
                        editable={edit}
                    />
                </View>
            </View>

            <Text className="text-[#7B7B7B]">
                If you change to a new number, we’ll take you through a
                verification process.
            </Text>

            {edit ? (
                <TouchableOpacity
                    className="bg-[#309234] mt-8 py-3 rounded-lg items-center justify-center"
                    onPress={postData}
                >
                    <Text className="text-white uppercase font-bold text-base">
                        Save
                    </Text>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity
                    className="bg-[#FF0844] mt-8 py-3 rounded-lg items-center justify-center"
                    onPress={() => setEdit(true)}
                >
                    <Text className="text-white uppercase font-bold text-base">
                        Edit
                    </Text>
                </TouchableOpacity>
            )}
        </KeyboardAwareScrollView>
    );
}
