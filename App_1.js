import { StyleSheet, Text, TextInput, View, Image } from 'react-native';
import pic from './assets/favicon.png';

const Greeting = (prop) => {
  return (
    <View style={{alignItems: 'center'}} >
      <Text style={{fontSize: 45}}>{prop.name}</Text>
    </View>
  );
};

const LotsOfGreetings = () => {
  return (
    <View style={{alignItems:'center', top: 100}}>
      <Greeting name='Rafael' />
      <Greeting name='Lucas' />
      <Greeting name='Gabriel' />
    </View>
  );
}

const Imagen = () => {
  return (
    <Image source={pic} style={{ width: 193, height: 110, marginTop: 100 }} />
  );
};
export default Imagen;