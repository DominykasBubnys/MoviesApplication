import React from 'react';
import { FC } from 'react';
import { Text, View } from 'react-native';
import Styles from "../styles/LoadingSpinnerStyles"

const LoadingSpinner = () => {
  return (
    <View style={Styles.loadingSpinner}>
        <Text style={Styles.text}>Loading...</Text>
    </View>
  );
};

export default LoadingSpinner;