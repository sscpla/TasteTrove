import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';

export default function Thai() {
    const navigation = useNavigation();
    return (
        <View style={{ padding: 20 }}>
            <View style={{ padding: 10 }}>
                <View style={{ paddingLeft: 10, alignItems: 'center' }}>
                    <Text style={{ fontSize: 30 }}>TasteTrove</Text>
                </View>
            </View>
            <ScrollView>
                <View style={{ marginBottom: 20 }}>
                    <Image
                        style={{
                            width: 300,
                            height: 200,
                            resizeMode: 'cover',
                            aspectRatio: 6 / 4,
                            borderRadius: 20,
                            marginRight: 10,
                        }}
                        source={require('../../assets/week1/7c452c69-3266-4561-8660-ba8cce938440.jpg')}
                        onPress={()=>{ navigation.navigate("Home")}}
                    />
                    <View style={{
                        borderWidth: 1,
                        borderColor: '#000',
                        borderRadius: 10,
                        padding: 10,
                        marginTop: 5,
                        alignItems: 'center'
                    }}>
                        <Text>Caption for first image</Text>
                    </View>
                </View>
                <View style={{ marginBottom: 20 }}>
                    <Image
                        style={{
                            width: 300,
                            height: 200,
                            resizeMode: 'cover',
                            aspectRatio: 6 / 4,
                            borderRadius: 20,
                            marginRight: 10,
                        }}
                        source={require('../../assets/week1/f.jpg')}
                    />
                    <View style={{
                        borderWidth: 1,
                        borderColor: '#000',
                        borderRadius: 10,
                        padding: 10,
                        marginTop: 5,
                        alignItems: 'center'
                    }}>
                        <Text>Caption for second image</Text>
                    </View>
                </View>
                <View style={{ marginBottom: 20 }}>
                    <Image
                        style={{
                            width: 300,
                            height: 200,
                            resizeMode: 'cover',
                            aspectRatio: 6 / 4,
                            borderRadius: 20,
                            marginRight: 10,
                        }}
                        source={require('../../assets/week1/green-curry-recipe.webp')}
                    />
                    <View style={{
                        borderWidth: 1,
                        borderColor: '#000',
                        borderRadius: 10,
                        padding: 10,
                        marginTop: 5,
                        alignItems: 'center'
                    }}>
                        <Text>Caption for third image</Text>
                    </View>
                </View>
                <View style={{ marginBottom: 20 }}>
                    <Image
                        style={{
                            width: 300,
                            height: 200,
                            resizeMode: 'cover',
                            aspectRatio: 6 / 4,
                            borderRadius: 20,
                            marginRight: 10,
                        }}
                        source={require('../../assets/week1/f.jpg')}
                    />
                    <View style={{
                        borderWidth: 1,
                        borderColor: '#000',
                        borderRadius: 10,
                        padding: 10,
                        marginTop: 5,
                        alignItems: 'center'
                    }}>
                        <Text>Caption for fourth image</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
