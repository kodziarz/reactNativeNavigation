import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView, TextInput } from 'react-native';
import Button from './Button';

export default class MainScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: "",
            password: ""
        };
    }

    handleRegisterUser = async () => {
        const options = {
            method: "PUT",
            body: {
                login: this.state.login,
                password: this.state.password
            }
        }

        let response = await fetch("192.168.1.111:3000/user", options)
        if (!response.ok)
            return alert(await response.json().message)

        this.props.navigation.navigate("s1")
    }

    render() {
        return (
            <KeyboardAvoidingView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <Text> MainScreen </Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Text>Welcome in app!</Text>
                    <TextInput
                        placeholder='enter login'
                        onChangeText={(newLogin) => { this.setState({ login: newLogin }) }} />
                    <TextInput
                        placeholder='enter password'
                        onChangeText={(newPassword) => { this.setState({ login: newPassword }) }} />
                    <Button text="Register" onPress={this.handleRegisterUser} />
                </View>
            </KeyboardAvoidingView>
        );
    }
}
