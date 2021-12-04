import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        marginTop: 15
    },
    title: {
        fontFamily: theme.fonts.weight900,
        fontSize: 25,
        color: '#fff',

    }
})