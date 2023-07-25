// ** react and react-native imports
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

// ** libraries imports
import { Dropdown } from "react-native-element-dropdown";
import { Ionicons } from "react-native-vector-icons";

// ** local imports
import { colors } from "themes";

export default function DropdownField({ data, placeholder, value, setValue }) {
    const [isFocus, setIsFocus] = useState(false);

    return (
        <View className="w-full my-2">
            <Dropdown
                style={[
                    styles.dropdown,
                    isFocus && { borderColor: colors.Primary },
                ]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? placeholder : "..."}
                searchPlaceholder="Search..."
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={(item) => {
                    setValue(item.value);
                    setIsFocus(false);
                }}
                renderLeftIcon={() => (
                    <Ionicons
                        style={styles.icon}
                        color={isFocus ? colors.Primary : "black"}
                        name="list"
                        size={20}
                    />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    dropdown: {
        height: 50,
        borderColor: "gray",
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: "absolute",
        backgroundColor: "white",
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});
