import React, { useState } from "react";
import { Alert, View, Text, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import CardStack, { Card } from "react-native-card-stack-swiper";
import { Input, Button, City, Filters, CardItem } from "../components";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const App = (props:any) => {
    const [email, setEmail] = useState<string | null>(null);
    const [password, setPassword] = useState<string | null>(null);

    const login = async () => {
        if(email && password){
            const auth = getAuth();
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    Alert.alert(errorMessage);
            });
        } else {    
            Alert.alert(`Missing Fields`)
        }
    }

    return (
        <View style={styles.container}>
            <Text>Login Screen</Text>
            <Input placeholder="Email" onChangeText={(text) => setEmail(text)} />
            <Input placeholder="Password" secureTextEntry onChangeText={(text) => setPassword(text)} />
            <Button title="Sign In" onPress={login} />

            <View style={styles.loginText}>
                <Text style={{marginHorizontal: 5}}>Don't Have an Account?</Text>
                <TouchableOpacity onPress={() => props.navigation.navigate('signup')} style={{marginHorizontal: 5}}>
                    <Text style={{color: 'rgba(81,135,200,1)'}}>Sign Up Here</Text>
                </TouchableOpacity>
            </View>
        </View>
    )};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginText: {
        flexDirection: 'row',
        marginVertical: 20
    }
})