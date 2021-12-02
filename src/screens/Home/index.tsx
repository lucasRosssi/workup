import React from "react";
import { Text, View } from "react-native";

import { MaterialIcons, Feather, EvilIcons } from '@expo/vector-icons'

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

export function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.heading}>
                <View style={styles.header}>
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

                <View style={styles.companyProfile}>
                    <View style={styles.companyPicture}>
                        <Text style={styles.companyPictureInitials}>
                            DA
                        </Text>
                        <View style={styles.changePicture}>
                            <MaterialIcons name="image" color="#fff" size={20} />
                        </View>
                    </View>
                    <Text style={styles.companyName}>
                        Delícias de Aicha
                    </Text>
                </View>
            </View>

            <View style={styles.body}>
                <View style={styles.sales}>
                    <Text style={styles.salesText}>
                        VENDAS NO DIA
                    </Text>

                    <Text style={styles.salesCount}>
                        70
                    </Text>

                    <MaterialIcons 
                        name="chevron-right" 
                        color={theme.colors.purple} 
                        size={32} 
                        style={{
                            position: 'absolute',
                            right: 30,
                            bottom: 20
                        }}
                    />
                </View>

                <Text style={styles.billsText}>
                    Contas
                </Text>

                <View style={styles.buttonContainer}>
                    <View style={styles.billsButton}>
                        <Feather name="arrow-down-right" color={theme.colors.green} size={32} />
                        <Text style={[styles.billsButtonText, { color: theme.colors.green }]}>
                            Receber
                        </Text>
                    </View>

                    <View style={styles.billsButton}>
                        <Feather name="external-link" color={theme.colors.red} size={32} />
                        <Text style={[styles.billsButtonText, { color: theme.colors.red }]}>
                            Pagar
                        </Text>
                    </View>
                </View>
                
                <View style={styles.outContainer}>
                    <View style={styles.outButton}>
                        <Text style={styles.outButtonText}>
                            Informar Saída
                        </Text>
                    </View>

                    <View style={styles.questionMarkButton}>
                        <Text style={styles.questionMark}>?</Text>
                    </View>
                </View>

                <View style={styles.bottomMenu}>
                    <Feather name="home" color={theme.colors.teal} size={24} />
                    
                    <View style={styles.outerCircle}>
                        <View style={styles.innerCircle}>
                            <Feather name="shopping-cart" color="#fff" size={30} />
                        </View>
                    </View>

                    <EvilIcons name="chart" color="#fff" size={32} />
                </View>
            </View>
        </View>
    )
}