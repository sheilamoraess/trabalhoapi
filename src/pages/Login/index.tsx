import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";


export default function Welcome() {
    return (
        <View style={styles.container}>

            <View style={styles.containerLogo}>
                <Image
                    source={require('../../assets/images/avatar.png')}
                    style={{ width: '20%', top: '-30%' }}
                    resizeMode="contain"
                />
                <TouchableOpacity style={styles.button1}>
                    <Text style={styles.textButton1}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button2}>
                    <Text style={styles.textButton2}>Seja assinante</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.containerForm}>
                
                <Text style={styles.text}>Globo Comunicação e Participações S.A.</Text>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: 'grey',
    },
    containerLogo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerForm: {
        flex: 2,
        backgroundColor: '#2b2a2a',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    text: {
        fontSize: 12,
        marginTop: 400,
        marginBottom: 12,
        color: 'white',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    textButton1: {
        fontSize: 16,
        color: 'black',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    button1: {
        position: 'absolute',
        backgroundColor: 'white',
        borderRadius: 10,
        paddingVertical: 10,
        width: '60%',
        alignSelf: 'center',
        bottom: '30%',
    },
    textButton2: {
        fontSize: 16,
        color: 'white',
        justifyContent: 'center',
        alignSelf: 'center',
    },

    button2: {
        position: 'absolute',
        backgroundColor: 'red',
        borderRadius: 10,
        paddingVertical: 10,
        width: '60%',
        alignSelf: 'center',
        bottom: '5%',
    },
})