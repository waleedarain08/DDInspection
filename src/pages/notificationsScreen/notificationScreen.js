import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image ,TouchableOpacity} from 'react-native';
import { Input, Button, Card, SearchBar } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { userLogout } from '../../redux/actions';



export default function NotificationsScreen({navigation}) {
  const [reason, setReason] = useState([{ title: "abc", image: require('../../assets/01.png') }, { title: "abc", image: require('../../assets/02.png') }, { title: "abc", image: require('../../assets/03.png') }, { title: "abc", image: require('../../assets/04.png') }, { title: "abc", image: require('../../assets/01.png') }, { title: "abc", image: require('../../assets/02.png') }]);

  return (
    <View style={styles.container}>
    <View style={styles.notification}>
        <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.goBack()} style={styles.imgcard} >
            <Image style={styles.backpng} source={require('../../assets/back.png')} />
        </TouchableOpacity>
        <Image style={styles.search} source={require('../../assets/search.png')} />
        <Input style={styles.vlogers} placeholder="Notification" />
    </View>
    <View style={styles.today}>
        <Text style={styles.textdv}>Today</Text>
        <FlatList
            data={reason}
            vertical={true}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
                return (
                    <View style={styles.card2}>
                        <Image style={styles.icon2} source={item.image} />
                        <View>
                            <Text style={styles.disney2}>New Vlog From Disney</Text>
                            <Text style={styles.pm2}>11.35 PM</Text>
                        </View>
                        <View style={styles.righticon}>
                        <Image style={styles.iconpng} source={require('../../assets/right-arrow.png')}></Image>
                        </View>
                    </View>
                )
            }}>
        </FlatList>
    </View>
    <View style={styles.week}>
        <Text style={styles.textdd}>This Week</Text>
        <FlatList
            data={reason}
            vertical={true}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
                return (
                    <View style={styles.card2}>
                        <Image style={styles.icon2} source={item.image} />
                        <View>
                            <Text style={styles.disney2}>New Vlog From Disney</Text>
                            <Text style={styles.pm2}>11.35 PM</Text>
                        </View>
                        <View style={styles.righticon}>
                             <Image style={styles.iconpng} source={require('../../assets/right-arrow.png')}></Image>
                             </View>
                    </View>
                )
            }}>
        </FlatList>
    </View>
</View>
);
}


const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: "#0e101f",
      paddingHorizontal: 10
  },
  notification: {
      flex: 1,
      paddingTop: 10,

  },
  backpng: {
      width: 18,
      height: 16,
      position: "absolute",
      top: 6,
      left: 6,
  },
  vlogers: {
      paddingTop: 12,
      paddingLeft: 38,
      paddingBottom: 12,
      marginVertical: 12,
      fontSize: 12,
      color: "white",
      position: "relative",
  },
  iconpng:{
      width:20,
      height:20,
  },
  righticon:{
      flex:1,
      alignItems:"flex-end",
      paddingHorizontal:10,
      paddingVertical:10,
  },
  imgcard: {
      backgroundColor: "#1b1b33",
      width: 30,
      height: 30,
      position: "absolute",
      top: 17,
      left: 12,
      zIndex:1
  },
  search: {
      width: 18,
      height: 19,
      position: "absolute",
      top: 38,
      left: "85%",
  },
  pm: {
      color: "#bbbbbd",
      paddingLeft: 14,
      fontSize: 10,
  },
  today: {
      flex: 2.5,
      paddingHorizontal: 2,
      paddingVertical: 10,
  },
  disney: {
      color: "#ffffff",
      paddingLeft: 14,
      paddingTop: 6,
      fontSize: 12,
  },
  icon: {
      width: 40,
      height: 40,
      marginTop: 0,
  },
  textdv: {
      color: "#ffffff",
      fontSize: 18,
      fontWeight: "bold",
      paddingLeft: 10,

  },
  card: {
      backgroundColor: "#171928",
      paddingHorizontal: 10,
      paddingVertical: 10,
      marginHorizontal: 10,
      marginVertical: 6,
      borderRadius: 10,
      flexDirection: "row",
  },
  week: {
      flex: 4,
      paddingVertical: 10
  },
  textdd: {
      color: "#ffffff",
      fontSize: 18,
      fontWeight: "bold",
      paddingLeft: 10,
  }, 
  pm2: {
      color: "#bbbbbd",
      paddingLeft: 14,
      fontSize: 10,
  },
  disney2: {
      color: "#ffffff",
      paddingLeft: 14,
      paddingTop: 6,
      fontSize: 12,
  },
  icon2: {
      width: 40,
      height: 40,
      marginTop: 0,
  },
  card2: {
      backgroundColor: "#171928",
      paddingHorizontal: 10,
      paddingVertical: 10,
      marginHorizontal: 10,
      marginVertical: 6,
      borderRadius: 10,
      flexDirection: "row",
  },

})