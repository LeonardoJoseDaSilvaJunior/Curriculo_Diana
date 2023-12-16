import React from 'react';
import { View, StyleSheet, Image, Text, Button } from 'react-native'; // Adicione a importação do Button

export default function ExperienciaScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
      LIFERAY LATIN AMÉRICA LTDA - CNPJ Root 11,902,443
      </Text>
      <Text style={styles.inf}> Ocupação: 2122 -05 Engenheiro de Aplicações de Computador.      </Text>
      <Text style={styles.inf}> Período de contrato: 11/04/2022 - Aberto.      </Text>

       <Text style={styles.titulo}>
WMB SUPERMERCADOS DO BRASIL LTDA - CNPJ 00.063.960/0001-09.      </Text>
       <Text style={styles.titulo}>
Empresa: RN Comercio Varejista S.A – CNPJ 13.481.309/0001-9      </Text>
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
  text: {
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 8,
    margin: 24,

  },
  titulo: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  inf:{
    margin: 24,
    fontSize: 13,
    marginBottom: 16,
  }
  
});
