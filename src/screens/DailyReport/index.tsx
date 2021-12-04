import React, { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/core";
import { Text, View } from "react-native";

import { BottomMenu } from "../../components/BottomMenu";
import { InputOutputDetails } from "../../components/InputOutputDetails";
import { PurpleBackground } from "../../components/PurpleBackground";
import { TopMenu } from "../../components/TopMenu";

import { BalanceContext } from "../../contexts/BalanceContext";

import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

export function DailyReport() {
    const navigation = useNavigation()

    const context = useContext(BalanceContext)

    function handleBackToTop() {
        navigation.navigate('Home' as never)
    }

    function handleGoToHome() {
        navigation.navigate('Home' as never)
    }

    function handleGoToStock() {
        navigation.navigate('Stock' as never)
    }

    function calculateTotalInput() {
        let total = context.input.reduce(getTotal, 0)
        function getTotal(total: number, item: {id: string, name: string, value: number}) {
            return total + (item.value)
        }
        return total     
    }

    function calculateTotalOutput() {
        let total = context.output.reduce(getTotal, 0)
        function getTotal(total: number, item: {id: string, name: string, value: number}) {
            return total + (item.value)
        }
        return total     
    }

    const totalInput = calculateTotalInput()
    const totalOutput = calculateTotalOutput()

    return (
        <View style={styles.container}>
            <PurpleBackground type="1">
                <TopMenu backToTop={handleBackToTop}/>

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
                            R$ {totalInput.toFixed(2).replace('.', ',')}
                        </Text>
                        <View style={styles.bar}></View>
                        <Text style={[styles.dataText, { color: theme.colors.red }]}>
                            Saída
                        </Text>
                        <Text style={styles.dataValue}>
                            R$ {totalOutput.toFixed(2).replace('.', ',')}
                        </Text>
                    </View>

                    <View style={styles.chartContainer}>
                        <View style={[
                            styles.inputBar,
                            { height: totalInput > totalOutput ? 140 : 140 * (totalInput / totalOutput)}]}></View>
                        <View style={[
                            styles.outputBar,
                            { height: totalOutput > totalInput ? 140 : 140 * (totalOutput / totalInput) }]}></View>
                    </View>
                </View>

                <View style={styles.separator}></View>

                <View style={styles.profit}>
                    <Text style={[styles.dataText, { color: theme.colors.green }]}>
                        Lucro
                    </Text>
                    <Text style={styles.dataValue}>
                        R$ {(totalInput - totalOutput).toFixed(2).replace('.', ',')}
                    </Text>
                </View>
            </View>

            <InputOutputDetails />

            <BottomMenu 
                screen="DailyReport" 
                goToHome={handleGoToHome}
                goToStock={handleGoToStock}
            />

        </View>
    )
}