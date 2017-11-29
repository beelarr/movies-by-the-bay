import React from 'react';
import { Text, View, Animated } from 'react-vr';
import { Easing } from 'react-native';


export default class MovieTitle extends React.Component {
    constructor() {
        super();
        this.state = {slideValue: new Animated.Value(1.5)}
    }


componentDidMount() {
        Animated.spring(
          this.state.slideValue,
            {
                toValue: 0,
                friction: 2,
                tension: 5
            }
        ).start();
}

    render() {
        return(
            <View
                style={{ margin: 0.1, height: 0.5}}
                >
                <Animated.Text
                style={{
                    fontSize: 0.5,
                    fontWeight: '400',
                    textAlign: 'center',
                    textAlignVertical: 'center',
                    transform: [
                        {translateY: this.state.slideValue}
                    ]

                }}
                >
                    {this.props.text}
                </Animated.Text>

            </View>
        )
    }
}

