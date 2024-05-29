import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function Japan() {
    const navigation = useNavigation();

    return (
        <View style={{ padding: 20 }}>
            <View style={{ padding: 10 }}>
                <View style={{ paddingLeft: 10, alignItems: 'center' }}>
                    <Text style={{ fontSize: 30 }}>Japan Menu</Text>
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
                            source={require('../../assets/japan/ข้าวแกงกะหรี่.jpg')}
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
                            <Text>ข้าวแกงกะหรี่
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
                            source={require('../../assets/japan/ทงคัตซึ.jpg')}
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
                            <Text>ทงคัตซึ</Text>
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
                        source={require('../../assets/japan/ยากิโซบะ.jpg')}
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
                        <Text>ยากิโซบะ</Text>
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
                        source={require('../../assets/japan/ราเมน.jpg')}
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
                        <Text>ราเมน</Text>
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
                        source={require('../../assets/japan/โอนิกิริ.jpg')}
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
                        <Text>โอนิกิริ</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
