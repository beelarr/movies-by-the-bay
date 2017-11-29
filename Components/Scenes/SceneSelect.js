import React from 'react';
import { View, Text, VrButton } from 'react-vr';
import SceneSelectMenu from './Layouts/SceneSelectMenu';

export default class SceneSelect extends React.Component {
    render() {
        return (
            <SceneSelectMenu text={this.props.text} buttonText={this.props.buttonText} />
        )
    }
}
