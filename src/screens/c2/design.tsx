import React from 'react';
import {Text, View} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {useAppSelector} from '../../redux/app/hooks';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';

//@ts-ignore
const Design = ({nav}) => {
  const userData = useAppSelector(
    (state: any) => state.authReducers.auth.userData,
  );

  // Convert the userData object to a JSON string with indentation for readability
  const userDataString = JSON.stringify(userData, null, 2);

  return (
    <SafeAreaView style={{flex: 1, padding: 10}}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            nav.pop();
          }}>
          <Text style={{color: 'white'}}>
            Component 2 (click me to go back)
          </Text>
        </TouchableOpacity>

        {userData.status ? (
          <ScrollView>
            <View style={{backgroundColor: '#fff'}}>
              <Text>
                {'here is user response:\n'}
                {userDataString}
              </Text>
            </View>
          </ScrollView>
        ) : null}
      </View>
    </SafeAreaView>
  );
};

export default Design;
