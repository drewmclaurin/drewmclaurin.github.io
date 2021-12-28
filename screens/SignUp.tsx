import React, { FC, useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Input, Button } from '../components';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
 
const App : FC = (props:any) => {
    const [name, setName] = useState<string | null>(null);
    const [email, setEmail] = useState<string>(String);
    const [password, setPassword] = useState<string>(String);

    const signup = async () => {
        if(email && password){
            try{
                const auth = getAuth();
                createUserWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        // Signed in 
                        const user = userCredential.user;
                        console.log(user);
                        if(user) {
                            console.log(user);
                        }
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log(errorMessage);
                });
            } catch (error) {
                console.log(error);
            }

        } else {
            Alert.alert(`Error`, `Missing Fields`);
        }
    }

    return (
        <View style={styles.container}>
            <Text>Sign Up Screen</Text>
               <Input placeholder="Name" onChangeText={(text) => setName(text)} />
               <Input placeholder="Email" onChangeText={(text) => setEmail(text)} />
               <Input placeholder="Password" secureTextEntry onChangeText={(text) => setPassword(text)} />
               <Button title="Sign Up" onPress={signup} />
            <View style={styles.loginText}>
                <Text style={{marginHorizontal: 5}}>Already Have an Account?</Text>
                <TouchableOpacity onPress={() => props.navigation.navigate('signin')} style={{marginHorizontal: 5}}>
                    <Text style={{color: 'rgba(81,135,200,1)'}}>Login Here</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

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