import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { BlurView } from 'expo-blur';

export default function Glass({ children, width = 0.92, pad = 18, scrollable = false }) {
  const Container = scrollable ? ScrollView : View;
  const containerProps = scrollable ? { contentContainerStyle: { flexGrow: 1 } } : {};

  return (
    <BlurView intensity={36} tint="light" style={[styles.glass, { padding: pad, width: `${width * 100}%` }]}>
      <Container style={styles.inner} {...containerProps}>
        {children}
      </Container>
    </BlurView>
  );
}

const styles = StyleSheet.create({
  glass: {
    maxWidth: 420,
    borderRadius: 24,
    backgroundColor: 'rgba(255,255,255,0.14)',
    borderWidth: 1,
    borderColor: 'rgba(200,200,200,0.18)',
    shadowColor: '#0e1a0e',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
    marginVertical: 10,
    maxHeight: '90%',
  },
  inner: { width: '100%' },
});
