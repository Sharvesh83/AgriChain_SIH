import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import Background from "../components/Background";
import Glass from "../components/Glass";
import { ui } from "../components/UI";

export default function FarmerDetails() {
  const router = useRouter();
  const [notes, setNotes] = useState('');

  const batch = {
    id: "BATCH1001",
    crop: "Rice — Basmati 1121",
    seed: "2025-06-01",
    harvest: "2025-09-15",
    weight: 500,
    grade: "A",
    gps: "11.012,77.001"
  };

  return (
    <Background>
      <Glass scrollable>
        <Text style={ui.h1}>Farmer</Text>

        <View style={ui.cameraCard}>
          <Text style={ui.cameraTitle}>📍 GeoTag Photo</Text>
          <Text style={ui.cameraHint}>Photo with GPS for traceability</Text>
        </View>

        <Text style={ui.h2}>Batch Summary</Text>
        <View style={ui.card}>
          <Text style={ui.cardTitle}>Batch ID: {batch.id}</Text>
          <Text style={ui.cardMeta}>Crop: {batch.crop}</Text>
          <Text style={ui.cardMeta}>Seed Date: {batch.seed}</Text>
          <Text style={ui.cardMeta}>Harvest Date: {batch.harvest}</Text>
          <Text style={ui.cardMeta}>Weight: {batch.weight}kg</Text>
          <Text style={ui.cardMeta}>Grade: {batch.grade}</Text>
          <Text style={ui.cardMeta}>GPS: {batch.gps}</Text>
        </View>

        <Text style={ui.h2}>Additional Information</Text>
        <TextInput 
          style={[ui.input, ui.inputLarge]} 
          placeholder="Notes / Description" 
          value={notes} 
          onChangeText={setNotes} 
          multiline 
        />

        <TouchableOpacity style={ui.btn} onPress={() => router.push('/screens/DistributorPurchase')}>
          <Text style={ui.btnText}>Deploy Batch</Text>
        </TouchableOpacity>

        <TouchableOpacity style={ui.btnGhost} onPress={() => router.push('/screens/FarmerDashboard')}>
          <Text style={ui.btnTextGhost}>Back to Dashboard</Text>
        </TouchableOpacity>
      </Glass>
    </Background>
  );
}
