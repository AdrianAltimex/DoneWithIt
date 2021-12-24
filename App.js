import React, { useState } from 'react';
import AppScreen from './app/components/AppScreen';
import AppText from './app/components/AppText';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import ListingEditScreen from './app/screens/ListingEditScreen';
import AppButton from './app/components/AppButton';

const Tweets = ({navigation}) => (
  <AppScreen>
    <AppText>Tweets</AppText>
    <AppButton
      title="View Tweet"
      onPress={() => navigation.navigate("TweetDetails", {id: 1})}
    />
  </AppScreen>
)

const TweetDetails = ({route}) => (
  <AppScreen>
    <AppText>Tweet details {route.params.id}</AppText>
  </AppScreen>
)

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen name="TweetDetails" component={TweetDetails} options={({route})=> ({title: route.params.id})} />
  </Stack.Navigator>
)

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  )
}