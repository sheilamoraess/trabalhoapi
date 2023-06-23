import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from '../../components/Header'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey',
    },

});


export default function Home() {
    return (
        <View style={styles.container}>
            <Header name="globoplay" />
            <Text>Página home</Text>
        </View>
    );


}