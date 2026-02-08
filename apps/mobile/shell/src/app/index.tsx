import { Button } from '@repo/ui';
import React from 'react';
import { Text, View } from 'react-native';
import type { RootStackScreenProps } from '../navigation';

const Accounts = React.lazy(() => import('Accounts/App'));

type Props = RootStackScreenProps<'index'>;

export default function Index({ navigation }: Props) {
  return (
    <View className="flex-1 bg-green-500 items-center justify-center p-4">
      <View className="bg-white rounded-lg p-6 mb-4 shadow-lg">
        <Text className="text-primary text-3xl font-bold mb-2">
          NativeWind Works! 🎉
        </Text>
        <Text className="text-secondary text-lg">
          This is styled with Tailwind CSS
        </Text>
      </View>
      <React.Suspense fallback={<Text>Loading Accounts...</Text>}><Accounts /></React.Suspense>
      <View className="flex-row gap-2 mt-4">
        <Button title="Button 1" onPress={() => console.log('Button 1 Pressed')} />
        <View className="bg-success rounded-full px-4 py-2">
          <Text className="text-white font-semibold">Button 2</Text>
        </View>
      </View>
    </View>
  );
}
