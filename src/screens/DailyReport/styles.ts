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
        marginTop: -190,
        width: '93%',
        height: 220,
        backgroundColor: '#fff',
        borderRadius: 50,
        alignItems: 'center',
        paddingHorizontal: 21,
        paddingTop: 20
    },
    inputOutput: {
        flexDirection: 'row',
    },
    dataContainer: {
        flex: 4,
        marginTop: 2
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
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginTop: -30
    },
    inputBar: {
        width: 40,
        height: 100,
        backgroundColor: theme.colors.green,
        marginRight: 30,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50

    },
    outputBar: {
        width: 40,
        height: 100,
        backgroundColor: theme.colors.red,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50
    },
    bar: {
        borderTopWidth: 1,
        borderColor: '#ECECEC',
        width: '70%',
        marginVertical: 15
    },
    separator: {
        width: '100%',
        height: 8,
        backgroundColor: theme.colors.background,
        borderRadius: 10
    },
    profit: {
        marginTop: 7,
        alignItems: 'center'
    },
})