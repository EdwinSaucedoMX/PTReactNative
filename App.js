import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import UserContainer from './src/components/UserContainer';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <UserContainer />
    </View>
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
