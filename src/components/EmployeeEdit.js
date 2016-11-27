import _ from 'lodash';
import React, { Component } from 'react';
import { text } from 'react-native-communications';
import { connect } from 'react-redux';
import { employeeUpdate, employeeSave, employeeDelete, employeeEditClear } from '../actions';
import { Card, CardSection, Button, Confirm } from './common';
import EmployeeForm from './EmployeeForm';


class EmployeeEdit extends Component {

    state = { showModal: false };

    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value });
        });
    }
    componentWillUnmount() {
            this.props.employeeEditClear();
    }

    onButtonPress() {
        const { name, phone, shift } = this.props;
        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
    }
    onTextPress() {
        const { phone, shift } = this.props;
        text(phone, `Your upcoming shift is on ${shift}`);
    }

    onAcceptDeletePress() {
        const { uid } = this.props.employee;
        this.props.employeeDelete({ uid });
    }

    onDeclineDeletePress() {
        this.setState({ showModal: false });
    }
    render() {
        return (
            <Card>
                <EmployeeForm {...this.props} />

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>
                        Text Schedule
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
                        Fire Employee
                    </Button>
                </CardSection>

                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAcceptDeletePress.bind(this)}
                    onDecline={this.onDeclineDeletePress.bind(this)}
                >
                    Are you sure you want to fire{ `\n${this.props.employee.name}` }?
                </Confirm> 
            </Card>
        );
    }
}


const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
};

export default connect(mapStateToProps, {
    employeeUpdate, employeeSave, employeeDelete, employeeEditClear
}
)(EmployeeEdit);
