import React from 'react';
import { Button, ScrollView, Text, View } from 'react-native';


export default function Cook4() {
    return (
        <View style={{ flexDirection:'row',justifyContent:'space-between',padding:20}}>
                 
                 <View style={{marginTop:-10}}>
                    <Text style={{ fontSize: 20 ,textAlign: "left"}}>Popular Recipe</Text>
                </View>
                <View style={{marginTop:-10}}>
                    <Text style={{ fontSize: 20 ,textAlign: "right",color:'#FF8C00'}}>See All</Text>
                </View>
             
            </View >                  

        );
}

