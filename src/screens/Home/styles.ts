import { Platform, StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
    companyProfile: {
        alignItems: 'center'
    },
    companyPicture: {
        width: 100,
        height: 100,
        backgroundColor: '#fff',
        borderRadius: 50,

        alignItems: 'center',
        justifyContent: 'center'
    },
    companyPictureInitials: {
        fontFamily: theme.fonts.weight900,
        fontSize: 32,
        color: theme.colors.teal
    },
    changePicture: {
        backgroundColor: theme.colors.teal,
        width: 30,
        height: 30,
        borderRadius: 15,

        position: 'absolute',
        bottom: 0,
        right: 0,

        alignItems: 'center',
        justifyContent: 'center'
    },
    companyName: {
        fontFamily: theme.fonts.weight400,
        fontSize: 22,
        color: '#fff',
        marginTop: 5
    },
    body: {
        backgroundColor: theme.colors.background,
        flex: 1,
        alignItems: 'center'
    },
    sales: {
        backgroundColor: '#fff',
        width: '93%',
        height: 120,
        top: -60,
        borderRadius: 50,
        paddingTop: '4%',
        paddingLeft: 30,
        marginBottom: -60
    },
    salesText: {
        fontFamily: theme.fonts.weight500,
        fontSize: 15,
        color: theme.colors.purple,
        marginBottom: 5
    },
    salesCount: {
        position: 'absolute',
        left: 30,
        bottom: 3,
        fontFamily: theme.fonts.weight900,
        fontSize: 55,
        color: theme.colors.purple
    },
    billsText: {
        fontFamily: theme.fonts.weight400,
        fontSize: 18,
        color: '#888888',
        alignSelf: 'flex-start',
        marginTop: 15,
        marginLeft: 42
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20
    },
    billsButton: {
        backgroundColor: '#fff',
        height: 120,
        width: 120,
        elevation: 8,
        borderRadius: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 25
    },
    billsButtonText: {
        fontFamily: theme.fonts.weight400,
        fontSize: 20
    },
    outContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20
    },
    outButton: {
        backgroundColor: theme.colors.red,
        width: 194,
        height: 71,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,

        elevation: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        borderRadius: 50
    },
    outButtonText: {
        fontFamily: theme.fonts.weight400,
        fontSize: 20,
        color: '#fff'
    },
    questionMarkButton: {
        backgroundColor: theme.colors.purple,
        width: 26,
        height: 26,
        borderRadius: 13,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10
    },
    questionMark: {
        fontFamily: theme.fonts.weight400,
        fontSize: 15,
        color: '#fff'
    },
})