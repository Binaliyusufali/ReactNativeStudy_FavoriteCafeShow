import React from 'react';
import {ScrollView, Image} from 'react-native';
import styles from './ScrollArea.style';
import news_banner_data from './news_banner_data.json';

const ScrollArea = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {news_banner_data.map(bannerNews => (
        <Image style={styles.bannerImage} source={{uri: bannerNews.imageUrl}} />
      ))}
    </ScrollView>
  );
};

export default ScrollArea;
