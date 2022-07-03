import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomePage from '../components/templates/HomePage';
import CoinMarket from '../components/templates/CoinMarket/index';
import CoinDetails from '../components/templates/CoinDetails/index';

export type HomeStackParams = {
  HomePage: undefined;
  CoinMarket: undefined;
  CoinDetails: undefined;
};
const Stack = createNativeStackNavigator<HomeStackParams>();

const HomeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="HomePage">
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CoinMarket"
        component={CoinMarket}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CoinDetails"
        component={CoinDetails}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: 'lightgreen',
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
