import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { ScrollView } from 'react-native';

const RoleSelectionScreen = () => {
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="p-6 bg-white">
            <View className="items-center mb-6">
                <Text className="text-2xl font-bold text-blue-600">Select Your Role</Text>
            </View>

            <Link href="/screens/SeekerRegister" asChild>
                <TouchableOpacity className="w-full bg-blue-500 py-4 rounded-xl mb-6 shadow-lg items-center">
                    <Text className="text-white text-lg font-semibold">I am a Seeker</Text>
                </TouchableOpacity>
            </Link>

            <Link href="/screens/ProviderRegister" asChild>
                <TouchableOpacity className="w-full bg-blue-500 py-4 rounded-xl mb-6 shadow-lg items-center">
                    <Text className="text-white text-lg font-semibold">I am a Provider</Text>
                </TouchableOpacity>
            </Link>
        </ScrollView>
    );
};

export default RoleSelectionScreen;


