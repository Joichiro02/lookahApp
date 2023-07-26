// ** react and react-native imports
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

// ** libraries imports
import * as ImagePicker from "expo-image-picker";
import Toast from "react-native-toast-message";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// ** local imports
import DateFormater from "utils/DateFormater";
import DropdownField from "components/common/DropdownField";
import InputField from "components/common/InputField";
import { auth, database, storage } from "config/firebase";

import DefaultImage from "assets/images/DefaultImage.png";
import LoadingModal from "components/common/LoadingModal";
import Container from "components/layouts/Container";

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

export default function AddContent() {
    // ** states
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
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            // allowsMultipleSelection: true,
        });

        console.log(result.assets);

        if (!result.canceled) {
            setImage(result.assets);
        }
    };

    onHandleUploadData = async () => {
        const imageName = `IMG_${DateFormater(new Date().toLocaleString())}`;
        const response = await fetch(image[0].uri);
        const blob = await response.blob();

        setIsLoading(true);
        const storageRef = ref(storage, "images/" + imageName);
        const uploadTask = uploadBytesResumable(storageRef, blob);
        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log("Upload is " + progress + "% done");
                switch (snapshot.state) {
                    case "paused":
                        console.log("Upload is paused");
                        break;
                    case "running":
                        console.log("Upload is running");
                        break;
                }
            },
            (error) => {
                // A full list of error codes is available at
                // https://firebase.google.com/docs/storage/web/handle-errors
                switch (error.code) {
                    case "storage/unauthorized":
                        // User doesn't have permission to access the object
                        break;
                    case "storage/canceled":
                        // User canceled the upload
                        break;

                    // ...

                    case "storage/unknown":
                        // Unknown error occurred, inspect error.serverResponse
                        break;
                    default:
                        console.log("error", error);
                }
            },
            () => {
                // Upload completed successfully, now we can get the download URL
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log("File available at", downloadURL);
                    addDoc(collection(database, "data"), {
                        title,
                        address,
                        phone_number: contact,
                        description,
                        category,
                        operation_hour: operationHour,
                        photo: downloadURL,
                        user: {
                            _id: auth.currentUser.uid,
                            name: auth.currentUser.email,
                        },
                    })
                        .then(() => {
                            setIsLoading(false);
                            Toast.show({
                                type: "success",
                                text1: "Successfully Created",
                            });
                        })
                        .catch((error) => {
                            setIsLoading(false);
                            Toast.show({
                                type: "error",
                                text1: "Error",
                                text2: error.toString(),
                            });
                        });
                });
            }
        );
    };

    return (
        <Container>
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
                <InputField label={"Title"} value={title} setValue={setTitle} />
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
                <TouchableOpacity
                    onPress={onHandleUploadData}
                    className="bg-[#FF0844] mt-4 mb-12 py-3 rounded-lg items-center justify-center"
                >
                    <Text className="text-white uppercase font-bold text-base">
                        Upload
                    </Text>
                </TouchableOpacity>
            </KeyboardAwareScrollView>

            <LoadingModal isVisible={isLoading} />
        </Container>
    );
}
