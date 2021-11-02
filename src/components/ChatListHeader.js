/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, SearchBar } from 'react-native-elements';

const ChatListHeader = () => {
  const [searchValue, setSearchValue] = useState('');

  const onChangeText = value => {
    setSearchValue(value);
  };

  return (
    <View>
      <View style={styles.header}>
        <Avatar
          containerStyle={styles.userAvatar}
          rounded
          size="small"
          title="U"
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
          }}
        />
        <Text style={styles.headerTitle}>Messages</Text>
      </View>
      <SearchBar
        round={true}
        lightTheme={true}
        value={searchValue}
        onChangeText={onChangeText}
        containerStyle={styles.inputContainer}
        inputStyle={styles.inputStyle}
        inputContainerStyle={styles.inputContainerStyle}
        placeholder="Tìm kiếm tin nhắn"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    padding: 8,
    height: 70,
  },
  userAvatar: {
    marginTop: 'auto',
    marginBottom: 'auto',
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  newMsgIcon: {
    borderRadius: 4,
    backgroundColor: '#e9e9e9',
    justifyContent: 'flex-end',
  },
  iconWrapper: {
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  inputContainer: {
    backgroundColor: 'white',
    borderBottomColor: 'white',
    borderTopColor: 'white',
    marginLeft: 6,
    marginRight: 6,
  },
  inputContainerStyle: {
    height: 40,
    backgroundColor: '#e9e9e9',
  },
  inputStyle: {
    fontSize: 16,
  },
});

export default ChatListHeader;
