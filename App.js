import * as Speech from 'expo-speech';
import * as React from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import {Header} from 'react-native-elements'

export default class App extends React.Component{

  constructor()
  {
    super()
    this.state = {name: ""}
  }

  speak = () => {

  var thingToSay = this.state.name;
  Speech.speak(thingToSay)

  }

     render()
     {

        return(

<View>

         <View>

         <Header backgroundColor = "skyblue" centerComponent = {{ text : "Text To Speech Converter" ,
         style : { color : "black" , fontSize : 14 , fontWeight : "bold"}}}/>

         <Image style = {Styles.image} source = {{ uri : "https://www.techtalkies365.com/wp-content/uploads/2017/11/Free-Online-Hindi-Speech-to-Text-Converter-Software-with-Spell-Checker-1.png"}}/>

         <Text style = {Styles.word}> Enter The Word  </Text>

          <TextInput style = {Styles.inputBox} onChangeText = {text => {
            this.setState({name : text})
          }}/>

         </View>

         <View>

<TouchableOpacity style = {Styles.soundButton} onPress = {this.speak}>

<Text style = {Styles.soundText}> Click Here To Hear Speech  </Text>

</TouchableOpacity>

         </View>

</View>
        )

     }

}

const Styles = StyleSheet.create({

    inputBox : {

        justifyContent : "center",
        marginTop : 20,
        alignSelf : "center",
        width : 280,
        height : 50,
        borderWidth : 4,
        outline : "none",
        textAlign : "center"

    },

    soundText : {

    fontSize : 23,
    fontWeight : "bold"

    },

    soundButton : {

        marginTop : 100,
        justifyContent : "center",
        alignSelf : "center",
        textAlign : "center",
        width : 280,
        height : 100,
        borderRadius : 50,
        backgroundColor : "skyblue"

    },

    image : {

       justifyContent : "center",
       alignSelf : "center",
       width : 200,
       height : 200

    },

    word : {

     fontSize : 20,
     fontWieght : "bold",
     alignSelf : "center"

    }

})