import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    globalMargin:{
        marginHorizontal: 20
    },
    title:{
        flexDirection: 'column',
        justifyContent: 'center',
     fontSize:30, 
     marginBottom: 10,
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
    },
});