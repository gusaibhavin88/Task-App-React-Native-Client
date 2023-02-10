import {launchImageLibrary} from 'react-native-image-picker';
import React from 'react';


export const Gallary = () =>
launchImageLibrary(
  {
    mediaType: 'photo',
    includeBase64: false,
    maxHeight: 200,
    maxWidth: 200,
  },
  response => {
    console.log(response);
    setavatar(response.assets);
    console.log(avatar);
  },
);
