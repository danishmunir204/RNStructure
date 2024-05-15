// imagePicker.ts

import {
  launchImageLibrary,
  launchCamera,
  MediaType,
  ImageLibraryOptions,
} from 'react-native-image-picker';
type ImagePickerCallback = (imageUri: string | undefined) => void;

export const openImagePicker = (
  mediaType: MediaType,
  callback: ImagePickerCallback,
) => {
  const options: ImageLibraryOptions = {
    mediaType,
    includeBase64: false,
    maxHeight: 2000,
    maxWidth: 2000,
  };

  launchImageLibrary(options, response => {
    if (response.didCancel) console.log('User cancelled image picker');
    else if (response.errorMessage)
      console.log('Image picker error:', response.errorMessage);
    else {
      const imageUri = response.assets?.[0]?.uri;
      if (imageUri) {
        callback(imageUri);
      }
    }
  });
};

export const openCameraPicker = (
  mediaType: MediaType,
  callback: ImagePickerCallback,
) => {
  const options: ImageLibraryOptions = {
    mediaType,
    includeBase64: false,
    maxHeight: 2000,
    maxWidth: 2000,
  };

  launchCamera(options, response => {
    if (response.didCancel) console.log('User cancelled image picker');
    else if (response.errorMessage)
      console.log('Image picker error:', response.errorMessage);
    else {
      const imageUri = response.assets?.[0]?.uri;
      if (imageUri) {
        callback(imageUri);
      }
    }
  });
};
