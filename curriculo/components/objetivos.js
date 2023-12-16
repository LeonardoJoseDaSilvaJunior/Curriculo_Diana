import React from 'react';
import { View, StyleSheet, Image, Text, Button } from 'react-native'; // Adicione a importação do Button

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>
      
Atuar no setor tecnológico, visando pôr em prática minhas habilidades e competências
de forma responsável e consciente na área.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    position: 'relative',
  },
  
});
