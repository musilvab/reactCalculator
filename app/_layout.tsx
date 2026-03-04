import {Text, TouchableOpacity} from "react-native";
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
      <div style={styles.calc}>
      <Text style={styles.visor}>Aqui vai estar o número</Text>
      <hr style={{ border: 'none', borderTop: '1px solid #cccccc', margin: '20px 0' }} />
      <div style={styles.boardNumbers}>
        <div style={styles.boardButtons}>
          <TouchableOpacity><Text style={styles.button}>1</Text></TouchableOpacity>
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
          <TouchableOpacity><Text style={styles.button}>+</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.button}>0</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.button}>/</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.buttonEqual}>=</Text></TouchableOpacity>
        </div>
      </div>
      </div>
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

  calc: {
    padding: 20,
    borderRadius: 10
  },

  visor: {
    color: "#cccccc",
    width: 100
  },

	boardNumbers: {
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    backgroundColor: '#d1d1d1',
    padding: 20,
    paddingHorizontal: 30,
    borderRadius: 90,
    fontSize: 25,
    margin: 3
  },

  boardButtons: {
    display: "flex",
  },

  buttonEqual: {
    backgroundColor: '#e49400',
    padding: 20,
    borderRadius: 90,
    textAlign: 'center',
    fontSize: 25,
    paddingHorizontal: 30,
  }

})