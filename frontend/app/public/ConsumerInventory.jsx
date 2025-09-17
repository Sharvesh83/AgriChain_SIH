import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { ui } from "../components/UI";

export default function ConsumerInventory() {
  const items = [
    { 
      name: "Rice", 
      batch: "BATCH1001", 
      grade: "A", 
      harvest: "2025-09-15", 
      origin: "Annur, Erode", 
      priceHistory: "₹45 → ₹52/kg",
      farmer: "Saravanan R",
      distributor: "AgriDist Ltd"
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Store Inventory</Text>
      <Text style={styles.subtitle}>Live traceability information</Text>
      
      {items.map((item) => (
        <View key={item.batch} style={styles.card}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemMeta}>Batch: {item.batch} • Grade: {item.grade}</Text>
          <Text style={styles.itemMeta}>Harvest: {item.harvest}</Text>
          <Text style={styles.itemMeta}>Origin: {item.origin}</Text>
          <Text style={styles.itemMeta}>Farmer: {item.farmer}</Text>
          <Text style={styles.itemMeta}>Distributor: {item.distributor}</Text>
          <Text style={styles.priceJourney}>Price journey: {item.priceHistory}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    padding: 20, 
    backgroundColor: "#f5faf5",
    minHeight: '100%'
  },
  title: { 
    fontSize: 24, 
    fontWeight: "bold", 
    marginBottom: 4, 
    textAlign: "center",
    color: '#1e5524'
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
    fontStyle: 'italic'
  },
  card: { 
    backgroundColor: "#fff", 
    padding: 16, 
    borderRadius: 16, 
    marginBottom: 12, 
    borderColor: "#e0e6e0", 
    borderWidth: 1,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 }
  },
  itemName: { 
    fontWeight: "700", 
    fontSize: 18,
    color: '#1e5524',
    marginBottom: 8
  },
  itemMeta: { 
    color: "#506050", 
    marginTop: 2,
    fontSize: 13
  },
  priceJourney: {
    color: '#2e7d32',
    fontWeight: '600',
    marginTop: 8,
    fontSize: 14
  }
});
