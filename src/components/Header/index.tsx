import React from "react";
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from "react-native";
import {Feather} from '@expo/vector-icons';

const StatusBarHeight = StatusBar.currentHeight

export default function Header({name}){
    return(
        <View style={styles.container}>
           <View style={styles.content}>
            <Text style={styles.marca}>{name}</Text>

            <TouchableOpacity style={styles.buttonUser}>
            <Feather name="user" size={27} color='white' />

            </TouchableOpacity>

           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'black',
        paddingTop: StatusBarHeight,
        flexDirection: 'row',
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 44,
    },
    content:{
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    marca:{
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
        letterSpacing: 2,
    },
    buttonUser:{
        width: 44,
        height: 44,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 44 / 2,
    }
}
)