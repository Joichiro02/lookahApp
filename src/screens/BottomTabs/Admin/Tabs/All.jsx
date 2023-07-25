import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

// ** libraries imports
import * as ImagePicker from "expo-image-picker";
import Toast from "react-native-toast-message";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// ** local imports
import DateFormater from "utils/DateFormater";
import DropdownField from "components/common/DropdownField";
import InputField from "components/common/InputField";
import { auth, database, storage } from "config/firebase";
import TextField from "components/common/InputSearchField";
import DefaultImage from "assets/images/DefaultImage.png";
import LoadingModal from "components/common/LoadingModal";
import Container from "components/layouts/Container";

import Image1 from "assets/images/Image1.jpg";
import ModalCont from "components/layouts/ModalCont";

const data = [
    { label: "Hotel", value: "hotel" },
    { label: "Bar & Grill", value: "barAndGrill" },
    { label: "Restaurant", value: "restaurant" },
    { label: "Park", value: "Park" },
    { label: "Tourist Spot", value: "touristSpot" },
    { label: "Establishment", value: "establishment" },
    { label: "Activities", value: "activities" },
    { label: "Promos", value: "promos" },
];

export default function All() {
    // ** states
    const [showModal, setShowModal] = useState(false);
    const [category, setCategory] = useState(null);
    const [image, setImage] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [contact, setContact] = useState("");
    const [operationHour, setOperationHour] = useState("");
    const [address, setAddress] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            // allowsEditing: true,
            // aspect: [4, 3],
            quality: 1,
            allowsMultipleSelection: true,
        });

        console.log(result.assets);

        if (!result.canceled) {
            setImage(result.assets);
        }
    };

    return (
        <Container>
            <View className="flex-row items-center space-x-4">
                <TextField placeholder="Search" />
                <TouchableOpacity className="bg-[#FF0844] flex-1 items-center justify-center py-2.5 rounded-md ">
                    <Text className="text-white font-semibold">Filter</Text>
                </TouchableOpacity>
            </View>
            <ScrollView className="py-3">
                <TouchableOpacity
                    onPress={() => setShowModal(true)}
                    className="flex-row my-2 space-x-2"
                >
                    <Image
                        className="rounded-lg"
                        source={Image1}
                        style={{ height: 100, width: "50%" }}
                        resizeMode="cover"
                    />
                    <View className="space-y-2 w-1/2">
                        <Text className="font-bold text-lg" numberOfLines={2}>
                            San Rafael River Adventure
                        </Text>
                        <Text>10:00 AM - 10:00 PM</Text>
                        <View>
                            <Text>0.3km</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </ScrollView>

            <ModalCont open={showModal} setOpen={setShowModal}>
                <View className="h-[90%] bg-white rounded-tl-3xl rounded-tr-3xl items-center justify-center">
                    {/* <ScrollView className="flex-1 w-full p-5"> */}
                    <Container style={"w-full"}>
                        <KeyboardAwareScrollView
                            showsVerticalScrollIndicator={false}
                            extraHeight={50}
                        >
                            <DropdownField
                                data={data}
                                placeholder="Select Category"
                                value={category}
                                setValue={setCategory}
                            />
                            <View className=" py-2">
                                {image.length !== 0 ? (
                                    image.map((item, index) => (
                                        <Image
                                            key={index}
                                            source={{ uri: item.uri }}
                                            resizeMode="contain"
                                            className="h-56 w-56 self-center"
                                        />
                                    ))
                                ) : (
                                    <Image
                                        source={DefaultImage}
                                        resizeMode="contain"
                                        className="h-56 w-56 self-center"
                                    />
                                )}
                                <TouchableOpacity
                                    onPress={pickImage}
                                    className="bg-[#FF0844] mt-4 py-3 rounded-lg items-center justify-center"
                                >
                                    <Text className="text-white uppercase font-bold text-base">
                                        Choose Image
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <InputField
                                label={"Title"}
                                value={title}
                                setValue={setTitle}
                            />
                            <InputField
                                label={"Description"}
                                value={description}
                                setValue={setDescription}
                                multiline
                                numberOfLines={4}
                            />
                            <InputField
                                label={"Contact Number"}
                                value={contact}
                                setValue={setContact}
                                keyboardType="number-pad"
                                textContentType="telephoneNumber"
                            />
                            <InputField
                                label={"Operation Hours"}
                                value={operationHour}
                                setValue={setOperationHour}
                            />
                            <InputField
                                label={"Address"}
                                value={address}
                                setValue={setAddress}
                            />
                            <View className="flex-row items-center justify-evenly">
                                <TouchableOpacity
                                    // onPress={onHandleUploadData}
                                    className="bg-[#FF0844] mt-4 py-3 rounded-lg items-center justify-center w-1/3"
                                >
                                    <Text className="text-white uppercase font-bold text-base">
                                        Delete
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    // onPress={onHandleUploadData}
                                    className="bg-[#FF0844] mt-4 py-3 rounded-lg items-center justify-center w-1/3"
                                >
                                    <Text className="text-white uppercase font-bold text-base">
                                        Edit
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </KeyboardAwareScrollView>

                        <LoadingModal isVisible={isLoading} />
                    </Container>
                    {/* </ScrollView> */}
                </View>
            </ModalCont>
        </Container>
    );
}
