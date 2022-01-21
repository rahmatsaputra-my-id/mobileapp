import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  AsyncStorage
} from 'react-native';

import { styles } from './style';
import { getNews } from '../../Global/Helper/Action';
import { NavigateTo } from '../../../MultiPlatform/Navigator/Navigator';
import CBackNavigationHeader from '../../Global/Components/CBackNavigationHeader';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataContent: []
    };
  }

  componentDidMount = async () => {
    this._handlerGetData();
    this._handlerGetDataStorage();
  }

  _handlerGetData = async () => {
    try {
      const result = await getNews();
      console.log("result.data.articles >>>", JSON.stringify(result.data.articles, null, 2))

      this.setState({
        dataContent: result.data.articles
      });
    } catch (error) {
      console.log("HomeScreen.js@_handlerGetData >>> ", JSON.stringify(error, null, 2))
    }
  }

  _handlerGetDataStorage = async () => {
    const oldData = await AsyncStorage.getItem('user');
    // console.log("AsyncStorage.getItem >>>", JSON.stringify(JSON.parse(oldData), null, 2))
  }

  render() {
    const { navigation } = this.props;
    const { dataContent } = this.state;

    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <CBackNavigationHeader title={'Flazz News'} icon={false} />
        {dataContent.map((item, key) => {
          const {
            title,
            author,
            urlToImage,
            description,
            content,
            url,
            source
          } = item;
          return (
            <TouchableOpacity
              key={key}
              style={styles.cardContainerHomeScreen}
              onPress={() => {
                NavigateTo('HomeDetailScreen', {
                  title: title,
                  author: author,
                  urlToImage: urlToImage,
                  description: description,
                  content: content,
                  url: url,
                  source: source.name,
                }, this.props);
              }}>
              <Image
                style={styles.imageHomeScreen}
                source={{ uri: urlToImage }}
              />
              <Text style={styles.judulCardList} numberOfLines={2}>
                {title}
              </Text>
              <Text style={styles.authorCardList}>{source ? source.name : author}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    );
  }
}

