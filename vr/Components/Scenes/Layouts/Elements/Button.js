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

        return (
            <View>
                <View
                    style={{ margin: 0.1, height: 0.4, backgroundColor: '#1AC8F7'}}>

                    {this.props.scene === 1 ?
                        <GazeButton onClick={() => {
                            this.setState({buttonIsClicked: true})
                            this.props.updateScene(2)

                        }} duration={1000}
                                    style={{
                                        flex: 1,
                                        backgroundColor: '1AC8F7',
                                        height: 0.3,
                                        layoutOrigin: [0.5, 0.5],
                                    }}>
                            {time => (

                                <Text
                                    style={{fontSize: 0.3, textAlign: 'center'}}>
                                    {this.state.buttonIsClicked ? 'You have clicked me' : `${this.props.buttonText} | ${time}`}
                                </Text>
                            )}

                        </GazeButton>
                        :
                        <GazeButton onClick={() => {
                            this.setState({buttonIsClicked: true})
                            this.props.updateScene(3)

                        }} duration={1000}
                                    style={{
                                        flex: 1,
                                        backgroundColor: '1AC8F7',
                                        height: 0.3,
                                        layoutOrigin: [0.5, 0.5],
                                    }}>
                            {time => (

                                <Text
                                    style={{fontSize: 0.3, textAlign: 'center'}}>
                                    {this.state.buttonIsClicked ? 'You have clicked me' : `${this.props.buttonText} | ${time}`}
                                </Text>
                            )}

                        </GazeButton>
                    }
                </View>
            </View>
        )
    }
}
