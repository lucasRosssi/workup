import React from "react";
import { Text, View } from "react-native";

import { MaterialIcons } from '@expo/vector-icons'

import { styles } from "./styles";

export function TopMenu() {
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

                    <Text style={styles.title}>
                        WORKUP
                    </Text>

                </View>
    )
}