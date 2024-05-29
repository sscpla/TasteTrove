import React, { useEffect, useState } from "react";
import { FlatList, Text, View, Image, Dimensions } from "react-native";

export default function Cook6(props) {
    const [onlineTours, setOnlineTours] = useState([]);

    const loadOnlineTours = async () => {
        try {
            let response = await fetch('https://raw.githubusercontent.com/sscpla/mobileApp/main/assets/food.json');
            let data = await response.json();
            console.log("Load Data: ", data);
            setOnlineTours(data);
        } catch (error) {
            console.error("ERROR: ", error);
        }
    }

    useEffect(() => {
        loadOnlineTours();
    }, []);

    return (
        <View style={props.style}>
            <FlatList
                data={onlineTours}
                numColumns={2}  // Set number of columns
                renderItem={({ item }) => {
                    console.log(item, item.uri);
                    return (
                        <View style={{ flex: 1, margin: 5, padding: 10 }}>
                            <Image
                                style={{
                                    width: '100%',
                                    height: Dimensions.get('window').width / 4,  // Adjust height as needed
                                    borderTopLeftRadius: 10,
                                    borderTopRightRadius: 10,
                                    borderBottomLeftRadius: 10,
                                    borderBottomRightRadius: 10
                                }}
                                source={{ uri: item.uri }}
                            />
                            <View style={{
                                flexDirection: "row",
                                borderBottomLeftRadius: 10,
                                borderBottomRightRadius: 10,
                                borderWidth: 0
                            }}>
                                <View style={{
                                    marginTop: -30,
                                    height: 30,
                                    flex: 1,
                                    paddingHorizontal: 10,
                                    backgroundColor: 'orange',
                                    opacity: 0.7,
                                    borderBottomLeftRadius: 10,
                                    borderBottomRightRadius: 10
                                }}>
                                    <Text style={{ fontSize: 16, color: "white" }}>{item.name}</Text>
                                </View>
                            </View>
                        </View>
                    );
                }}
                keyExtractor={item => item.id}  
            />
        </View>
    );
}
