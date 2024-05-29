import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

// export default function MyIcon(props) {
//   return (
//     <View style={{ flex: 1, alignItems: "center" }}>
//       <TouchableOpacity style={{
//           alignItems: "center",
//           borderRadius: props.size / 0.5, // make a circle
//           width: props.size + 30, // add padding to increase the size
//           height: props.size + 30, // add padding to increase the size
//           backgroundColor: props.backgroundColor || "transparent", // default to transparent
//           color:props.color,
//           justifyContent: "center",
//         }} onPress={ props.onPress } >
//         <FontAwesome name={props.name} size={props.size} color="pink" />
//       </TouchableOpacity>
//       <Text>{props.title}</Text>
//     </View>
//   );

// }
export default function MyIcon(props) {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <TouchableOpacity style={{ alignItems : "center" }} onPress={ props.onPress } >
        <FontAwesome name={props.name} size={props.size} color={props.color}  />
        <Text>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
}
