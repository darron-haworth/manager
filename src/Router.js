import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 65 }}>
            <Scene key="auth">
                <Scene component={LoginForm} initial key="login" title="Please Login" />
            </Scene>
            <Scene key="main">
                <Scene component={EmployeeList} initial key="employeeList" title="Employees" />
            </Scene>
        </Router>
    );
};

export default RouterComponent;
