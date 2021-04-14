export default {
  genreURL: 'https://api.themoviedb.org/3/genre/movie/list?api_key=32faf832158d9edd2ab0daded0a904d3&language=en-US',
  imageURL: 'https://image.tmdb.org/t/p/original',
  movieURL(genre_id, page){
    return `https://api.themoviedb.org/3/discover/movie?api_key=32faf832158d9edd2ab0daded0a904d3&with_genres=${genre_id}&page=${page}`;
  }
};
