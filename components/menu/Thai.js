import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function Thai() {
    const navigation = useNavigation();

    return (
        <View style={{ padding: 20 }}>
            <View style={{ padding: 10 }}>
                <View style={{ paddingLeft: 10, alignItems: 'center' }}>
                    <Text style={{ fontSize: 30 }}>Thai Menu</Text>
                </View>
            </View>
            <ScrollView>
                <View style={{ alignItems: 'center', marginBottom: 20 }}>
                    <TouchableOpacity onPress={() => navigation.navigate("Menupla")}>
                        <Image
                            style={{
                                width: 350, // Increased width
                                height: 233, // Adjusted height to maintain aspect ratio 6/4
                                resizeMode: 'cover',
                                borderRadius: 20,
                            }}
                            source={require('../../assets/thai/ปลากระพงทอดซอดกะเพรา.jpg')}
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
                            <Text>ปลากระพงทอดซอสกะเพรา
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                
                <View style={{ alignItems: 'center', marginBottom: 20 }}>
                    <TouchableOpacity onPress={() => navigation.navigate("Menukai")}>
                        <Image
                            style={{
                                width: 350, 
                                height: 233, 
                                resizeMode: 'cover',
                                borderRadius: 20,
                            }}
                            source={require('../../assets/thai/ปีกไก่ทอด1.webp')}
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
                            <Text>ปีกไก่ทอด</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                
                <View style={{ alignItems: 'center', marginBottom: 20 }}>
                    <Image
                        style={{
                            width: 350, // Increased width
                            height: 233, // Adjusted height to maintain aspect ratio 6/4
                            resizeMode: 'cover',
                            borderRadius: 20,
                        }}
                        source={require('../../assets/thai/ยำรวมมิตร.jpg')}
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
                        <Text>ยำรวมมิตร</Text>
                    </View>
                </View>
                
                <View style={{ alignItems: 'center', marginBottom: 20 }}>
                    <Image
                        style={{
                            width: 350, // Increased width
                            height: 233, // Adjusted height to maintain aspect ratio 6/4
                            resizeMode: 'cover',
                            borderRadius: 20,
                        }}
                        source={require('../../assets/thai/หมูแดดเดียวทอดงา.jpg')}
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
                        <Text>หมูแดดเดียวทอดงา</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
