# File-Based Routing Pattern for Mobile Apps

Este proyecto usa React Navigation con una estructura organizada que simula file-based routing.

## Estructura de archivos

```
src/
  app/
    _layout.tsx          # Root navigator
    index.tsx            # Home screen (/)
    profile.tsx          # Profile screen (/profile)
    settings.tsx         # Settings screen (/settings)
    (tabs)/              # Tab navigator group
      _layout.tsx
      home.tsx
      explore.tsx
  navigation.ts          # Type definitions
```

## Cómo añadir una nueva pantalla

### 1. Crear el archivo de la pantalla

Crea un nuevo archivo en `src/app/`:

```tsx
// src/app/profile.tsx
import { View, Text } from 'react-native';
import type { RootStackScreenProps } from '../navigation';

type Props = RootStackScreenProps<'profile'>;

export default function ProfileScreen({ route, navigation }: Props) {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-2xl">Profile Screen</Text>
    </View>
  );
}
```

### 2. Agregar al tipo de navegación

Actualiza `src/navigation.ts`:

```tsx
export type RootStackParamList = {
  index: undefined;
  profile: { userId: string };  // ← Añade aquí
  settings: undefined;
};
```

### 3. Registrar la ruta en _layout.tsx

Actualiza `src/app/_layout.tsx`:

```tsx
import ProfileScreen from './profile';

// ...dentro del Stack.Navigator:
<Stack.Screen name="profile" component={ProfileScreen} />
```

## Navegación

```tsx
// Navegar a una ruta
navigation.navigate('profile', { userId: '123' });

// Ir atrás
navigation.goBack();

// Reemplazar la ruta actual
navigation.replace('settings');
```

## Ventajas de este patrón

- ✅ **Compatible con Rock y Module Federation**
- ✅ **Type-safe**: TypeScript autocomplete en navegación
- ✅ **Organizado**: Estructura clara de archivos
- ✅ **Estable**: Sin dependencias experimentales
- ✅ **Flexible**: Fácil de extender con tabs, drawers, etc.

## Next Steps

Si necesitas navegación más compleja:

- **Tabs**: Crea una carpeta `(tabs)/` con su propio `_layout.tsx`
- **Nested navigation**: Añade más navegadores dentro de pantallas
- **Deep Linking**: Configura URL schemes en `app.json`
