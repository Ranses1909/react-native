import { StyleSheet } from "react-native";

export const colores = {
    primaryColor: "#9368B7",
    secondaryColor: "#037971",
    tertiaryColor: "#3F8EFC"
}

export const styles = StyleSheet.create({
    globalMargin:{
        fontSize:20,
        marginHorizontal: 20
    },
    title:{
        color:'black',
        flexDirection: 'column',
        justifyContent: 'center',
     fontSize:30, 
     marginBottom: 10,
    },
    buttons:{
        backgroundColor:'#037971',
        height: 80, width:'40%',
         alignItems: 'center',
         borderRadius:10, 
         justifyContent: 'center',
        
    },
    avatarContainer:{
        flexDirection: 'row',
        // backgroundColor: 'gray',
        justifyContent: 'center',
    },
    avatar:{
        width:150,
        height:150,
    },
    menuContainer:{
        alignItems: 'center',
        marginHorizontal:20,
        marginVertical:20,
    //  backgroundColor: 'blue',
    },
    menuText:{
        fontWeight: 'bold',
        fontSize:20,
        color: 'black',
    },
    menuBtn:{
        marginVertical:10,
        flexDirection: 'row',
    },


});