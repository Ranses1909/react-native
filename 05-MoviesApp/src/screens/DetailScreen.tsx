import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { View, Text, Image, Dimensions, ScrollView, ActivityIndicator } from 'react-native'
import styles from '../../appTheme'
// import { Movies } from '../interfaces/movieDBInterface'
import { RootStackParams } from '../navigation/Navigator'
import Icon from 'react-native-vector-icons/Ionicons';
import useMovieDetails from '../hooks/useMovieDetails';
import MovieDetails from '../components/MovieDetails';

interface Props extends StackScreenProps<RootStackParams,'DetailScreen'>{}

const screenHeight = Dimensions.get('screen').height

const DetailScreen = ({route}: Props) => {
  // ordering tp to try this params as Movies
  const movie = route.params
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  console.log(movie.id)
  // comming from custom hook UseMovieDetails
  const {isLoading,fullMovie,cast} = useMovieDetails(movie.id)
  if(isLoading){
    isLoading
  }
  return (
    <ScrollView>

    <View style={{
      ...styles.imgContainerDetailScreen,
      height: screenHeight * 0.7,
    }}>
    {/* this is how we show images */}
  < Image source={{uri}}
  style={styles.imagePoster}
  />
  </View>

  <View style={styles.imageContainer}>
   <Text style={styles.subTitle}> {movie.original_title}</Text>
   <Text style={styles.title}> {movie.title}</Text>
  </View>


  { 
  isLoading 
  ?  <ActivityIndicator size={30} color="gray" style={{marginTop:20}}/>
  // ! means trust me i will send the data for u
   : <MovieDetails fullMovie={fullMovie!} cast={cast}/>
}

  </ScrollView>
  )
}

export default DetailScreen