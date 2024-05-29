import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, ScrollView, Text, View, StyleSheet } from 'react-native';

export default function Kaitod() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>ปีกไก่ทอด</Text>
            </View>
            <ScrollView>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={require('../../assets/thai/ปีกไก่ทอด1.webp')}
                    />
                   
                </View>
                <View style={styles.infoContainer}>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Ingredients:</Text>
                        <Text style={styles.sectionText}>• ปีกไก่ ครึ่งโล</Text>
                        <Text style={styles.sectionText}>• น้ำปลาแท้ 2 ช้อนโต๊ะ</Text>
                        <Text style={styles.sectionText}>• แป้งสำหรับทอด 4 ช้อนโต๊ะ</Text>
                        <Text style={styles.sectionText}>• น้ำมันสำหรับทอด</Text>
                        <Text style={styles.sectionText}>• ซีอิ๊ว 2 ช้อนโต๊ะ</Text>
                       
                     
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Instructions:</Text>
                        <Text style={styles.sectionText}>1. หมักปีกไก่ กับซีอิ้วขาว กับ น้ำปลา อย่างละ 2 ช้อน ทิ้งไว้ 2 ชั่วโมง </Text>
                        <Text style={styles.sectionText}>2. นำออกมาทอดให้ใส่แป้งทอดกรอบ ผสมกับน้ำเย็นคลุกๆให่เข้ากัน  </Text>
                        <Text style={styles.sectionText}>3. ตั้งน้ำมันให้เดือด ปริมาณน้ำมันต้องเทให้ท้วมเนื้อไก่ </Text>
                        <Text style={styles.sectionText}>4. ทอดไฟกลางถึงแรงเป็นอันเรียบร้อย </Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ece4d4',
        padding: 20,
        
    },
    header: {
        padding: 10,
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#333',
    },
    imageContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    image: {
        width: '100%',
        height: 300, // Made the image longer
        resizeMode: 'cover',
        borderRadius: 20,
        marginBottom: 10,
    },
    
    caption: {
        color: '#fff',
        fontWeight: 'bold',
    },
    infoContainer: {
        marginTop: 20,
        width: '100%',
        backgroundColor: '#e4d4bc',
        borderRadius: 10,
        padding: 20,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 5,
    },
    section: {
        marginBottom: 20,
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    sectionText: {
        fontSize: 16,
        color: '#666',
        marginBottom: 5,
    },
});
