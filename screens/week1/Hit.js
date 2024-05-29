import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import Cook1 from '../../components/pages/Cook1';
import Cook2 from '../../components/pages/Cook2';
import Cook3 from '../../components/pages/Cook3';
import Cook4 from '../../components/pages/Cook4';
import Cook5 from '../../components/pages/Cook5';
import Cook6 from '../../components/pages/Cook6';


export default function Hit() {
    return (
        <ScrollView>
            <View >
              <Cook1/>
              <Cook2/>
              <Cook3/>
              <Cook4/>
              {/* <Cook5/> */}
              <Cook6/>
            </View>
        </ScrollView>
    );
}
