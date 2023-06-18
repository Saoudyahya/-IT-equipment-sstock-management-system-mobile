import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import AppStack from './screnns/component/rout';
import SimpleAnimation from './screnns/component/test';
export default function App() {
  return ( 
<AppStack></AppStack>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
