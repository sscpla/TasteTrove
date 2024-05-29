import React, { useEffect, useState } from "react";
import { Dimensions, FlatList, ScrollView, Text, View } from "react-native";
import { Image } from "react-native";

export default function Favourite(props) {
    const [onlineTours, setOnlineTours] = useState([]);
    const loadOnlineTours = async () => {
        try {
            let promise = await fetch('https://raw.githubusercontent.com/sscpla/mobileApp/main/assets/food.json');
            let data = await promise.json();
            console.log("Load Data : ", data);
            //SET STATE
            setOnlineTours(data);
        } catch (error) {
            console.log("ERROR : ", error);
        }
    }
    useEffect(() => {
        loadOnlineTours();
    }, []);
    return (

        <View style={props.style}>
            <Text style={{ fontSize: 20 }}>เมนูยอดนิยม</Text>
            <Text style={{ color: "grey" }} >หมู หมึก ต้ม นึ่ง ผัด หมก เผา</Text>
            <FlatList
                 horizontal={false}
                //  numColumns={2}
                //  columnWrapperStyle={{ justifyContent: 'space-between'}}

                // horizontal={true}
                data={onlineTours}
                renderItem={
                    ({ item, index }) => {
                        console.log(item, index, item.uri);
                        return (
                            <View style={{ marginBottom: 5,padding:20 }}>
                                <Image style={{ width: 400, height: 200, borderTopLeftRadius: 10, borderTopRightRadius: 10,borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }} source={{
                                    uri: item.uri
                                }} />
                                <View style={{ flexDirection: "row", borderBottomLeftRadius: 10, borderBottomRightRadius: 10, borderWidth: 0 }}>
                                <View style={{ marginTop: -30, height: 30, width: 400, paddingHorizontal: 10, backgroundColor: 'orange', opacity: 0.7, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                                    <Text style={{ fontSize: 20, color: "white" }}>{item.name}</Text>
                                     {/* <Text style={{ padding:5,fontSize: 15, color: "gray", textAlign: 'left' }}>{item.date}</Text> */}
                                </View>
                                        {/* <Text style={{ padding:5,fontSize: 15, color: "gray", textAlign: 'left' }}>{item.date}</Text> */}
                                   
                                    {/* <View style={{ padding: 5 }}>
                                        <Text style={{ fontSize: 18, color: "black" }}>{item.title} </Text>
                                        <Text style={{ color: "gray" }}>{item.datetime}</Text>
                                        <Text style={{ color: "gray" }}>{item.place}</Text>
                                    </View> */}
                                </View>
                            </View>
                        );
                    }
                }
                                keyExtractor={item => item.id}
            />

                            </View>
                        );
                    }


