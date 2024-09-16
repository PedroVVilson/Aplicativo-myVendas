// screens/ClienteScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase({ name: 'clientes.db', location: 'default' });

export default function ClienteScreen() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');

  const salvarCliente = () => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS clientes (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, telefone TEXT);',
        []
      );
      tx.executeSql(
        'INSERT INTO clientes (nome, telefone) VALUES (?, ?)',
        [nome, telefone],
        (tx, results) => {
          if (results.rowsAffected > 0) {
            alert('Cliente salvo com sucesso!');
          }
        },
        error => {
          console.log('Erro ao salvar cliente', error);
        }
      );
    });
  };

  return (
    <View style={styles.container}>
      <Text>Nome do Cliente</Text>
      <TextInput style={styles.input} value={nome} onChangeText={setNome} />

      <Text>Telefone</Text>
      <TextInput style={styles.input} value={telefone} onChangeText={setTelefone} />

      <Button title="Salvar Cliente" onPress={salvarCliente} />
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