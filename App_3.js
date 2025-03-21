import { useState } from 'react'
import { View, Text, Button } from 'react-native';

export default function App() {
    const [count, setCount] = useState(0);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>{count}</Text>
            <Button
                title="Press me"
                onPress={() => setCount(count + 1)}
            />
        </View>
    );
}