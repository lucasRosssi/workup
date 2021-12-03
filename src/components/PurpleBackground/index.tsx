import React, { ReactNode } from "react";
import { View } from "react-native";

import { styles } from "./styles";

type PurpleBackgroundProps = {
    children: ReactNode,
    type: string
}

export function PurpleBackground({ children, type }: PurpleBackgroundProps) {
    return (
        <>
            {
                type === '1'
                ? 
                <View style={styles.container1}>
                    {children}
                </View>
                :
                <View style={styles.container2}>
                    {children}
                </View>
            }
        </>
    )
}