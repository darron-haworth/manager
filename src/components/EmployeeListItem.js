import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { CardSection } from './common';

class EmployeeListItem extends Component {

    onRowPress() {
        Actions.employeeCreate();
    }

    render() {
        const { name } = this.props.employee;

        return (
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)} >
                <View>
                    <CardSection>
                        <Text style={{ fontSize: 18, paddingLeft: 15 }}>
                            {name}
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}


export default EmployeeListItem;
