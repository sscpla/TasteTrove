import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import Favourite from '../../components/menu/Favourite';


export default function Menuscreens() {
    return (
        <ScrollView>
            <View >
              <Favourite/>
            </View>
        </ScrollView>
    );
}
