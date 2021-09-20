import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, FlatList, Image, Pressable, ScrollView, Dimensions, TouchableOpacity, Linking, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ButtonView } from '../../components';

export default function CheckProperty({ navigation }) {
    const [reason, setReason] = useState([{ title: "abc", image: require('../../assets/house4.jpg') },
    { title: "abd", image: require('../../assets/house1.jpg') }, { title: "ghi", image: require('../../assets/house3.jpg') },
    { title: "efg", image: require('../../assets/house4.jpg') }, { title: "efg", image: require('../../assets/house4.jpg') }, { title: "efg", image: require('../../assets/house4.jpg') }])
    const onViewRef = React.useRef(({viewableItems})=> {
        console.log('viewableItems', viewableItems)
        let currentIndex = viewableItems[0].index;
        setCurrentIndex(currentIndex)
        // Use viewable items in state or as intended
    })
  const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 })
const [currentIndex, setCurrentIndex] = useState () 
    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <FlatList
                    keyExtractor={(item, index) => index}
                    horizontal={true}
                    data={reason}
                    showsHorizontalScrollIndicator={false}
                    onViewableItemsChanged={onViewRef.current}
                    viewabilityConfig={viewConfigRef.current}
                    pagingEnabled
                    renderItem={({ item }) => {
                        return (
                            <View>
                                <Image style={styles.housePng} source={item.image} >
                                </Image  >

                            </View>
                        )
                    }}>
                </FlatList>
                <View
                    style={{ position: 'absolute', top: Platform.OS == "ios" ? "12%" : 10, flexDirection: 'row', justifyContent: 'space-between', width: '95%', left: 5, paddingHorizontal: 10}}
                >
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => navigation.goBack()}
                        style={{ backgroundColor: "#fff", padding: 14,   borderRadius: 5 }}
                    >
                        <Image style={styles.arrow} source={require('../../assets/drop-down.png')} />
                    </TouchableOpacity>
                    <View>
                        <Image style={styles.dots} source={require('../../assets/3-dots.png')}  />
                    </View>
                </View>
                <View style={{ flexDirection: "row",justifyContent:"center"}}>
                    {reason.map((val, index ) => {
                       if(index == currentIndex) {
                           return  <View style={{ width: 12, height: 12, backgroundColor: "#fff", borderRadius: 10, zIndex: 20,margin:4,zIndex:20,bottom:"19%" }} />
                       }else {
                        return <View style={{ width: 8, height: 8, backgroundColor: "#c4c4c4", borderRadius: 10, zIndex: 20,margin:4,zIndex:20,bottom:"19%" }} />
                       }
                    })}
                </View>
            </View>
            <View style={{ flex: 1.4 }}></View>
            <View style={styles.detail}>
                <ScrollView contentContainerStyle={{ height: 600 }} showsVerticalScrollIndicator={false}>
                    <View style={{ flex: 1, flexGrow: 1 }}>
                        <View style={{ flex: 0, alignItems: "center" }}>
                            <View style={styles.line}></View>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <View>
                                <Text style={{ color: "#484c53", fontSize: 18, fontWeight: "bold", fontFamily: "OpenSans-Regular" }}>Nacary Banglow</Text>
                                <Text style={{ color: "#838d99", fontSize: 12, lineHeight: 20, fontFamily: "OpenSans-Regular" }}>4317 Masonic Drive Fort</Text>
                            </View>
                            <View style={styles.saleButton}>
                                <Text style={{ textAlign: "center", paddingTop: 4, color: "#193250", fontWeight: "bold", fontSize: 11 }}>For Sale</Text>
                            </View>
                        </View>
                        <Text style={styles.read}>
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. <Text style={{ color: "#193250" }}>Read more...</Text>
                        </Text>
                        <Text style={{ color: "#37383d", fontSize: 15, fontWeight: "bold", fontFamily: "OpenSans-Regular" }}>Contact Person</Text>
                        <View style={{ flexDirection: "row", paddingVertical: 20, justifyContent: "space-around" }}>
                            <Image style={styles.logo} source={require('../../assets/group.png')} />
                            <View style={{ paddingHorizontal: 2, paddingVertical: 5, flex: 0.6 }}>
                                <Text style={{ color: "#596677", fontFamily: "OpenSans-Regular" }}>Marty Mccormick</Text>
                                <Text style={{ color: "#a7aeb8", fontSize: 13, fontFamily: "OpenSans-Regular" }}>Owner</Text>
                            </View>
                            <View style={{ flex: 0.2 }}>
                                <TouchableOpacity onPress={() => Linking.openURL('sms:+923362857730?body=hi')} style={styles.vector}>
                                    <Image style={styles.vectorLogo} source={require('../../assets/vector1.png')} />
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 0 }}>
                                <TouchableOpacity onPress={() => Linking.openURL(`tel:${+923362857730}`)}  style={styles.vector}>
                                    <Image style={styles.vectorLogo} source={require('../../assets/call.png')} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Text style={{ color: "#505357", paddingVertical: 20, fontFamily: "OpenSans-Bold" }}>Specification</Text>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 15 }}>
                            <View>
                                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                    <Image style={styles.frameLogo} source={require('../../assets/vector.png')} />
                                    <Text style={{ color: "#2d3238", fontSize: 23, fontWeight: "bold", fontFamily: "OpenSans-Regular" }}>03</Text>
                                </View>
                                <Text style={{ color: "#a3adb9", fontSize: 12, lineHeight: 20 }}>Bathrooms</Text>
                            </View>
                            <View >
                                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                    <Image style={styles.frameLogo} source={require('../../assets/frame.png')} />
                                    <Text style={{ color: "#2d3238", fontSize: 23, fontWeight: "bold", fontFamily: "OpenSans-Regular" }}>05</Text>
                                </View>
                                <Text style={{ color: "#a3adb9", fontSize: 12, lineHeight: 20, fontFamily: "OpenSans-Regular" }}>Bathrooms</Text>
                            </View>
                            <View>
                                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                    <Image style={styles.frameLogo} source={require('../../assets/groupicon.png')} />
                                    <Text style={{ color: "#2d3238", fontSize: 22, fontWeight: "bold", paddingLeft: 6, fontFamily: "OpenSans-Regular" }}>350</Text>

                                </View>
                                <Text style={{ color: "#a3adb9", fontSize: 12, lineHeight: 20 }}>Squre feet</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-evenly", paddingVertical: "20%" }}>
                            <ButtonView
                                activeOpacity={0.9}
                                style={styles.getButton}
                            >
                                <Text style={{ color: "#193250" }}>Get Direction</Text>
                            </ButtonView >
                            <ButtonView
                                activeOpacity={0.9}
                                style={styles.inspectButton}
                                onPress={() => navigation.navigate('Profile')}
                            >
                                <Text style={{ color: "#ffffff" }}>Inspect Now</Text>
                            </ButtonView >
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    housePng: {
        width: Dimensions.get("window").width,
        height: Platform.OS == "ios" ? 310 :280,
        resizeMode: "cover",
        position:'relative'
    },
    arrow: {
        position: "absolute", zIndex: 10,
        width: 14,
        height: 8,
        tintColor: "#000",
        transform: [{ rotate: '90deg' }],
        top: 10,
        left: 6
    },
    dots: {
        width: 4,
        height: 15,
        // position: "absolute", zIndex: 30,
        // top: 45,
        // right: 20
    },
    detail: {
        flex: 3,
        height: "66%",
        width:"100%",
        backgroundColor: "#ffffff",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 16,
        paddingTop: 10,
        position: "absolute",
        zIndex: 10,
        bottom: 0

    },
    line: {
        // backgroundColor:"#e1e1e1",
        height: 3, width: 40,
        marginVertical: 10
    },
    saleButton: {
        backgroundColor: "#e7ebee",
        marginRight: 16,
        height: 24,
        width: 70
    },
    read: {
        color: "#9c9fa4",
        paddingVertical: 20,
        fontSize: 11,
        lineHeight: 20,
        fontFamily: "OpenSans-Regular"
    },
    getButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
        borderRadius: 35,
        width: 158,
        height: 50,
        borderWidth: 1,
        borderColor: "#193250",
        marginRight: 4,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 6,

    },
    inspectButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#193250",
        width: 158,
        height: 52,
        borderRadius: 35,
        marginLeft: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 6,
    },
    vector: {
        backgroundColor: "#ffffff",
        width: 40,
        height: 40,
        borderRadius: 40,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 10,
    },
    vectorLogo: {
        width: 20,
        height: 20,
        marginLeft: 10, marginTop: 10
    },
    frameLogo: {
        width: 24,
        height: 22,
        resizeMode: "contain",
        marginTop: 4
    }
})