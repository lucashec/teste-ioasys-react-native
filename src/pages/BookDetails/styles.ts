import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const Container = styled.ScrollView`
    flex: 1;
`;
export const BackButton = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    border-radius: 40px;
    position: absolute;
    justify-content: center;
    align-items: center;
    top: 40px;
    left: 20px;
    border: 1px solid rgba(51, 51, 51, 0.2);
`;
export const DetailsContent = styled.View`
    width: 85%;
    top: 100px;
    align-self: center;
`;
export const BookImage = styled.View`
    height: 450px;
    width: 100%;
`;
export const BookTitle = styled.View`
    width: 100%;
    height: auto;
    margin-top: 25px;
`;
export const BookInfo = styled.View`
    width: 100%;
    height: 280px;
    margin-top: 20px;
    flex-direction: row;
    justify-content: space-between;
`;
export const InfoLabels = styled.View`
    width: 45%;
    height: 100%;
`;
export const InfoContent = styled.View`
    width: 45%;
    height: 100%;
    align-items: flex-end;
`;
export const BookReview = styled.View`
    width: 100%;
    margin-top: 20px;
    flex-direction: row;
    height: 350px;
`;
export const Labels = StyleSheet.create({
    title:{
        fontFamily: 'Heebo-Bold',
        fontSize: 30,
        color: '#333333'
    },
    authors:{
        fontSize: 15,
        fontFamily: 'Heebo-Regular',
        marginTop: 2,
        color: '#AB2680'
    },
    infoSection: {
        fontFamily: 'Heebo-Bold',
        fontSize: 16,
        marginTop: 30
    },
    attr: {
        fontFamily: 'Heebo-Bold',
        fontSize: 15,
        color: '#333333',
        marginBottom: 10
    },
    data: {
        fontFamily: 'Heebo-Regular',
        fontSize: 15,
        color: '#999999',
        marginBottom: 10
    },
    text: {
        fontFamily: 'Heebo-Regular',
        fontSize: 16,
        color: '#333333',
        flex: 2
    }
});