import {
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';
import React from 'react';
import {SCREENS} from '../../navigation/screens';
import {BottomStackScreenParamList} from '../../navigation/BottomNavigation/bottomNavigatioType';
import {useActions} from '../../redux/hooks/useActions';
import {useTypedSelector} from '../../redux/hooks/useTypedSelector';
import {styles} from './styles';
import {deleteCocktailFromList} from '../../api/listCoctails';

const HomeScreen: BottomStackScreenParamList<SCREENS.home> = ({}) => {
  const {fetchListHomeCocktails} = useActions();
  const data = useTypedSelector(state => state.ListHomeReducer);

  console.log(data.data);

  interface ICocktail {
    title: string;
    description: string;
    _id: string;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View />
        {!!data.data &&
          data.data.map((item: ICocktail) => (
            <View key={item._id} style={styles.itemCocktail}>
              <View style={styles.headerItem}>
                <Text>{item.title}</Text>
                <TouchableOpacity
                  onPress={() => {
                    deleteCocktailFromList(item._id);
                  }}>
                  <Text>delete</Text>
                </TouchableOpacity>
              </View>
              <Text>{item.description}</Text>
            </View>
          ))}
        <TouchableOpacity
          onPress={() => fetchListHomeCocktails()}
          style={{width: 100, height: 50, backgroundColor: 'green'}}>
          <Text>test</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
