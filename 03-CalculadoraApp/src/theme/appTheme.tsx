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
    btn:{
        height: 60,
        width: 60,
        backgroundColor: 'gray',
        borderRadius:50,
    },
    largeBtn:{
        width: 120,
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
    row:{
      flexDirection:'row',  
      marginBottom: 18,
      justifyContent: 'flex-start',
    },
});
export default styles;