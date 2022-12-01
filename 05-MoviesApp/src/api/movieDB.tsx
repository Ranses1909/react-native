import axios from 'axios';
// const axios = require('axios').default

const movieDB = axios.create({
baseURL: 'https://api.themoviedb.org/3/movie',
params:{
    api_key: 'a8de05fb626e71051d79013203680e50',
    language: 'en-US',
}
});

export default movieDB;


