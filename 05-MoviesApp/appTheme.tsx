import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white'
  },
image:{
  flex: 1,
  borderRadius: 18,
},
viewStyle: {

},
imageContainer:{
  width:'100%',
 flex: 1,
   shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 8,
  },
  shadowOpacity: 0.46,
  shadowRadius: 11.14,
  
  elevation: 17,
},
imgContainerDetailScreen:{
  width:'100%',
      overflow: 'hidden',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.46,
      shadowRadius: 11.14,
      elevation: 17,
      borderBottomEndRadius:25,
      borderBottomStartRadius:25,
},
imagePoster:{
  flex:1,
},
// titles on singleMovie
subTitle:{
  // color: "black",
  fontSize:18,
},
title:{
  fontWeight: 'bold',
  color: "black",
  fontSize:25,
}


});

export default styles;