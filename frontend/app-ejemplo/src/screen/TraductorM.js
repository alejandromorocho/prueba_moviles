import React, {useState} from "react";
import {TextInput, View, StyleSheet, Text, Button} from "react-native";


const TraductorM = () => {
    const [prompt, setPrompt] = useState('')
    const [result, setResult] = useState('')
    const [seleccionarIdioma, setIdioma] = useState('')


    const getResultFromOpenApi = async () => {

        try {
            const response = await fetch('http://localhost:9004/translate', {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({prompt, idioma:seleccionarIdioma})
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

            <TextInput style={styles.input} value={prompt} onChangeText={setPrompt}    
            />
            
            <Text style={styles.text}>
                {'Ingrese el idioma'}
            </Text>

            <TextInput style={styles.input} value={seleccionarIdioma} onChangeText={setIdioma}    
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

export default TraductorM