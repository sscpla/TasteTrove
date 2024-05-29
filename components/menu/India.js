import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function India() {
    const navigation = useNavigation();

    return (
        <View style={{ padding: 20 }}>
            <View style={{ padding: 10 }}>
                <View style={{ paddingLeft: 10, alignItems: 'center' }}>
                    <Text style={{ fontSize: 30 }}>India Menu</Text>
                </View>
            </View>
            <ScrollView>
                <View style={{ alignItems: 'center', marginBottom: 20 }}>
                    <TouchableOpacity onPress={() => navigation.navigate("")}>
                        <Image
                            style={{
                                width: 350, 
                                height: 233, 
                                resizeMode: 'cover',
                                borderRadius: 20,
                            }}
                            source={require('../../assets/india/แกงกุรุหม่า.webp')}
                        />
                        <View style={{
                            width: 350, 
                            marginTop: -30,
                            height: 30,
                            paddingHorizontal: 10,
                            backgroundColor: 'orange',
                            opacity: 0.7,
                            borderBottomLeftRadius: 10,
                            borderBottomRightRadius: 10,
                            justifyContent: 'center',
                        }}>
                            <Text>แกงกุรุหม่า
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                
                <View style={{ alignItems: 'center', marginBottom: 20 }}>
                    <TouchableOpacity onPress={() => navigation.navigate("Hit")}>
                        <Image
                            style={{
                                width: 350, 
                                height: 233, 
                                resizeMode: 'cover',
                                borderRadius: 20,
                            }}
                            source={require('../../assets/india/ข้าวหมกไก่.webp')}
                        />
                        <View style={{
                            width: 350,
                            marginTop: -30,
                            height: 30,
                            paddingHorizontal: 10,
                            backgroundColor: 'orange',
                            opacity: 0.7,
                            borderBottomLeftRadius: 10,
                            borderBottomRightRadius: 10,
                            justifyContent: 'center',
                        }}>
                            <Text>ข้าวหมกไก่</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                
                <View style={{ alignItems: 'center', marginBottom: 20 }}>
                    <Image
                        style={{
                            width: 350, 
                            height: 233, 
                            resizeMode: 'cover',
                            borderRadius: 20,
                        }}
                        source={require('../../assets/india/ซาโมซ่า.webp')}
                    />
                    <View style={{
                        width: 350, 
                        marginTop: -30,
                        height: 30,
                        paddingHorizontal: 10,
                        backgroundColor: 'orange',
                        opacity: 0.7,
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        justifyContent: 'center',
                    }}>
                        <Text>ซาโมซ่า</Text>
                    </View>
                </View>
                
                <View style={{ alignItems: 'center', marginBottom: 20 }}>
                    <Image
                        style={{
                            width: 350, 
                            height: 233, 
                            resizeMode: 'cover',
                            borderRadius: 20,
                        }}
                        source={require('../../assets/india/บัตเตอร์ชิกเก้น.webp')}
                    />
                    <View style={{
                        width: 350, // Same width as the image
                        marginTop: -30,
                        height: 30,
                        paddingHorizontal: 10,
                        backgroundColor: 'orange',
                        opacity: 0.7,
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        justifyContent: 'center',
                    }}>
                        <Text>บัตเตอร์ชิกเก้น</Text>
                    </View>
                </View>
                <View style={{ alignItems: 'center', marginBottom: 20 }}>
                    <Image
                        style={{
                            width: 350, 
                            height: 233, 
                            resizeMode: 'cover',
                            borderRadius: 20,
                        }}
                        source={require('../../assets/india/บาเยีย.jpg')}
                    />
                    <View style={{
                        width: 350, 
                        marginTop: -30,
                        height: 30,
                        paddingHorizontal: 10,
                        backgroundColor: 'orange',
                        opacity: 0.7,
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        justifyContent: 'center',
                    }}>
                        <Text>บาเยีย</Text>
                    </View>
                </View>
                <View style={{ alignItems: 'center', marginBottom: 20 }}>
                    <Image
                        style={{
                            width: 350, 
                            height: 233, 
                            resizeMode: 'cover',
                            borderRadius: 20,
                        }}
                        source={require('../../assets/india/ปานิปุริ.webp')}
                    />
                    <View style={{
                        width: 350, 
                        marginTop: -30,
                        height: 30,
                        paddingHorizontal: 10,
                        backgroundColor: 'orange',
                        opacity: 0.7,
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        justifyContent: 'center',
                    }}>
                        <Text>ปานิปุริ</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
