/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';

const ChatBoxComponent = (props) => {
  return (
    <TouchableOpacity onPress={props.goToChatScreen}>
      <View style={styles.header}>
        <View style={styles.avatarWrapper}>
          <Avatar
            containerStyle={styles.userAvatar}
            avatarStyle={styles.avatar}
            source={{
              uri: 'https://toigingiuvedep.vn/wp-content/uploads/2021/01/anh-avatar-cho-con-gai-cuc-dep.jpg',
            }}
          />
        </View>
        <View style={styles.msgContentWrapper}>
          <Text numberOfLines={1} style={styles.receiverName}>
            Your name
          </Text>
          <Text numberOfLines={1} style={styles.lastMsgPreview}>
            This is my last msg here. Please reply, don't seen my msg like that
          </Text>
        </View>
        <View style={styles.timeReceiveMsg}>
          <Text numberOfLines={1} style={styles.timeText}>
            Thu
          </Text>
          <Text numberOfLines={1} style={styles.timeText}>
            2m
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    padding: 10,
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  avatar: {
    borderRadius: 10,
  },
  userAvatar: {
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  avatarWrapper: {
    width: '14%',
  },
  msgContentWrapper: {
    width: '76%',
    margin: 'auto',
    paddingLeft: 4,
    paddingRight: 4,
  },
  receiverName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  lastMsgPreview: {
    fontSize: 14,
  },
  timeReceiveMsg: {
    width: '10%',
    margin: 'auto',
    textAlign: 'right',
  },
  timeText: {
    fontSize: 12,
    padding: 4,
  },
});

export default ChatBoxComponent;
