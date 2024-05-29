import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import Thai from '../../components/menu/Thai';



export default function Home() {
    return (
        <ScrollView>
            <View >
              <Thai/>
            </View>
        </ScrollView>
    );
}
