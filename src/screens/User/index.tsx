import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {SCREENS} from '../../navigation/screens';
import {BottomStackScreenParamList} from '../../navigation/BottomNavigation/bottomNavigatioType';
import {axios} from '../../api/axios';
import {styles} from './styles';

const User: BottomStackScreenParamList<SCREENS.user> = ({}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const fetchAddDrink = () => {
    axios.post('/cocktail', {
      title,
      description,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        value={title}
        style={styles.input}
        onChangeText={v => {
          setTitle(v);
        }}
      />
      <TextInput
        value={description}
        style={styles.input}
        onChangeText={v => {
          setDescription(v);
        }}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          fetchAddDrink();
        }}>
        <Text>ADD Drink</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default User;
