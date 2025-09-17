import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import Background from "../components/Background";
import Glass from "../components/Glass";
import { ui } from "../components/UI";

export default function RetailerProfile() {
  const router = useRouter();
  const [profile, setProfile] = useState({ name: '', location: '', contact: '' });
  const set = (k, v) => setProfile(s => ({ ...s, [k]: v }));

  return (
    <Background>
      <Glass scrollable>
        <Text style={ui.h1}>Store Profile</Text>
        
        <Text style={ui.h2}>Store Information</Text>
        <TextInput style={ui.input} placeholder="Store Name" value={profile.name} onChangeText={v => set('name', v)} />
        <TextInput style={ui.input} placeholder="Location" value={profile.location} onChangeText={v => set('location', v)} />
        <TextInput style={ui.input} placeholder="Contact Details" value={profile.contact} onChangeText={v => set('contact', v)} />

        <TouchableOpacity style={ui.btn} onPress={() => router.push('/screens/RetailerDashboard')}>
          <Text style={ui.btnText}>Save Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={ui.btnGhost} onPress={() => router.back()}>
          <Text style={ui.btnTextGhost}>Back</Text>
        </TouchableOpacity>
      </Glass>
    </Background>
  );
}
