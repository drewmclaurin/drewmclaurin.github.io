import React, { FC, useEffect, useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import firebase from 'firebase/app';
import AppStack from './appstack';
import AuthStack from './authstack';
import { getAuth } from "firebase/auth";


const MainNav : FC = () => {
    const [user, setUser] = useState<any>(null);
    
    const auth = getAuth();

    const bootstrap = () => {
        auth.onAuthStateChanged(_user => {
            if(_user){
                setUser(_user);
            }
            else{
                setUser(null);
            }
        })
        
    }

    useEffect(() => {
        bootstrap()
    }, [])


    return (
        <NavigationContainer>
            {user !== null ? <AppStack {...user}/> : <AuthStack {...user}/>}
        </NavigationContainer>
    )
}

export default MainNav;