import React from 'react';
import { ImageBackground, Text, View, Image, Pressable } from 'react-native';
import Styles from '../../styles/MovieItem';
import { useNavigation } from '@react-navigation/native';

const MoviesItem = ({movie}) => {

  const navigation = useNavigation();
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w500";

  const moviePressHandler = () => {
    navigation.navigate("Details", {
      movie: movie,
      movie_image_url: `${IMAGE_PATH}${movie.poster_path}`,
    })
  }

  return <Pressable onPress={moviePressHandler} style={Styles.container}>
    {movie.poster_path?
      <ImageBackground
      style={Styles.image}
      source={{
        uri: `${IMAGE_PATH}${movie.poster_path}`,
      }}
      /> :
      <Text>{movie.title}</Text>
    }
    <Text style={Styles.title}>{movie.title}</Text>

      
  </Pressable>
};

export default MoviesItem
