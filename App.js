import { View, ImageBackground, Text } from "react-native";
import MainNavigation from "./source/routes/MainRouter"
import Styles from "./source/styles/AppStyles"
import {UserContext} from "./source/components/context/UserContext.js";
import { useState, useCallback } from "react";
import Header from "./source/components/header";

export default function App() {


  const backgroundImage_Url = "./assets/movie_background.jpg";

  const [userNavigation, setUserNavigation] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userLibrary, setUserLibrary] = useState([]);
  const [user, setUser] = useState(null);


  const navigationHandler = useCallback((navProp) => {
    setUserNavigation(navProp);
  }, [])


  const login = useCallback((user) => {
    setIsLoggedIn(true);
    setUserLibrary(user.library);
    setUser(user);
  }, []);

  const resetLibrary = useCallback((library) => {
    setUserLibrary(library)
  }, [])

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUser(null);
  }, []);

  
  return (
    <UserContext.Provider 
      value={
        { 
          isLoggedIn, 
          login, 
          logout, 
          setUserNavigation: navigationHandler, 
          userNavigation,
          user,
          userLibrary,
          resetLibrary,
        }
      }
    >
      <View style={Styles.container}>

        <ImageBackground source={require(backgroundImage_Url)} style={Styles.image}>
          
          <Header />
          
          <MainNavigation></MainNavigation>
        </ImageBackground>
      
      </View>
    </UserContext.Provider>
    
  );
}

