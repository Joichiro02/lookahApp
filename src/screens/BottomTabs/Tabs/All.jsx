import React, { useState } from "react";
import {
  Button,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import ModalCont from "components/layouts/ModalCont";

import Chives from "assets/chives.png";
import VoucherBg from "assets/VoucherBg.png";
import Kwinsole from "assets/Kwinsole.png";
import Illumina from "assets/Illumina.png";
import Ribbon from "assets/ribbon.png";

const data = [
  {
    img: Chives,
    title: "10% off",
    subtitle: "Chives Bistro & Market",
  },
  {
    img: Kwinsole,
    title: "Free refill",
    subtitle:
      "Free one refill for every purchase of iced or hot coffee everyday from 10 AM to 12 NN",
  },
  {
    img: Illumina,
    title: "₱999",
    subtitle:
      "Two Wizards Magical Passes at Tales of Illumina Ever Commonwealth",
    promo: {
      save: "save 75%",
      price: "₱3998",
    },
  },
];

const VoucherComponent = ({ item, setOpen }) => {
  return (
    <TouchableOpacity onPress={() => setOpen((prev) => !prev)}>
      <ImageBackground
        className="relative items-center flex-row space-x-6 my-2"
        source={VoucherBg}
        style={{ height: 110, width: "100%" }}
        resizeMode="contain"
      >
        {item?.promo && (
          <View className="absolute right-1 top-2 items-end">
            <ImageBackground
              className="h-4 w-16 items-center justify-center"
              source={Ribbon}
              resizeMode="contain"
            >
              <Text className="text-white font-semibold mr-1 uppercase">
                {item?.promo.save}
              </Text>
            </ImageBackground>
            <Text className="text-xs line-through text-[#898989] mr-1">
              {item?.promo.price}
            </Text>
          </View>
        )}

        <View className="ml-6 w-28 items-center justify-center">
          <Image
            className="h-20 w-24"
            source={item.img}
            // style={{ height: 80, width: 80 }}
            resizeMode="contain"
          />
        </View>
        <View className="w-44">
          <Text className="font-bold text-2xl text-[#FF0844] uppercase">
            {item.title}
          </Text>
          <Text className="font-medium">{item.subtitle}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default function All() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <View className="bg-white flex-1 px-5 py-2">
        {data.map((item, index) => (
          <VoucherComponent item={item} key={index} setOpen={setOpen} />
        ))}
      </View>

      <ModalCont open={open} setOpen={setOpen}>
        <View className="h-5/6 bg-white rounded-tl-3xl rounded-tr-3xl">
          <Text>Hello!</Text>

          <Button title="Hide modal" onPress={() => setOpen((prev) => !prev)} />
        </View>
      </ModalCont>
    </>
  );
}
