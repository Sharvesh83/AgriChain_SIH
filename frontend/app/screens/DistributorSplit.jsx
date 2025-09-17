import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import Background from "../components/Background";
import Glass from "../components/Glass";
import { ui } from "../components/UI";

export default function DistributorSplit() {
  const router = useRouter();
  const [lot, setLot] = useState({
    product: '', qty: '', batchId: '', lotId: '', retailerId: '', price: '', date: ''
  });
  
  const set = (k, v) => setLot(s => ({ ...s, [k]: v }));

  return (
    <Background>
      <Glass scrollable>
        <Text style={ui.h1}>Retailer</Text>

        <View style={ui.cameraCard}>
          <Text style={ui.cameraTitle}>📍 GeoTag Camera</Text>
          <Text style={ui.cameraHint}>Record split operation with location</Text>
        </View>

        <Text style={ui.h2}>Lot Details</Text>
        <TextInput style={ui.input} placeholder="Product" value={lot.product} onChangeText={v => set('product', v)} />
        <TextInput style={ui.input} placeholder="Quantity (kg)" keyboardType="numeric" value={lot.qty} onChangeText={v => set('qty', v)} />
        <TextInput style={ui.input} placeholder="Source Batch ID" value={lot.batchId} onChangeText={v => set('batchId', v)} />
        <TextInput style={ui.input} placeholder="New Lot ID" value={lot.lotId} onChangeText={v => set('lotId', v)} />
        <TextInput style={ui.input} placeholder="Destination Retailer ID" value={lot.retailerId} onChangeText={v => set('retailerId', v)} />
        <TextInput style={ui.input} placeholder="Sale Price (₹/kg)" keyboardType="numeric" value={lot.price} onChangeText={v => set('price', v)} />
        <TextInput style={ui.input} placeholder="Sale Date" value={lot.date} onChangeText={v => set('date', v)} />

        <View style={ui.row}>
          <TouchableOpacity style={[ui.btnGhost, { flex: 1 }]} onPress={() => router.back()}>
            <Text style={ui.btnTextGhost}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[ui.btn, { flex: 1 }]} onPress={() => router.push('/screens/RetailerReceive')}>
            <Text style={ui.btnText}>Next</Text>
          </TouchableOpacity>
        </View>
      </Glass>
    </Background>
  );
}
