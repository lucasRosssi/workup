import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
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
    searchContainer: {
        flexDirection: 'row',
        height: 50,
        width: '93%',
        backgroundColor: '#4C0BB0',
        borderRadius: 50,
        marginTop: 15,
        marginBottom: 5,
        alignItems: 'center',
        paddingHorizontal: 14
    },
    searchInput: {
        flex: 1,
        height: 50,
        color: '#fff',
        marginLeft: 10
    },
    flatListContainer: {
        flexGrow: 1,
        width: '93%',
        
    },
    itemContainer: {
        backgroundColor: '#fff',
        height: 60,
        borderRadius: 50,
        flexDirection: 'row',
        
        alignItems: 'center',
        marginTop: 10,
        paddingHorizontal: 20
    },
    itemName: {
        fontFamily: theme.fonts.weight400,
        fontSize: 18
    }
})