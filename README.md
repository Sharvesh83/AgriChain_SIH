# AgriChain - Farm-to-Table Traceability Platform

A comprehensive mobile application built with React Native and Expo Router that enables complete agricultural supply chain traceability from farm to consumer. Developed for Smart India Hackathon 2025.

![AgriChain Banner](https://via.placeholder.com/800x200/2e7d32/ffffff?text=AgriChain+-+Farm+to+Table+Traceability)

## 🌾 Features

### **Complete Supply Chain Coverage**
- **Farmers**: Create harvest batches with GPS coordinates, photos, and quality grading
- **Distributors/Wholesalers**: Purchase tracking, inventory management, and batch splitting
- **Retailers**: Stock management, pricing, and QR code generation
- **Consumers**: Transparent product history via QR code scanning

### **Advanced Traceability**
- Unique batch ID generation and tracking
- GPS-tagged photos with EXIF metadata
- Quality grading system (A/B/C)
- Complete price journey visualization
- Immutable transaction logging

### **Modern UI/UX**
- Glassmorphism design with blur effects
- Consistent agricultural theme
- Responsive layouts for all screen sizes
- Intuitive role-based navigation
- Minimalist and accessible interface

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- Android Studio / iOS Simulator (for emulator testing)
- Physical device with Expo Go app (recommended)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/agrichain-sih.git
cd agrichain-sih/frontend
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Install required Expo packages**
```bash
npx expo install expo-router expo-blur react-native-safe-area-context react-native-screens
```

4. **Add your background image**
   - Place `AgriBackdrop2.png` in `assets/` directory
   - Or update the path in `app/components/Background.jsx`

5. **Start the development server**
```bash
npx expo start
```

6. **Run on device**
   - Scan QR code with Expo Go app (iOS/Android)
   - Or press `a` for Android emulator, `i` for iOS simulator

## 📱 App Architecture

```
app/
├── _layout.jsx                 # Expo Router navigation stack
├── LoginScreen.jsx             # Authentication entry point
├── RegistrationScreen.jsx      # User registration
├── components/                 # Reusable UI components
│   ├── Background.jsx          # Consistent background wrapper
│   ├── Glass.jsx              # Glassmorphism container
│   └── UI.js                  # Shared styling tokens
├── screens/                   # Role-based screens
│   ├── Farmer*.jsx            # Farmer workflow screens
│   ├── Distributor*.jsx       # Distributor workflow screens
│   └── Retailer*.jsx          # Retailer workflow screens
└── public/
    └── ConsumerInventory.jsx   # Public inventory view
```

## 👥 User Roles & Workflows

### **🌱 Farmers**
1. **Profile Setup**: Name, contact, farm location, GPS coordinates
2. **Batch Creation**: Crop details, planting/harvest dates, weight, quality grade
3. **Photo Upload**: Geotagged produce images for verification
4. **Dashboard**: View batch history, sales status, volume statistics

### **🚛 Distributors/Wholesalers**
1. **Business Profile**: Company details, license information
2. **Purchase Management**: Source batch tracking, quantity, pricing
3. **Operations**: Pickup scheduling, quality verification, storage notes
4. **Batch Splitting**: Create retail lots with sub-batch IDs
5. **Inventory Tracking**: Real-time stock levels with origin data

### **🏪 Retailers**
1. **Store Profile**: Business name, location, contact details
2. **Stock Receiving**: Wholesaler source, batch linking, cost tracking
3. **Pricing Setup**: Selling price configuration, margin calculation
4. **QR Generation**: Unique store QR for customer access
5. **Inventory Dashboard**: Stock by batch with full traceability

### **👥 Consumers**
1. **QR Scanning**: Access store inventory via mobile camera
2. **Product History**: View complete farm-to-shelf journey
3. **Transparency**: Harvest dates, quality grades, price evolution
4. **Trust Building**: Verified origin and handling information

## 🛠 Technology Stack

- **Framework**: React Native with Expo
- **Navigation**: Expo Router (file-based routing)
- **Styling**: StyleSheet with glassmorphism effects
- **UI Effects**: expo-blur for background effects
- **State Management**: React Hooks (ready for Redux/Zustand integration)
- **Data Persistence**: Ready for AsyncStorage/SQLite integration
- **Camera**: expo-camera integration ready
- **Location**: expo-location for GPS tagging
- **QR Codes**: Ready for react-native-qrcode-svg integration

## 📊 Data Models

### **Batch Schema**
```javascript
{
  id: "BATCH1001",
  farmerId: "FARMER_123",
  cropType: "Rice",
  variety: "Basmati 1121",
  seedDate: "2025-06-01",
  harvestDate: "2025-09-15",
  weight: 500,
  grade: "A",
  gpsCoordinates: "11.012,77.001",
  photoUri: "file://...",
  status: "available" | "sold" | "partial"
}
```

### **Transaction Schema**
```javascript
{
  id: "TXN_001",
  type: "purchase" | "sale",
  fromId: "FARMER_123",
  toId: "DIST_456",
  batchId: "BATCH1001",
  quantity: 120,
  pricePerKg: 45,
  date: "2025-09-16",
  location: "warehouse_coords"
}
```

## 🎨 Design System

### **Color Palette**
- Primary: `#1e5524` (Forest Green)
- Secondary: `#2e7d32` (Leaf Green)  
- Background: Agricultural landscape with blur overlay
- Cards: Semi-transparent white with glassmorphism
- Text: Dark green shades for readability

### **Typography**
- Headers: Bold, high contrast for visibility
- Labels: Semi-bold for form guidance
- Body: Regular weight with adequate line height
- Captions: Lighter weight for secondary information

## 🔧 Configuration

### **Environment Setup**
Create `.env` file in project root:
```env
EXPO_PUBLIC_API_URL=https://your-backend-api.com
EXPO_PUBLIC_QR_BASE_URL=https://your-domain.com/inventory
```

### **Customization**
- **Background Image**: Replace `assets/AgriBackdrop2.png`
- **Color Theme**: Modify `app/components/UI.js`
- **Blur Intensity**: Adjust in `app/components/Glass.jsx`

## 🧪 Testing

```bash
# Run tests (when configured)
npm test

# Lint code
npx expo lint

# Type checking (if TypeScript added)
npx tsc --noEmit
```

## 📱 Building for Production

```bash
# Create development build
npx expo build:android
npx expo build:ios

# Or create production build with EAS
npx eas build --platform android
npx eas build --platform ios
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

### **Development Guidelines**
- Follow React Native best practices
- Maintain consistent styling with UI tokens
- Add proper error handling
- Include TypeScript types (when migrating)
- Write meaningful commit messages

## 📈 Roadmap

### **Phase 1: Core MVP** ✅
- [x] User authentication and role management
- [x] Basic CRUD for all user types
- [x] Navigation and UI framework
- [x] Glassmorphism design implementation

### **Phase 2: Enhanced Features** 🔄
- [ ] Real camera integration with GPS tagging
- [ ] QR code generation and scanning
- [ ] Backend API integration
- [ ] Data persistence and offline support

### **Phase 3: Advanced Capabilities** 📋
- [ ] Blockchain integration for immutable records
- [ ] IoT sensor data integration
- [ ] AI-powered quality assessment
- [ ] Multi-language support
- [ ] Push notifications

### **Phase 4: Scale & Optimize** 📋
- [ ] Performance optimization
- [ ] Analytics and reporting dashboard
- [ ] Admin panel for system management
- [ ] Advanced search and filtering

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🏆 Smart India Hackathon 2025

This project was developed as part of Smart India Hackathon 2025, addressing the problem statement of **"Agricultural Supply Chain Traceability"** to enhance food safety, reduce fraud, and build consumer trust through technology.

### **Team Information**
- **Problem Statement**: Agricultural traceability from farm to consumer
- **Category**: Software
- **Institution**: [Your Institution Name]
- **Team Lead**: [Your Name]

## 📞 Support & Contact

- **Issues**: [GitHub Issues](https://github.com/yourusername/agrichain-sih/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/agrichain-sih/discussions)
- **Email**: your.email@domain.com

## 🙏 Acknowledgments

- Smart India Hackathon organizing committee
- Agricultural experts who provided domain insights
- Open source community for React Native and Expo
- Design inspiration from modern agricultural tech platforms

---

**Built with ❤️ for Indian Agriculture** 🇮🇳

*Empowering farmers, enabling transparency, ensuring trust.*