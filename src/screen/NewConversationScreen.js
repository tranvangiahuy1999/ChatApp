/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, ScrollView } from 'react-native'
import { Icon, SearchBar, Button } from 'react-native-elements'
import UserCard from '../components/UserCard'

const NewConversationScreen = ({ navigation }) => {
    const [searchValue, setSearchValue] = useState('');

    const backHandle = () => {
        navigation.navigate('ChatList')
    }

    const onChangeText = (value) => {
        setSearchValue(value)
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <View style={{ width: '60%', flexDirection: 'row' }}>
                    <TouchableOpacity onPress={backHandle} style={styles.backIconWrapper}>
                        <Icon name='arrow-back' />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>New message</Text>
                </View>
                <View style={{ width: '40%', flexDirection: 'row-reverse' }}>
                    <Button
                        title="Tạo tin nhắn"
                        type="clear"
                        buttonStyle={{ marginTop: 'auto', marginBottom: 'auto', }}
                    />
                </View>
            </View>
            <SearchBar
                round={true}
                lightTheme={true}
                value={searchValue}
                onChangeText={onChangeText}
                containerStyle={styles.inputContainer}
                inputStyle={styles.inputStyle}
                inputContainerStyle={styles.inputContainerStyle}
                placeholder="Tìm kiếm người dùng"
            />
            <View style={styles.userListContainer}>
                <Text>Suggested</Text>
                <View style={styles.userCardList}>
                    <UserCard></UserCard>
                    <UserCard></UserCard>
                    <UserCard></UserCard>
                    <UserCard></UserCard>
                    <UserCard></UserCard>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },
    header: {
        flexDirection: 'row',
        flex: 1,
        padding: 8,
        height: 70,
    },
    backIconWrapper: {
        marginTop: 'auto',
        marginBottom: 'auto',
        marginRight: 14
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black',
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
    userListContainer: {
        padding: 8,
    },
    userCardList: {
        marginTop: 4,
    }
});

export default NewConversationScreen