import React from 'react';
import 'react-native-gesture-handler'
import { View, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { ChatTeardropDots } from 'phosphor-react-native';
import { theme } from '../../theme';

export function Widget() {
  return (
    <>
      <TouchableOpacity style={styles.button}>
        <ChatTeardropDots 
        size={24}
        weight="bold"
        color={theme.colors.text_on_brand_color}
        />

      </TouchableOpacity>
    </>
  );
}
