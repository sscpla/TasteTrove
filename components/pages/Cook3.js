import React from "react";
import { View } from "react-native";
import MyIcon from "./MyIcon";
import { useNavigation } from "@react-navigation/native";

export default function Cook3() {
  const navigation = useNavigation();
  return (
    <View style={{ margin: 20, padding: 10, marginTop: -10 }}>
      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <MyIcon title="drink" name="building" size={30} color="black"onPress={()=>{ navigation.navigate("Home")}}  />
        <MyIcon title="Tour" name="map-marker" size={30} color="white" backgroundColor='pink' />
        <MyIcon title="Car" name="car" size={30} color="white" backgroundColor='pink'/>
        <MyIcon title="Flight" name="plane" size={30} color="white" backgroundColor='pink'/>
      </View>
      {/* View ก้อนที่ 3 */}
      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <MyIcon title="Cruise" name="ship" size={30} color="white"backgroundColor='pink' />
        <MyIcon title="Bus" name="bus" size={30} color="white"backgroundColor='pink' />
        <MyIcon title="Event" name="star" size={30} color="orange" backgroundColor='pink'/>
        <MyIcon title="More" name="ellipsis-h" size={30} color="orange" backgroundColor='pink'/>
      </View>
    </View>
    
  );
}


    
