import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import Thai from '../../components/menu/Thai';
import India from '../../components/menu/India';



export default function Indiamenu() {
    return (
        <ScrollView>
            <View >
              <India/>
            </View>
        </ScrollView>
    );
}
