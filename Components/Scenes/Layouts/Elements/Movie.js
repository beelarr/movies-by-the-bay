import React from 'react';
import { View, asset, Video } from 'react-vr';

export default class Movie extends React.Component{
    render() {
        return(
            <View
                style={{
                    margin: 0.1,
                    height: 2
                }}
            >
                <Video
                    style={{height: 2}}
                    source={asset('elf.mp4')}
                />

            </View>
        )
    }
}
