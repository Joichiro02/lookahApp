import React from "react";
import { ActivityIndicator } from "react-native";

import Container from "components/layouts/Container";
import { colors } from "themes";

export default function Loading() {
    return (
        <Container>
            <ActivityIndicator color={colors.Primary} size="large" />
        </Container>
    );
}
