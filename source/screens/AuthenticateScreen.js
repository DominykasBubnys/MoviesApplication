import { Alert, Keyboard, Pressable, Text, TouchableWithoutFeedback, View } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import Input from "../components/formElements/Input"
import Button from "../components/formElements/Button"
import Styles from '../styles/AuthenticateStyles';
import LoadingSpinner from "../components/loadingSpinner";
import {UserContext} from "../components/context/UserContext";


export const AuthenticateScreen = ({navigation}) => {

  const Auth = useContext(UserContext)

  const [isLoading, setIsLoading] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(true);

  const [nameValue, setNameValue] = useState()
  const [emailValue, setEmailValue] = useState()
  const [passwordValue, setPassswordValue] = useState()
  const [disabledBtn, setDisabledBtn] = useState(false);

  

  useEffect(() => {
    if(isLoginMode){
      if(emailValue && passwordValue){
        setDisabledBtn(false)
      }
      else setDisabledBtn(true) 
    }

    if(!isLoginMode){
      if(nameValue && emailValue && passwordValue){
        setDisabledBtn(false)
      }
      else setDisabledBtn(true) 
    }

  }, [nameValue, emailValue, passwordValue])

  const keybordCloseHandler = () => {
    Keyboard.dismiss();
  }


  const changeFormModeHandler = () => {
    setIsLoginMode(!isLoginMode);
  }

  const nameValueChangeHandler = (event) => {
    setNameValue(event)
  }

  const emailValueChangeHandler = (event) => {
    setEmailValue(event)
  }

  const passwordValueChangeHandler = (event) => {
    setPassswordValue(event)
  }

  const submitHandler = async() => {

    let enteredValues;
    let submitUrl;

    if(isLoginMode){
      enteredValues = {email: emailValue, password: passwordValue};
      submitUrl = `https://server-movies-app.herokuapp.com/login`
    }else {
      enteredValues = {name: nameValue, email: emailValue, password: passwordValue};
      submitUrl = `https://server-movies-app.herokuapp.com/sign-up`
    }


    try {
      setIsLoading(true);

      const request = await fetch(submitUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(enteredValues)
      })

      const responseData = await request.json();
      
      if(!request.ok)throw new Error(responseData.message || "Unexpected error");

      setIsLoading(false);      
      Auth.login(responseData.user);

      navigation.navigate("Home");

    } catch (err) {
      Alert.alert(err.message || "Failed to sign-up");
      setIsLoading(false);

    }

  }

  return (
    <Pressable style={Styles.container} onPress={keybordCloseHandler}>
      {isLoading && <LoadingSpinner />}
      {!isLoading && <View>
        <Text style={Styles.header}>{isLoginMode ? "Login" : "Join us now!"}</Text>
        
        {isLoginMode ? null : <Input value={nameValue} onChange={nameValueChangeHandler} placeholder="Enter name" />}
        <Input value={emailValue} onChange={emailValueChangeHandler} placeholder="Enter email" />
        <Input value={passwordValue} onChange={passwordValueChangeHandler} secured={true} placeholder="Enter password" />
        <Button disabled={disabledBtn} onPress={submitHandler} title={isLoginMode ? "Login" : "SignUp"}/>
  
        <Pressable onPress={changeFormModeHandler}>
          <Text style={Styles.text}>{isLoginMode ? "Do not have account?" : "Already a member?"}</Text>
        </Pressable>
      </View>}

    </Pressable>
  )
  
  
};

export default AuthenticateScreen;