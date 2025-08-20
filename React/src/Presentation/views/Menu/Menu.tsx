import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import GameModeCard from './GameModeCard';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from '../../../../App';

export const MenuScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const items = [
    { id: 1, title: 'CHILL', description: '¿No saben qué hacer juntos y quieren generar conversación?' },
    { id: 2, title: 'CITAS', description: 'Para los que tardan eligiendo lugares para momentos especiales (y no tan especiales)' },
    { id: 3, title: 'HOT', description: 'Un par de preguntas para encender la llama del amor' },
  ];

  const handleSelectMode = (modeIndex: number) => {
    switch (modeIndex) {
      case 0:
        navigation.navigate('ChillScreen'); // Navega a ChillScreen
        break;
      case 1:
        navigation.navigate('CitasScreen'); // Navega a CitasScreen
        break;
      case 2:
        navigation.navigate('HotScreen'); // Navega a HotScreen
        break;
      default:
        console.log('Modo no válido');
    }
  };

  return (
    <ScrollView horizontal contentContainerStyle={styles.container}>
      {items.map((item, index) => (
        <GameModeCard
          key={item.id}
          title={item.title}
          description={item.description}
          index={index}
          onSelectMode={handleSelectMode}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
});

export default MenuScreen;
