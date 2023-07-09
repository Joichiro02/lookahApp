module.exports = function (api) {
    api.cache(true);
    return {
        presets: ["babel-preset-expo"],
        plugins: [
            "nativewind/babel",
            [
                "module-resolver",
                {
                    alias: {
                        assets: "./src/assets",
                        components: "./src/components",
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
