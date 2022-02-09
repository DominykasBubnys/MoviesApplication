import React, { useContext, useState } from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import Styles from '../styles/ProfileStyles';
import Button from '../components/formElements/Button';
import { UserContext } from '../components/context/UserContext';

export const ProfileScreen = () => {

  const Auth = useContext(UserContext);
  const [showLibrary, setShowLibrary] = useState(false);

  const logoutHandler = () => {
    Auth.logout()
    if(Auth.userNavigation)
        Auth.userNavigation.navigate("Home")
  }


  const LibraryData = () => {

    if(Auth.userLibrary){
      if(Auth.userLibrary.length > 0){ 
        return (
          <View>
            {Auth.userLibrary.map(item => <Text key={Math.random()} style={Styles.dataText}>{item}</Text>)}
          </View>
        )
      }
      else return(
        <View>
          <Text style={Styles.dataText}>No movies</Text>
        </View>
      )
    }
   
    
  }

  return <ScrollView >
      {Auth.user && <View style={Styles.container}>
        <Image style={Styles.image} source={require("../../assets/user.png")}/>
        
        <Text style={Styles.header}>Name</Text>
        <Text style={Styles.dataText}>{Auth.user.name} </Text>
        <Text style={Styles.header}>Email</Text>
        <Text style={Styles.dataText}>{Auth.user.email} </Text>

        <Pressable onPress={() => setShowLibrary(!showLibrary)} style={Styles.library}>
          <Text style={Styles.libraryHeader}>Library ({Auth.userLibrary.length})</Text>
          {showLibrary && Auth && LibraryData()}
        </Pressable>

        <Button onPress={logoutHandler} title="Logout"/>
      </View>}
  </ScrollView>
};

export default ProfileScreen;