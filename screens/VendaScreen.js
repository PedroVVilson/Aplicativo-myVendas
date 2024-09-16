// screens/VendaScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase({ name: 'vendas.db', location: 'default' });

export default function VendaScreen() {
  const [clienteId, setClienteId] = useState('');
  const [produto, setProduto] = useState('');
  const [valor, setValor] = useState('');

  const salvarVenda = () => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS vendas (id INTEGER PRIMARY KEY AUTOINCREMENT, clienteId INTEGER, produto TEXT, valor REAL);',
        []
      );
      tx.executeSql(
        'INSERT INTO vendas (clienteId, produto, valor) VALUES (?, ?, ?)',
        [clienteId, produto, valor],
        (tx, results) => {
          if (results.rowsAffected > 0) {
            alert('Venda registrada com sucesso!');
          }
        },
        error => {
          console.log('Erro ao registrar venda', error);
        }
      );
    });
  };

  return (
    <View style={styles.container}>
      <Text>ID do Cliente</Text>
      <TextInput style={styles.input} value={clienteId} onChangeText={setClienteId} />

      <Text>Produto</Text>
      <TextInput style={styles.input} value={produto} onChangeText={setProduto} />

      <Text>Valor</Text>
      <TextInput style={styles.input} value={valor} onChangeText={setValor} keyboardType="numeric" />

      <Button title="Registrar Venda" onPress={salvarVenda} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
});