import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar } from 'react-native';


import './config/ReactotronConfig';
import Routes from './routes';

export default function App() {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <Routes />
    </>
  )
}
