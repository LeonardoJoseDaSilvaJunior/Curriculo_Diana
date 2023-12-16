import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Corrigido aqui
import { Card } from 'react-native-paper';

// ou qualquer outro arquivo dentro do Snack

import HomeScreen  from './components/home';
import ObjetivoScreen from './components/objetivos';
import FormacaoScreen from './components/formacao';
import ExperienciaScreen from './components/Experiencia';
const Stack = createNativeStackNavigator(); 
// páginas do App


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
       <Stack.Screen name="Curriculo" component={HomeScreen}/>
       <Stack.Screen name="Objetivos" component={ObjetivoScreen} />
       <Stack.Screen name="Formação" component={FormacaoScreen} />
       <Stack.Screen name="Experiências" component={ExperienciaScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


 

