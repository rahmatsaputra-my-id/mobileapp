import React from 'react';
import { Text, Image, ScrollView } from 'react-native';
import { styles } from './style';

export default function HomeDetailScreen({ route }) {
  const { title, author, description, urlToImage, content, url } = route?.params;

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.container}
    >
      <Text style={styles.category}>{'BUSINESS'}</Text>
      <Text style={styles.judul}>{title}</Text>
      <Text style={styles.publishedAt}>{`Published from ${author}`}</Text>
      <Image
        style={styles.image}
        source={{ uri: urlToImage }}
      />
      <Text style={styles.sinopsis}>{content ? content : description}</Text>
    </ScrollView>
  );
}
