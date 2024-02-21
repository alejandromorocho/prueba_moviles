import React, {useState} from "react";
import {TextInput, View, StyleSheet, Text, Button} from "react-native";


const Traductor = () => {
    const [prompt, setPrompt] = useState('')
    const [result, setResult] = useState('')


    const getResultFromOpenApi = async () => {

        try {
            const response = await fetch('http://localhost:9004/translate', {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({prompt})
            })
            const jsonData = await response.json()
            setResult(`${jsonData.result}`)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {'Ingrese el texto a traducir'}
            </Text>

            <TextInput 
            multiline
            numberOfLines={10}
            value={prompt}
            onChangeText={setPrompt}
            style={styles.input}
            />

            <Button title={'Traducir'} onPress={getResultFromOpenApi}/>
            <Text style={styles.text}>
                {result}
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center'
    },
    input: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        margin: 10
    },
    text: {
        fontSize: 14,
        fontWeight: 'bold'
    }
})

export default Traductor