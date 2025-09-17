import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import Background from "../components/Background";
import Glass from "../components/Glass";
import { ui } from "../components/UI";

export default function FarmerForm() {
  const router = useRouter();
  const [profile, setProfile] = useState({ name: '', contact: '', address: '', gps: '' });
  const [batch, setBatch] = useState({ cropType: '', variety: '', seedDate: '', harvestDate: '', weight: '', grade: '' });
  
  const setP = (k, v) => setProfile(s => ({ ...s, [k]: v }));
  const setB = (k, v) => setBatch(s => ({ ...s, [k]: v }));

  return (
    <Background>
      <Glass scrollable>
        <Text style={ui.h1}>Farmer</Text>

        <View style={ui.cameraCard}>
          <Text style={ui.cameraTitle}>📷 Camera</Text>
          <Text style={ui.cameraHint}>Upload produce photo with geotag</Text>
        </View>

        <Text style={ui.h2}>Profile Information</Text>
        <TextInput style={ui.input} placeholder="Farmer Name" value={profile.name} onChangeText={v => setP('name', v)} />
        <TextInput style={ui.input} placeholder="Contact Number" keyboardType="phone-pad" value={profile.contact} onChangeText={v => setP('contact', v)} />
        <TextInput style={ui.input} placeholder="Farm Address" value={profile.address} onChangeText={v => setP('address', v)} />
        <TextInput style={ui.input} placeholder="GPS Coordinates (lat,lng)" value={profile.gps} onChangeText={v => setP('gps', v)} />

        <Text style={ui.h2}>Harvest Batch Details</Text>
        <TextInput style={ui.input} placeholder="Crop Type (e.g., Rice, Tomato)" value={batch.cropType} onChangeText={v => setB('cropType', v)} />
        <TextInput style={ui.input} placeholder="Variety (e.g., Basmati 1121)" value={batch.variety} onChangeText={v => setB('variety', v)} />
        <TextInput style={ui.input} placeholder="Seed Sown Date" value={batch.seedDate} onChangeText={v => setB('seedDate', v)} />
        <TextInput style={ui.input} placeholder="Harvest Date" value={batch.harvestDate} onChangeText={v => setB('harvestDate', v)} />
        <TextInput style={ui.input} placeholder="Total Weight (kg)" keyboardType="numeric" value={batch.weight} onChangeText={v => setB('weight', v)} />
        <TextInput style={ui.input} placeholder="Quality Grade (A/B/C)" value={batch.grade} onChangeText={v => setB('grade', v)} />

        <View style={ui.row}>
          <TouchableOpacity style={[ui.btnGhost, { flex: 1 }]} onPress={() => router.back()}>
            <Text style={ui.btnTextGhost}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[ui.btn, { flex: 1 }]} onPress={() => router.push('/screens/FarmerDetails')}>
            <Text style={ui.btnText}>Next</Text>
          </TouchableOpacity>
        </View>
      </Glass>
    </Background>
  );
}
