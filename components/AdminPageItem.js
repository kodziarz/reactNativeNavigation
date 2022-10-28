import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Button from './Button';

export default class AdminPageItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: "row", flex: 1 }}>
                    <View style={{ flex: 1 }}>
                        <Text>Obrazek</Text>
                    </View>
                    <Button style={{ flex: 1 }}
                        text="detail"
                        onPress={() => { this.props.onDetail(this.props.user) }} />
                    <Button style={{ flex: 1 }}
                        text="delete"
                        onPress={() => { this.props.onDelete(this.props.user) }} />
                </View>
                <Text style={{ flex: 1 }}>{this.props.id}: {this.props.user.login}</Text>
            </View>
        );
    }
}
