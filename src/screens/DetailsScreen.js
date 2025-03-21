import { View, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Button } from "@react-navigation/elements";

function DetailsScreen({route}) {
    const navigation = useNavigation();

    const {itemId, otherParam} = route.params;
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Details Screen</Text>
            <Text>itemId: {JSON.stringify(itemId)}</Text>
            <Text>otherParam: {JSON.stringify(otherParam)}</Text>

            <Button onPress={() => navigation.push("Details", {
                itemId: Math.floor(Math.random() * 100),
            })}>Go to Details... again</Button>
            <Button onPress={() => navigation.goBack()}>Go back</Button>
            <Button onPress={() => navigation.popTo("Home")}>Go to Home</Button>
            <Button onPress={() => navigation.push("Settings")}>Go to Settings</Button>
            <Button onPress={() => navigation.popToTop()}>Go back to first screen in stack</Button>
        </View>
    );
}

export default DetailsScreen;