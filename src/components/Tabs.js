/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from '../screen/MainScreen';
import NewConversationScreen from '../screen/NewConversationScreen';
import SettingsScreen from '../screen/SettingsScreen';

const Tab = createBottomTabNavigator();

const CustomTabButton = ({ children, onPress }) => (
    <TouchableOpacity onPress={onPress} style={{ top: -24, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: 35 }}>
        <View style={{ width: 60, height: 60, borderRadius: 35, backgroundColor: '#039be5', margin: 6 }}>
            {children}
        </View>
    </TouchableOpacity>
)

const Tabs = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: {
                position: 'absolute',
                elevation: 0,
                backgroundColor: 'white',
                height: 60,
                borderTopColor: 'lightgray',
                borderTopWidth: 1
            },
            headerShown: false,
        }}>
            <Tab.Screen name="ChatList" component={MainScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={styles.tabWrapper}>
                        <Icon name='chat' color={focused ? '#039be5' : 'gray'} />
                        <Text style={{ color: focused ? '#039be5' : 'gray', fontSize: 12 }}>
                            CHAT
                        </Text>
                    </View>

                )
            }} />

            <Tab.Screen name="NewConversation" component={NewConversationScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <Icon name='add' color='white' size={40} />
                ),
                tabBarButton: (props) => (
                    <CustomTabButton {...props}></CustomTabButton>
                )
            }} />

            <Tab.Screen name="Settings" component={SettingsScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={styles.tabWrapper}>
                        <Icon name='settings' color={focused ? '#039be5' : 'gray'} />
                        <Text style={{ color: focused ? '#039be5' : 'gray', fontSize: 12 }}>
                            SETTINGS
                        </Text>
                    </View>
                )
            }} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    tabWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default Tabs