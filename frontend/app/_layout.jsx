import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack initialRouteName="LoginScreen" screenOptions={{ headerShown: false }}>
      {/* Auth */}
      <Stack.Screen name="LoginScreen" />
      <Stack.Screen name="RegistrationScreen" />
      {/* Farmer */}
      <Stack.Screen name="screens/FarmerDashboard" />
      <Stack.Screen name="screens/FarmerForm" />
      <Stack.Screen name="screens/FarmerDetails" />
      {/* Distributor */}
      <Stack.Screen name="screens/DistributorDashboard" />
      <Stack.Screen name="screens/DistributorProfile" />
      <Stack.Screen name="screens/DistributorPurchase" />
      <Stack.Screen name="screens/DistributorOps" />
      <Stack.Screen name="screens/DistributorSplit" />
      {/* Retailer */}
      <Stack.Screen name="screens/RetailerDashboard" />
      <Stack.Screen name="screens/RetailerProfile" />
      <Stack.Screen name="screens/RetailerReceive" />
      <Stack.Screen name="screens/RetailerQR" />
      {/* Consumer (public) */}
      <Stack.Screen name="public/ConsumerInventory" />
    </Stack>
  );
}
