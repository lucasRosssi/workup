import React from "react";
import { Alert, TouchableOpacity, View } from "react-native";

import { Feather, EvilIcons } from '@expo/vector-icons'

import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

type BottomMenuProps = {
    screen: string,
    goToDailyReport?: () => void,
    goToHome?: () => void
    goToStock?: () => void
}

export function BottomMenu({ screen, goToDailyReport, goToHome, goToStock }: BottomMenuProps) {
    return (
        <>
            {
                screen === 'Home' &&
                <View style={styles.container}>
                    <TouchableOpacity onPress={goToHome}>
                        <Feather
                            name="home" 
                            color={theme.colors.teal} 
                            size={24}             
                        />
                    </TouchableOpacity>
                    
                    <View style={styles.outerCircle}>
                        <TouchableOpacity 
                            style={styles.innerCircle}
                            onPress={goToStock}
                        >
                            <Feather name="shopping-cart" color="#fff" size={30} />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity onPress={goToDailyReport}>
                        <EvilIcons
                            name="chart" 
                            color="#fff" 
                            size={32}     
                        />
                    </TouchableOpacity>      
                </View>
            }
            {
                screen === 'DailyReport' &&
                <View style={styles.container}>
                    <TouchableOpacity onPress={goToHome}>
                        <Feather
                            name="home" 
                            color="#fff" 
                            size={24}             
                        />
                    </TouchableOpacity>
                    
                    <View style={styles.outerCircle}>
                        <TouchableOpacity 
                            style={styles.innerCircle}
                            onPress={goToStock}
                        >
                            <Feather name="shopping-cart" color="#fff" size={30} />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity onPress={goToDailyReport}>
                        <EvilIcons
                            name="chart" 
                            color={theme.colors.teal} 
                            size={32}     
                        />
                    </TouchableOpacity>      
                </View>
            }
            {
                screen === 'Stock' &&
                <View style={styles.container}>
                    <TouchableOpacity>
                        <Feather
                            name="grid" 
                            color="#fff" 
                            size={24}             
                        />
                    </TouchableOpacity>
                    
                    <View style={styles.outerCircle}>
                        <TouchableOpacity style={styles.innerCircle}>
                            <Feather name="plus" color="#fff" size={45} />
                        </TouchableOpacity>
                    </View>

                    <EvilIcons
                            name="chart" 
                            color={theme.colors.purple} 
                            size={32}     
                    />     
                </View>
            }
            {
                screen === "ProductDetail" &&
                <View style={styles.container}>
                    <TouchableOpacity>
                        <Feather
                            name="plus" 
                            color="#fff" 
                            size={32}             
                        />
                    </TouchableOpacity>
                    
                    <View style={styles.outerCircle}>
                        <TouchableOpacity style={styles.innerCircle}>
                            <Feather name="edit" color="#fff" size={32} />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity onPress={() => Alert.alert(
                            'Remover Produto', 
                            'Tem certeza que deseja remover esse produto?',
                            [{
                                text: 'Não'
                            }, 
                            {
                                text: 'Sim', 
                                onPress: goToStock
                            }]
                        )}
                    >
                        <EvilIcons
                                name="trash" 
                                color="#fff" 
                                size={40}     
                        />              
                    </TouchableOpacity>   
                </View>
            }
            
        </>
    )
}