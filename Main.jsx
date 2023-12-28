
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import MovieList from './screen/MovieList'
import SelectedMovie from './screen/SelectedMovie';

const Stack= createNativeStackNavigator();

const Main = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName='movielist' 
    screenOptions={{
      headerShown: false, 
    }}
    
    >
        <Stack.Group >
      <Stack.Screen name="movielist" component={MovieList}/>
      <Stack.Screen name="movie" component={SelectedMovie}/>
        </Stack.Group>
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default Main