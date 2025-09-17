import { StyleSheet } from 'react-native';

export const ui = StyleSheet.create({
  h1: { 
    fontSize: 28, 
    fontWeight: '800', 
    color: '#163516', 
    letterSpacing: 0.4, 
    textAlign: 'center', 
    marginBottom: 16 
  },
  h2: { 
    fontSize: 18, 
    fontWeight: '700', 
    color: '#1f3d1f', 
    marginBottom: 8, 
    marginTop: 12 
  },
  h3: { 
    fontSize: 16, 
    fontWeight: '600', 
    color: '#254225', 
    marginBottom: 6 
  },
  label: { 
    fontSize: 13, 
    fontWeight: '600', 
    color: '#254225', 
    marginBottom: 6, 
    marginTop: 8 
  },
  input: {
    width: '100%',
    fontSize: 16,
    backgroundColor: 'rgba(255,255,255,0.55)',
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 12,
    color: '#0f0f0f',
    borderWidth: 1,
    borderColor: 'rgba(170,170,170,0.25)',
    marginBottom: 10,
  },
  inputLarge: {
    height: 100,
    textAlignVertical: 'top',
  },
  row: { 
    width: '100%', 
    flexDirection: 'row', 
    gap: 10, 
    marginTop: 12 
  },
  btn: {
    backgroundColor: '#1e5524',
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 20,
    alignItems: 'center',
    shadowColor: '#1e5524',
    shadowOpacity: 0.18,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  btnSecondary: {
    backgroundColor: '#2e7d32',
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  btnGhost: {
    backgroundColor: 'rgba(255,255,255,0.28)',
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(170,170,170,0.35)',
  },
  btnSmall: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  btnText: { 
    color: '#fff', 
    fontWeight: '800', 
    letterSpacing: 0.4, 
    fontSize: 16 
  },
  btnTextGhost: { 
    color: '#1e5524', 
    fontWeight: '800', 
    letterSpacing: 0.4, 
    fontSize: 16 
  },
  card: {
    backgroundColor: 'rgba(255,255,255,0.55)',
    borderRadius: 18,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(170,170,170,0.25)',
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1f3d1f',
    marginBottom: 6,
  },
  cardMeta: {
    fontSize: 13,
    color: '#3e5a3e',
    lineHeight: 18,
  },
  caption: { 
    color: '#3e5a3e', 
    fontSize: 12,
    textAlign: 'center',
    fontStyle: 'italic'
  },
  cameraCard: {
    backgroundColor: 'rgba(234,241,234,0.7)',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'rgba(207,224,207,0.5)',
    alignItems: 'center',
  },
  cameraTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f3d1f',
    marginBottom: 4,
  },
  cameraHint: {
    fontSize: 12,
    color: '#495b49',
    textAlign: 'center',
  },
  statsCard: {
    backgroundColor: 'rgba(255,255,255,0.65)',
    borderRadius: 16,
    padding: 14,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'rgba(170,170,170,0.25)',
  },
  spacer: {
    height: 16,
  },
});
