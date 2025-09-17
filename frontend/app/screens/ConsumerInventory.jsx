import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function ConsumerInventory() {
  // Placeholder consumer page for QR deep-link
  const items = [
    { name: "Rice", batch: "BATCH1001", grade: "A", harvest: "2025-09-15", price: "₹45/kg" },
    { name: "Maize", batch: "BATCH0999", grade: "B", harvest: "2025-09-12", price: "₹30/kg" },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Store Inventory</Text>
      {items.map((it) => (
        <View key={it.batch} style={styles.card}>
          <Text style={styles.item}>{it.name} • {it.price}</Text>
          <Text style={styles.meta}>Batch: {it.batch} • Grade: {it.grade}</Text>
          <Text style={styles.meta}>Harvest: {it.harvest}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#f5faf5" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 12, textAlign: "center" },
  card: { backgroundColor: "#fff", padding: 14, borderRadius: 12, marginBottom: 12, borderColor: "#e0e6e0", borderWidth: 1 },
  item: { fontWeight: "600", fontSize: 16 },
  meta: { color: "#506050", marginTop: 2 },
});
