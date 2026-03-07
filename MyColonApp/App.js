import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, CheckBox } from 'react-native';

const ColonoscopyPrepApp = () => {
  // สถานะของ Checklist (จำลองข้อมูล)
  const [steps, setSteps] = useState([
    { id: 1, task: 'งดทานผัก ผลไม้ และเนื้อสัตว์ชิ้นใหญ่ (3 วันก่อนตรวจ)', completed: false },
    { id: 2, task: 'ทานอาหารอ่อน เช่น โจ๊กขาว หรือน้ำซุปใส (1 วันก่อนตรวจ)', completed: false },
    { id: 3, task: 'เริ่มดื่มยาระบายตามที่แพทย์สั่ง (ช่วงเย็นก่อนตรวจ)', completed: false },
    { id: 4, task: 'งดน้ำและอาหารทุกชนิด (อย่างน้อย 6-8 ชม. ก่อนตรวจ)', completed: false },
  ]);

  const toggleStep = (id) => {
    setSteps(steps.map(step => 
      step.id === id ? { ...step, completed: !step.completed } : step
    ));
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>การเตรียมตัวส่องกล้องลำไส้ใหญ่</Text>
        <Text style={styles.subtitle}>(Colonoscopy Preparation)</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>รายการที่ต้องทำ:</Text>
        {steps.map((item) => (
          <TouchableOpacity 
            key={item.id} 
            style={styles.item} 
            onPress={() => toggleStep(item.id)}
          >
            <Text style={[styles.itemText, item.completed && styles.completedText]}>
              {item.completed ? '✅ ' : '⬜ '} {item.task}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.warningBox}>
        <Text style={styles.warningText}>
          ⚠️ หากพบอาการผิดปกติ เช่น ปวดท้องรุนแรง หรือถ่ายมีเลือดปนมาก กรุณาติดต่อโรงพยาบาลทันที
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', padding: 20 },
  header: { marginBottom: 20, alignItems: 'center', marginTop: 40 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#2c3e50' },
  subtitle: { fontSize: 16, color: '#7f8c8d' },
  section: { backgroundColor: '#fff', borderRadius: 10, padding: 15, elevation: 3 },
  sectionTitle: { fontSize: 18, marginBottom: 15, fontWeight: '600' },
  item: { paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#eee' },
  itemText: { fontSize: 16, color: '#34495e' },
  completedText: { textDecorationLine: 'line-through', color: '#bdc3c7' },
  warningBox: { marginTop: 30, padding: 15, backgroundColor: '#ffeaa7', borderRadius: 10 },
  warningText: { color: '#d63031', fontWeight: 'bold', textAlign: 'center' }
});

export default ColonoscopyPrepApp;