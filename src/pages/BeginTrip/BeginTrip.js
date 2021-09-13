import React, { Component, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text, StyleSheet, FlatList, Image, Button, Pressable, Dimensions, ScrollView } from 'react-native';
import * as Progress from 'react-native-progress';
import Modal from 'react-native-modal';
import { ButtonView } from '../../components';





export default function BeginTrip({ navigation }) {
    const [reason1, setReason1] = useState([{ title: "abc", image: require('../../assets/house3.jpg') }, { title: "abc", image: require('../../assets/house1.jpg') }, { title: "abc", image: require('../../assets/house3.jpg') }, { title: "abc", image: require('../../assets/house1.jpg') }, { title: "abc", image: require('../../assets/house3.jpg') }]);
    const [modalVisible, setModalVisible] = useState(false);

    const goAhead = () => {
        if (button) {
            navigation.navigate("")
        } else {
            alert("Please select all fields to continue")
        }
    }
    const headerComponent = () => {
        return (
            <>
                <View style={{ flexDirection: "row", marginTop: 30, paddingHorizontal: 15 }}>
                    <View style={{ flex: 0.6 }}>
                        <Image style={styles.logo} source={require('../../assets/downloadded.png')} />
                    </View>
                    <View style={{ flex: 6 }}>
                        <Text style={styles.textconfimr}>Please Confirm your devices battery is sufficiently charge and you have the following tools:</Text>
                        <Text style={{ color: "#93969d", paddingTop: 8, fontSize: 12 }}>Rafter Square, Tape Measure, Sonic Measure</Text>
                    </View>
                </View>
                <View style={styles.borderline}></View>
                <View style={{ flexDirection: "row", marginTop: 30, paddingHorizontal: 15, paddingBottom: 20 }}>
                    <View style={{ flex: 0.6 }}>
                        <Image style={styles.logo} source={require('../../assets/downloadded.png')} />
                    </View>
                    <View style={{ flex: 6 }}>
                        <Text style={styles.textconfimr}>Please Confirm acces information for the jobs you plan on completing this trip:</Text>
                    </View>
                </View>
            </>
        );
    }

    return (
        <View style={styles.container}>
            <View>
                <View>
                    <FlatList
                        data={reason1}
                        keyExtractor={(item, index) => index}
                        vartical={true}
                        ListHeaderComponent={headerComponent}
                        showsVerticalScrollIndicator={true}
                        renderItem={({ item }) => {
                            return (
                                <View style={{ flexDirection: "row", paddingHorizontal: 16, marginTop: 35 }}>
                                    <View style={{
                                        height: 120, width: 120,
                                        borderRadius: 10, elevation: 25, backgroundColor: "#fff"
                                    }}>
                                        <Image style={styles.housepng} source={item.image} />
                                    </View>
                                    <View style={{ flex: 1.5, marginLeft: "5%" }}>
                                        <View
                                            style={styles.btn}>
                                            <Image style={styles.calendarLogo} source={require("../../assets/calendar.png")} />
                                            <Text style={{ color: "#ffffff", fontSize: 12 }}>16 Jun - 900AM</Text>
                                        </View>
                                        <View style={{ flexDirection: "row" }}>
                                            <View>
                                                <Image style={styles.locationLogo} source={require("../../assets/location.png")} />
                                            </View>
                                            <View style={{ marginBottom: 10 }}>
                                                <Text style={{ color: "#adb0b9", paddingHorizontal: 10, fontSize: 10 }}>4317 Masonic Drive fort,4116 street San Diago California</Text>
                                            </View>
                                        </View>
                                        <View style={{ flexDirection: "row" }}>
                                            <View>
                                                <Image style={styles.locationLogo} source={require("../../assets/infoSquare.png")} />
                                            </View>
                                            <Text style={{ color: "#adb0b9", paddingHorizontal: 10, fontSize: 10 }}>The tenant Sue Smith (415-555-1212) was contacted on 1/22/21. She well be there from 9-11AM on 1/26/21</Text>
                                        </View>
                                    </View>
                                </View>
                            )
                        }}>
                    </FlatList>
                </View>
                <View
                    style={{
                        position: "absolute", bottom: "4%", shadowColor: '#ffffff', flex: 1, justifyContent: "center",paddingLeft:25,
                        alignItems: "center",
                        shadowOffset: {
                            width: 0,
                            height: 3,
                        },
                        shadowOpacity: 0.27,
                        shadowRadius: 4.65,

                        elevation: 5,
                    }}
                >

                    <ButtonView
                        style={styles.tripbtn}
                        activeOpacity={0.9}
                        // onPress={() => setModalVisible(true)} 
                        >
                        <Text style={{ color: "#ffffff", fontWeight: "bold" }}>Begin Trip</Text>
                    </ButtonView>

                </View>
            </View>
            <Modal
                animationIn="zoomIn"
                animationOut="zoomOut"
                animationInTiming={600}
                animationOutTiming={600}
                transparent={true}
                isVisible={modalVisible}
                onBackButtonPress={() => setModalVisible(!modalVisible)}
                onBackdropPress={() => setModalVisible(!modalVisible)}
            >
                <View style={styles.modalView}>
                    <View style={{ flex: 0, alignItems: "center", paddingBottom: 10 }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Download')} >
                            <Image style={styles.upload} source={require("../../assets/upload.png")} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.textdv}> Your Inspection data is </Text>
                    <Text style={styles.textdv}>downloading..</Text>
                    <View style={{ flexDirection: "row", marginTop: "10%", justifyContent: "space-between", paddingHorizontal: 10 }}>
                        <Text style={styles.dowm}>Downloading...</Text>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ marginRight: 18 }}>
                                <Image style={styles.logoGroup} source={require("../../assets/group813.png")} />
                            </View>
                            <Image style={styles.logoGroup} source={require("../../assets/group814.png")} />
                        </View>

                    </View>

                    <View style={{ flexDirection: "row", paddingHorizontal: 12 }}>
                        <Progress.Bar progress={0.7}
                            animated={true} width={270}
                            height={20}
                            color={"#f36523"}
                            borderRadius={12}
                            borderWidth={0}
                            unfilledColor={"#c4c4c4"}
                        />
                        <Text style={{ paddingHorizontal: 6, paddingTop: 2, color: "#3c434b", fontSize: 12 }}>75%</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('List')}
                        activeOpacity={0.9}
                        style={{ flex: 0, justifyContent: "center", alignItems: "center", marginVertical: "10%" }}>
                        <View style={styles.donebtn}>
                            <Text
                                style={{ color: "#fff" }}>Done</Text>
                        </View>
                    </TouchableOpacity>
                    {/* <TouchableOpacity
                        activeOpacity={0.9}
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </TouchableOpacity> */}
                </View>
            </Modal>
        </View >
    );
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
    },
    logo: {
        width: 20,
        height: 20,
        resizeMode: "contain",
        marginTop: 2
    },
    textconfimr: {
        color: "#292a2f",
        fontWeight: "600",
        fontSize: 12
    },
    borderline: {
        height: 1,
        backgroundColor: "#edeef2",
        marginTop: 20
    },
    btn: {
        backgroundColor: '#f26521',
        flexDirection: 'row',
        marginRight: "30%",
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: 20,
        marginBottom: 10,
        paddingVertical: 6,

    },
    calendarLogo: {
        width: 14,
        height: 16,
        resizeMode: "contain",
    },
    locationLogo: {
        width: 12,
        height: 14,
        resizeMode: "contain",

    },
    housepng: {
        height: 120, width: 120,
        borderRadius: 10,
    },
    tripbtn: {
        backgroundColor: "#193250",
        paddingHorizontal: "37%",
        paddingVertical: 18,
        alignItems: "center",
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    centeredView: {
        // flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        // backgroundColor: "#59595990",

    },
    modalView: {
        flex: 0.6,
        backgroundColor: '#fff',
        borderRadius: 15,
        // paddingTop: 10,
        paddingVertical: "8%"
    },
    donebtn: {
        backgroundColor: "#193250",
        paddingVertical: 17,
        paddingHorizontal: "25%",
        borderRadius: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    dowm: {
        color: "#b7b6bc", paddingLeft: 6, paddingBottom: 22

    },
    textdv: {
        color: "#676570",
        textAlign: "center",
        fontWeight: "500"
    },
    upload: {
        width: 70,
        height: 70,
    },
    logoGroup: {
        width: 20,
        height: 20
    }
})
