import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('@/assets/images/firstpagewall.png')} 
        style={styles.backgroundImage} 
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>คำแนะนำการเตรียมความพร้อมก่อนการส่องกล้อง</Text>
          <Text style={styles.subtitle}>(Colonoscopy Preparation)</Text>
          <Link href="/checklist" style={styles.link}>
            <Text style={styles.linkText}>เข้าสู่รายการ</Text>
          </Link>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  backgroundImage: { flex: 1, resizeMode: 'cover', justifyContent: 'center' },
  overlay: { backgroundColor: 'rgba(109, 96, 96, 0.5)', padding: 20, alignItems: 'center' },
  title: { fontSize: 40, fontWeight: 'bold', color: '#fff', textAlign: 'center', marginBottom: 10 },
  subtitle: { fontSize: 20, color: '#fff', textAlign: 'center', marginBottom: 30 },
  link: { backgroundColor: '#3498db', paddingVertical: 15, paddingHorizontal: 30, borderRadius: 25 },
  linkText: { fontSize: 18, fontWeight: 'bold', color: '#fff' }
});