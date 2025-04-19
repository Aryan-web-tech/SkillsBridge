import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from "expo-router";

const _layout = () => {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="Login" options={{ headerShown: false }} />
            <Stack.Screen name="ProviderRegister" options={{ headerShown: false }} />
            <Stack.Screen name="RoleSelectionScreen" options={{ headerShown: false }} />
            <Stack.Screen name="SeekerRegister" options={{ headerShown: false }} />
        </Stack>
    )
}

export default _layout