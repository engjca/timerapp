import React, { Component } from "react";
import {
  SafeAreaView, 
  View, 
  Text, 
  Image, 
  TouchableOpacity, 
  StyleSheet
} from "react-native";

class App extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      number: 0,
      btn: "Start",
      lastTime: null
    };
    this.timer = null;

    this.go = this.go.bind(this);
    this.reset = this.reset.bind(this);
  }

  go(){
    if(this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
      this.setState({
        btn: "Start"
      });
    } else {
      this.timer = setInterval(() => {
        this.setState({
          number: this.state.number + 0.1
        })
      }, 100);
      this.setState({
        btn: "Stop"
      });
    }
  }

  reset(){
    if(this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
    }

    this.setState({
      lastTime: this.state.number,
      number: 0,
      btn: "Start"
    });
  }

  render(){
    return(
    <SafeAreaView style={ styles.container }>
      <View style={{ flex: 1 }}>
        <Text style={ styles.titleText }>Timer</Text>
      </View>
        
      <View style={{ flex: 2 }}>
        <Image source={ require("./src/cronometro.png") } style={ styles.img } />
        <Text style={ styles.timerText }>{ this.state.number.toFixed(1) }</Text>
      </View>
      
      <View style={{ flex: 1, flexDirection: "row" }}>
        <TouchableOpacity style={ styles.startButton } onPress={ this.go } >
          <View style={ styles.buttonArea }>
            <Text style={ styles.startText }>{ this.state.btn }</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={ styles.resetButton } onPress={ this.reset }>
          <View style={ styles.buttonArea }>
            <Text style={ styles.resetText }>Reset</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 16, color: "white" }}>
          { 
            this.state.lastTime > 0 ? "Last time: " + this.state.lastTime.toFixed(1) + "s" : ""
          }
        </Text>
      </View>
    </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black"
  },
  titleText:{
    fontSize: 25,
    fontWeight: 900,
    color: "white",
    textAlign: "center",
    marginTop: 20
  },
  timerText:{
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginTop: -108
  },
  img: {
    width: 180,
    height: 200
  },
  startButton: {
    width: 120,
    height: 40,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: "black",
    backgroundColor: "white",
    margin: 10
  },
  resetButton:{
    width: 120,
    height: 40,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: "#FF204E",
    margin: 10
  },
  buttonArea:{
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  startText:{
    fontSize: 15,
    fontWeight: "bold"
  },
  resetText:{
    fontSize: 15,
    fontWeight: "bold",
    color: "#FF204E"
  }
});

export default App;