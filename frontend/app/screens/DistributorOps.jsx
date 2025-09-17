import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import Background from "../components/Background";
import Glass from "../components/Glass";
import { ui } from "../components/UI";

export default function DistributorOps() {
  const router = useRouter();
  const [ops, setOps] = useState({
    pickup: '', quality: '', weightCheck: '', handling: ''
  });
  
  const set = (k, v) => setOps(s => ({ ...s, [k]: v }));

  return (
    <Background>
      <Glass scrollable>
        <Text style={ui.h1}>Distributor</Text>

        <Text style={ui.h2}>Operations Details</Text>
        <TextInput style={ui.input} placeholder="Pickup Date and Time" value={ops.pickup} onChangeText={v => set('pickup', v)} />
        <TextInput style={ui.input} placeholder="Regraded Quality (A/B/C or same)" value={ops.quality} onChangeText={v => set('quality', v)} />
        <TextInput style={ui.input} placeholder="Weight Verification (Verified/Not Verified)" value={ops.weightCheck} onChangeText={v => set('weightCheck', v)} />
        <TextInput style={[ui.input, ui.inputLarge]} placeholder="Handling / Storage Notes" value={ops.handling} onChangeText={v => set('handling', v)} multiline />

        <View style={ui.row}>
          <TouchableOpacity style={[ui.btnSecondary, { flex: 1 }]} onPress={() => router.push('/screens/DistributorDashboard')}>
            <Text style={ui.btnText}>Stock</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[ui.btn, { flex: 1 }]} onPress={() => router.push('/screens/DistributorSplit')}>
            <Text style={ui.btnText}>Retailers</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={ui.btnGhost} onPress={() => router.push('/screens/DistributorDashboard')}>
          <Text style={ui.btnTextGhost}>Back to Home</Text>
        </TouchableOpacity>
      </Glass>
    </Background>
  );
}
