import React, { useState } from "react";
import { View, Text ,StyleSheet,StatusBar} from "react-native";
import MusicItem from "../components/MusicItem";

export default function Home({navigation}) {
  const [currentPlaying, setCurrentPlaying] = useState(null);
  const item = {
    id:1,
    title: "Feel Good Inc.",
    group: "Gorillaz",
    album_image:"https://th.bing.com/th/id/R.644ab768a52d09cc162c620ab769ef46?rik=qS72fq8XfJMwBg&pid=ImgRaw&r=0",
    album:"Demon Days",
    year:2005,
    genre:"Alternative rock, hip hop, rap rock, funk rock"
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      <Text style={styles.title}>Minhas Músicas</Text>
      <MusicItem
      isPlaying={() => currentPlaying == item.id}
      music={item}
      navigation={navigation}
      onPlayPause={() => {}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#121212",
    paddingTop: 16,

  },
  title:{
    fontSize:36,
    fontWeight:"bold",
    color:"#fff",
    marginBottom:20,
    marginLeft:20,
  }
});