import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View, Alert } from 'react-native';
import Styles from '../../styles/MoviesList';
import MoviesItem from './movieItem';
import LoadingSpinner from "../loadingSpinner";

const MoviesList = (props) => {
    
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const API_URL = "https://api.themoviedb.org/3";
    const DEFAULT_CATEGORY_TYPE = `${props.category_url ? props.category_url : "/discover/movie"}`
    const DATA_URL = "".concat(API_URL, DEFAULT_CATEGORY_TYPE ,`?api_key=`, process.env.MOVIE_DB_API_KEY)

    
    const fetchData = async () => {

        try {
            
            setIsLoading(true);

            const request = await fetch(DATA_URL)

            if(!request.ok)throw new Error("failed to load data");

            const requestBody = await request.json();

            setMovies(requestBody.results);

            setIsLoading(false)

        } catch (err) {
            Alert.alert(err.message || "Unexpected error");
        }
    }

    useEffect(() => {
        fetchData();
    }, [])


    return (
        <View style={Styles.container}>

            <Text style={Styles.category_type}>{props.category_title}</Text>

            {isLoading && <LoadingSpinner />}

            {!isLoading && <ScrollView horizontal>
                {movies.map(movie => {
                    return <MoviesItem key={movie.id} movie={movie} />
                })}
            </ScrollView>}
        </View>
    )
};

export default MoviesList
