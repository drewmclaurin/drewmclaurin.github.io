import React, { FC } from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import {SignIn, SignUp} from '../screens'
const {Navigator, Screen} = createStackNavigator();

const AuthStack : FC = () => {
    return (
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name="signup" component={SignUp}/>
            <Screen name="signin" component={SignIn}/>
        </Navigator>
    )
} 

export default AuthStack;