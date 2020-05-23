import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from  '@react-navigation/stack';

import SignUp from './screens/SignUp';
import Login from './screens/Login';

const Stack = createStackNavigator();

const Navigation = props => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Login} options={{headerShown: false}} />
                <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;