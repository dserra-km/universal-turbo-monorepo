import { Button } from '@repo/ui';
import React from 'react';
import { Text, View } from 'react-native';

export default function Index() {
  return (
    <View className="flex-1 bg-blue-500 items-center justify-center p-4">
      <View className="bg-white rounded-lg p-6 mb-4 shadow-lg">
        <Text className="text-primary text-3xl font-bold mb-2">
          Accounts Works! 🎉
        </Text>
        <Text className="text-secondary text-lg">
          This is styled with Tailwind CSS
        </Text>
      </View>
      <View className="flex-row gap-2 mt-4">
        <Button title="Button 1" onPress={() => console.log('Button 1 Pressed')} />
        <View className="bg-success rounded-full px-4 py-2">
          <Text className="text-white font-semibold">Button 2</Text>
        </View>
      </View>
    </View>
  );
}
