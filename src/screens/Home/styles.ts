import { StyleSheet } from "react-native";
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
        height: '25%',
        top: -60,
        borderRadius: 50,
        paddingTop: 18,
        paddingLeft: 30,
        marginBottom: -70
    },
    salesText: {
        fontFamily: theme.fonts.weight500,
        fontSize: 15,
        color: theme.colors.purple,
        marginBottom: -5
    },
    salesCount: {
        fontFamily: theme.fonts.weight900,
        fontSize: 60,
        color: theme.colors.purple
    },
    billsText: {
        fontFamily: theme.fonts.weight400,
        fontSize: 20,
        color: '#888888',
        alignSelf: 'flex-start',
        marginTop: 18,
        marginLeft: 42
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 14
    },
    billsButton: {
        backgroundColor: '#fff',
        height: 130,
        width: 130,
        elevation: 8,
        borderRadius: 50,
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
        marginTop: 26
    },
    outButton: {
        backgroundColor: theme.colors.red,
        width: 194,
        height: 71,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,

        elevation: 8,
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
    bottomMenu: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 73,

        backgroundColor: theme.colors.purple,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,

        paddingHorizontal: 65,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'  
    },
    outerCircle: {
        backgroundColor: theme.colors.background,
        width: 100,
        height: 100,
        borderRadius: 50,

        alignItems: 'center',
        justifyContent: 'center',
        
        marginTop: -80
    },
    innerCircle: {
        backgroundColor: theme.colors.teal,
        width: 72,
        height: 72,
        borderRadius: 36,

        alignItems: 'center',
        justifyContent: 'center'
    }
})