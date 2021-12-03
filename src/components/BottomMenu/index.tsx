import React from "react";
import { TouchableOpacity, View } from "react-native";

import { Feather, EvilIcons } from '@expo/vector-icons'

import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

type BottomMenuProps = {
    screen: string,
    goToDailyReport?: () => void,
    goToHome?: () => void
}

export function BottomMenu({ screen, goToDailyReport, goToHome }: BottomMenuProps) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={goToHome}>
                <Feather
                    name="home" 
                    color={screen === 'Home' ? theme.colors.teal : '#fff'} 
                    size={24}             
                />
            </TouchableOpacity>
            
            <View style={styles.outerCircle}>
                <View style={styles.innerCircle}>
                    <Feather name="shopping-cart" color="#fff" size={30} />
                </View>
            </View>

            <TouchableOpacity onPress={goToDailyReport}>
                <EvilIcons
                    name="chart" 
                    color={screen === 'DailyReport' ? theme.colors.teal : "#fff"} 
                    size={32}     
                />
            </TouchableOpacity>
                
        </View>
    )
}