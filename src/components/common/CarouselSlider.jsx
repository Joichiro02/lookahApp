import { Dimensions } from "react-native";

import Carousel from "react-native-reanimated-carousel";

export default function CarouselSlider({
    data,
    renderItem,
    padding = 0,
    dinaminator = 2,
}) {
    const { width, height } = Dimensions.get("window");
    return (
        <Carousel
            loop
            width={width - padding}
            height={height / dinaminator}
            autoPlay={true}
            data={data}
            scrollAnimationDuration={2000}
            onSnapToItem={(index) => console.log("current index:", index)}
            renderItem={renderItem}
        />
    );
}
