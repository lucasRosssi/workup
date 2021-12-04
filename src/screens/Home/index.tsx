import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { MaterialIcons, Feather } from '@expo/vector-icons'

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import { TopMenu } from "../../components/TopMenu";
import { BottomMenu } from "../../components/BottomMenu";
import { PurpleBackground } from "../../components/PurpleBackground";
import { useNavigation } from "@react-navigation/core";

export function Home() {
    const navigation = useNavigation()
    const [saleCount, setSaleCount] = useState('70')
    const [company, setCompany] = useState({
        name: 'Delícias de Aicha',
        image: '',
        initials: getCompanyInitials
    })
    const [companyInitials, setCompanyInitials] = useState('')

    function getCompanyInitials() {
        const names = company.name.split(' ')
        let initials = names[0].substring(0, 1).toUpperCase()

        if (names.length > 1) {
            initials += names[names.length - 1].substring(0, 1).toUpperCase()
        }

        return initials
    }

    function handleGoToDailyReport() {
        navigation.navigate('DailyReport' as never)
    }

    function handleGoToStock() {
        navigation.navigate('Stock' as never)
    }


    return (
        <View style={styles.container}>
            <PurpleBackground type="1">
                <TopMenu />                

                <View style={styles.companyProfile}>
                    <View style={styles.companyPicture}>
                        {
                            company.image
                            ? company.image 
                            : <Text style={styles.companyPictureInitials}>
                                {company.initials()}
                              </Text>
                        }
                        
                        <View style={styles.changePicture}>
                            <MaterialIcons name="image" color="#fff" size={20} />
                        </View>
                    </View>
                    <Text style={styles.companyName}>
                        {company.name}
                    </Text>
                </View>
            </PurpleBackground>

            <View style={styles.body}>
                <TouchableOpacity style={styles.sales}>
                    <Text style={styles.salesText}>
                        VENDAS NO DIA
                    </Text>

                    <Text style={styles.salesCount}>
                        {saleCount}
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
                </TouchableOpacity>

                <Text style={styles.billsText}>
                    Contas
                </Text>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.billsButton}>
                        <Feather name="arrow-down-right" color={theme.colors.green} size={32} />
                        <Text style={[styles.billsButtonText, { color: theme.colors.green }]}>
                            Receber
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.billsButton}>
                        <Feather name="arrow-up-right" color={theme.colors.red} size={32} />
                        <Text style={[styles.billsButtonText, { color: theme.colors.red }]}>
                            Pagar
                        </Text>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.outContainer}>
                    <TouchableOpacity style={styles.outButton}>
                        <Text style={styles.outButtonText}>
                            Informar Saída
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.questionMarkButton}>
                        <Text style={styles.questionMark}>?</Text>
                    </TouchableOpacity>
                </View>

                <BottomMenu 
                    screen="Home"
                    goToDailyReport={handleGoToDailyReport}
                    goToStock={handleGoToStock}
                />
            </View>
        </View>
    )
}