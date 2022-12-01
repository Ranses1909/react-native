import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { View, Text, Image, Dimensions, ScrollView } from 'react-native'
import styles from '../../appTheme'
// import { Movies } from '../interfaces/movieDBInterface'
import { RootStackParams } from '../navigation/Navigator'
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends StackScreenProps<RootStackParams,'DetailScreen'>{}

const screenHeight = Dimensions.get('screen').height

const DetailScreen = ({route}: Props) => {
  // ordering tp to try this params as Movies
  const movie = route.params
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  
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

  <View style={styles.imageContainer}>
  <Icon
  name="star-outline"
  color="primary"
  size={30}
  />
  </View>
  </ScrollView>
  )
}

export default DetailScreen