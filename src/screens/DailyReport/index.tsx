import { useNavigation } from "@react-navigation/core";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { BottomMenu } from "../../components/BottomMenu";
import { InputOutputDetails } from "../../components/InputOutputDetails";
import { PurpleBackground } from "../../components/PurpleBackground";
import { TopMenu } from "../../components/TopMenu";
import { theme } from "../../global/styles/theme";

import { styles } from "./styles";

export function DailyReport() {
    const navigation = useNavigation()

    function handleGoToHome() {
        navigation.navigate('Home' as never)
    }

    return (
        <View style={styles.container}>
            <PurpleBackground>
                <TopMenu />

                <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                        Relatório Diário
                    </Text>
                </View>
            </PurpleBackground>
            <View style={styles.profitContainer}>
                <View style={styles.inputOutput}>
                    <View style={styles.dataContainer}>
                        <Text style={[styles.dataText, { color: theme.colors.green }]}>
                            Entrada
                        </Text>
                        <Text style={styles.dataValue}>
                            R$ 900,00
                        </Text>

                        <Text style={[styles.dataText, { color: theme.colors.red }]}>
                            Saída
                        </Text>
                        <Text style={styles.dataValue}>
                            R$ 450,00
                        </Text>
                    </View>

                    <View style={styles.chartContainer}>

                    </View>
                </View>

                <View style={styles.separator}></View>

                <View style={styles.profit}>
                    <Text style={[styles.dataText, { color: theme.colors.green }]}>
                        Lucro
                    </Text>
                    <Text style={styles.dataValue}>
                        R$ 450,00
                    </Text>
                </View>
            </View>

            <InputOutputDetails />


            <BottomMenu 
                screen="DailyReport" 
                goToHome={handleGoToHome}
            />

        </View>
    )
}