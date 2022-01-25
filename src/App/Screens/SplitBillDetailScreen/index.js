import React, { Component } from 'react';
import { Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './style';

export default class SplitBillDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render() {
    // const { route } = this.props
    // const { title, author, description, urlToImage, content, url } = route?.params;

    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        <Text style={styles.category}>{'BUSINESS'}</Text>
        <Text style={styles.judul}>{'title'}</Text>
        <Text style={styles.publishedAt}>{`Published from `}</Text>
        {/* <Image
          style={styles.image}
          source={{ uri: urlToImage }}
        /> */}
        {/* <Text style={styles.sinopsis}>{content ? content : description}</Text> */}
        {/* <TouchableOpacity
          onPress={() => { openUrl(url) }}
        >
          <Text style={styles.sinopsis}>
            {'View More >>>'}
          </Text>
        </TouchableOpacity> */}
      </ScrollView>
    );
  }
}
