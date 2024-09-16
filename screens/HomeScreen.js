// screens/HomeScreen.js
import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="Cadastro de Clientes"
        onPress={() => navigation.navigate('Clientes')}
      />
      <Button
        title="Registro de Vendas"
        onPress={() => navigation.navigate('Vendas')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});
