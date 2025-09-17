// app/LoginScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { BlurView } from 'expo-blur';
import { useRouter } from 'expo-router';
import { Pressable } from 'react-native';

export default function LoginScreen() {
  const router = useRouter();
  const [id, setId] = useState('');
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ImageBackground
      source={require('../assets/AgriBackdrop2.png')}
      style={styles.bg}
      resizeMode="cover"
    >
      <KeyboardAvoidingView
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <BlurView intensity={36} tint="light" style={styles.glass}>
          <Text style={styles.title}>Login</Text>
          <Text style={styles.label}>Id:</Text>
          <TextInput
            value={id}
            onChangeText={setId}
            placeholder="Enter your Id"
            placeholderTextColor="#2f2f2f"
            style={styles.input}
          />
          <Text style={styles.label}>Role:</Text>
          <TextInput
            value={role}
            onChangeText={setRole}
            placeholder="Enter your role"
            placeholderTextColor="#2f2f2f"
            style={styles.input}
          />
          <Text style={styles.label}>Password:</Text>
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Enter your password"
            secureTextEntry
            placeholderTextColor="#2f2f2f"
            style={styles.input}
          />

          <Pressable style={styles.loginBtn} android_ripple={{ color: '#204b24' }}>
            <Text style={styles.loginText}>Login</Text>
          </Pressable>
        </BlurView>

        <Pressable
          style={styles.registerBtn}
          android_ripple={{ color: '#204b24' }}
          onPress={() => router.push('/RegistrationScreen')}
        >
          <Text style={styles.registerText}>Register</Text>
        </Pressable>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  glass: {
    width: '90%',
    maxWidth: 380,
    borderRadius: 28,
    paddingVertical: 22,
    paddingHorizontal: 18,
    alignItems: 'flex-start',
    backgroundColor: 'rgba(255,255,255,0.16)',
    shadowColor: '#1a1a1a',
    shadowOpacity: 0.14,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 16,
    marginBottom: 22,
    borderWidth: 1,
    borderColor: 'rgba(180,180,180,0.16)',
  },
  title: {
    fontSize: 37,
    fontWeight: 'bold',
    alignSelf: 'center',
    width: '100%',
    color: '#13380d',
    marginBottom: 12,
    letterSpacing: 1,
    textAlign: 'center',
  },
  label: {
    marginTop: 13,
    fontWeight: 'bold',
    fontSize: 21,
    color: '#13380d',
    marginBottom: 3,
  },
  input: {
    width: '100%',
    fontSize: 17,
    backgroundColor: 'rgba(255,255,255,0.38)',
    borderRadius: 12,
    paddingHorizontal: 13,
    paddingVertical: 9,
    marginBottom: 1,
    color: '#111',
    borderWidth: 1,
    borderColor: 'rgba(180,180,180,0.13)',
    shadowColor: '#eee',
    shadowOpacity: 0.09,
    shadowRadius: 2,
  },
  loginBtn: {
    width: '100%',
    backgroundColor: '#13380d',
    borderRadius: 22,
    marginTop: 21,
    alignItems: 'center',
    paddingVertical: 10,
    shadowColor: '#204b24',
    shadowOpacity: 0.14,
    shadowRadius: 8,
  },
  loginText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 23,
    letterSpacing: 0.6,
  },
  registerBtn: {
    width: '67%',
    backgroundColor: '#13380d',
    borderRadius: 19,
    alignItems: 'center',
    alignSelf: 'center',
    paddingVertical: 10,
    marginTop: 10,
    marginBottom: 12,
    shadowColor: '#204b24',
    shadowOpacity: 0.14,
    shadowRadius: 8,
  },
  registerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 19,
    letterSpacing: 0.5,
  },
});
