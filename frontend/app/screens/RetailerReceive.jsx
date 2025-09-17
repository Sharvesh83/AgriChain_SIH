import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import Background from "../components/Background";
import Glass from "../components/Glass";
import { ui } from "../components/UI";

export default function RetailerReceive() {
  const router = useRouter();
  const [shipment, setShipment] = useState({
    wholesalerId: '', batchId: '', product: '', qty: '', cost: '', 
    date: '', shelfLife: '', qualityCheck: '', sellingPrice: ''
  });
  
  const set = (k, v) => setShipment(s => ({ ...s, [k]: v }));

  return (
    <Background>
      <Glass scrollable>
        <Text style={ui.h1}>Retailer</Text>

        <Text style={ui.h2}>Incoming Shipment</Text>
        <TextInput style={ui.input} placeholder="Source Wholesaler ID" value={shipment.wholesalerId} onChangeText={v => set('wholesalerId', v)} />
        <TextInput style={ui.input} placeholder="Source Batch ID" value={shipment.batchId} onChangeText={v => set('batchId', v)} />
        <TextInput style={ui.input} placeholder="Product Details" value={shipment.product} onChangeText={v => set('product', v)} />
        <TextInput style={ui.input} placeholder="Received Quantity (kg)" keyboardType="numeric" value={shipment.qty} onChangeText={v => set('qty', v)} />
        <TextInput style={ui.input} placeholder="Purchase Cost (₹/kg)" keyboardType="numeric" value={shipment.cost} onChangeText={v => set('cost', v)} />
        <TextInput style={ui.input} placeholder="Date Received" value={shipment.date} onChangeText={v => set('date', v)} />

        <Text style={ui.h2}>Inventory Setup</Text>
        <TextInput style={ui.input} placeholder="Selling Price (₹/kg)" keyboardType="numeric" value={shipment.sellingPrice} onChangeText={v => set('sellingPrice', v)} />
        <TextInput style={ui.input} placeholder="Shelf Life (Optional)" value={shipment.shelfLife} onChangeText={v => set('shelfLife', v)} />
        <TextInput style={ui.input} placeholder="Quality Check Notes (Optional)" value={shipment.qualityCheck} onChangeText={v => set('qualityCheck', v)} />

        <View style={ui.row}>
          <TouchableOpacity style={[ui.btnGhost, { flex: 1 }]} onPress={() => router.back()}>
            <Text style={ui.btnTextGhost}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[ui.btn, { flex: 1 }]} onPress={() => router.push('/screens/RetailerDashboard')}>
            <Text style={ui.btnText}>Save</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={ui.btnSecondary} onPress={() => router.push('/screens/RetailerQR')}>
          <Text style={ui.btnText}>Generate QR Code</Text>
        </TouchableOpacity>
      </Glass>
    </Background>
  );
}
