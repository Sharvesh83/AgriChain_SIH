import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import Background from "../components/Background";
import Glass from "../components/Glass";
import { ui } from "../components/UI";

export default function FarmerDashboard() {
  const router = useRouter();
  
  const batches = [
    { id: "BATCH1001", crop: "Rice • Basmati 1121", grade: "A", harvest: "2025-09-15", weight: 500, sold: 120 },
    { id: "BATCH0999", crop: "Maize • QPM", grade: "B", harvest: "2025-09-12", weight: 300, sold: 0 },
  ];
  
  const totalVolume = batches.reduce((s, b) => s + b.weight, 0);
  const lotsSold = batches.reduce((s, b) => s + (b.sold > 0 ? 1 : 0), 0);

  return (
    <Background>
      <Glass scrollable>
        <Text style={ui.h1}>Farmer Dashboard</Text>
        
        <View style={ui.statsCard}>
          <Text style={ui.cardTitle}>User Summary</Text>
          <Text style={ui.cardMeta}>Name: Saravanan R</Text>
          <Text style={ui.cardMeta}>User ID: 202500111</Text>
          <Text style={ui.cardMeta}>Role: Farmer</Text>
          <Text style={ui.cardMeta}>Location: Annur, Erode</Text>
          <Text style={ui.cardMeta}>Active Batches: {batches.length}</Text>
          <Text style={ui.cardMeta}>Total Produce Listed: {totalVolume}kg</Text>
        </View>

        <TouchableOpacity style={ui.btn} onPress={() => router.push('/screens/FarmerForm')}>
          <Text style={ui.btnText}>Create New Batch</Text>
        </TouchableOpacity>

        <Text style={ui.h2}>Batch History</Text>
        {batches.map(b => (
          <View key={b.id} style={ui.card}>
            <Text style={ui.cardTitle}>{b.harvest} — {b.crop}</Text>
            <Text style={ui.cardMeta}>{b.id} • Grade {b.grade} • {b.weight}kg</Text>
            <Text style={ui.cardMeta}>Remaining: {b.weight - b.sold}kg</Text>
          </View>
        ))}

        <TouchableOpacity style={ui.btnGhost} onPress={() => router.push('/LoginScreen')}>
          <Text style={ui.btnTextGhost}>Logout</Text>
        </TouchableOpacity>
      </Glass>
    </Background>
  );
}
