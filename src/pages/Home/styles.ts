import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: #E5E5E5;
`;

export const Header = styled.View`
    width: 90%;
    height: 40px;
    align-self: center;
    flex-direction: row;
    margin-top: 90px;
`;
export const Labels = StyleSheet.create({
    title: {
        fontFamily: 'Heebo-Light',
        fontSize: 35,
        marginTop: -6,
        marginLeft: 15,
    },
    filterSectionTitle: {
        fontFamily: 'Heebo-ExtraBold',
    },
    button:{
        fontFamily: 'Heebo-Bold',
        fontSize: 16,
        color: '#B22E6F'
    }
});
export const LogoutButton = styled.TouchableOpacity`
    height: 40px;
    width: 40px;
    border-radius: 40px;
    border: 1px solid rgba(51, 51, 51, 0.2);
    justify-content: center;
    align-items: center;
    margin-left: 90px;
    
`;

export const SearchWrapper = styled.View`
    width: 90%;
    height: 56px;
    flex-direction: row;
    margin-top: 34px;
    align-self: center;
    align-items: center;
    margin-bottom: 50px;
`;
export const SearchBarWrapper = styled.View`
    height: 100%;
    width: 80%;
    flex-direction: row;
`;
export const SearchBar = styled.TextInput`
    margin-top: 2px;
    width: 100%;
    font-family: 'Heebo-Bold';
    padding-left: 10px;
    border: 1px solid rgba(51, 51, 51, 0.2);
`;
export const SearchButton = styled.TouchableOpacity`
    position: absolute;
    right: 20px;
    top: 20px;
`;
export const FilterButton =  styled.TouchableOpacity`
    margin-left: 30px;
`;

export const FiltersModal = styled.View`
    width: 90%;
    height: 500px;
    background-color: #fff;
    align-self: center;
    align-items: center;
    padding-top: 20px;
    border-radius: 4px;
`;
export const CloseFiltersButton = styled.TouchableOpacity`
    width: 30px;
    height: 30px;
    border-radius: 30px;
    border: 1px solid rgba(51, 51, 51, 0.2);
    position: absolute;
    justify-content: center;
    align-items: center;
    right: 15px;
    top: 10px;
`;
export const FiltersContentWrapper = styled.View`
    width: 90%;
    height: 37%;
    margin-top: 20px;
`;
export const FiltersList = styled.View`
    width: 100%;
    height: 80%;
    margin-top: 10px;
    flex-wrap: wrap;
    flex-direction: row;
`;
export const FilterItem = styled.TouchableOpacity`
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
export const FilterActionButton = styled.TouchableOpacity`
    width: 91px;
    height: 36px;
    justify-content: center;
    align-items: center;
    border: 1px solid #B22E6F;
    border-radius: 44px;
`;
