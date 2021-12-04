import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: '93%',
        height: '35%',
        backgroundColor: '#fff',
        marginTop: 12,

        elevation: 10,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
    },
    detailsHeader: {
        flex: 2,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    navButtonRight: {
        position: 'absolute', 
        right: 30,
        backgroundColor: theme.colors.red,
        width: 40,
        height: 40,
        borderRadius: 20,

        alignItems: 'center',
        justifyContent: 'center'
    },
    navButtonLeft: {
        position: 'absolute', 
        left: 30,
        backgroundColor: theme.colors.green,
        width: 40,
        height: 40,
        borderRadius: 20,

        alignItems: 'center',
        justifyContent: 'center'
    },
    detailsContent: {
        flex: 7,
        width: '100%',
        backgroundColor: theme.colors.green,
        alignItems: 'center',
        paddingVertical: 15        
    },
    totalContainer: {
        backgroundColor: '#fff',
        width: 190,
        height: 50,
        marginTop: 18,

        borderRadius: 50,

        alignItems: 'center',
        justifyContent: 'center'
    },
    itemsScroll: {
        marginTop: 10,
        paddingLeft: 20,
        paddingTop: 5,
        height: 120,
    },
    itemContainer: {
        backgroundColor: '#fff',
        width: 220,
        height: 100,
        marginLeft: 20,

        borderRadius: 50,

        alignItems: 'center',
        justifyContent: 'center'
    },
    dataText: {
        fontFamily: theme.fonts.weight400,
        fontSize: 18,
    },
    dataValue: {
        fontFamily: theme.fonts.weight700,
        fontSize: 18
    },
    bar: {
        borderTopWidth: 1,
        borderColor: '#ECECEC',
        width: '70%',
        marginVertical: 8
    }
})