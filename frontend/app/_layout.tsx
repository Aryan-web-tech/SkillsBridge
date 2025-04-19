import "./globals.css"
import { Stack } from "expo-router";


export default function RootLayout() {
  return (
    
    <Stack>
      <Stack.Screen name="(auth)" options={{headerShown:false}} />
      <Stack.Screen name="(seeker_tabs)" options={{headerShown:false}} />
      <Stack.Screen name="(provider_tabs)" options={{headerShown:false}} />
    </Stack>
    
  )
}
