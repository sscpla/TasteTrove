import React from "react";
import { View } from "react-native";
import MyIcon from "./MyIcon";
import { useNavigation } from "@react-navigation/native";

export default function Cook3() {
  const navigation = useNavigation();
  return (
    <View style={{ margin: 20, padding: 10, marginTop: -10 }}>
      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <MyIcon title="Thai" name="bug" size={30} color="orange"onPress={()=>{ navigation.navigate("Home")}}  />
        <MyIcon title="India" name="eye" size={30} color="orange" backgroundColor='pink' onPress={()=>{ navigation.navigate("Indiamenu")}}/>
        <MyIcon title="Japan" name="car" size={30} color="orange" backgroundColor='pink'onPress={()=>{ navigation.navigate("Japanmenu")}}/>
        <MyIcon title="Korean" name="cloud" size={30} color="orange" backgroundColor='pink'/>
      </View>
      {/* View ก้อนที่ 3 */}
      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <MyIcon title="Italy" name="building" size={30} color="orange"backgroundColor='pink' />
        <MyIcon title="Drink" name="heart" size={30} color="orange"backgroundColor='pink' />
        <MyIcon title="Dessert" name="camera" size={30} color="orange" backgroundColor='pink'/>
        <MyIcon title="More" name="ellipsis-h" size={30} color="orange" backgroundColor='pink'/>
      </View>
    </View>
    
  );
}


    
