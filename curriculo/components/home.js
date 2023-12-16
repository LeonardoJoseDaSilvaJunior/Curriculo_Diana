import React from 'react';
import { View, StyleSheet, Image, Text, Button } from 'react-native'; // Adicione a importação do Button

export default function ObjetivoScreen({ navigation }) {
  return (
       <View style={styles.container}>
      <Image style={styles.senacLogo} source={require('../assets/img/senac-removebg-preview.png')} />
      <Image style={styles.dianaLogo} source={require('../assets/img/diana')} />
      <Text style={styles.text}>Diana Rafaela de Castro Silva</Text>
      <Button title="Objetivos" onPress={() => navigation.navigate('Objetivos')} />
      <Button title="Formação" onPress={() => navigation.navigate('Formação')} />
      <Button title="Experiências" onPress={() => navigation.navigate('Experiências')} />

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
  senacLogo: {
    height: 64,
    width: 64,
    marginBottom: 16,
  },
  dianaLogo: {
    height: 128,
    width: 128,
    borderRadius: 10000,
    marginBottom: 16,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
