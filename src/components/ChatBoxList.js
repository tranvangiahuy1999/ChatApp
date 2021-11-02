/* eslint-disable prettier/prettier */
import React from 'react';
import { View } from 'react-native';
import ChatBoxComponent from './ChatBoxComponent';

const ChatBoxList = ({ navigation }) => {
  const goToChatScreen = () => {
    navigation.navigate("ChatScreen")
  }

  return (
    <View>
      <ChatBoxComponent goToChatScreen={goToChatScreen}></ChatBoxComponent>
      <ChatBoxComponent goToChatScreen={goToChatScreen}></ChatBoxComponent>
      <ChatBoxComponent goToChatScreen={goToChatScreen}></ChatBoxComponent>
      <ChatBoxComponent goToChatScreen={goToChatScreen}></ChatBoxComponent>
      <ChatBoxComponent goToChatScreen={goToChatScreen}></ChatBoxComponent>
      <ChatBoxComponent goToChatScreen={goToChatScreen}></ChatBoxComponent>
      <ChatBoxComponent goToChatScreen={goToChatScreen}></ChatBoxComponent>
      <ChatBoxComponent goToChatScreen={goToChatScreen}></ChatBoxComponent>
      <ChatBoxComponent goToChatScreen={goToChatScreen}></ChatBoxComponent>
    </View>
  );
};

export default ChatBoxList;
