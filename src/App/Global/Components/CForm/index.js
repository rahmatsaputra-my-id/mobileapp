import * as React from 'react';
// import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './style';
import axios from 'axios';

const apiKey = 1234;
const urlnya = `https://staging.activelearning-institute.com/v0/books?token=${apiKey}`;

export default class CForm extends React.Component {

  state = {
    judul: "",
    deskripsi: "",
    author: "",
    cover: "",
  }

  _handlePress = () => {

    if (this.state.judul == "") {
      Alert.alert("Notice!", "Silahkan Isi Judul...");
    } else if (this.state.deskripsi == "") {
      Alert.alert("Notice!", "Silahkan Isi Deskripsi...");
    } else if (this.state.author == "") {
      Alert.alert("Notice!", "Silahkan Isi Author...");
    } else {

      axios({
        url: urlnya,
        method: 'POST',
        // data: {
        //     title: this.state.judul,
        //     sinopsis: this.state.deskripsi,
        //     author: this.state.author,
        //     sinopsicover: this.state.cover,

        // },
        headers: {
          // Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        // body: {
        //     title: this.state.judul,
        //     sinopsis: this.state.deskripsi,
        //     author: this.state.author,
        //     sinopsicover: this.state.cover,
        // }
      }).then(function (responseJson) {
        console.log(responseJson);
      }).catch(function (error) {
        console.log("errornya:");
        console.log(error);
      })

      const submit = {
        title: this.state.judul,
        sinopsis: this.state.deskripsi,
        author: this.state.author,
        cover: this.state.cover,
      }
      console.log(submit);
      // alert("Data Berhasil Dinput");
      Alert.alert(
        'Notice!',
        'Data Berhasil DiSubmit',
        [
          //   {
          //     text: 'Ask me later',
          //     onPress: () => console.log('Ask me later pressed')
          //   },
          //   {
          //     text: 'Cancel',
          //     onPress: () => console.log('Cancel Pressed'),
          //     style: 'cancel'
          //   },
          //   { text: 'OK', onPress: () => console.log('OK Pressed') }
          { text: 'OK', onPress: () => this.props.navigation.navigate('BottomTab') }
        ],
        { cancelable: false }
      );
    }

  }



  // judulTextChange = (inputText) => {
  //     this.setState({ judul: inputText})
  // }

  // deskripsiTextChange = (inputText) => {
  //     this.setState({ deskripsi: inputText})
  // }

  // authorTextChange = (inputText) => {
  //     this.setState({ author: inputText})
  // }

  // coverTextChange = (inputText) => {
  //     this.setState({ cover: inputText})
  // }

  // handleChange = event => {
  //     this.setState({ 
  //         judul: event.target.value,
  //         deskripsi: event.target.value, 
  //         author: event.target.value, 
  //         cover: event.target.value 
  //     });
  // }

  // handleSubmit = event => {
  //     event.preventDefault();

  //     const user = {
  //         title: this.state.judul,
  //         sinopsis: this.state.deskripsi,
  //         author: this.state.author,
  //         cover: this.state.cover
  //     };

  //     axios({
  //             url: urlnya,
  //             method: 'post',
  //             data: {
  //                 title: this.props.navigation.state.params.judul,
  //                 sinopsis: this.props.navigation.state.params.deskripsi,
  //                 author: this.props.navigation.state.params.author,
  //                 sinopsicover: this.props.navigation.state.params.cover,

  //             },
  //             headers: {
  //                 // Accept: 'application/json',
  //                 'Content-Type': 'application/json',
  //             },
  //             body: {
  //                 user
  //             }
  //         }).then(function(responseJson){
  //             console.log(responseJson);
  //         }).catch(function (error){
  //             console.log("errornya:");
  //             console.log(error);
  //         })
  // }

  handleJudul = (text) => {
    this.setState({ judul: text })
  }
  handleDeskripsi = (text) => {
    this.setState({ deskripsi: text })
  }
  handleAuthor = (text) => {
    this.setState({ author: text })
  }
  handleCover = (text) => {
    this.setState({ cover: text })
  }

  render() {

    return (

      <ScrollView>
        <Text style={styles.title}>{'MASUKKAN DATA'}</Text>
        <View style={styles.line}></View>
        <Text style={styles.subtittle} >{'JUDUL*'}</Text>

        <TextInput
          onChangeText={this.handleJudul}
          value={this.state.judul}
          multiline={true}
          style={styles.borderInput}
        />

        <Text style={styles.subtittle} >DESKRIPSI*</Text>

        <TextInput
          onChangeText={this.handleDeskripsi}
          value={this.state.deskripsi}
          multiline={true}
          style={styles.borderInput}
        />

        <Text style={styles.subtittle} >AUTHOR*</Text>

        <TextInput
          onChangeText={this.handleAuthor}
          value={this.state.author}
          multiline={true}
          style={styles.borderInput} />

        <Text style={styles.subtittle} >COVER GAMBAR</Text>

        <TextInput
          onChangeText={this.handleCover}
          value={this.state.cover}
          multiline={true}
          style={styles.borderInput} />

        <Text style={styles.noteText}>(*) Tidak Boleh Kosong</Text>

        <TouchableOpacity onPress={this._handlePress} style={styles.button} >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>

      </ScrollView>
    );
  }
}