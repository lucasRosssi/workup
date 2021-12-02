import React from "react";
import { ScrollView, Text, View } from "react-native";
import { theme } from "../../global/styles/theme";

import { Feather } from '@expo/vector-icons'

import { styles } from "./styles";

export function InputOutputDetails() {
    return (
        <View style={styles.container}>
            <View style={styles.detailsHeader}>
                <Text style={[styles.dataText, { color: theme.colors.green }]}>
                    Entrada
                </Text>

                <View style={styles.navButton}>
                    <Feather name="chevron-right" color="#fff" size={30} />
                </View>
            </View>

            <View style={styles.detailsContent}>
                <ScrollView 
                    horizontal 
                    persistentScrollbar
                    style={styles.itemsScroll} 
                >
                    <View style={styles.itemContainer}>
                        <Text style={[styles.dataText, { color: theme.colors.green }]}>
                            Dinheiro    
                        </Text>

                        <View style={styles.bar} />

                        <Text style={styles.dataValue}>
                            R$ 900,00    
                        </Text>    
                    </View>

                    <View style={styles.itemContainer}>
                        <Text style={[styles.dataText, { color: theme.colors.green }]}>
                            Cartão de Dédito   
                        </Text>

                        <View style={styles.bar} />

                        <Text style={styles.dataValue}>
                            R$ 230,00    
                        </Text>    
                    </View>

                    <View style={styles.itemContainer}>
                        <Text style={[styles.dataText, { color: theme.colors.green }]}>
                            Pix   
                        </Text>

                        <View style={styles.bar} />

                        <Text style={styles.dataValue}>
                            R$ 670,00    
                        </Text>    
                    </View>  
                </ScrollView>

                <View style={styles.totalContainer}>
                    <Text style={[styles.dataText, { color: theme.colors.green }]}>
                        Total Entrada    
                    </Text>
                    <Text style={styles.dataValue}>
                        R$ 900,00    
                    </Text>    
                </View>                    
            </View>

        </View>
    )
}