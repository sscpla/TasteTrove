import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, ScrollView, Text, View, StyleSheet } from 'react-native';

export default function Plakapong() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>ปลากระพงทอดซอสกะเพรา</Text>
            </View>
            <ScrollView>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={require('../../assets/thai/ปลากระพงทอดซอดกะเพรา.jpg')}
                    />
                   
                </View>
                <View style={styles.infoContainer}>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Ingredients:</Text>
                        <Text style={styles.sectionText}>• เนื้อปลากะพงหั่นชิ้น 200 กรัม</Text>
                        <Text style={styles.sectionText}>• แป้งทอดกรอบ 3 ช้อนโต๊ะ</Text>
                        <Text style={styles.sectionText}>• เกลือป่น 1 หยิบมือ</Text>
                        <Text style={styles.sectionText}>• น้ำมันสำหรับทอด</Text>
                        <Text style={styles.sectionText}>• น้ำมันพืช 2 ช้อนโต๊ะ</Text>
                        <Text style={styles.sectionText}>• กระเทียมไทยสับ 3 ช้อนโต๊ะ</Text>
                        <Text style={styles.sectionText}>• พริกขี้หนูซอย 1/4 ถ้วย</Text>
                        <Text style={styles.sectionText}>• ซอสหอยนางรม 3 ช้อนโต๊ะ </Text>
                        <Text style={styles.sectionText}>• น้ำปลา 2 ช้อนโต๊ะ</Text>
                        <Text style={styles.sectionText}>• น้ำตาลกรวด 1 ช้อนโต๊ะ</Text>
                        <Text style={styles.sectionText}>• น้ำเปล่า 1/2 ถ้วย</Text>
                        <Text style={styles.sectionText}>• ใบกะเพรา 1 ถ้วย</Text>
                     
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Instructions:</Text>
                        <Text style={styles.sectionText}>1. ทอดใบกะเพราะครึ่งหนึ่งเตรียมไว้ </Text>
                        <Text style={styles.sectionText}>2. ทาเกลือบนชิ้นปลาแล้วชุบแป้งทอดกรอบบาง ๆ ทอดไฟกลางจนสุกเหลือง </Text>
                        <Text style={styles.sectionText}>3. ผัดพริกและกระเทียมในน้ำมันพืชจนหอม ใส่ซอสหอยนางรม น้ำปลา น้ำตาลกรวดละเอียด ตราบ้านตาลปึก และน้ำเปล่า คนให้เข้ากันและน้ำตาลละลายหมด ใส่ใบกะเพราที่เหลือแล้วปิดไฟ </Text>
                        <Text style={styles.sectionText}>4. ราดซอสกะเพราบนปลากะพงทอดเป็นอันเรียบร้อย </Text>
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
