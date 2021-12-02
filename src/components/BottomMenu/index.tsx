import React from "react";
import { View } from "react-native";

import { Feather, EvilIcons } from '@expo/vector-icons'

import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

export function BottomMenu() {
    return (
        <View style={styles.container}>
            <Feather name="home" color={theme.colors.teal} size={24} />
            
            <View style={styles.outerCircle}>
                <View style={styles.innerCircle}>
                    <Feather name="shopping-cart" color="#fff" size={30} />
                </View>
            </View>

            <EvilIcons name="chart" color="#fff" size={32} />
        </View>
    )
}