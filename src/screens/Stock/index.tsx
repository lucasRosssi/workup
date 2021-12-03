import React, { useState } from "react";
import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/core";

import { BottomMenu } from "../../components/BottomMenu";
import { PurpleBackground } from "../../components/PurpleBackground";
import { TopMenu } from "../../components/TopMenu";
import { Octicons, MaterialCommunityIcons, Ionicons, Entypo, Feather } from '@expo/vector-icons'

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import { ProductProps } from "../ProductDetail";

export function Stock() {
    const navigation = useNavigation()
    const [product, setProduct] = useState<ProductProps[]>([
        {
            id: '1',
            name: 'Água Mineral',
            available: true
        },
        {
            id: '2',
            name: 'Esfiha de Carne',
            available: true
        },
        {
            id: '3',
            name: 'Suco de Maracujá',
            available: false
        },
        {
            id: '4',
            name: 'Água Mineral',
            available: true
        },
        {
            id: '5',
            name: 'Esfiha de Carne',
            available: true
        },
        {
            id: '6',
            name: 'Suco de Maracujá',
            available: false
        }
    ])

    function handleBackToTop() {
        navigation.navigate('Home' as never)
    }

    function handleProductDetail(productSelected: ProductProps) {
        navigation.navigate('ProductDetail' as never, { productSelected } as never)
    }

    return (
        <View style={styles.container}>
            <PurpleBackground type="2">
                <TopMenu backToTop={handleBackToTop}/>

                <View style={styles.header}>
                    <Text style={styles.title}>
                        Estoque
                    </Text>

                    <View style={styles.searchContainer}>
                        <Octicons name="search" size={24} color="#320773" />
                        <TextInput
                            style={styles.searchInput} 
                            placeholder="Nome ou código do produto"
                            placeholderTextColor="#D8D8D8"
                            
                        />
                        <MaterialCommunityIcons name="barcode-scan" size={24} color="#320773" />
                    </View>

                    <Ionicons name="options-outline" size={35} color="#fff" />

                </View>
            </PurpleBackground>

            <View style={styles.flatListContainer}>
                <FlatList 
                    data={product}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity 
                                style={styles.itemContainer}
                                onPress={() => handleProductDetail(item) }
                            >
                                <Entypo 
                                    name="dot-single" 
                                    size={32} 
                                    color={item.available ? theme.colors.green : theme.colors.red}
                                />

                                <Text style={styles.itemName}>
                                    {item.name}
                                </Text>

                                <Feather 
                                    name="chevron-right" 
                                    size={32} 
                                    color={theme.colors.purple} 
                                    style={{position: 'absolute', right: 15}}
                                />
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>


            <BottomMenu 
                screen="Stock"
            />
        </View>
    )
}