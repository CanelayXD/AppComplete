import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ColorButton } from './ColorButton';

interface GameModeCardProps {
  title: string;
  description: string;
  index: number;
  onSelectMode: (modeIndex: number) => void;
}

const colors = ['lightblue', 'lightgreen', 'lightpink'];
const images = [
  require('../../../../assets/carta-de-amor.png'),
  require('../../../../assets/chat.png'),
  require('../../../../assets/amor.png'),
];

export const GameModeCard: React.FC<GameModeCardProps> = ({ title, description, index, onSelectMode }) => {
  const cardColor = colors[index % colors.length];
  const cardImage = images[index % images.length];

  return (
    <View style={[styles.card, { backgroundColor: cardColor }]}>
      <Text style={styles.title}>{title}</Text>   
      <Text style={styles.description}>{description}</Text>
      <ColorButton text='Seleccionar' onPress={() => onSelectMode(index)} />
      <Image source={cardImage} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 350,
    height: 850,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 50,
    textAlign: 'center'
  },
  description: {
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 50,
  },
  image: {
    marginTop: 50,
    width: 100,
    height: 100,
  },
});

export default GameModeCard;
