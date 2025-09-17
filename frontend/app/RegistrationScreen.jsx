// app/RegistrationScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
export default function RegistrationScreen() {
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: 'bold', fontSize: 25 }}>Registration Page</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
