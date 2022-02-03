import React, { Component } from 'react';
import { Text, Image, ScrollView, TouchableOpacity, View, TextInput } from 'react-native';
import CBackNavigationHeader from '../../Global/Components/CBackNavigationHeader';
import CText from '../../Global/Components/CText';
import { styles } from './style';
import { iconSuccess, iconFailed, iconArrowRight, iconTotal, iconNote } from '../../Assets/Shared';
import { formatRupiah, maxLengthString } from '../../Global/Helper/Function';
import CButton from '../../Global/Components/CButton';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default class SplitBillDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      invoice: {
        totalPrice: false,
        totalParticipant: 1,
        note: false
      },
      button: {
        isDisabled: false,
        isLoading: false
      }
    }
  }

  // _handlerSplitBill = () => {
  //   const { invoice, button } = this.state;
  //   const { totalPrice, note, totalParticipant } = invoice;
  //   const { isDisabled, isLoading } = button;
  //   const splitPrice = (totalPrice / totalParticipant);
  //   let temp;

  //   if (totalPrice > 0) {

  //   }

  // }

  render() {
    // const { route } = this.props
    const { invoice, button } = this.state;
    const { totalPrice, note, totalParticipant } = invoice;
    const { isDisabled, isLoading } = button;
    const splitPrice = totalPrice > (totalPrice / totalParticipant);
    // const { title, author, description, urlToImage, content, url } = route?.params;
    const note1 = 'beli makan dirumah itu yang banyak banget terus dibawa pulang'
    const username = "Muhammad Rizky Al Fatih"
    const keyboardType = Platform.OS === 'ios' ? 'ascii-capable' : 'visible-password';
    // const price = formatRupiah(50000, 'Rp. ');
    // console.log('price', price);
    // console.log('total', total);


    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
      >
        <CBackNavigationHeader title={'Split Bill'} />
        <View style={styles.container}>
          <View>
            <View style={styles.totalNoteWrapper}>
              <View style={styles.totalContainer}>
                <CText
                  style={styles.totalLabel}
                  children={'TOTAL BILL'}
                />
                <TextInput
                  style={styles.inputBoxTotal}
                  underlineColorAndroid="rgba(0,0,0,0)"
                  placeholderTextColor={Colors.white}
                  selectionColor={Colors.white}
                  keyboardType={'number-pad'}
                  value={formatRupiah(totalPrice)}
                  maxLength={12}
                  onChangeText={(totalValue) =>
                    this.setState({
                      invoice: {
                        totalPrice: totalValue.trim().replace(/[^0-9]/g, ''),
                        note: note,
                      }
                    })
                  }
                />
              </View>

              <View style={styles.noteContainer}>
                <Image
                  style={styles.iconNote}
                  source={iconNote}
                />

                <TextInput
                  style={styles.inputBoxNote}
                  underlineColorAndroid="rgba(0,0,0,0)"
                  placeholder="Type a note"
                  placeholderTextColor={Colors.white}
                  selectionColor={Colors.white}
                  keyboardType={keyboardType}
                  value={note}
                  maxLength={65}
                  multiline={true}
                  onChangeText={(noteValue) =>
                    this.setState({
                      invoice: {
                        totalPrice: totalPrice,
                        note: noteValue.trim(),
                      }
                    })
                  }
                />
              </View>
            </View>

            <View style={styles.listSplitBill}>
              <CText
                style={styles.splitBillTitle}
                children={'SPLIT BILL WITH'}
              />

              <View style={styles.splitBillCard}>
                <View>
                  <CText
                    children={'You'}
                    style={styles.splitBillCardUsername}
                  />
                  <CText
                    children={'6281210197870'}
                    style={styles.splitBillCardPhoneNumber}
                  />
                </View>
                <TextInput
                  style={styles.inputBoxSplitBillCard}
                  underlineColorAndroid="rgba(0,0,0,0)"
                  placeholderTextColor={Colors.white}
                  selectionColor={Colors.white}
                  keyboardType={'number-pad'}
                  value={formatRupiah(totalPrice)}
                  maxLength={12}
                  onChangeText={(splitBillValue) =>
                    this.setState({
                      invoice: {
                        total: splitBillValue.trim().replace(/[^0-9]/g, ''),
                        note: note,
                      }
                    })
                  }
                />
              </View>
              <View style={styles.splitBillCard}>
                <View>
                  <CText
                    children={maxLengthString(username, 20)}
                    style={styles.splitBillCardUsername}
                  />
                  <CText
                    children={'6281210197870'}
                    style={styles.splitBillCardPhoneNumber}
                  />
                </View>
                <TextInput
                  style={styles.inputBoxSplitBillCard}
                  underlineColorAndroid="rgba(0,0,0,0)"
                  placeholderTextColor={Colors.white}
                  selectionColor={Colors.white}
                  keyboardType={'number-pad'}
                  value={formatRupiah(totalPrice)}
                  maxLength={12}
                  onChangeText={(splitBillValue) =>
                    this.setState({
                      invoice: {
                        total: splitBillValue.trim().replace(/[^0-9]/g, ''),
                        note: note,
                      }
                    })
                  }
                />
              </View>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <CButton
              loading={isLoading}
              disabled={isDisabled}
              label={'SPLIT BILL NOW!'}
            />
          </View>
        </View>
      </ScrollView >
    );
  }
}
