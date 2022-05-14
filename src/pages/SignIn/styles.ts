import { Dimensions, StyleSheet } from "react-native";
import styled from "styled-components/native";

export const ImageBackground = StyleSheet.create({
   style:{
    position: 'absolute',
    left: 0,
    top:0,
    width: Dimensions.get('window').width,
    height: '100%',
    resizeMode: 'cover'
   } 
});

export const LogoWrapper = styled.View`
    height: 40px;
    width: 200px;
    position: absolute;
    top: 270px;
    left: 25px;
    flex-direction: row;
    align-items: center;
`;
export const Labels = StyleSheet.create({
    title: {
        fontFamily: 'Heebo-Light',
        fontSize: 35,
        marginTop: -4,
        marginLeft: 15,
        color: '#fff'
    },
    signin:{
        fontFamily: 'Heebo-Bold',
        color: '#B22E6F',
        fontSize: 16
    }
});

export const InputsWrapper =  styled.View`
    height: 180px;
    width: 90%;
    position: absolute;
    top: 380px;
    align-self: center;
`;
export const Input = styled.TextInput`
    width: 100%;
    height: 60px;
    margin-top: 5px;
    background-color: rgba(0, 0, 0, 0.32);
    color: #fff;
    font-family: 'Heebo-Ligth';
    padding-top: 30px;
    padding-left: 10px;
    border-radius: 4px;
`;
export const InputBox = styled.View`
    width: 100%;
    height: 70px;
    margin-bottom: 10px;
`;
export const FieldLabel = styled.Text`
    font-family: 'Heebo-Light';
    font-size: 14px;
    color: #fff;
    position: absolute;
    left: 10px;
    top: 6px;
    bottom: 4px;
`;
export const Button = styled.TouchableOpacity`
    width: 85px;
    height: 36px;
    background-color: #fff;
    border-radius: 44px;
    position: absolute;
    right: 20px;
    top: 18px;
    justify-content: center;
    align-items: center;
`;
