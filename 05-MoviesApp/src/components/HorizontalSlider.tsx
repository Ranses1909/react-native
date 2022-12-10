import React from 'react'
import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import styles from '../../appTheme';
import { Cast, Movies } from '../interfaces/movieDBInterface';
import MoviePoster from './MoviePoster';

interface Props {
  cast?: Cast[];
    movies?: Movies[];
    title?: string;
}
// we used this custom component in homeScreen
// nowPlaying lo recibimos como movies
const HorizontalSlider = ({movies,title,cast}:Props) => {
    // const {nowPlaying, isLoading} =  useGetMovies()
  return (
    <View>

      {/* peliculas populares */}
      <View style={{ height:230}}>
      <Text style={styles.sectionTitle}> {title} </Text>
               <FlatList 
               data={movies}
               //  to render the elements/
               renderItem={({item}:any)=> ( <MoviePoster movie={item} width={140} height={185}/> )}
                   keyExtractor={item => item.id.toString()}
                   horizontal={true}
                   showsHorizontalScrollIndicator={false}
                   />
               </View>


    </View>
  )
}

export default HorizontalSlider