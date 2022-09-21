import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';

import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Moviments from '../../components/Moviments';
import Actions from '../../components/Actions';

const list = [
  {
    id: 1,
    label: 'Internet',
    value: '100,00',
    date: '15/08/2022',
    type: 0 // expense
  },
  {
    id: 2,
    label: 'Home',
    value: '655,00',
    date: '18/08/2022',
    type: 0 // expense
  },
  {
    id: 3,
    label: 'Salary',
    value: '2.500,00',
    date: '21/08/2022',
    type: 1 // balance
  },
];

export default function Home() {
 return (
   <View style={styles.container}>
        <Header name="Joanes Junior" />
        <Balance balance="5.237,27" expenses="-3.574,22" currencySymbol="R$" />

        <Actions />

        <Text style={styles.title}>Ùltimas movimentações</Text>

        <FlatList
          style={styles.list}
          data={list}
          keyExtractor={(item) => String(item.id)}
          showsVerticalScrollIndicator={false}
       renderItem={({ item }) => <Moviments data={item} />}
        />
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      margin: 14
    }
});