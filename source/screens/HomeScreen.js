import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import Button from '../components/formElements/Button';
import Styles from '../styles/HomeStyles';
import { useContext } from 'react';
import { UserContext } from '../components/context/UserContext';

export const HomeScreen = (props) => {

  const Auth = useContext(UserContext);

  useEffect(() => {Auth.setUserNavigation(props.navigation)}, []);

  return (
    <View style={Styles.container}>
        <Text style={Styles.header}>ReactSeals presents</Text>
        <Button onPress={() => props.navigation.navigate("Browse")} title = "Browse" />
        {!Auth.isLoggedIn && <Button onPress={() => props.navigation.navigate("Auth")} title = {"Authenticate"} />}
        {Auth.isLoggedIn && <Button onPress={() => props.navigation.navigate("Profile")} title = {"Profile"}/>}
    </View>
  )
};


export default HomeScreen;