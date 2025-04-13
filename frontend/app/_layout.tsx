import "./globals.css"
import { Stack } from "expo-router";
import AuthContextProvider from "./context/AuthContext"

export default function RootLayout() {
  return (
    
    <Stack>
      <Stack.Screen name="index" options={{headerShown:false}} />
      <Stack.Screen name="screens" options={{headerShown:false}} />
    </Stack>
    
  )
}
