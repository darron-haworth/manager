import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { CardSection } from './common';

class EmployeeListItem extends Component {

    onRowPress() {
        Actions.employeeEdit({ employee: this.props.employee });
    }

    render() {
        const { name, phone } = this.props.employee;

        return (
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)} >
                <View>
                    <CardSection style={{ justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 18, paddingLeft: 15 }}>
                            {name}
                        </Text>
                        <Text style={{ fontSize: 18, paddingLeft: 15 }}>
                            {phone}
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}


export default EmployeeListItem;
