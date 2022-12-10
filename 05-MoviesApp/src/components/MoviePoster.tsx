import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from '../../appTheme';
import {Movies}from '../interfaces/movieDBInterface'
import DetailScreen from '../screens/DetailScreen'
import { Cast } from '../interfaces/movieDBInterface';

// we make an interface to specify type of props coming from homeScreen, and we want to receive the whole movie
interface Props {
  cast?: Cast[]
movie?: Movies;
height?: number;
width?: number;
}

// we use this custom component in HomeScreen
// it receives a prop 
const MoviePoster = ({movie, height=420, width=300}:Props) => {
    // in case that you forget read here: https://developers.themoviedb.org/3/getting-started/images
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    
    const navigation = useNavigation();
 
  return (
  <TouchableOpacity 
  onPress={() => navigation.navigate('DetailScreen', movie)}
  activeOpacity={0.8} 
  style={{ height,width, marginHorizontal:5, paddingBottom:20, paddingHorizontal:8, } }>
   
        
        <View style={styles.imageContainer}>
          {/* this is how we show images */}
        < Image source={{uri}}
        style={styles.image}
         />
        </View>

  </TouchableOpacity> 
  )
}

export default MoviePoster