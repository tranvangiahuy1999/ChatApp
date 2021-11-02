/* eslint-disable prettier/prettier */
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChatScreen from '../screen/ChatScreen';
import Tabs from '../components/Tabs';

const Stack = createNativeStackNavigator();

function MainStackNavigator() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="MainScreen" component={Tabs} />
            <Stack.Screen name="ChatScreen" component={ChatScreen} />
        </Stack.Navigator>
    );
}

export default MainStackNavigator;