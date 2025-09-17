import React from 'react';
import { ImageBackground, KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';

export default function Background({ children }) {
  return (
    <ImageBackground
      source={require('../../assets/AgriBackdrop2.png')}
      style={styles.bg}
      resizeMode="cover"
    >
      <KeyboardAvoidingView
        style={styles.kav}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        {children}
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1, width: '100%', height: '100%' },
  kav: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 14 },
});
