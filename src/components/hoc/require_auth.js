import React, { Component } from 'react';
import { connect } from 'react-redux';
import history from '../../../utils/history';

export default (ComposedComponent) => {
  class Authentication extends Component {

    render(){
      return <ComposedComponent {...this.props} />
    }
  }

  const mapStateToProps = (state) => ({
    authenticated: state.authenticated
  });

  return connect(mapStateToProps)(Authentication);
}

