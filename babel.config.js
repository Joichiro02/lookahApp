module.exports = function (api) {
    api.cache(true);
    return {
        presets: ["babel-preset-expo"],
        plugins: [
            "nativewind/babel",
            "react-native-reanimated/plugin",
            [
                "module:react-native-dotenv",
                {
                    moduleName: "react-native-dotenv",
                    verbose: true,
                },
            ],
            [
                "module-resolver",
                {
                    alias: {
                        assets: "./src/assets",
                        components: "./src/components",
                        config: "./src/config",
                        features: "./src/features",
                        navigations: "./src/navigations",
                        screens: "./src/screens",
                        themes: "./src/themes",
                    },
                },
            ],
        ],
    };
};
