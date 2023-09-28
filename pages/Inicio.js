import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react'
import 'react-native-gesture-handler';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>bienvenido a la lista de cursos y estudiantes de, por favor seleccione la opcion que desea desarrollar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
