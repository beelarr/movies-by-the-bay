import React from 'react';
import {
    Text,
    View,
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
                    style={{ margin: 0.1, height: 0.3, backgroundColor: '#1AC8F7'}}
                >

                    {scene === 1 ?
                        //if currently in scene 1
                        <GazeButton onClick={() => {
                            this.props.updateScene(2);
                            this.setState({buttonIsClicked:true})}} duration={2000}>
                            <Text
                                style={{fontSize: 0.2, textAlign: 'center'}}>
                                {this.props.buttonText}
                            </Text>
                        </GazeButton>
                        :
                        //if currently in scene 2
                        <GazeButton
                            onClick={() => {
                                this.props.updateScene(3);
                                this.setState({buttonIsClicked:true})}} duration={2000}>
                            <Text style={{fontSize: 0.2, textAlign: 'center'}}>
                                {this.props.buttonText}
                            </Text>
                        </GazeButton>
                    }
                </View>
            </View>
        )
    }
}
