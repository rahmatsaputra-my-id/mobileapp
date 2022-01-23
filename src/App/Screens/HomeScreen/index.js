import React, { Component } from 'react';
import {
  Text,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import { styles } from './style';
import { getNews } from '../../Global/Helper/Action';
import { NavigateTo } from '../../../MultiPlatform/Navigator/Navigator';
import CBackNavigationHeader from '../../Global/Components/CBackNavigationHeader';
import { connect } from 'react-redux';

class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataContent: []
    };
  }

  componentDidMount = async () => {
    this._handlerGetData();
  }

  _handlerGetData = async () => {
    try {
      const result = await getNews();

      this.setState({
        dataContent: result?.data?.articles
      });
    } catch (error) {
      console.log("HomeScreen.js@_handlerGetData >>> ", JSON.stringify(error, null, 2))
    }
  }

  render() {
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

const mapStateToProps = (state) => {
  const { accessToken } = state;

  return { accessToken };
}


export default connect(mapStateToProps)(HomeScreen);
