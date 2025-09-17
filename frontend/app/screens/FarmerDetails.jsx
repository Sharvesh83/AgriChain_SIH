// app/screens/FarmerDetails.jsx
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useRouter } from "expo-router";

export default function FarmerDetails() {
  const [geoLocation, setGeoLocation] = useState("");
  const [harvestDate, setHarvestDate] = useState("");
  const [notes, setNotes] = useState("");

  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Farmer Details</Text>

      <TextInput
        style={styles.input}
        placeholder="Geo Tag (Village/Coordinates)"
        value={geoLocation}
        onChangeText={setGeoLocation}
      />

      <TextInput
        style={styles.input}
        placeholder="Harvest Date (dd-mm-yyyy)"
        value={harvestDate}
        onChangeText={setHarvestDate}
      />

      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Additional Notes"
        value={notes}
        onChangeText={setNotes}
        multiline
      />

      <TouchableOpacity style={styles.button} onPress={() => router.push("/screens/DistributorForm")}>
        <Text style={styles.buttonText}>Next: Distributor</Text>
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
    backgroundColor: "#2196F3",
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
