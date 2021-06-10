import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import Home from './src/pages/Home';

//importando o Routes
import Routes from './src/routes';

export default function App() {
  return (
    <Routes/>
  );
}


