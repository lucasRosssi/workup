import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
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