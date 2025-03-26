import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Button } from '@react-navigation/elements';

function SettingsScreen() {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Settings Screen</Text>
            <Button onPress={() => navigation.push("Home")}>Go to Home</Button>
            <Button onPress={() => navigation.popTo("Details")}>Go to Details</Button>
            <Button onPress={() => navigation.goBack()}>Go back</Button>
        </View>
    );
}

export default SettingsScreen;