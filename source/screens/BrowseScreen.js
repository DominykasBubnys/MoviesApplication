import { Text, View, ScrollView, Pressable } from 'react-native';
import MovieList from '../components/movies/moviesList';
import Styles from "../styles/BrowseStyles"
import React from 'react';

export const BrowseScreen = ({navigation}) => {

  return (
    <View style={Styles.container}>

      <ScrollView style={Styles.body}>

        <MovieList category_title = "Now playing" category_url = "/movie/now_playing"/>

        <MovieList category_title="Upcoming" category_url = "/movie/upcoming" />

        <MovieList category_title = "Top rated" category_url="/movie/top_rated"/>

      </ScrollView>

    </View>
  )
};

export default BrowseScreen;
