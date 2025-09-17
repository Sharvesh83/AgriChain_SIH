import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import Background from "../components/Background";
import Glass from "../components/Glass";
import { ui } from "../components/UI";

export default function DistributorDashboard() {
  const router = useRouter();
  
  const inventory = [
    { batchId: "BATCH1001", origin: "Farmer 202500111", harvest: "2025-09-15", grade: "A", stock: 380, price: "₹45/kg" },
  ];
  
  const transactions = [
    { date: "2025-09-16", type: "Purchase", batchId: "BATCH1001", qty: 500, price: "₹45/kg" },
    { date: "2025-09-17", type: "Sale", lot: "LOT-1", qty: 120, retailer: "Retailer-77", price: "₹52/kg" }
  ];

  return (
    <Background>
      <Glass scrollable>
        <Text style={ui.h1}>Distributor</Text>

        <Text style={ui.h2}>Current Inventory</Text>
        {inventory.map(i => (
          <View key={i.batchId} style={ui.card}>
            <Text style={ui.cardTitle}>{i.batchId} — {i.stock}kg remaining</Text>
            <Text style={ui.cardMeta}>Origin: {i.origin}</Text>
            <Text style={ui.cardMeta}>Harvest: {i.harvest} • Grade {i.grade}</Text>
            <Text style={ui.cardMeta}>Last Price: {i.price}</Text>
          </View>
        ))}

        <View style={ui.row}>
          <TouchableOpacity style={[ui.btn, { flex: 1 }]} onPress={() => router.push('/screens/DistributorPurchase')}>
            <Text style={ui.btnText}>Purchase</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[ui.btnSecondary, { flex: 1 }]} onPress={() => router.push('/screens/DistributorSplit')}>
            <Text style={ui.btnText}>Split for Retail</Text>
          </TouchableOpacity>
        </View>

        <Text style={ui.h2}>Recent Transactions</Text>
        {transactions.map((t, idx) => (
          <View key={idx} style={ui.card}>
            <Text style={ui.cardTitle}>{t.date} — {t.type}</Text>
            <Text style={ui.cardMeta}>
              {t.batchId || t.lot} — {t.qty}kg — {t.price}
              {t.retailer && ` → ${t.retailer}`}
            </Text>
          </View>
        ))}

        <TouchableOpacity style={ui.btnGhost} onPress={() => router.push('/LoginScreen')}>
          <Text style={ui.btnTextGhost}>Logout</Text>
        </TouchableOpacity>
      </Glass>
    </Background>
  );
}
