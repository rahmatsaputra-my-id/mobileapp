import React, { Component } from 'react';
import { Text, Image, ScrollView, TouchableOpacity, View } from 'react-native';
import CBackNavigationHeader from '../../Global/Components/CBackNavigationHeader';
import CButton from '../../Global/Components/CButton';
import { styles } from './style';
import { iconSuccess, iconFailed, iconArrowRight } from '../../Assets/Shared';
import CText from '../../Global/Components/CText';
import { maxLengthString } from '../../Global/Helper/Function';

export default class SplitBillScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }



  render() {
    const { navigation } = this.props
    // const { title, author, description, urlToImage, content, url } = route?.params;
    const data = 'Rp 50.000.000.000.000.000.000.000.000';

    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
      >
        <CBackNavigationHeader title={'Split Bill'} icon={false} />
        <View style={styles.content}>
          <Text style={styles.greetingTitle}>{'Want to Request Payment to multiple people?'}</Text>
          <CButton
            onPress={() => {navigation.navigate('SplitBillDetailScreen')}}
            label={'Split Your Bill'}
          />
        </View>
        <View style={styles.historyContainer}>
          <Text style={styles.historyTitle}>{'History Split Bill'}</Text>
        </View>
        <TouchableOpacity 
        style={styles.historyCard}
        onPress={() => {navigation.navigate('SplitBillHistoryScreen')}}
        >
          <View style={{ flexDirection: 'row' }}>
            <Image
              style={styles.historyCardIcon}
              source={iconSuccess}
            />
            <CText
              children={'13/01/22'}
              style={styles.historyCardDate}
            />
          </View>
          <CText
            children={maxLengthString(data, 20)}
            style={styles.historyCardTitle}
          />
          <Image
            style={styles.historyCardIconArrow}
            source={iconArrowRight}
          />
        </TouchableOpacity>
      </ScrollView>
    );
  }
}
