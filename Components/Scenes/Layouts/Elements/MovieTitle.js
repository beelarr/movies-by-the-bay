import React from 'react';
import { Text, View, Animated } from 'react-vr';
import { Easing } from 'react-native';


export default class MovieTitle extends React.Component {
    constructor() {
        super();
        this.state = {
            fadeSlide: new Animated.Value(0)
        }
    }


componentDidMount() {
        Animated.timing(
          this.state.fadeSlide,
            {
                toValue:1,
                duration: 1000,
                delay: 100,
                easing: Easing.ease
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
                    opacity: this.state.fadeSlide,
                    textAlign: 'center',
                    textAlignVertical: 'center',
                    transform: [
                        {translateY: this.state.fadeSlide.interpolate({
                            inputRange: [0, 1],
                            outputRange: [.3, 0]
                        })
                        }
                    ]

                }}
                >
                    {this.props.text}
                </Animated.Text>

            </View>
        )
    }
}

