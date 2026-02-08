import '../../global.css';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation';
import IndexScreen from './index';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootLayout() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{ 
          headerShown: false,
          animation: 'fade'
        }}
      >
        <Stack.Screen name="index" component={IndexScreen} />
        {/* Add more screens here following the pattern:
            <Stack.Screen name="profile" component={ProfileScreen} />
        */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
