import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import Background from "../components/Background";
import Glass from "../components/Glass";
import { ui } from "../components/UI";

export default function DistributorProfile() {
  const router = useRouter();
  const [profile, setProfile] = useState({ name: '', license: '', contact: '' });
  const set = (k, v) => setProfile(s => ({ ...s, [k]: v }));

  return (
    <Background>
      <Glass scrollable>
        <Text style={ui.h1}>Business Profile</Text>
        
        <Text style={ui.h2}>Company Information</Text>
        <TextInput style={ui.input} placeholder="Business Name" value={profile.name} onChangeText={v => set('name', v)} />
        <TextInput style={ui.input} placeholder="License Number" value={profile.license} onChangeText={v => set('license', v)} />
        <TextInput style={ui.input} placeholder="Contact Details" value={profile.contact} onChangeText={v => set('contact', v)} />

        <TouchableOpacity style={ui.btn} onPress={() => router.push('/screens/DistributorDashboard')}>
          <Text style={ui.btnText}>Save Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={ui.btnGhost} onPress={() => router.back()}>
          <Text style={ui.btnTextGhost}>Back</Text>
        </TouchableOpacity>
      </Glass>
    </Background>
  );
}
