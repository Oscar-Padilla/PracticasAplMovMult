import { Switch, Toast, VStack, Text, Center, NativeBaseProvider} from "native-base"

const Config2 = () => {
    return <VStack space={1} alignItems="bottom">
        <Text fontSize="lg">Depuracion USB</Text>
        <Switch
            defaultIsChecked
            colorScheme="primary"
            onToggle={()=> Toast.show({
                title: "Depuracion USB activada",
                placement: "bottom",
            })}
        />
        <Text fontSize="lg">Wi-fi</Text>
        <Switch
            defaultIsChecked
            colorScheme="secondary"
            onToggle={()=> Toast.show({
                title: "Red inalámbrica conectada",
                placement: "bottom",
            })}
        />
        <Switch
            defaultIsChecked
            colorScheme="emerald"
        />
    </VStack>
}

function ConfigScreen2() {
    <NativeBaseProvider>
        <Center flex={1} px="3">
            <Config2 />
        </Center>
    </NativeBaseProvider>
}
export default ConfigScreen2;
