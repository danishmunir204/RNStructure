import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableHighlight,
  TouchableNativeFeedback,
} from 'react-native';
import LoaderKit from 'react-native-loader-kit';

interface ButtonProps {
  onPress?: () => void; // Function that takes no arguments and returns void
  title: string; // Title for the button
  btnBackColor?: string;
  btnTextColor?: string;
  btnBorderColor?: string;
  isLoading?: boolean;
  loadingColor?: string;
}

export default function CustomButton({
  onPress,
  title,
  btnBackColor = 'white',
  btnTextColor = 'black',
  btnBorderColor = 'black',
  isLoading = false,
  loadingColor = 'black'
  
}: ButtonProps) {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPress}>
        <View
          style={[
            styles.button,
            {backgroundColor: btnBackColor, borderColor: btnBorderColor},
          ]}>
           {isLoading ? (
            <LoaderKit
              style={{ width: 50, height: 30 }}
              name={'BallSpinFadeLoader'} // Optional: see list of animations below
              color={loadingColor} // Optional: color can be: 'red', 'green',... or '#ddd', '#ffffff',...
            />
          ) : (
            <Text style={[styles.txtStyle, { color: btnTextColor }]}>{title}</Text>
          )}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'transparent',
    bottom: 40,
    width: '100%',
    padding: 4,
  },
  button: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    backgroundColor: 'transparent',
  },
  txtStyle: {
    fontWeight: '400', // Use string value for fontWeight
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
});
