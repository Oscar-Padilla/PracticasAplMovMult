import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Button } from '@react-navigation/elements';
import { NativeBaseProvider, useColorMode, useColorModeValue, Center, Box } from 'native-base';


function UseColorMode() {
    const {
        toggleColorMode
    } = useColorMode();
    const text = useColorModeValue("Light", "Dark");
    // const bg = useColorModeValue("warmGray.50", "coolGray.800");
    return <Center>
        <Box p="4" flex="1" maxW="300" w="100%" mt={10} safeArea>
          <Text fontSize="lg" display="flex" mb={20}>
            The active color mode is{" "}
            <Text bold fontSize="18px">
              {text}
            </Text>
          </Text>
          <Button onPress={toggleColorMode} h={10}>
            Toggle
          </Button>
        </Box>
      </Center>;
  }

const SettingsScreen = () => {
    const bg = useColorModeValue("warmGray.50", "coolGray.800");
    return (
        <NativeBaseProvider>
            <Center flex={1} px="3" bg={bg}>
                <UseColorMode />
            </Center>
        </NativeBaseProvider>
    )
}



// function SettingsScreen() {
//     const navigation = useNavigation();
//     return (
//         <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//             <Text>Settings Screen</Text>
//             <Button onPress={() => navigation.push("Home")}>Go to Home</Button>
//             <Button onPress={() => navigation.popTo("Details")}>Go to Details</Button>
//             <Button onPress={() => navigation.goBack()}>Go back</Button>
//         </View>
//     );
// }

export default SettingsScreen;