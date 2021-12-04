import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 65,

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
        width: 90,
        height: 90,
        borderRadius: 45,

        alignItems: 'center',
        justifyContent: 'center',
        
        marginTop: -70
    },
    innerCircle: {
        backgroundColor: theme.colors.teal,
        width: 62,
        height: 62,
        borderRadius: 31,

        alignItems: 'center',
        justifyContent: 'center'
    }
})