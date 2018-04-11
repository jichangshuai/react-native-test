/**
 * Created by Richard.ji on 4/9/2018.
 */
import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
class Home extends Component {

    static navigationOptions = {
        title: 'Home'
    };

    render() {
        return (
            <View>
                <Text>
                    {this.props.state.homeMessage}
                </Text>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        state: state.Home
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);