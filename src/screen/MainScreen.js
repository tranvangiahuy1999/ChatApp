/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import ChatListHeader from '../components/ChatListHeader';
import ChatBoxList from '../components/ChatBoxList';

const MainScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <ChatListHeader></ChatListHeader>
      <ChatBoxList navigation={navigation}></ChatBoxList>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
  },
});

export default MainScreen;
