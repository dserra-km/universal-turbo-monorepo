// Navigation types for type-safe routing
// Add your screens here to get autocomplete and type checking

import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  index: undefined;
  // Add more routes here:
  // profile: { userId: string };
  // settings: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

// Usage in components:
// import { RootStackScreenProps } from '../navigation';
// type Props = RootStackScreenProps<'index'>;
