import {Text, TouchableOpacity, View} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react"
import { Background, Button } from "@react-navigation/elements";
import { StyleSheet } from "react-native";


export default function RootLayout() {
  const [contador, setContador] = useState("");
  const [valorAntigo, setValor] = useState("");
  const [operador, setOperador] = useState("");

  function getNum(numClicado: string){
      setContador(contador + numClicado);
  }

  function getOperacao(op: string){
    setValor(contador);
    setOperador(op);
    setContador("");
  }

  function CalculaResultado(){
    let resultado;

    if(operador == "+"){
        resultado = parseFloat(valorAntigo) + parseFloat(contador);
    } 
    else if(operador == "-"){
        resultado = parseFloat(valorAntigo) - parseFloat(contador);
    }
    else if(operador == "x"){
        resultado = parseFloat(valorAntigo) * parseFloat(contador);
    }
    else if(operador == "/"){
        resultado = parseFloat(valorAntigo) / parseFloat(contador);
    }
    else if(operador == "raiz"){
        resultado = Math.sqrt(parseFloat(valorAntigo))
    }

    setContador(String(resultado))
    setValor("");             
    setOperador("");
  }

  function limpaVisor(){
    setValor("");
    setOperador("");
    setContador("");
  }

  return (
    <SafeAreaView style={styles.screen}> 
    <View style={styles.calc}>
      <View style={styles.calcVisor}>
        <Text style={styles.visor}>{valorAntigo} {operador} {contador}</Text>
      </View>
      <View style={styles.calcButton}>
        <View style={styles.boardButtons}>
          <TouchableOpacity onPress={() => limpaVisor()}><Text style={styles.buttonClear}>Clear</Text></TouchableOpacity>
        </View>
        <View style={styles.boardButtons}>
          <TouchableOpacity onPress={() => getNum("1")}><Text style={styles.button}>1</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => getNum("2")}><Text style={styles.button}>2</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => getNum("3")}><Text style={styles.button}>3</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => getOperacao("x")}><Text style={styles.button}>*</Text></TouchableOpacity>
        </View>
         <View style={styles.boardButtons}>
          <TouchableOpacity onPress={() => getNum("4")}><Text style={styles.button}>4</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => getNum("5")}><Text style={styles.button}>5</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => getNum("6")}><Text style={styles.button}>6</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => getOperacao("-")}><Text style={styles.button}>-</Text></TouchableOpacity>
        </View>
        <View style={styles.boardButtons}>
          <TouchableOpacity onPress={() => getNum("7")}><Text style={styles.button}>7</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => getNum("8")}><Text style={styles.button}>8</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => getNum("9")}><Text style={styles.button}>9</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => getOperacao("+")}><Text style={styles.button}>+</Text></TouchableOpacity>
        </View>
        <View style={styles.boardButtons}>
          <TouchableOpacity onPress={() => getOperacao("raiz")}><Text style={styles.button}>√</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => getNum("0")}><Text style={styles.button}>0</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => getOperacao("/")}><Text style={styles.button}>/</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => CalculaResultado()}><Text style={styles.buttonEqual}>=</Text></TouchableOpacity>
        </View>
      </View>
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
    height: "100%",
  },

  calc: {
    width: "100%",
    height: "100%",

    padding: 150
  },

  calcVisor: {
    width: "100%",  
    padding: 15
  },

  visor: {
    color: "#cccccc",
    width: 200,
    fontSize: 40,
    padding: 20,

    textAlign: "right"
  },

	calcButton: {
    display: "flex",

    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },

  boardButtons: {
    display: "flex",
    flexDirection: "row"
  },

  button: {
    backgroundColor: "#d1d1d1",
    borderRadius: 20,
    margin: 3,
    width: 85,
    height: 85,

    fontSize: 40,

    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  buttonEqual: {
    backgroundColor: "#e49400",
    
    textAlign: "center",
    fontSize: 45,

    width: 85,
    height: 85,
    borderRadius: 20,
    margin: 3,

    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  buttonClear: {
    backgroundColor: "#9e5a00",
    color: "#FFFFFF",
    borderRadius: 20,
    margin: 3,
    width: 360,
    height: 50,

    fontSize: 20,

    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
})