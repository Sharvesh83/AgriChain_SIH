import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import Background from './components/Background';
import Glass from './components/Glass';
import { ui } from './components/UI';

export default function RegistrationScreen() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: '', role: '', mobile: '', aadhar: '', business: '',
    town: '', city: '', state: '', password: '', confirm: ''
  });
  
  const set = (k, v) => setForm(s => ({ ...s, [k]: v }));

  return (
    <Background>
      <Glass scrollable>
        <Text style={ui.h1}>Create Account</Text>
        
        <Text style={ui.h2}>Personal Information</Text>
        <TextInput style={ui.input} placeholder="Full Name" value={form.name} onChangeText={v => set('name', v)} />
        <TextInput style={ui.input} placeholder="Role (Farmer/Distributor/Retailer)" value={form.role} onChangeText={v => set('role', v)} />
        <TextInput style={ui.input} placeholder="Mobile Number" keyboardType="phone-pad" value={form.mobile} onChangeText={v => set('mobile', v)} />
        <TextInput style={ui.input} placeholder="Aadhar Number" keyboardType="number-pad" value={form.aadhar} onChangeText={v => set('aadhar', v)} />
        <TextInput style={ui.input} placeholder="Business Name (Optional)" value={form.business} onChangeText={v => set('business', v)} />

        <Text style={ui.h2}>Location</Text>
        <TextInput style={ui.input} placeholder="Town/Village" value={form.town} onChangeText={v => set('town', v)} />
        <TextInput style={ui.input} placeholder="City" value={form.city} onChangeText={v => set('city', v)} />
        <TextInput style={ui.input} placeholder="State" value={form.state} onChangeText={v => set('state', v)} />

        <Text style={ui.h2}>Security</Text>
        <TextInput style={ui.input} placeholder="New Password" secureTextEntry value={form.password} onChangeText={v => set('password', v)} />
        <TextInput style={ui.input} placeholder="Confirm Password" secureTextEntry value={form.confirm} onChangeText={v => set('confirm', v)} />

        <TouchableOpacity style={ui.btn} onPress={() => router.push('/LoginScreen')}>
          <Text style={ui.btnText}>Create Account</Text>
        </TouchableOpacity>

        <TouchableOpacity style={ui.btnGhost} onPress={() => router.back()}>
          <Text style={ui.btnTextGhost}>Back to Login</Text>
        </TouchableOpacity>
      </Glass>
    </Background>
  );
}
