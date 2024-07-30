/* eslint-disable react/no-unstable-nested-components */
/*
Projemizi rahatlatması açısından FlatList kullanılarak cihazı yormadan ekrana 
basabilen bir component yapısı sunar bize. Burada kullanılarak cihaz performansı iyileştirildi.
*/
import React from 'react';
import {SafeAreaView, FlatList, StyleSheet, Text} from 'react-native';
import news_data from './news_data.json';
import NewsCard from './conponents/NewsCard';
import ScrollArea from './conponents/ScrollArea/ScrollArea';

const App = () => {
  const renderNews = ({item}) => <NewsCard news={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>News </Text>
      <FlatList
        ListHeaderComponent={() => (
          //ScrrollArea adıyla bir costum component yapısına taşıyalım. ScrollView Alanını
          <ScrollArea />
        )}
        /*keyExcractor instagramda çok etkili kullanıyor. Aşağıdaki ve yukarıdaki kalanla
        gösteriliyor veya tutuluyor.*/

        keyExtractor={item => item.u_id.toString()} //FlatListte vbasılacakların ayırt etmesi için gerekli
        data={news_data}
        renderItem={renderNews}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 50,
  },
});
export default App;
