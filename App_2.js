import { useState } from 'react'
import { View } from 'react-native'
import { TextInput, StyleSheet, Text} from 'react-native'

export default function App() {
    const [message, setMessage] = useState("")

    return (
        <View style={styles.container}>
            <Text>{message}</Text>
            <TextInput
                style={styles.input}
                value={message}
                placeholder='Escribe un mensaje'
                onChangeText={(text) => setMessage(text)}
                onSubmitEditing={() => alert(message)}
            />
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        fontSize: 20,
        color: '#228b22',
        fontWeight: 'bold'
    },
});