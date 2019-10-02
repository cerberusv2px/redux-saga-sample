import React, {Component} from "react";
import {Text, View} from "react-native";

import {connect} from "react-redux";

import {fetchPosts} from "./actions";
import {bindActionCreators} from "redux";

class RootScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    }
  }

  async componentDidMount() {
    await this.fetchAsyncPost();
    console.warn('did mount', this.props.posts);
  }

  fetchAsyncPost = async () => {
    await this.props.fetchPosts();
    console.warn('propsss', this.props.posts);
    const {response, error} = this.props.posts;
    this.state.data = response;
    console.warn('RESPONSE', response);
  };

  render() {
    const {isLoading, response} = this.props.posts;
    // this.state.data = response;
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>{isLoading.toString()}</Text>
        <Text>{JSON.stringify(this.state.data)}</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts
});

/*const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
});*/

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchPosts}, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RootScreen);
