import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import Background from "../components/Background";
import Glass from "../components/Glass";
import { ui } from "../components/UI";

export default function RetailerDashboard() {
  const router = useRouter();
  
  const inventory = [
    { 
      product: "Rice", 
      batchId: "BATCH1001", 
      origin: "Farmer 202500111", 
      harvest: "2025-09-15", 
      grade: "A", 
      qty: 120, 
      cost: "₹45/kg", 
      sell: "₹52/kg" 
    },
  ];

  return (
    <Background>
      <Glass scrollable>
        <Text style={ui.h1}>Retail Inventory</Text>

        <Text style={ui.h2}>Current Stock</Text>
        {inventory.map(item => (
          <View key={item.batchId} style={ui.card}>
            <Text style={ui.cardTitle}>{item.product} — {item.qty}kg</Text>
            <Text style={ui.cardMeta}>Origin: {item.origin}</Text>
            <Text style={ui.cardMeta}>Harvest: {item.harvest} • Grade {item.grade}</Text>
            <Text style={ui.cardMeta}>Cost: {item.cost} • Selling: {item.sell}</Text>
          </View>
        ))}

        <View style={ui.row}>
          <TouchableOpacity style={[ui.btn, { flex: 1 }]} onPress={() => router.push('/screens/RetailerReceive')}>
            <Text style={ui.btnText}>Receive Stock</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[ui.btnSecondary, { flex: 1 }]} onPress={() => router.push('/screens/RetailerQR')}>
            <Text style={ui.btnText}>Store QR</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={ui.btnGhost} onPress={() => router.push('/LoginScreen')}>
          <Text style={ui.btnTextGhost}>Logout</Text>
        </TouchableOpacity>
      </Glass>
    </Background>
  );
}
