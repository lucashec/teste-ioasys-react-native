import React, { useCallback, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useAppContext } from '../../contexts/context';
import {Styles} from './styles';

interface FilterItemProps{
    label: string;
    categoryName?: string;
    publishingYear?: number;
    setCategory?: React.SetStateAction<string>;
}
const FilterItem: React.FC<FilterItemProps> = (props) => {
  const [selected, setSelected] = useState(false);
  const {appContext, setAppContext} = useAppContext();  

  const selectedBackground = '#333333';
  let currentColor = '';
  let currentFontColor = '';

  if (selected){
      currentColor = selectedBackground
      currentFontColor = '#fff'
  } else {
    currentColor = '#fff'
    currentFontColor = '#000'
  }
  let addBackground = StyleSheet.create({
    color:{
        backgroundColor: currentColor,
    }
    })
    let addFontColor = StyleSheet.create({
    colorFill:{
        color: currentFontColor,
    }
    })
  return (
      <TouchableOpacity
        onPress={() => {
          setSelected(!selected)
          const temp = appContext;
          temp.category = props.categoryName;
          temp.year = props.publishingYear;
          setAppContext(temp);
        }}
        style={[Styles.container, addBackground.color]}
      >
          <Text
            style={[Styles.name, addFontColor.colorFill]}  
          >
            {props.label}
          </Text>
     </TouchableOpacity>
  );
}

export default FilterItem;