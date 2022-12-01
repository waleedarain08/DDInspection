import React, { Component, useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { ButtonView } from '../../components';
import * as Animatable from 'react-native-animatable';
import { Input, Button, Card, SearchBar } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import InspectionCard from '../../components/InspectionCard';


export function List({ navigation }) {
  const [job, setJob] = useState(true);
  const [completed, setCompleted] = useState(false);
  const [rejected, setRejected] = useState(false);
  const place = [
    {
      date: "Feb 16 - 11:30AM",
      image: require('../../assets/house1.jpg'),
      location: " 4317 Masonic Drive Fort, 4116 Pike Street San Diego, California",
      deciption: 'The tenant Sue Smith (415-555-1212) was contacted on 1/22/21. She will be there from 9-11AM on 1/26/21.',
      status: 'Reject',
    },
    {
      date: "Feb 16 - 11:30AM",
      image: require('../../assets/house3.jpg'),
      location: " 4317 Masonic Drive Fort, 4116 Pike Street San Diego, California",
      deciption: 'The tenant Sue Smith (415-555-1212) was contacted on 1/22/21. She will be there from 9-11AM on 1/26/21.',
      status: 'Complete',
    },
    {
      date: "Feb 16 - 11:30AM",
      image: require('../../assets/house1.jpg'),
      location: " 4317 Masonic Drive Fort, 4116 Pike Street San Diego, California",
      deciption: 'The tenant Sue Smith (415-555-1212) was contacted on 1/22/21. She will be there from 9-11AM on 1/26/21.',
      status: 'Complete',
    },
    {
      date: "Feb 16 - 11:30AM",
      image: require('../../assets/house4.jpg'),
      location: " 4317 Masonic Drive Fort, 4116 Pike Street San Diego, California",
      deciption: 'The tenant Sue Smith (415-555-1212) was contacted on 1/22/21. She will be there from 9-11AM on 1/26/21.',
      status: 'Reject',
    },
    {
      date: "Feb 16 - 11:30AM",
      image: require('../../assets/house3.jpg'),
      location: " 4317 Masonic Drive Fort, 4116 Pike Street San Diego, California",
      deciption: 'The tenant Sue Smith (415-555-1212) was contacted on 1/22/21. She will be there from 9-11AM on 1/26/21.',
      status: 'Complete',
    },
  ]

  handleJob = topBar => {
    setJob(1);
    setCompleted(0);
    setRejected(0);
  };
  handleCompleted = topBar => {
    setJob(0);
    setCompleted(1);
    setRejected(0);
  };
  handleRejected = topBar => {
    setJob(0);
    setCompleted(0);
    setRejected(1);
  };
 
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', marginHorizontal: 15, }}>
        <ButtonView
          onPress={() => handleJob()}
          activeOpacity={0.8}
          isRound={1}
          style={job ? styles.topBar : styles.topBar2}>
          <Text style={job ? styles.topBarText : styles.topBarText2}>
            All Jobs
          </Text>
        </ButtonView>
        <ButtonView
          onPress={() => handleCompleted()}
          activeOpacity={0.8}
          isRound={1}
          style={completed ? styles.topBar : styles.topBar2}>
          <Text style={completed ? styles.topBarText : styles.topBarText2}>
            Completed
          </Text>
        </ButtonView>
        <ButtonView
          onPress={() => handleRejected()}
          activeOpacity={0.8}
          isRound={1}
          style={rejected ? styles.topBar : styles.topBar2}>
          <Text style={rejected ? styles.topBarText : styles.topBarText2}>
            Rejected
          </Text>
        </ButtonView>
      </View>
      <FlatList
        data={place}
        keyExtractor={(item, index) => index}
        vartical={true}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => {
          if(job) {
            return (
              <>
               <InspectionCard 
               key={index}
                item={item}
                navigation={navigation}
                />
            </>        
                              )
          }else if(completed) {
            if(item.status == "Complete") {
              return (
                <>
                <InspectionCard 
                 key={index}
                item={item}
                navigation={navigation}

                />
              </>        
                                )
            }
          }else if (rejected) {
            if (item.status == "Reject") {
              return (
                <>
                <InspectionCard 
                 key={index}
                item={item}
                navigation={navigation}

                />
              </>        
                                )
            }
          }
        }}>
      </FlatList>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  topBar: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#193250',
    paddingVertical: '5%',
  },
  topBar2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e5eaf0',
    paddingVertical: '5%',
  },
  topBarText: {
    color: '#193250',
    fontSize: 14,
    fontFamily: "OpenSans-Bold",
  },
  topBarText2: {
    color: '#364b65',
    fontSize: 14,
    fontFamily: "OpenSans-SemiBold",
  },
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
});
