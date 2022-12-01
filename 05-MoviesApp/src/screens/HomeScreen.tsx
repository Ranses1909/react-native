import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View,  ActivityIndicator, Dimensions } from 'react-native'
import Carousel from 'react-native-snap-carousel';
import MoviePoster from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import useGetMovies from '../hooks/useGetMovies';
import styles from '../../appTheme'
import {  ScrollView } from 'react-native-gesture-handler';
import HorizontalSlider from '../components/HorizontalSlider';

// to get the dimensions of the screen
const  {width: windowWidth} = Dimensions.get('window')

const HomeScreen = () => {
 const {nowPlaying, popularity, upcoming, topRated, isLoading} =  useGetMovies()
//  const {popular} =  useGetMovies('/popular')
  // console.log(nowPlaying[0].title);
// protecting ourselves from the notch (more for ios)
const {top}=useSafeAreaInsets();



if(isLoading){
  return(
    <View>
      <ActivityIndicator color="blue" size={75}/>
    </View>
  )
}
  return (
    <ScrollView>

    <View style={{marginTop: top +20,}}>
        {/* prop named movie */}
        {/* <MoviePoster movie={nowPlaying[4]}/> */}
        
        <View style={{height:440}}>
        <Carousel
        // data that renderItem is going to grab
        data={nowPlaying}
        // we pass item prop to renderItem which would be equal to nowPlaying[number]
        renderItem={({item}:any)=> <MoviePoster movie={item}/>}
        sliderWidth={windowWidth}
        itemWidth={300}
        />
        </View>

      <HorizontalSlider title='Popular' movies={popularity}/>
      <HorizontalSlider title='TopRated' movies={topRated}/>
      <HorizontalSlider title='UpComing' movies={upcoming}/>

    </View>
           </ScrollView>
  )
}

export default HomeScreen 