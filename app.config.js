const IS_DEV = process.env.APP_VARIANT === "development";
const IS_PRODUCTION = process.env.APP_VARIANT === "production";

console.log(IS_DEV);

export default {
  name: IS_DEV ? "lookahApp (Dev)" : "Lookah",
  slug: "lookahApp",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./src/assets/ApplicationLogo.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./src/assets/InitialLogo.png",
    resizeMode: "contain",
    backgroundColor: "#FF0844",
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./src/assets/AppLogoColored.png",
      backgroundColor: "#ffffff",
    },
    package: "com.joichiro02.lookahApp",
  },
  web: {
    favicon: "./src/assets/AppLogoColored.png",
  },
  extra: {
    eas: {
      projectId: "c0732b28-cbb7-486a-aa11-82dd2a91eed8",
    },
  },
  plugins: [
    [
      "expo-image-picker",
      {
        photosPermission:
          "The app accesses your photos to let you share them with your friends.",
      },
    ],
  ],
};