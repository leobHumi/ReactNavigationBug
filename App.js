import React, {useEffect, useState} from 'react';
import {View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  const [isRed, setIsRed] = useState(false);

  useEffect(() => {
    const x = setInterval(() => setIsRed(!isRed), 1000);

    return () => {
      clearInterval(x);
    };
  }, [isRed]);

  console.log('isRed: ', isRed);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isRed ? (
          <Stack.Screen name="Red" component={Red} />
        ) : (
          <Stack.Screen name="Blue" component={Blue} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Red = () => <View style={{flex: 1, backgroundColor: 'red'}} />;

const Blue = () => <View style={{flex: 1, backgroundColor: 'blue'}} />;

export default App;
