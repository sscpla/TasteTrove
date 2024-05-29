import React, { useState } from 'react';
import { Image, ScrollView, Text, View,  TextInput } from 'react-native';



export default function Cook1() {
return (
  <View style={{ padding: 20 }}>
    <View style={{  padding: 10 }}>
      <View style={{ paddingLeft: 10 ,alignItems: 'center'}}>
        <Text style={{ fontSize: 30 }}>TasteTrove</Text>
      </View>
      <View style={{ backgroundColor : '#eeeeee', padding : 10 , borderRadius : 10 }} >
        <TextInput style={{ fontSize : 20 }} placeholder="What're you looking for ?" />
      </View>
    </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
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
        />
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
        <Image
          style={{
            width: 300  ,
            height: 200,
            resizeMode: 'cover',
            aspectRatio: 6 / 4,
            borderRadius: 20,
            marginRight: 10,
          }}
          source={require('../../assets/week1/green-curry-recipe.webp')}
        />
             <Image
          style={{
            width: 300,
            height: 200,
            resizeMode: 'cover',
            aspectRatio: 6 / 4,
            borderRadius: 20,
            marginRight: 10,
          }}
          source={require('../../assets/week1/tom-yum-recipe.webp')}
          />
         
      </ScrollView>
    </View>
  );
}
