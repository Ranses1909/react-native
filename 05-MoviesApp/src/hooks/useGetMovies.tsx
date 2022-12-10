import React from 'react'
import { View } from 'react-native'
import movieDB from '../api/movieDB'
import { MovieDBResponse, Movies } from '../interfaces/movieDBInterface'

// Episode 159

// we're going to create one useState for all callings
interface MoviesState {
    nowPlaying:  Movies[];
    popularity:Movies[];
    topRated:  Movies[];
    upcoming: Movies[];
} 

const useGetMovies = () => {
    const [isLoading, setIsLoading] = React.useState(true);
    // Movies[] comes from interfaces is needed to especify what useState will get 
   const [moviesState, setMoviesState] = React.useState<MoviesState>({
    nowPlaying: [],
    popularity: [],
    topRated: [],
    upcoming: [],  
});

    const getMovies = async () => {
        // we have promises, 
        const PromiseNowPlaying = movieDB.get<MovieDBResponse>('/now_playing')
        const PromisePopular    = movieDB.get<MovieDBResponse>('/popular')
        const PromiseTopRated   = movieDB.get<MovieDBResponse>('/top_rated')
        const PromiseUpcoming   = movieDB.get<MovieDBResponse>('/upcoming')

        // javascript has this method Promise.all to execute all promises simultaneously
       const responses = await Promise.all([
         PromiseNowPlaying,
          PromisePopular,
           PromiseTopRated,
            PromiseUpcoming ])
        // array results
         setMoviesState({
            nowPlaying:responses[0].data.results,
            popularity:responses[1].data.results,
            topRated:responses[2].data.results,
            upcoming:responses[3].data.results
         })
        // postman speaks for itself

        setIsLoading(false)
    }
        
    React.useEffect(() => {
        getMovies();
    },[]) 
    
      return {
        ...moviesState,
        isLoading,
    }
}

export default useGetMovies