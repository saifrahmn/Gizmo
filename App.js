import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from "react-native-login-screen";

export default function App() {
  return (
    <View style={styles.container}>
      <Text> These is akola</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B2447',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
