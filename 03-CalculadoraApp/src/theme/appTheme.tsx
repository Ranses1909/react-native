import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        backgroundColor: 'black',
    },
    container: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'flex-end',
        marginHorizontal: 10,
    },
    results:{
        fontSize:60,
        color: 'white',
        textAlign: 'right',
    },
    previousResult:{
        fontSize:30,
        color: 'rgb(255,255,255,0,5)',
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
        backgroundColor: 'gray',
        borderRadius:50,
        justifyContent: 'center',
        marginHorizontal:10,
    },
    //   text:{
    //     // marginHorizontal: 10,
    //     justifyContent: 'space-between',
    //   },
    btnContent:{
        textAlign: 'center',
        color: 'white',
        fontSize: 40,
        padding: 10,
        fontWeight: 'bold',
        // top:5,
        // alignSelf: 'center',
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10
    },
});
export default styles;