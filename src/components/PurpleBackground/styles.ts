import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";
import { getStatusBarHeight } from 'react-native-iphone-x-helper'


export const styles = StyleSheet.create({
    container1: {
        width: '100%',
        height: 330,
        backgroundColor: theme.colors.purple,
        paddingTop: getStatusBarHeight(),

        
    },
    container2: {
        width: '100%',
        height: 240,
        backgroundColor: theme.colors.purple,
        paddingTop: getStatusBarHeight()
    },
})