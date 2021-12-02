import React, { ReactNode } from "react";
import { View } from "react-native";

import { styles } from "./styles";

type PurpleBackgroundProps = {
    children: ReactNode
}

export function PurpleBackground({ children }: PurpleBackgroundProps) {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}