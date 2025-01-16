import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Image,
} from 'react-native';
import { Book, Users } from 'react-native-feather'; // Using Feather icons

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#1a2238" barStyle="light-content" />
      
      {/* Navbar */}
      <View style={styles.navbar}>
        <Image
          source={{ uri: 'https://umbedcollege.org/wp-content/themes/umbed/images/umbed.png' }}
          style={styles.navLogo}
          resizeMode="contain"
        />
        <Text style={styles.navTitle}>UMBED College</Text>
      </View>

      {/* Welcome Section */}
      <View style={styles.welcomeSection}>
        <Text style={styles.welcomeText}>Welcome to</Text>
        <Text style={styles.collegeName}>Uday Memorial B.Ed College</Text>
      </View>

      {/* Buttons Section */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Student')}
        >
          <Users stroke="#fff" width={24} height={24} />
          <Text style={styles.buttonText}>Student</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, styles.academicButton]}
          onPress={() => navigation.navigate('Academic')}
        >
          <Book stroke="#fff" width={24} height={24} />
          <Text style={styles.buttonText}>Academic</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  navbar: {
    backgroundColor: '#1a2238',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  navLogo: {
    width: 40,
    height: 40,
  },
  navTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 12,
  },
  welcomeSection: {
    alignItems: 'center',
    marginTop: 40,
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    color: '#1a2238',
    marginBottom: 8,
  },
  collegeName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1a2238',
    textAlign: 'center',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    gap: 20,
  },
  button: {
    backgroundColor: '#1a2238',
    padding: 20,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  academicButton: {
    backgroundColor: '#2e3a5c',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 12,
  },
});

export default HomeScreen;