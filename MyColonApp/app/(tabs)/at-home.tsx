import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function AtHomeDetail() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>🏠 การปฏิบัติตัวขณะอยู่บ้าน</Text>
      </View>

      <View style={styles.contentCard}>
        <Text style={styles.sectionTitle}>1. การรับประทานอาหาร</Text>
        <Text style={styles.text}>• 3 วันก่อนตรวจ: งดผัก ผลไม้ และเนื้อสัตว์ชิ้นใหญ่</Text>
        <Text style={styles.text}>• 1 วันก่อนตรวจ: ทานได้เฉพาะอาหารอ่อน น้ำซุปใส</Text>
        
        <Text style={[styles.sectionTitle, {marginTop: 20}]}>2. การเตรียมลำไส้</Text>
        <Text style={styles.text}>• ดื่มยาระบายตามเวลาที่พยาบาลจัดให้อย่างเคร่งครัด</Text>
        <Text style={styles.text}>• ดื่มน้ำเปล่าตามมากๆ จนกว่าจะถ่ายเป็นน้ำใส</Text>
      </View>

      <Link href="/checklist" asChild>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText}>⬅️ กลับไปหน้าเมนู</Text>
        </TouchableOpacity>
      </Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  header: { marginTop: 60, marginBottom: 20 },
  title: { fontSize: 30, fontWeight: 'bold', color: '#2c3e50' },
  contentCard: { backgroundColor: '#f8f9fa', padding: 20, borderRadius: 15 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#2980b9', marginBottom: 10 },
  text: { fontSize: 16, color: '#34495e', marginBottom: 8, lineHeight: 24 },
  backButton: { marginTop: 30, padding: 15, alignItems: 'center', backgroundColor: '#ecf0f1', borderRadius: 10 },
  backButtonText: { color: '#34495e', fontWeight: 'bold' }
});