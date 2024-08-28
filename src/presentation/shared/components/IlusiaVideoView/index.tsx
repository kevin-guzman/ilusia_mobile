import Video from "react-native-video";

import { AppView } from "../AppView";

import { styles } from './styles';
import { Props } from './props.ts';

const BackgroundVideo = require("@assets/video/home_background.mp4")

export const IlusiaVideoView = ({style, children, name}: Props) => {
  return (
    <AppView style={style} name={name} >
      <Video
        repeat
        style={styles.video}
        source={BackgroundVideo}
        resizeMode="cover"
      />
      {children}
    </AppView>
  );
};
