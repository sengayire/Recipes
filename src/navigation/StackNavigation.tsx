import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import routes from '../routes';
import {HOME_SCREEN} from '../constants/screens';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={HOME_SCREEN}>
      {routes.map(({name, title, component, headerShown}) => {
        return (
          <Stack.Screen
            key={name}
            name={name}
            component={component}
            options={{
              title,
              headerShown,
            }}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export default StackNavigation;
