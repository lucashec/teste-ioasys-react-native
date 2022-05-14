import React from 'react';
import { Image, Text, View } from 'react-native';
import { BookInfo, BackButton, BookImage, BookTitle, Container, DetailsContent, Labels, InfoLabels, InfoContent, BookReview } from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontIsto from 'react-native-vector-icons/Fontisto'
import { useNavigation } from '@react-navigation/native';

interface BookDetailsProps{
    route: any;
}

const BookDetails: React.FC<BookDetailsProps> = (props) => {
  const {book} = props.route.params;
  const navigation = useNavigation();

  return (
      <Container>
        <BackButton
            onPress={() =>{
                navigation.goBack();
            }}
        >
            <MaterialIcons name='arrow-back' size={28}/>
        </BackButton>
        <DetailsContent>
            <BookImage>
                <Image source={{
                    uri: book.imageUrl
                }}
                style={{
                    width: '100%',
                    height: 450,
                }}
                />
            </BookImage>

            <BookTitle>
                <Text style={Labels.title}>
                    {book.title}
                </Text>
            </BookTitle>
            <Text style={Labels.authors}>
                    {book.authors.map((author, i, authors)=> {
                        if (i + 1 === authors.length){
                            return `${author}`
                        }
                        else {
                            return `${author}, `
                        }
                    })}
            </Text>
            <Text style={Labels.infoSection}>
                INFORMAÇÕES
            </Text>

            <BookInfo>    
                <InfoLabels>
                    <Text style={Labels.attr}>
                        Páginas
                    </Text>
                    <Text style={Labels.attr}>
                        Editora
                    </Text>
                    <Text style={Labels.attr}>
                        Publicação
                    </Text>
                    <Text style={Labels.attr}>
                        Idioma
                    </Text>
                    <Text style={Labels.attr}>
                        Título
                    </Text>
                    <Text style={Labels.attr}>
                        ISBN-10
                    </Text>
                    <Text style={Labels.attr}>
                        ISBN-30
                    </Text>
                    <Text style={Labels.attr}>
                        Categoria
                    </Text>
                </InfoLabels>

                <InfoContent>
                    <Text style={Labels.data}>
                        {book.pageCount} páginas
                    </Text>
                    <Text style={Labels.data}>
                        {book.publisher}
                    </Text>
                    <Text style={Labels.data}>
                        {book.published}
                    </Text>
                    <Text style={Labels.data}>
                        {book.language}
                    </Text>
                    <Text style={Labels.data}>
                        {book.title}
                    </Text>
                    <Text style={Labels.data}>
                        {book.isbn10}
                    </Text>
                    <Text style={Labels.data}>
                        {book.isbn13}
                    </Text>
                    <Text style={Labels.data}>
                        {book.category}
                    </Text>
                </InfoContent>
            </BookInfo>
            
            <Text style={Labels.infoSection}>
                RESENHA DA EDITORA
            </Text>
            
            <BookReview>
                <View style={{
                    width: 30,
                    height: 30,
                    position: 'absolute'
                }}>
                <FontIsto name='quote-a-right' size={22}/>
                </View>
                <Text style={Labels.text}>
                    {"        "}
                    {book.description}
                </Text>
            </BookReview>
        </DetailsContent>
      </Container>
  );
}

export default BookDetails;