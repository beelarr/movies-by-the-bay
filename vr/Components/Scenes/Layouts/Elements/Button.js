import React from 'react';
import {
    Text,
    View,
    VrButton
} from 'react-vr';
import GazeButton from 'react-vr-gaze-button'



export default class Button extends React.Component {
    constructor() {
        super();
        this.state = {
            buttonIsClicked: false
        }
    }
    render() {
        const scene = this.props.scene;
        const buttonIsClicked = this.state.buttonIsClicked;
        return (
            <View>
                <View
                    style={{ margin: 0.1, height: 0.4, backgroundColor: '#1AC8F7'}}
                >

                    {scene === 1 ?
                        //if currently in scene 1
                        <VrButton onClick={() => this.props.updateScene(2)}>
                            <Text
                                style={{fontSize: 0.3, textAlign: 'center'}}>
                                {this.props.buttonText}
                            </Text>
                        </VrButton>
                        :
                        //if currently in scene 2
                        <VrButton
                            onClick={() => this.props.updateScene(3)}>
                            <Text style={{fontSize: 0.3, textAlign: 'center'}}>
                                {this.props.buttonText}
                            </Text>
                        </VrButton>
                    }
                </View>
            </View>
        )
    }
}
