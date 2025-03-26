import { View, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Button } from "@react-navigation/elements";


function HomeScreen() {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Home Screen</Text>
            <Button onPress={() => navigation.navigate("Details")}>Go to Details</Button>
        </View>
    );
}


export default HomeScreen;