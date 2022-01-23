import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SET_ACCESS_TOKEN } from './reducer';
import RenderApp from './render.app';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation, setAccessToken } = this.props;

    return (
      <RenderApp
        setAccessToken={(data) => setAccessToken(data)}
        navigation={navigation}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const { accessToken } = state;

  return {
    accessToken
  };
};

const mapDispatchToProps = dispatch => ({
  setAccessToken: (data) => dispatch({
    type: SET_ACCESS_TOKEN,
    data: data
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

