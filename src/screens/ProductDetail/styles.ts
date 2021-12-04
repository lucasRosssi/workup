import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    header: {
        alignItems: 'center'
    },
    title: {
        fontFamily: theme.fonts.weight400,
        fontSize: 22,
        color: '#fff',
        marginTop: 5
    },
    imageContainer: {
        height: 170,
        width: 170,
        backgroundColor: '#fff',
        borderRadius: 50,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -85
    },
    details: {
        flex: 1,
        width: '100%',
        backgroundColor: theme.colors.background,
        alignItems: 'center'
    },
    productName: {
        fontFamily: theme.fonts.weight400,
        fontSize: 18,
        marginTop: 10
    },
    properties: {
        width: '93%'
    },
    bar: {
        borderTopWidth: 1,
        borderColor: '#DDDDDD',
        width: '100%',
        marginVertical: 20
    }
})