// app/_layout.jsx
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack initialRouteName="LoginScreen" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LoginScreen" />
      <Stack.Screen name="RegistrationScreen" />
      <Stack.Screen name="screens/FarmerForm" />
      <Stack.Screen name="screens/FarmerDetails" />
      <Stack.Screen name="screens/DistributorForm" />
      <Stack.Screen name="screens/DistributorDetails" />
    </Stack>
  );
}
