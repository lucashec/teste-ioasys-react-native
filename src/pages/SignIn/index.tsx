import React, { useState } from 'react';
import { Image, Text, KeyboardAvoidingView, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Background from '../../assets/signup.png';
import Logo from '../../assets/LogoHome.png';

import { 
    LogoWrapper,
    Labels,
    InputsWrapper,
    Input,
    InputBox,
    FieldLabel,
    Button,
    ImageBackground
} from './styles';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

const SignIn: React.FC = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    
  function handleSignIn(){
      api.post('auth/sign-in', {
          email,
          password
      }).then(async function (response) {
        await AsyncStorage
        .setItem('token', 
        response.headers.authorization);
        navigation.navigate('Home');
      }).catch((error) => {
        console.log(error)
      })
  }
  return (
      <>
      <Image source={Background} style={ImageBackground.style}/>
      <LogoWrapper>
        <Image source={Logo} 
        style={{
            width: 130,
            height: 44
        }}
        />
        <Text style={Labels.title}>
            Books
        </Text>
      </LogoWrapper>

      <InputsWrapper>
        <InputBox>
            <FieldLabel>
                Email
            </FieldLabel>
            <Input 
             autoCapitalize='none'
             onChangeText={setEmail}
             value={email}
            />
        </InputBox>

        <InputBox>
            <FieldLabel>
                Senha
            </FieldLabel>
            <Input 
            secureTextEntry
            autoCapitalize='none'
            onChangeText={setPassword}
            value={password}
            />
            <Button onPress={handleSignIn}>
                <Text style={Labels.signin}>
                    Entrar
                </Text>
            </Button>
        </InputBox>

      </InputsWrapper>

      </>
  );
}

export default SignIn;