import React from 'react';
import { Text, View, } from 'react-vr';
import MainMenuContainer from './Layouts/MainMenuContainer';


export default class MainMenu extends React.Component {
    render() {
        return(
            <MainMenuContainer text={this.props.text} buttonText={this.props.buttonText} />
        )
    }
}
