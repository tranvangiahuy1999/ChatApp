/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Avatar, Icon, Accessory } from 'react-native-elements'

const SettingsScreen = ({ navigation }) => {
    const backHandle = () => {
        navigation.navigate('ChatList')
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={backHandle} style={styles.backIconWrapper}>
                    <Icon name='arrow-back' />
                </TouchableOpacity>
            </View>
            <View>
                <View style={styles.avatarWrapper}>
                    <Avatar
                        avatarStyle={styles.avatar}
                        rounded
                        size='large'
                        source={{
                            uri: 'https://www.w3schools.com/howto/img_avatar2.png',
                        }}
                    >
                        <Accessory size={18} />
                    </Avatar>
                </View>

                <Text numberOfLines={1} style={styles.userName}>Marcus</Text>
            </View>
            <View style={styles.optionWrapper}>
                <Text style={{ fontWeight: 'bold' }}>Profile</Text>
                <TouchableOpacity>
                    <View style={styles.optionRow}>
                        <Icon name='person-outline' size={24} style={styles.icon} color='white'></Icon>
                        <Text style={styles.optionText}>Thay đổi thông tin</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.optionRow}>
                        <Icon name='logout' size={24} style={{ borderRadius: 50, padding: 6, backgroundColor: 'gray' }} color='white'></Icon>
                        <Text style={styles.optionText}>Đăng xuất</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    header: {
        padding: 8,
        height: 50,
        flexDirection: 'row',
    },
    backIconWrapper: {
        marginTop: 'auto',
        marginBottom: 'auto',
    },
    userName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 8,
    },
    avatar: {
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    avatarWrapper: {
        alignSelf: 'baseline',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    optionWrapper: {
        padding: 8,
    },
    icon: {
        borderRadius: 50,
        backgroundColor: '#039be5',
        padding: 6,
    },
    optionRow: {
        flexDirection: 'row',
        marginTop: 12,
    },
    optionText: {
        fontSize: 18,
        marginTop: 'auto',
        marginBottom: 'auto',
        marginLeft: 10,
    }
})

export default SettingsScreen