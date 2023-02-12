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
  },
);
// export const Gallary = () =>{
//   ImagePicker.openPicker({
//     width: 300,
//     height: 400,
//     cropping: true
//   }).then(image => {
//     setavatar(image);
//   });
// }
