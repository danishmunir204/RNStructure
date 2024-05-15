import React, {useState, useEffect} from 'react';
import {Button, Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {useAppDispatch, useAppSelector} from '../../redux/app/hooks';
import {loginAPI} from '../../redux/actions/AuthActions';
import {
  ImageLibraryOptions,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import {
  openCameraPicker,
  openImagePicker,
} from '../../components/Layouts/ImagePicker/ImagePicker';

//@ts-ignore
const Design = ({nav}) => {
  const dispatch = useAppDispatch();
  const [isAlreadyLoggedIn, setAlreadLoginIn] = useState(false);
  const [pickImage, setPickedImage] = useState('');
  const userData = useAppSelector(
    (state: any) => state.authReducers.auth.userData,
  );

  const handleImagePicker = () => {
    openImagePicker('mixed', imageUri => {
      if (imageUri) {
        setPickedImage(imageUri);
      }
    });
  };

  const handleCameraPicker = () => {
    openCameraPicker('mixed', imageUri => {
      if (imageUri) {
        setPickedImage(imageUri);
      }
    });
  };

  useEffect(() => {
    // This effect will run every time `userData` changes
    console.log('Login response:', userData.status);
    setAlreadLoginIn(userData.status === true);
  }, [userData]); // Add `userData` to the dependency array

  const navigateToC2 = async () => {
    nav.navigate('SecondComponent');
  };

  const loginCall = async () => {
    if (!isAlreadyLoggedIn) {
      try {
        const LoginCredentials = {
          email: 'qatesting9890@gmail.com',
          password: '11223344',
        };
        await dispatch(loginAPI(LoginCredentials));
      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      nav.navigate('SecondComponent');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigateToC2}>
        <Text style={{color: 'red'}}>Component 1 (click to navigate)</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={loginCall}>
        <Text style={{color: 'pink', paddingVertical: 20}}>
          {isAlreadyLoggedIn
            ? 'You already In, Navigate next to see response.'
            : 'Click to login'}
        </Text>
      </TouchableOpacity>
      {pickImage ? (
        <Image
          source={{uri: pickImage}}
          style={{width: 200, height: 200}}
          resizeMode="contain"
        />
      ) : null}

      <Button title="Choose from Device" onPress={handleImagePicker} />
      <Button title="Open Camera" onPress={handleCameraPicker} />
    </View>
  );
};

export default Design;
