/**
 * Created by Richard.ji on 4/9/2018.
 */
import React, {Component} from 'react';
import {View, Text} from 'react-native'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
class Mine extends Component {
    render () {
        return (
            <View>
                <Text>
                    {this.props.state.mineMessage}
                </Text>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        state: state.Mine
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Mine);