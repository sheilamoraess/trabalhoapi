import React from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from '../pages/Home'
import SignIn from '../pages/Login'

const Stack = createNativeStackNavigator();

export default function Routes() {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Welcome}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Login"
                component={SignIn}
                options={{headerShown: false}}
            />

        </Stack.Navigator>
    )
}
