import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import Background from './components/Background';
import Glass from './components/Glass';
import { ui } from './components/UI';

export default function LoginScreen() {
  const router = useRouter();
  const [id, setId] = useState('');
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const r = role.trim().toLowerCase();
    if (r === 'farmer') router.push('/screens/FarmerDashboard');
    else if (r === 'distributor' || r === 'wholesaler') router.push('/screens/DistributorDashboard');
    else if (r === 'retailer') router.push('/screens/RetailerDashboard');
    else router.push('/screens/FarmerDashboard');
  };

  return (
    <Background>
      <Glass>
        <Text style={ui.h1}>Login</Text>
        
        <Text style={ui.label}>ID:</Text>
        <TextInput
          value={id}
          onChangeText={setId}
          placeholder="Enter your ID"
          placeholderTextColor="#666"
          style={ui.input}
          autoCapitalize="none"
        />
        
        <Text style={ui.label}>Role:</Text>
        <TextInput
          value={role}
          onChangeText={setRole}
          placeholder="Farmer / Distributor / Retailer"
          placeholderTextColor="#666"
          style={ui.input}
          autoCapitalize="none"
        />
        
        <Text style={ui.label}>Password:</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
          secureTextEntry
          placeholderTextColor="#666"
          style={ui.input}
        />

        <TouchableOpacity style={ui.btn} onPress={handleLogin}>
          <Text style={ui.btnText}>Login</Text>
        </TouchableOpacity>

        <View style={ui.spacer} />

        <TouchableOpacity style={ui.btnGhost} onPress={() => router.push('/RegistrationScreen')}>
          <Text style={ui.btnTextGhost}>Register</Text>
        </TouchableOpacity>
      </Glass>
    </Background>
  );
}
