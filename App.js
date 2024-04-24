import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RideForm from './components/RideForm';
import ThankYouScreen from './components/ThankYouScreen';

const Stack = createStackNavigator();

const App = () => {
  const [showHeaderOnThankYou, setShowHeaderOnThankYou] = useState(true);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="RideForm">
        <Stack.Screen
          name="RideForm"
          component={RideForm}
          options={{ title: 'Book Car', headerShown: showHeaderOnThankYou }}
        />
        <Stack.Screen
          name="ThankYou"
          component={ThankYouScreen}
          options={{
            title: 'Booking Confirmed',
            headerShown: showHeaderOnThankYou,
            headerLeft: null, // Optionally remove back button on ThankYou screen
          }}
          listeners={({ navigation }) => ({
            beforeRemove: (e) => {
              // Update header visibility when navigating back from ThankYou to RideForm
              setShowHeaderOnThankYou(true);
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
