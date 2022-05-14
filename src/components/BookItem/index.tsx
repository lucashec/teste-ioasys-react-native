import React from 'react';
import { Image, Text } from 'react-native';
import { 
    BookContainer,
    BookImage,
    BookInfo,
    BookInfoTitles,
    BookInfoDetails,
    BooksLabels
 } from './styles';
interface BookItemProps{
    imagePath: any,
    bookTitle: string,
    author: string,
    pages: number,
    publisher: string,
    publishYear: number,
}
const BookItem: React.FC<BookItemProps> = ({
    imagePath,
    bookTitle,
    author,
    pages,
    publishYear,
    publisher
}) => {
  if (!imagePath){
      imagePath = "https://d2drtqy2ezsot0.cloudfront.net/Book-1.jpg"
  }
  return (
    <BookContainer>
    <BookImage>
        <Image source={{uri: imagePath}}
         style={{
             flex: 1,
             width: 90,
             height: 130,
             alignSelf: 'center'
         }}
        />
    </BookImage>
    <BookInfo>
        <BookInfoTitles>
          <Text style={BooksLabels.title}>
              {bookTitle}
          </Text>
          <Text style={BooksLabels.author}>
              {author}
          </Text>
        </BookInfoTitles>

        <BookInfoDetails>
          <Text style={BooksLabels.detail}>
              {pages} Páginas
          </Text>
          <Text style={BooksLabels.detail}>
              {publisher}
          </Text>
          <Text style={BooksLabels.detail}>
              Publicado em {publishYear}
          </Text>
        </BookInfoDetails>
    </BookInfo>
</BookContainer>
  );
}

export default BookItem;