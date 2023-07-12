import React, { useState, useEffect } from "react";
import { Button, Image, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { SafeAreaView } from "react-native-safe-area-context";

import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
} from "firebase/storage";
import { storage } from "config/firebase";
import * as Progress from "react-native-progress";

export default function Upload() {
    const [image, setImage] = useState(null);
    const [downloadImg, setDownloadImg] = useState(null);
    const [progressNum, setProgressNum] = useState(0);
    const [loading, setLoading] = useState(false);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const UploadImg = async () => {
        const response = await fetch(image);
        const blob = await response.blob();
        // console.log(blob);

        // Upload file and metadata to the object 'images/mountains.jpg'
        const storageRef = ref(storage, "images/" + "mountains.jpg");
        const uploadTask = uploadBytesResumable(storageRef, blob);

        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log("Upload is " + progress + "% done");
                setProgressNum(progress);
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
                });
            }
        );
    };

    const DownloadImg = () => {
        const starsRef = ref(storage, "images/" + "mountains.jpg");
        // Get the download URL
        setLoading(true);
        getDownloadURL(starsRef)
            .then((url) => {
                // Insert url into an <img> tag to "download"
                console.log(url);
                setDownloadImg(url);
                setLoading(false);
            })
            .catch((error) => {
                // A full list of error codes is available at
                // https://firebase.google.com/docs/storage/web/handle-errors
                switch (error.code) {
                    case "storage/object-not-found":
                        // File doesn't exist
                        break;
                    case "storage/unauthorized":
                        // User doesn't have permission to access the object
                        break;
                    case "storage/canceled":
                        // User canceled the upload
                        break;

                    // ...

                    case "storage/unknown":
                        // Unknown error occurred, inspect the server response
                        break;
                }
            });
    };

    return (
        <SafeAreaView className="flex-1">
            <View className="bg-green-300 items-center justify-center">
                <Progress.Bar progress={progressNum / 100} width={200} />
                <Progress.Pie progress={0.4} size={50} />
                <Progress.Circle
                    progress={progressNum / 100}
                    showsText
                    size={50}
                    textStyle={{
                        fontSize: 15,
                        fontWeight: "bold",
                    }}
                    // indeterminate={true}
                />
                <Progress.CircleSnail color={["red", "green", "blue"]} />
            </View>
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Button
                    title="Pick an image from camera roll"
                    onPress={pickImage}
                />
                {image && (
                    <Image
                        source={{ uri: image }}
                        style={{ width: 200, height: 200 }}
                    />
                )}
                <Button title="Upload" onPress={UploadImg} />
                {loading ? (
                    <Progress.CircleSnail color={["red", "green", "blue"]} />
                ) : (
                    <Image
                        source={{ uri: downloadImg }}
                        style={{ width: 200, height: 200 }}
                    />
                )}
                <Button title="Download" onPress={DownloadImg} />
            </View>
        </SafeAreaView>
    );
}
