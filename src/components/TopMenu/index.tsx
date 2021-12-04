import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";

import { MaterialIcons, Feather } from '@expo/vector-icons'

import { styles } from "./styles";

type TopMenuProps = {
    backToTop?: () => void
}

export function TopMenu({ backToTop }: TopMenuProps) {
    return (
        <View style={styles.container}>
                    <MaterialIcons 
                        name="menu" 
                        color="#FFF" 
                        size={32} 
                        style={{
                            position: 'absolute',
                            left: 13,
                        }} 
                    />

                    <TouchableOpacity activeOpacity={.9} onPress={backToTop}>
                        <Text style={styles.title}>
                            WORKUP
                        </Text>
                    </TouchableOpacity>

                </View>
    )
}