import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                    label="Name"
                    placeholder="Jane"
                    />
                </CardSection>

                <CardSection>
                 <Input
                    label="Phone"
                    placeholder="555-555-1212"
                 />
                 </CardSection>

                 <CardSection>
                    <Text>Picker</Text>
                 </CardSection>

                <CardSection>
                    <Button>
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default EmployeeCreate;

