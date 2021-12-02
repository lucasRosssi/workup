import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: theme.colors.background,
        alignItems: 'center'
    },
    titleContainer: {
        alignItems: 'center'
    },
    title: {
        fontFamily: theme.fonts.weight400,
        fontSize: 22,
        color: '#fff',
        marginTop: 5
    },
    profitContainer: {
        marginTop: -160,
        width: '93%',
        height: '30%',
        backgroundColor: '#fff',
        borderRadius: 50,
        alignItems: 'center',
        paddingHorizontal: 21,
        paddingTop: 32
    },
    inputOutput: {
        flexDirection: 'row'
    },
    dataContainer: {
        flex: 4
    },
    dataText: {
        fontFamily: theme.fonts.weight400,
        fontSize: 18,
    },
    dataValue: {
        fontFamily: theme.fonts.weight700,
        fontSize: 18
    },
    chartContainer: {
        flex: 5,
    },
    bar: {
        borderTopWidth: 1,
        borderColor: '#ECECEC',
        width: '70%',
        marginVertical: 8
    },
    separator: {
        width: '100%',
        height: 8,
        backgroundColor: theme.colors.background,
        borderRadius: 10
    },
    profit: {
        marginTop: 10,
        alignItems: 'center'
    },
})