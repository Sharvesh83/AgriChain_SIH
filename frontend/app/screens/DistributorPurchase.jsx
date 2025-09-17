import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import Background from "../components/Background";
import Glass from "../components/Glass";
import { ui } from "../components/UI";

export default function DistributorPurchase() {
  const router = useRouter();
  const [purchase, setPurchase] = useState({
    sourceBatchId: '', quantity: '', price: '', date: ''
  });
  
  const set = (k, v) => setPurchase(s => ({ ...s, [k]: v }));

  return (
    <Background>
      <Glass scrollable>
        <Text style={ui.h1}>Distributor</Text>

        <View style={ui.cameraCard}>
          <Text style={ui.cameraTitle}>📍 GeoTag Camera</Text>
          <Text style={ui.cameraHint}>Capture purchase proof with location</Text>
        </View>

        <Text style={ui.h2}>Purchase Details</Text>
        <TextInput style={ui.input} placeholder="Source Batch ID" value={purchase.sourceBatchId} onChangeText={v => set('sourceBatchId', v)} />
        <TextInput style={ui.input} placeholder="Quantity Purchased (kg)" keyboardType="numeric" value={purchase.quantity} onChangeText={v => set('quantity', v)} />
        <TextInput style={ui.input} placeholder="Price Paid (₹/kg)" keyboardType="numeric" value={purchase.price} onChangeText={v => set('price', v)} />
        <TextInput style={ui.input} placeholder="Purchase Date" value={purchase.date} onChangeText={v => set('date', v)} />

        <View style={ui.row}>
          <TouchableOpacity style={[ui.btnGhost, { flex: 1 }]} onPress={() => router.back()}>
            <Text style={ui.btnTextGhost}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[ui.btn, { flex: 1 }]} onPress={() => router.push('/screens/DistributorOps')}>
            <Text style={ui.btnText}>Next</Text>
          </TouchableOpacity>
        </View>
      </Glass>
    </Background>
  );
}
