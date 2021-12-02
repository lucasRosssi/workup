import React from "react";
import { View } from "react-native";

import { Feather, EvilIcons } from '@expo/vector-icons'

import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

type BottomMenuProps = {
    screen: string
}

export function BottomMenu({ screen }: BottomMenuProps) {
    return (
        <View style={styles.container}>
            <Feather name="home" color={screen === 'Home' ? theme.colors.teal : '#fff'} size={24} />
            
            <View style={styles.outerCircle}>
                <View style={styles.innerCircle}>
                    <Feather name="shopping-cart" color="#fff" size={30} />
                </View>
            </View>

            <EvilIcons name="chart" color={screen === 'DailyReport' ? theme.colors.teal : "#fff"} size={32} />
        </View>
    )
}