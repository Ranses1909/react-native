import React from 'react'
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Cast, FullMovie } from '../interfaces/movieDBInterface';
import HorizontalSlider from './HorizontalSlider';

interface Props{
    fullMovie:FullMovie;
    cast: Cast[];
    
}

// we use this custom component in DetailScreen
const MovieDetails = ({fullMovie, cast}:Props) => {
  return (
    <View style={{marginHorizontal:14}}>
        <View style={{flexDirection:"row", }}>

        <Icon
         style={{fontSize:18, color: 'black', fontWeight: 'bold'}}
        name='star-outline'
        color='gray'
        size={18}
        />
        <Text style={{fontSize:16, color: 'black', fontWeight: 'bold'}}>{fullMovie.vote_average}</Text>

        <Text style={{marginLeft:5}}>
            -{fullMovie.genres.map(genero => genero.name).join(', ')}
        </Text>

        </View>

        <Text style={{fontSize:20, marginTop:10, fontWeight: 'bold'}}>
          Historia
          </Text>

        <Text style={{fontSize:18, }}>
          {fullMovie.overview}
          </Text>

          <Text style={{fontSize:20,marginTop:10, fontWeight: 'bold'}}>
            Presupuesto
          </Text>

          <Text style={{fontSize:16}}>
          {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(fullMovie.budget)}
          </Text>

          {/* <HorizontalSlider title={'perfomers'} cast={cast}/> */}
    </View>

  )
}

export default MovieDetails