import React, {useState} from "react"
import { StyleSheet, View, FlatList, Alert} from 'react-native';
import Header from "./components/Header"
import ListItem from "./components/ListItem"
import AddItem from "./components/AddItem";
import uuid from 'react-native-uuid'


export default function App() {
  const [items, setItems] = useState([
    {id: uuid.v4(), text: "Milk"},
    {id: uuid.v4(), text: "Eggs"},
    {id: uuid.v4(), text: "Bread"},
    {id: uuid.v4(), text: "Juice"},
    ])

  const deleteItem = (id) => {
       setItems(prevItems => {
           return prevItems.filter(item => item.id != id)
       } )
  }

  const addItem = (text, textInput) => {
      if (!text) {
          Alert.alert("Error", "Please enter an item", {text: "Ok"})
      } else {
        setItems( prevItems => {
           return [{id: uuid.v4(), text},...prevItems]
        })
      } 
     textInput.current.clear()   
  }

  return (
    <View style={styles.container}>
      <Header  />
      <AddItem addItem={addItem} />
      <FlatList 
       data={items}
       renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem} />} 
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "gray"
  },
  text: {
    color: "#fff"
  }

});
