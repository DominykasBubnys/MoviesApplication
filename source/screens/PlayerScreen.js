import React, { useEffect, useState } from 'react';
import { Alert, Text, View } from 'react-native';
import YouTube from 'react-native-youtube';
import LoadingSpinner from "../components/loadingSpinner"

export const PlayerScreen = (props) => {
  const {movieId} = props.route.params;
  const [isLoading, setIsLoading] = useState(false);
  const [trailer, setTrailer] = useState(null);

  const setTrailerHandler = (movie) => {
    const allTrailers = movie.videos.results;
    setTrailer(allTrailers.find(trailer => trailer.name === "Official Trailer"))
  }

  const fetchMovie = async() => {
    const API_URL = "https://api.themoviedb.org/3";
    const url = `${API_URL}/movie/${movieId}?api_key=${process.env.MOVIE_DB_API_KEY}&append_to_response=videos`;

    try {
      setIsLoading(true);
      const request = await fetch(url)
      
      if(!request.ok) throw new Error("Cannot load movie with given id");
    
      const respData = await request.json();

      setTrailerHandler(respData);

      setIsLoading(false);

    } catch (err) {
      Alert.alert(err.message || "Failed to load movie with particular id");
    }
  }

  useEffect(() => {
    fetchMovie()
  }, [])


  return <View>
    <LoadingSpinner />
    
  </View>
};

export default PlayerScreen;
