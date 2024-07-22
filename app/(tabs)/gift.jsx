import {
  Ionicons,
} from "@expo/vector-icons";

import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import tw from 'tailwind-react-native-classnames';

export default function PricingScreen() {
  const [fontsLoaded] = useFonts({
    'outfit': require('../../assets/fonts/Outfit-Regular.ttf'),
    'outfit-bold': require('../../assets/fonts/Outfit-Bold.ttf'),
    'outfit-medium': require('../../assets/fonts/Outfit-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <><StatusBar barStyle="dark-content" backgroundColor="#6B21A8" /><View style={tw`flex-row items-center py-8 justify-center bg-purple-800 mt-8`}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-circle-outline" size={24} color="white" />
      </TouchableOpacity>
      <Text style={[tw`text-white text-2xl ml-4`, { fontFamily: 'outfit-bold' }]}>Pricing</Text>
    </View><ScrollView contentContainerStyle={tw`p-4`}>


        <Text style={[tw`text-center text-3xl mb-6`, { fontFamily: 'outfit-bold' }]}>
          Pricing Plans
        </Text>

        <View style={tw`mb-6`}>
          <View style={[tw`bg-white p-6 rounded-lg shadow-lg`, { borderWidth: 1, borderColor: '#dde2ec' }]}>
            <Text style={[tw`text-xl mb-2`, { fontFamily: 'outfit-bold' }]}>
              Free Plan
            </Text>
            <Text style={[tw`mb-4`, { fontFamily: 'outfit' }]}>
              - Access to basic features
            </Text>
            <Text style={[tw`mb-4`, { fontFamily: 'outfit' }]}>
              - Limited support
            </Text>
            <Text style={[tw`mb-4`, { fontFamily: 'outfit' }]}>
              - 1GB storage
            </Text>
            <TouchableOpacity style={[tw`bg-blue-500 py-2 rounded-full`, { backgroundColor: '#4F8EF7' }]}>
              <Text style={[tw`text-center text-white`, { fontFamily: 'outfit-bold' }]}>
                Choose Free
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={tw`mb-6`}>
          <View style={[tw`bg-white p-6 rounded-lg shadow-lg`, { borderWidth: 1, borderColor: '#dde2ec' }]}>
            <Text style={[tw`text-xl mb-2`, { fontFamily: 'outfit-bold' }]}>
              Pro Plan
            </Text>
            <Text style={[tw`mb-4`, { fontFamily: 'outfit' }]}>
              - Access to all features
            </Text>
            <Text style={[tw`mb-4`, { fontFamily: 'outfit' }]}>
              - Priority support
            </Text>
            <Text style={[tw`mb-4`, { fontFamily: 'outfit' }]}>
              - 10GB storage
            </Text>
            <Text style={[tw`mb-4`, { fontFamily: 'outfit' }]}>
              - Customizable options
            </Text>
            <TouchableOpacity style={[tw`bg-blue-500 py-2 rounded-full`, { backgroundColor: '#4F8EF7' }]}>
              <Text style={[tw`text-center text-white`, { fontFamily: 'outfit-bold' }]}>
                Choose Pro
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView></>
  );
}
