import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import Background from "../components/Background";
import Glass from "../components/Glass";
import { ui } from "../components/UI";

export default function RetailerQR() {
  const router = useRouter();
  
  return (
    <Background>
      <Glass>
        <Text style={ui.h1}>Store QR Code</Text>
        
        <View style={styles.qrContainer}>
          <View style={styles.qrBox}>
            <Text style={styles.qrPlaceholder}>QR CODE</Text>
            <Text style={styles.qrSubtext}>Retailer ID: RTL-001</Text>
          </View>
        </View>
        
        <Text style={styles.scanText}>Customers scan here to view inventory</Text>

        <TouchableOpacity style={ui.btn}>
          <Text style={ui.btnText}>Download QR Code</Text>
        </TouchableOpacity>

        <TouchableOpacity style={ui.btnGhost} onPress={() => router.push('/screens/RetailerDashboard')}>
          <Text style={ui.btnTextGhost}>Back to Dashboard</Text>
        </TouchableOpacity>
      </Glass>
    </Background>
  );
}

const styles = StyleSheet.create({
  qrContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  qrBox: {
    width: 200,
    height: 200,
    backgroundColor: '#fff',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'rgba(30,85,36,0.2)',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  qrPlaceholder: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e5524',
    marginBottom: 8,
  },
  qrSubtext: {
    fontSize: 12,
    color: '#666',
  },
  scanText: {
    textAlign: 'center',
    color: '#3e5a3e',
    fontSize: 14,
    marginBottom: 20,
    fontStyle: 'italic',
  },
});
