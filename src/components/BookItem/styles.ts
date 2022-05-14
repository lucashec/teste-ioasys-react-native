import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const BookContainer = styled.View`
    width: 90%;
    height: 160px;
    background: #fff;
    align-self: center;
    border-radius: 4px;
    flex-direction: row;
    margin-bottom: 20px;
`;
export const BookImage = styled.View`
    height: 130px;
    width: 95px;
    margin-left:15px;
    margin-top: 17px;
`;
export const BookInfo = styled.View`
    width: 65%;
    height: 90%;
    align-self: center;
    justify-content: space-between;
    margin-left: 15px;
`;
export const BookInfoTitles = styled.View`
    width: 100%;
    height: 40%;
`;
export const BooksLabels = StyleSheet.create({
    title:{
        fontFamily: 'Heebo-Bold',
        fontSize: 16,
        color: '#333333'
    },
    author: {
        color: '#AB2680',
        fontFamily: 'Heebo-Regular',
        fontSize: 14
    },
    detail:{
        color: '#999999',
        fontFamily: 'Heebo-Regular',
    }
})
export const BookInfoDetails = styled.View`
    width: 100%;
    height: 50%;
    justify-content: space-around;
`;