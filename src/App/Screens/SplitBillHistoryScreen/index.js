import React, { Component } from 'react';
import { Text, Image, ScrollView, TouchableOpacity, View } from 'react-native';
import CBackNavigationHeader from '../../Global/Components/CBackNavigationHeader';
import CButton from '../../Global/Components/CButton';
import { styles } from './style';
import { iconSuccess, iconFailed, iconArrowRight, iconTotal, iconInformation } from '../../Assets/Shared';
import CText from '../../Global/Components/CText';
import { maxLengthString } from '../../Global/Helper/Function';
import CModal from '../../Global/Components/CModal';

export default class SplitBillHistoryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popUp: {
        visible: false,
        title: false,
        description: false
      }
    }
  }

  _handlerPopUp = () => {
    this.setState({
      popUp: {
        visible: true,
        title: 'Information',
        description: `Note:\nUntuk Makan Siang\n\nActive Until:\n26 January 2022`,
      }
    })
  }

  render() {
    const { popUp } = this.state;
    const { visible, title, description } = popUp;
    console.log('visible', visible);
    const data = 'Rp 50.000.000.000.000.000.000.000.000';
    const username = 'Matteo';

    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <CBackNavigationHeader title={'History Split Bill'} />
        <View style={styles.totalContainer}>
          <Image
            style={styles.iconTotal}
            source={iconTotal}
          />
          <View style={styles.totalLabelContainer}>
            <CText
              style={styles.totalLabel}
              children={'TOTAL BILL'}
            />
            <TouchableOpacity
              onPress={() => { this._handlerPopUp() }}
            >
              <Image
                style={styles.iconInformation}
                source={iconInformation}
              />
            </TouchableOpacity>
          </View>
          <CText
            style={styles.total}
            children={'Rp2.000.000'}
          />
        </View>

        <View style={styles.historyContainer}>
          <CText
            style={styles.historyTitle}
            children={`SPLIT BILL WITH`}
          />

          <View
            style={styles.historyCard}
          >
            <View>
              <CText
                children={maxLengthString(username, 12)}
                style={styles.historyCardUsername}
              />
              <CText
                children={'6281210197870'}
                style={styles.historyCardPhoneNumber}
              />
            </View>
            <CText
              children={maxLengthString(data, 15)}
              style={styles.historyCardTitle}
            />
            <CText
              children={'Paid'}
              style={styles.historyCardTitle}
            />
            {/* <Image
              style={styles.historyCardIcon}
              source={iconSuccess}
            /> */}
          </View>

        </View>

        <CModal
          icon={iconInformation}
          visible={visible}
          title={title}
          description={description}
          labelAccept={'Understand'}
          onPressAccept={() => {
            this.setState({
              popUp: {
                visible: false
              }
            })
          }}
        />

      </ScrollView>
    );
  }
}
