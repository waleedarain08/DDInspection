import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity,Text, View, Platform, StyleSheet,Image } from "react-native";
import { ButtonView } from '../../components';
export default function InspectionCard({
navigation,
item
}){
    return(
        <View style={styles.container}>
      <View style={styles.sectionContainer}>
                <View style={styles.imageView1}>
                  <View style={styles.imageView2}>
                    <Image
                      source={item.image}
                      style={styles.sectionImage}
                    />
                  </View>
                </View>
                <View style={{ flex: 2, marginLeft: '8%' }}>
                  <View
                    style={{
                      backgroundColor: item.status == "Complete" ? '#f26521': '#bd0000',
                      flexDirection: 'row',
                      marginVertical: 5,
                      marginRight: '32%',
                      padding: '2.5%',
                      alignItems: 'center',
                      justifyContent: 'space-evenly',
                      borderRadius: 20,
                    }}>
                    <Image
                      source={require('../../assets/calendar.png')}
                      style={{
                        height: 14,
                        width: 14,
                        resizeMode: 'contain',
                      }}
                    />
                    <Text style={{ color: '#fff', fontFamily: "OpenSans-Regular", fontSize: 10 }}>
                      Feb 16 - 11:30AM
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      paddingTop: 5,
                    }}>
                    <Image
                      source={require('../../assets/location.png')}
                      style={{ height: 14, width: 14, resizeMode: 'contain' }}
                    />
                    <Text style={{ color: '#9ea1aa', fontFamily: "OpenSans-Regular", fontSize: 9, paddingLeft: '5%' }}>
                      {item.location}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      paddingTop: 5,
                    }}>
                    <Image
                      source={require('../../assets/infoSquare.png')}
                      style={{ height: 14, width: 14, resizeMode: 'contain' }}
                    />
                    <Text style={{ color: '#9ea1aa', fontFamily: "OpenSans-Regular", fontSize: 9, paddingLeft: '5%' }}>
                     {item.deciption}
                    </Text>
                  </View>
                </View>
              </View>
      
              <View
                style={styles.buttonContainer}>
                    {item.status == "Complete" ?
                <ButtonView onPress={() => navigation.navigate('Profile')} activeOpacity={0.8} style={styles.inspectButton}>
                  <Text style={{ color: '#fff', fontFamily:"OpenSans-Bold",fontSize: 12 }}>
                    Inspect Now
                  </Text>
                </ButtonView> :  <ButtonView onPress={() => navigation.navigate('Profile')} activeOpacity={0.8} style={styles.resumeButton}>
                  <Text style={{ color: '#193250', fontFamily:"OpenSans-Bold", fontSize: 11 }}>
                    Resume
                  </Text>
                </ButtonView>}
      
                <ButtonView
                  onPress={() => navigation.navigate('DetailPage')}
                  activeOpacity={0.8}
                  style={styles.detailButton}>
                  <Text style={{ color: '#193250', fontFamily: "OpenSans-Bold", fontSize: 11 }}>
                    View Details
                  </Text>
                </ButtonView>
              </View>
              <View style={styles.sectionBorder}></View>  
   </View>
    )
}


const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
        flexDirection: 'row',
        padding: '5%',
      },
      imageView1: {
        flex: 1.3,
      },
      imageView2: {
        height: "88%",
        width: "95%",
        borderRadius: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 15,
      },
      sectionImage: {
        height: 123,
        width: 135,
        borderRadius: 8,
      },
      buttonContainer: {
        flex: 1,
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingHorizontal: 5,
      },
      resumeButton: {
        paddingHorizontal: '16%',
        paddingVertical: '3%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: '#e5eaf0',
      },
    
      inspectButton: {
        paddingHorizontal: '12%',
        paddingVertical: '3%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: '#193250',
      },
    
      detailButton: {
        paddingHorizontal: '12%',
        paddingVertical: '2.5%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        borderWidth: 0.8,
        borderColor: '#193250',
        backgroundColor: '#ffffff',
      },
      sectionBorder: {
        borderBottomWidth: 3,
        borderBottomColor: '#e5eaf0',
        marginTop: '5%',
      },
})