import React, {useState} from "react";
import {TextInput, View, StyleSheet, Text, Button} from "react-native";


const Chat = () => {
    //useState gestiona 2 estados en el componente
    //prompt almacena el número ingresado por el usuario
    //result almacena el resultado de la conversión a binario.
    const [prompt, setPrompt] = useState('') 
    const [result, setResult] = useState('')


    //Esta función realiza una llamada a la API utilizando el método POST
    //En body, se envía un objeto JSON que contiene el número ingresado(prompt)
    //se procesa la respuesta JSON y se actualiza el estado result con el resultado de la conversión
    const getResultFromOpenApi = async () => {
        try {
            const response = await fetch('http://localhost:9004/openapi', {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({prompt})
            })
            const jsonData = await response.json()
            setResult(`${jsonData.result} y los token utilizados fueron ${jsonData.token} `)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {'Ingrese El numero que desea convertir a binario'}
            </Text>
            <TextInput style={styles.input} value={prompt} onChangeText={setPrompt}/>
            <Button title={'Enviar'} onPress={getResultFromOpenApi}/>
            <Text style={styles.text}>
                {result}
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center", //expansion
        justifyContent: 'center' //arriba o abajo
    },
    input: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        margin: 10
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default Chat