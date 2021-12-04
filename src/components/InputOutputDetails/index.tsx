import React, { useState, useContext } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { BalanceContext } from "../../contexts/BalanceContext";

import { Feather } from '@expo/vector-icons'

import { theme } from "../../global/styles/theme";
import { styles } from "./styles";



export function InputOutputDetails() {
    const [tab, setTab] = useState('Input')
    const context = useContext(BalanceContext)
    
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
        <>
            {
                tab === 'Input'
                ? 
                <View style={styles.container}>
                    <View style={styles.detailsHeader}>
                        <Text style={[styles.dataText, { color: theme.colors.green }]}>
                            Entrada
                        </Text>
        
                        <TouchableOpacity 
                            onPress={() => setTab('Output')}
                            style={styles.navButtonRight}
                        >
                            <Feather name="chevron-right" color="#fff" size={30} />
                        </TouchableOpacity>
                    </View>
        
                    <View style={styles.detailsContent}>
                        <FlatList
                            data={context.input}
                            keyExtractor={item => item.id}
                            horizontal
                            persistentScrollbar
                            renderItem={({ item }) => {
                                return (
                                    <View style={styles.itemContainer}>
                                        <Text style={[styles.dataText, { color: theme.colors.green }]}>
                                            {item.name}    
                                        </Text>
        
                                        <View style={styles.bar} />
        
                                        <Text style={styles.dataValue}>
                                            R$ {item.value.toFixed(2).replace('.', ',')}    
                                        </Text>    
                                    </View>
                                )
                            }}
                        />
        
                        <View style={styles.totalContainer}>
                            <Text style={[styles.dataText, { color: theme.colors.green }]}>
                                Total Entrada    
                            </Text>
                            <Text style={styles.dataValue}>
                                R$ {totalInput.toFixed(2).replace('.', ',')}
                            </Text>    
                        </View>                    
                    </View>
                </View>

                :

                <View style={styles.container}>
                    <View style={styles.detailsHeader}>
                        <Text style={[styles.dataText, { color: theme.colors.red }]}>
                            Saída
                        </Text>

                        <TouchableOpacity 
                            onPress={() => setTab('Input')}
                            style={styles.navButtonLeft}
                        >
                            <Feather name="chevron-left" color="#fff" size={30} />
                        </TouchableOpacity>
                    </View>

                    <View style={[styles.detailsContent, { backgroundColor: theme.colors.red }]}>
                        <FlatList
                            data={context.output}
                            keyExtractor={item => item.id}
                            horizontal
                            persistentScrollbar
                            renderItem={({ item }) => {
                                return (
                                    <View style={styles.itemContainer}>
                                        <Text style={[styles.dataText, { color: theme.colors.red }]}>
                                            {item.name}    
                                        </Text>

                                        <View style={styles.bar} />

                                        <Text style={styles.dataValue}>
                                            R$ {item.value.toFixed(2).replace('.', ',')}    
                                        </Text>    
                                    </View>
                                )
                            }}
                        />

                        <View style={styles.totalContainer}>
                            <Text style={[styles.dataText, { color: theme.colors.red }]}>
                                Total Saída    
                            </Text>
                            <Text style={styles.dataValue}>
                                R$ {totalOutput.toFixed(2).replace('.', ',')}
                            </Text>    
                        </View>                    
                    </View>
                </View>
            }
        </>
    )
}