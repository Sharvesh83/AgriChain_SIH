// app/screens/DistributorDetails.jsx
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useRouter } from "expo-router";

export default function DistributorDetails() {
  const [transportMode, setTransportMode] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [remarks, setRemarks] = useState("");

  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Distributor Details</Text>

      <TextInput
        style={styles.input}
        placeholder="Transport Mode (e.g. Truck, Van)"
        value={transportMode}
        onChangeText={setTransportMode}
      />

      <TextInput
        style={styles.input}
        placeholder="Expected Arrival Date"
        value={arrivalDate}
        onChangeText={setArrivalDate}
      />

      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Remarks"
        value={remarks}
        onChangeText={setRemarks}
        multiline
      />

      <TouchableOpacity style={styles.button} onPress={() => router.push("/LoginScreen")}>
        <Text style={styles.buttonText}>Finish & Go to Login</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f0f4f0",
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  button: {
    backgroundColor: "#9C27B0",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
