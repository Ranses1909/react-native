import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    fondo:{
        flex:1,
        backgroundColor: 'black',
        paddingHorizontal: 10,
        justifyContent: 'flex-end'
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
    btnFirstRow:{
        height: 60,
        width: 60,
        backgroundColor: 'gray',
        borderRadius:50,
    },
    btnContent:{
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
        // top:5,
        alignSelf: 'center',
    },
});
export default styles;