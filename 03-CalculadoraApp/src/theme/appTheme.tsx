import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        backgroundColor: 'black',
    },
    container: {
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: 'flex-end',
    },
    results:{
        fontSize:60,
        color: 'white',
        textAlign: 'right',
    },
    previousResult:{
        fontSize:30,
        color: 'gray',
        textAlign: 'right',
    },
    //  largeBtn:{
    //     width: 120,
    //     backgroundColor: 'gray',
    //     borderRadius:50,
    // },
    btn:{
        height: 80,
        width: 80,
        backgroundColor: '#2D2D2D',
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10
    },
    btnContent:{
        fontFamily:'bold',
        textAlign: 'center',
        padding: 10,
        fontSize: 40,
        color: 'white',
        fontWeight: '300'
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10
    },
});
export default styles;