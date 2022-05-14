import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const FilterItemContainer = styled.TouchableOpacity`
    height: 32px;
    background-color: #fff;
    padding-left: 10px;
    padding-right: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
    border: 1px solid rgba(51, 51, 51, 0.3);
    justify-content: center;
    border-radius: 44px;
`;

export const Styles =  StyleSheet.create({
    container:{
        height: 32,
        paddingLeft: 10,
        paddingRight: 10,
        marginRight: 10,
        marginBottom: 10,
        borderBottomWidth:1,
        borderRightWidth:1,
        borderLeftWidth: 1,
        borderTopWidth:1,
        borderBottomColor: '#3333334d',
        borderRightColor: '#3333334d',
        borderLeftColor: '#3333334d',
        borderTopColor: '#3333334d',
        justifyContent: 'center',
        borderRadius: 44
    },
    name: {
        fontFamily: 'Heebo-Regular',
        fontSize: 12,
    }
})