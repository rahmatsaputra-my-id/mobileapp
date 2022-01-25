import React from 'react';
import { Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { openUrl } from '../../Global/Helper/Function';
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
      <TouchableOpacity
        onPress={() => { openUrl(url) }}
      >
        <Text style={styles.sinopsis}>
          {'View More >>>'}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
