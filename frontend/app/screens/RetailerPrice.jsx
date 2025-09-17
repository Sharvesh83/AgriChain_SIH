import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function RetailerPrice() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Retailer Pricing</Text>
      <Text style={styles.caption}>Price editor placeholder</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#f0f4f0" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 8 },
  caption: { color: "#555" },
});
