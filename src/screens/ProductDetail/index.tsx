import React, { useContext, useState } from "react";
import { Switch, Text, TouchableOpacity, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/core";

import { PurpleBackground } from "../../components/PurpleBackground";
import { TopMenu } from "../../components/TopMenu";
import { MaterialIcons } from '@expo/vector-icons'
import { BottomMenu } from "../../components/BottomMenu";
import { StockContext } from "../../contexts/StockContext";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

export type ProductProps = {
    id: string,
    name: string,
    available: boolean
}

type Params = {
    productSelected: ProductProps
}

export function ProductDetail({ id, name, available }:ProductProps) {
    const navigation = useNavigation()
    const route = useRoute()
    const stockItems = useContext(StockContext)

    const { productSelected } = route.params as Params
    const [isAvailable, setIsAvailable] = useState(productSelected.available)

    function handleBackToTop() {
        navigation.navigate('Home' as never)
    }

    function handleGoToStock() {
        navigation.navigate('Stock' as never)
    }
    
    function toggleAvailable() {
        setIsAvailable(previousState => !previousState)
        productSelected.available = isAvailable
    }

    return (
        <View style={styles.container}>
            <PurpleBackground type="2">
                <TopMenu backToTop={handleBackToTop} />
                <View style={styles.header}>
                    <Text style={styles.title}>
                        Produto
                    </Text>
                </View>
            </PurpleBackground>

            <View style={styles.details}>
                <TouchableOpacity style={styles.imageContainer}>
                    <MaterialIcons name="image" size={120} color={theme.colors.teal} />
                </TouchableOpacity>

                <Text style={styles.productName}>
                    {productSelected.name}
                </Text>
                <Switch 
                    trackColor={{ false: theme.colors.red, true: theme.colors.green }}
                    thumbColor={isAvailable ? theme.colors.green : theme.colors.red}
                    onValueChange={toggleAvailable}
                    value={isAvailable}
                    style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }], marginTop: 10 }}
                />

                <View style={styles.properties}>
                    <View style={styles.bar} />

                    <Text>
                        Código
                    </Text>

                    <View style={styles.bar} />

                    <Text>
                        Preço
                    </Text>

                    <View style={styles.bar} />

                    <Text>
                        Quantidade
                    </Text>

                    <View style={styles.bar} />
                </View>

            </View>

            <BottomMenu 
                screen="ProductDetail"
                goToStock={handleGoToStock}
            />

        </View>
    )
}