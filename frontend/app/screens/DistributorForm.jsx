import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useRouter } from "expo-router";

export default function FarmerForm() {
  const router = useRouter();
  const [profile, setProfile] = useState({ name:'', contact:'', address:'', gps:'' });
  const [batch, setBatch] = useState({ cropType:'', variety:'', seedDate:'', harvestDate:'', weight:'', grade:'' });
  const setP=(k,v)=>setProfile(s=>({...s,[k]:v}));
  const setB=(k,v)=>setBatch(s=>({...s,[k]:v}));

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Farmer</Text>

      <View style={styles.cameraCard}><Text style={styles.cameraTitle}>Camera</Text><Text style={styles.cameraHint}>Upload produce photo (geotag to be added)</Text></View>

      <Text style={styles.section}>Profile</Text>
      <TextInput style={styles.input} placeholder="Farmer Name" value={profile.name} onChangeText={v=>setP('name',v)} />
      <TextInput style={styles.input} placeholder="Contact" keyboardType="phone-pad" value={profile.contact} onChangeText={v=>setP('contact',v)} />
      <TextInput style={styles.input} placeholder="Farm Address" value={profile.address} onChangeText={v=>setP('address',v)} />
      <TextInput style={styles.input} placeholder="GPS Coordinates (lat,lng)" value={profile.gps} onChangeText={v=>setP('gps',v)} />

      <Text style={styles.section}>Harvest Batch</Text>
      <TextInput style={styles.input} placeholder="Crop Type" value={batch.cropType} onChangeText={v=>setB('cropType',v)} />
      <TextInput style={styles.input} placeholder="Variety" value={batch.variety} onChangeText={v=>setB('variety',v)} />
      <TextInput style={styles.input} placeholder="Seed Date" value={batch.seedDate} onChangeText={v=>setB('seedDate',v)} />
      <TextInput style={styles.input} placeholder="Harvest Date" value={batch.harvestDate} onChangeText={v=>setB('harvestDate',v)} />
      <TextInput style={styles.input} placeholder="Weight (kg)" keyboardType="numeric" value={batch.weight} onChangeText={v=>setB('weight',v)} />
      <TextInput style={styles.input} placeholder="Quality Grade (A/B/C)" value={batch.grade} onChangeText={v=>setB('grade',v)} />

      <TouchableOpacity style={styles.btn} onPress={()=>router.push('/screens/FarmerDetails')}>
        <Text style={styles.btnText}>Next</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{ flexGrow:1, backgroundColor:"#f0f4f0", padding:20, alignItems:"center" },
  title:{ fontSize:24, fontWeight:"bold", marginBottom:12 },
  section:{ alignSelf:"flex-start", fontWeight:"600", marginTop:10, marginBottom:4 },
  cameraCard:{ width:"100%", backgroundColor:"#eaf1ea", borderRadius:12, padding:16, marginBottom:14, borderWidth:1, borderColor:"#cfe0cf" },
  cameraTitle:{ fontSize:18, fontWeight:"600", marginBottom:4 }, cameraHint:{ fontSize:12, color:"#495b49" },
  input:{ width:"100%", backgroundColor:"#fff", padding:12, borderRadius:10, marginBottom:12, borderWidth:1, borderColor:"#ccc" },
  btn:{ backgroundColor:"#2e7d32", padding:14, borderRadius:10, width:"100%", alignItems:"center" },
  btnText:{ color:"#fff", fontWeight:"bold" },
});
