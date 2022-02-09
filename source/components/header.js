import React from 'react';
import { Pressable, Text, View } from 'react-native';
import Styles from '../styles/HeaderStyles';
import { useContext } from 'react';
import { UserContext } from './context/UserContext';

const Header = () => {

  const Auth = useContext(UserContext);

  const onLogoutHandler = () => {
      Auth.logout();
      if(Auth.userNavigation)
        Auth.userNavigation.navigate("Home")
  }

  const onHomeHandler = () => {
    if(Auth.userNavigation)
      Auth.userNavigation.navigate("Home")
  }

  const onProfileHandler = () => {
    if(Auth.userNavigation)
      Auth.userNavigation.navigate("Profile")
  }

  return <View style={Styles.container}>
      <Pressable onPress={onHomeHandler}><Text style={Styles.text}>Home</Text></Pressable>
      {Auth.isLoggedIn && <Pressable onPress={onProfileHandler}><Text style={Styles.text}>Profile</Text></Pressable>}
      {Auth.isLoggedIn && <Pressable onPress={onLogoutHandler}><Text style={Styles.text}>Logout</Text></Pressable>}
  </View>
};


export default Header;