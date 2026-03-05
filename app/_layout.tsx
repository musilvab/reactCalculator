import {Text, TouchableOpacity, View} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react"
import { Background, Button } from "@react-navigation/elements";
import { StyleSheet } from "react-native";


export default function RootLayout() {
  const [contador, setContador] = useState(0)
  const [nomeDaVariavel, nomeDoMetodoQueSetaValorNaVariavel] = useState("sabor_default")

  function somarMaisUm(){
    setContador(contador + 1)
  }

  return (
    <SafeAreaView style={styles.screen}> 
      <View style={styles.visor}>
        <Text style={styles.visorValor}>Valor</Text>
      </View>
      <View style={styles.boardNumbers}>
        <div style={styles.boardButtons}>
          <TouchableOpacity><Text onPress={(event) => console.log(event.target)} style={styles.button}>1</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.button}>2</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.button}>3</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.button}>x</Text></TouchableOpacity>
        </div>
         <div style={styles.boardButtons}>
          <TouchableOpacity><Text style={styles.button}>4</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.button}>5</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.button}>6</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.button}>-</Text></TouchableOpacity>
        </div>
        <div style={styles.boardButtons}>
          <TouchableOpacity><Text style={styles.button}>7</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.button}>8</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.button}>9</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.button}>+</Text></TouchableOpacity>
        </div>
        <div style={styles.boardButtons}>
          <TouchableOpacity><Text style={styles.button}>C</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.button}>0</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.button}>/</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.buttonEqual}>=</Text></TouchableOpacity>
        </div>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
    height: "100%"
  },

  visor: {
    width: "100%",
    margin: 30,
    fontSize: 20,
    textAlign: "right",
    paddingHorizontal: 45
  },

  visorValor: {
    fontSize: 20,
    color: "#cccccc",
    textAlign: "right"
  },

	boardNumbers: {
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    backgroundColor: '#d1d1d1',
    padding: 30,
    paddingHorizontal: 40,
    borderRadius: 90,
    fontSize: 25,
    margin: 3
  },

  boardButtons: {
    display: "flex"
  },

  buttonEqual: {
    backgroundColor: '#e49400',
    padding: 30,
    borderRadius: 90,
    textAlign: 'center',
    fontSize: 25,
    paddingHorizontal: 40,
  }

})
