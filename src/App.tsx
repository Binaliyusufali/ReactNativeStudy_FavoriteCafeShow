import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';

const data = [
  {id: 0, name: 'Starbucks', isFavorite: true},
  {id: 1, name: 'Kahve Dünyası', isFavorite: false},
  {id: 2, name: 'Espressolab', isFavorite: false},
  {id: 3, name: 'coffy', isFavorite: true},
  {id: 4, name: 'Kahveci', isFavorite: false},
];

function App() {
  const [cafeList, setCafeList] = useState(data);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  function onFavoritesChange(isFavoriteSelected) {
    setShowOnlyFavorites(isFavoriteSelected);
    isFavoriteSelected
      ? setCafeList(cafeList.filter(cafe => cafe.isFavorite))
      : setCafeList(data);
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={{margin: 10, alignItems: 'center'}}>
        <Text style={styles.headerText}>Favori Kafeleri Listele</Text>
        <Switch value={showOnlyFavorites} onValueChange={onFavoritesChange} />
      </View>
      <FlatList
        data={cafeList}
        renderItem={({item}) => (
          <Text style={styles.cafePlace}>{item.name}</Text>
        )}
      />
    </SafeAreaView>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flex: 1,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
  },
  cafePlace: {
    fontSize: 20,
  },
});
