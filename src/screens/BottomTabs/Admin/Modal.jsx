// ** react and react-native imports
import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

// ** libraries imports
import * as ImagePicker from "expo-image-picker";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// ** local imports
import Container from "components/layouts/Container";
import DropdownField from "components/common/DropdownField";
import InputField from "components/common/InputField";
import LoadingModal from "components/common/LoadingModal";
import ModalCont from "components/layouts/ModalCont";

const dataCategories = [
    { label: "Hotel", value: "hotel" },
    { label: "Bar & Grill", value: "barAndGrill" },
    { label: "Restaurant", value: "restaurant" },
    { label: "Park", value: "Park" },
    { label: "Tourist Spot", value: "touristSpot" },
    { label: "Establishment", value: "establishment" },
    { label: "Activities", value: "activities" },
    { label: "Promos", value: "promos" },
];

export default function Modal({ data, showModal, setShowModal }) {
    const [category, setCategory] = useState(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [contact, setContact] = useState("");
    const [operationHour, setOperationHour] = useState("");
    const [address, setAddress] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [image, setImage] = useState([]);

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

    useEffect(() => {
        setTitle(data.title);
        setDescription(data.description);
        setContact(data.contact);
        setOperationHour(data.operation_hour);
        setAddress(data.address);
        setCategory(data.category);

        return () => {
            setTitle("");
            setDescription("");
            setContact("");
            setOperationHour("");
            setAddress("");
            setCategory("");
            setImage([]);
        };
    }, [showModal]);

    return (
        <ModalCont open={showModal} setOpen={setShowModal}>
            <View className="h-[90%] bg-white rounded-tl-3xl rounded-tr-3xl items-center justify-center">
                {/* <ScrollView className="flex-1 w-full p-5"> */}
                <Container style={"w-full"}>
                    <KeyboardAwareScrollView
                        showsVerticalScrollIndicator={false}
                        extraHeight={50}
                    >
                        <DropdownField
                            data={dataCategories}
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
                                    source={{
                                        uri: "https://firebasestorage.googleapis.com/v0/b/lookah-ac281.appspot.com/o/images%2FIMG_26072023_092631?alt=media&token=12678790-17db-44aa-8006-52ada83f3da6",
                                    }}
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
    );
}
