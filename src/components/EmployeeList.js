import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { ListView, Text, View } from 'react-native';
import { employeesFetch } from '../actions'; 

class EmployeeList extends Component {

    componentWillMount() {
        this.props.employeesFetch();
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        //nextProps are the next set of props that this componentWillMount
        //will be rendered with
        //this.props is still the old set of props
        this.createDataSource(nextProps);
    }

    createDataSource({ employees }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(employees);
    }

    render() {
        console.log(this.props);
        return (
            <View>
                <Text>Employee 1</Text>
                <Text>Employee 2</Text>
                <Text>Employee 3</Text>
                <Text>Employee 4</Text>
                <Text>Employee 5</Text>
                <Text>Employee 6</Text>
            </View>
        );
    }
}

const mapStateToProps = state => {
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid };
    });
    return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
