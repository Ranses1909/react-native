import React from 'react'
import { View } from 'react-native';
import styles from '../../appTheme';
import movieDB from '../api/movieDB';
import { Cast, CreditResponse, FullMovie } from '../interfaces/movieDBInterface';

interface MovieDetails { 
    isLoading:boolean;
    fullMovie?:FullMovie;
    cast:Cast[]
}

const useMovieDetails = (movieId:number) => {
    const [ state, setState ] = React.useState<MovieDetails>({
        isLoading: true, 
        fullMovie: undefined,
        cast: []
    }) 

    const getMovieDetails = async() => {
        //  const resp = await movieDB.get<FullMovie>(`/${movieId}`)

        // storing promises
    const movieDetailsPromise =  movieDB.get<FullMovie>(`/${movieId}`)
    const creditsPromise =  movieDB.get<CreditResponse>(`/${movieId}/credits`)

    // we use "await" so we are able to destructure both promises
    // 1st position are movies, and second is casting
    const [movieDetailsResp, castResponse] = await Promise.all([movieDetailsPromise, creditsPromise])
       
     setState({
         isLoading:false,
          fullMovie: movieDetailsResp.data, 
          cast: castResponse.data.cast
        })

    // console.log(resp.data.overview)
    }

    React.useEffect(() =>{
        getMovieDetails()
    }, [])

  return ( 
  { ...state  }

  )
}

export default useMovieDetails