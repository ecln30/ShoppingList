













import React, {useState, useRef} from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function AddItem({addItem}) {
  const textInput = useRef()
  const[text, setText] = useState("")
  const onChange = textValue => {
      setText(textValue)
  }

  return (
    <View>
      <TextInput  style={styles.input}
        onChangeText={onChange}
        ref={textInput}
       />
        <TouchableOpacity style={styles.btn}
          onPress={ () => addItem(text, textInput)}
        >
            <Text style={styles.btnText}><Entypo name="plus" size={24} color="black" />Add Item</Text>
        </TouchableOpacity>
      
    </View>
  );
}


const styles = StyleSheet.create({
     input: {
        height: 60,
        padding: 8,
        fontSize: 18,
        width: '100%',
        heigth: '20%',
        borderColor:'skyblue',
        paddingLeft: 30,
        borderRadius: 10,
        borderWidth: 3,
     },
     btn: {
        backgroundColor: "#c2bad8",
        padding: 9,
        margin: 5,
        borderRadius: 10,
     },
     btnText: {
        color: "darkslateblue",
        fontSize: 20,
        textAlign: "center"
     }
});





























































































































