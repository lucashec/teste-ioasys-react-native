import React , {ReactPropTypes, useEffect, useState} from 'react';
import { ActivityIndicator, FlatList, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Logo from '../../assets/Logo.png';
import MaterialDesign from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Modal from 'react-native-modal';
import BookItem from '../../components/BookItem';

import { 
    Container, 
    Header, 
    Labels,
    LogoutButton,
    SearchBar,
    SearchBarWrapper,
    FilterButton,
    SearchWrapper,
    SearchButton,
    FiltersModal,
    FiltersContentWrapper,
    CloseFiltersButton,
    FiltersList,
    FilterActionButton,
} from './styles';
import FilterItem from '../../components/FilterItem';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAppContext } from '../../contexts/context';

interface BooksResponse extends ReactPropTypes{
    authors: string [];
    title: string;
    description: string;
    pageCount: number;
    category: string;
    imageUrl: string;
    language: string;
    isbn10: string;
    isbn13: string;
    publisher: string;
    published: number;
    id: string;
}

const Home: React.FC = () => {
  
  const [isModalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const [books, setBooks] = useState<BooksResponse[]>();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const {appContext, setAppContext} = useAppContext();

  useEffect(() => {
    loadBooks();
  }, [books]); 

  async function loadBooks(){
      if(search) return;
      if(loading) return;
      console.log(appContext.auth);
      setLoading(true);
      if (appContext.category){
        const response = await api
        .get(`books?page=${page}&category=${appContext.category}`);
        setBooks(response.data.data);
        return;
      }
      const response = await api
      .get(`books?page=${page}&category${appContext.category ? appContext.category : ''}`);
      setBooks(
          !books ? response.data.data :
          books.concat(response.data.data)
          );
      setPage(page+1 > 50 ? page : page+1);
      setLoading(false);
  }
  async function filterBooks(){
    if (!books) return
    let results = [];

    for (let book of books){
        book.authors[0].toLowerCase().indexOf(search.toLowerCase()) > -1 ||
        book.title.toLowerCase().indexOf(search.toLowerCase()) > -1 ||
        book.published === appContext.year
        ? results.push(book) : <></>
    }
    setBooks(results);
  }
  function FooterSpinner({load}){
      if(!load) return null;
      return (
          <View>
              <ActivityIndicator size={25} color='#121212' />
          </View>
      )
  }

  return (
      <Container>
          <Header>
            <Image source={Logo}
                style={{
                    width: 120,
                    height: 42
                }}
            />
            <Text style={Labels.title}>
                Books
            </Text>

            <LogoutButton
                onPress={async () => {
                    await AsyncStorage.clear();
                    navigation.navigate('SignIn');
                }}
            >
                <MaterialDesign name='logout' size={25}/>
            </LogoutButton>
          </Header>

          <SearchWrapper>
              <SearchBarWrapper>
                <SearchBar 
                 placeholder='Procure um livro'
                 onChangeText={(text)=>setSearch(text)}
                 value={search}
                />
                <SearchButton
                    onPress={async ()=> {
                        await filterBooks();
                    }}
                >
                    <EvilIcons name='search'size={28}/> 
                </SearchButton>
              </SearchBarWrapper>
              
              <FilterButton 
                onPress={() => {
                    setModalVisible(true);
                }}
              >
                <FontAwesome name='sliders' size={28}/>
              </FilterButton>

          </SearchWrapper>
          
           <FlatList 
            data={books}
            keyExtractor={item => item.id}
            renderItem={({item}) => 
            {                
                return (
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('BookDetails', {book: item});
                    }}
                >
                <BookItem 
                bookTitle={item.title}
                author={item.authors[0]}
                pages={item.pageCount}
                publisher={item.publisher}
                publishYear={item.published}
                imagePath={item.imageUrl}
                />
                </TouchableOpacity>
                )
            }}
            onEndReached={loadBooks}
            onEndReachedThreshold={0.1}
            ListFooterComponent={
                <FooterSpinner load={loading}/>
            }
            />
      
            <Modal isVisible={isModalVisible}>
            <FiltersModal>
              <CloseFiltersButton 
                onPress={() => {
                    setModalVisible(false);
                }}
              >
                <EvilIcons name='close' size={20}/>
              </CloseFiltersButton>

              <FiltersContentWrapper>
                <Text style={Labels.filterSectionTitle}>
                    Selecione a categoria
                </Text>
                <FiltersList>
                    <FilterItem 
                        label='Poesia'
                        categoryName='poetry'
                    >
                    </FilterItem>
                    
                    <FilterItem 
                        label='Biografias'
                        categoryName='biographies'
                    />
                    <FilterItem 
                        label='Cole????es'
                        categoryName='collections'
                    />
                    <FilterItem 
                        label='Fic????o Cient??fica'
                        categoryName='scienceFiction'
                    />
                    <FilterItem 
                        label='Literatura Brasileira'
                        categoryName='brazilian-literature'
                    />
                    <FilterItem 
                        label='Livros Raros'
                        categoryName='rare-books'
                    />
                    <FilterItem 
                        label='Literatura Estrangeira'
                    />
                    
                </FiltersList>
              </FiltersContentWrapper>

              <FiltersContentWrapper>
                <Text style={Labels.filterSectionTitle}>
                        Selecione a categoria
                    </Text>
                    <FiltersList>
                        <FilterItem 
                            label='2015'
                            publishingYear={2015}
                        />
                        <FilterItem 
                            label='2016'
                            publishingYear={2016}
                        />
                        <FilterItem 
                            label='2017'
                            publishingYear={2017}
                        />
                        <FilterItem 
                            label='2018'
                            publishingYear={2018}
                        />
                        <FilterItem 
                            label='2019'
                            publishingYear={2019}
                        />
                        <FilterItem 
                            label='2020'
                            publishingYear={2020}
                        />
                        <FilterItem 
                            label='2021'
                            publishingYear={2021}
                        />
                    </FiltersList>
              </FiltersContentWrapper>
              <FilterActionButton
                onPress={async () => {
                    if (appContext.category){
                        loadBooks().then(async () => {
                            await filterBooks();
                        })
                    } else {
                       await filterBooks();
                    }
                    setModalVisible(false);
                }}
              >
                  <Text style={Labels.button}>
                    Filtrar
                  </Text>
              </FilterActionButton>
          </FiltersModal>
        </Modal>
      </Container>
  );
}

export default Home;