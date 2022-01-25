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
        total: false,
        note: false
      }
    }
  }

  render() {
    // const { route } = this.props
    const { invoice } = this.state;
    const { total, note } = invoice;
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
                  style={styles.inputBox}
                  underlineColorAndroid="rgba(0,0,0,0)"
                  // placeholder="Total"
                  placeholderTextColor={Colors.white}
                  selectionColor={Colors.white}
                  keyboardType={'number-pad'}
                  value={formatRupiah(total)}
                  maxLength={12}
                  onChangeText={(totalValue) =>
                    this.setState({
                      invoice: {
                        total: totalValue.trim().replace(/[^0-9]/g, ''),
                        note: note,
                      }
                    })
                  }
                />
                {/* <CText
                  style={styles.total}
                  children={'Rp10.000.000'}
                /> */}
              </View>

              <TouchableOpacity style={styles.noteContainer}>
                <View style={styles.noteWrapper}>
                  <Image
                    style={styles.iconNote}
                    source={iconNote}
                  />

                  {/* <TextInput
                    // value={number}
                    placeholder="Write Notes"
                    style={styles.noteInput}
                    keyboardType='number-pad'
                  /> */}
                  <CText
                    style={styles.note}
                    children={`"${maxLengthString(note1, 25)}"`}
                  />
                </View>

                <View style={styles.arrowRightContainer}>
                  <CText
                    style={styles.arrowRightTitle}
                    children={'Edit'}
                  />
                </View>
              </TouchableOpacity>
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
                <CText
                  children={'Paid'}
                  style={styles.historyCardTitle}
                />
                {/* <TextInput
                // value={number}
                placeholder="   "
                // style={styles.splitBillCardInput}
                keyboardType='number-pad'
              /> */}
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
                <CText
                  children={'Paid'}
                  style={styles.historyCardTitle}
                />
              </View>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <CButton
              label={'SPLIT BILL NOW!'}
            />
          </View>
        </View>
      </ScrollView >
    );
  }
}
