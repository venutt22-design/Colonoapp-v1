import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Link } from 'expo-router';

export default function MenuScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>เมนูแนะนำการเตรียมตัว</Text>
      </View>

      <View style={styles.buttonContainer}>
        {/* ปุ่มที่ 1: เชื่อมไปหน้า at-home */}
        <Link href="/at-home" asChild>
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.buttonText}>🏠 คำแนะนำการปฏิบัติตัวขณะอยู่บ้าน</Text>
        </TouchableOpacity>
        </Link>

        {/* ปุ่มที่ 2: การปฏิบัติตัวเมื่อเข้ามานอนในรพ. */}
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.buttonText}>🏥 การปฏิบัติตัวเมื่อนอนโรงพยาบาล</Text>
        </TouchableOpacity>

        {/* ปุ่มที่ 3: การแนะนำการส่องกล้องเบื้องต้น */}
        <TouchableOpacity style={[styles.menuButton, { backgroundColor: '#2ecc71' }]}>
          <Text style={styles.buttonText}>🔍 ขั้นตอนการส่องกล้องเบื้องต้น</Text>
        </TouchableOpacity>

        {/* ปุ่มติดต่อเจ้าหน้าที่ */}
        <TouchableOpacity style={[styles.menuButton, { backgroundColor: '#e67e22', marginTop: 20 }]}>
          <Text style={styles.buttonText}>📞 ติดต่อเจ้าหน้าที่</Text>
        </TouchableOpacity>
      </View>

      {/* ปุ่มกลับหน้าหลัก */}
      <Link href="/" asChild>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText}>⬅️ กลับหน้าหลัก</Text>
        </TouchableOpacity>
      </Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa', padding: 20 },
  header: { marginTop: 60, marginBottom: 30, alignItems: 'center' },
  title: { fontSize: 30, fontWeight: 'bold', color: '#2c3e50' },
  separator: { width: 60, height: 4, backgroundColor: '#3498db', marginTop: 10, borderRadius: 2 },
  buttonContainer: { gap: 15 },
  menuButton: { 
    backgroundColor: '#3498db', 
    padding: 20, 
    borderRadius: 15, 
    shadowColor: '#000', 
    shadowOpacity: 0.1, 
    shadowRadius: 5, 
    elevation: 3 
  },
  buttonText: { fontSize: 18, color: '#fff', fontWeight: 'bold', textAlign: 'center' },
  backButton: { marginTop: 40, padding: 15, alignItems: 'center' },
  backButtonText: { color: '#7f8c8d', fontSize: 16, fontWeight: '600' }
});