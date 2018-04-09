/**
 * Created by Richard.ji on 4/8/2018.
 */

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';

class Tester extends Component {

    render () {
        return (
            <View>
                <Text>This is a test message! If this message is shown, it means your project can work well.</Text>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        state: state.Tester
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch);
}

export default connect (mapStateToProps, mapDispatchToProps)(Tester);
