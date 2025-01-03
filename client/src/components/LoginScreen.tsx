import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/LoginPage/green-plant.png")}
        style={styles.fleurImage}
      />
      <Text style={styles.title}>· Bienvenue ·</Text>
      <Image
        source={require("../assets/LoginPage/test_kouer.png")} // Image de test en attendant d'avoir l'asset "KOUER"
        style={styles.testKouer}
      />
      <Text style={styles.line}></Text>
      <Text style={styles.subtitle}>Le bon à portée de main</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Connexion</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.outlineButton}>
          <Text style={styles.outlineButtonText}>Créer un compte</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.skipText}>Continuer sans compte</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c4f3e",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  title: {
    top: 230,
    fontSize: 45,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 8,
  },
  subtitle: {
    top: 230,

    fontSize: 20,
    color: "#FFFFFF",
    marginBottom: 32,
    textTransform: "uppercase",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 90,
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  button: {
    backgroundColor: "#88ca68",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 50,
    marginBottom: 16,
    alignItems: "center",
    width: "80%",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "bold",
  },
  outlineButton: {
    borderWidth: 2,
    borderColor: "#4ea04c",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 50,
    marginBottom: 16,
    alignItems: "center",
    width: "80%",
  },
  outlineButtonText: {
    color: "#4ea04c",
    fontSize: 22,
    fontWeight: "bold",
  },
  skipText: {
    color: "#FFFFFF",
    fontSize: 18,
    marginTop: 16,
    textDecorationLine: "underline",
  },
  line: {
    borderBottomColor: "#FFFFFF",
    borderBottomWidth: 1,
    width: "80%",
    marginBottom: 32,
    top: 230,
  },
  fleurImage: {
    position: "absolute",
    bottom: -150,
    right: -160,
    width: 500,
    height: 700,
    resizeMode: "contain",
  },
  testKouer: {
    width: 200,
    height: 100,
    resizeMode: "contain",
    top: 230,
  },
});
