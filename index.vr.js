import React from 'react';
import MainMenu from './Components/Scenes/MainMenu';
import MovieTheater from './Components/Scenes/MovieTheater';
import SceneSelect from "./Components/Scenes/SceneSelect";

import {
  AppRegistry,
  asset,
  Pano,
  Sound,
  View,
} from 'react-vr';

export default class OutdoorMovieTheater extends React.Component {
    constructor() {
        super();
        this.state = {
            mainMenu: true,
            sceneSelect: false
        }
    }

    updateScene(scene) {
      switch (scene) {
          case 2:
            this.setState({ mainMenu: false, sceneSelect: true});
            break;
          case 3:
            this.setState({ mainMenu: false, sceneSelect: false});
            break;
      }
    }

  render() {
      const mainMenu = this.state.mainMenu;
      const sceneSelect = this.state.sceneSelect;

    return (
      <View>
        <Pano source={asset('fort-night.jpg')}>
          <Sound
            volume={0.8}
            loop={true}
            source={{mp3: asset('fort-night-atmosphere.mp3')}}
          />
        </Pano>
          {
            mainMenu ? (
              <MainMenu text={'Movie in the Bay'} buttonText={'Select a Movie'}/>
                ) : (
                  sceneSelect ? (
                      <SceneSelect text={'Scene Select'} buttonText={'Elf'} />
                ) : (
                    < MovieTheater />
                  )
                )
          }
      </View>
    );
  }
};

AppRegistry.registerComponent('OutdoorMovieTheater', () => OutdoorMovieTheater);
