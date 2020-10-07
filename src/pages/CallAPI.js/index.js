import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native'

const CallAPI = () => {
  const [dataUser, setDataUser] = useState({
    avatar: '',
    email: '',
    first_name: '',
    last_name: ''
  })
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   .then(response => response.json())
  //   .then(json => console.log('lala',json))
  // }, [])

  const getData = () => {
    fetch('https://reqres.in/api/users/3')
    .then(response => response.json())
    .then(json => {
      console.log('lala',json)
      setDataUser(json.data)
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Panggil API</Text>
      <Button 
        title="GET DATA"
        onPress={getData}
      />
      <Text>Response get data</Text>
      {dataUser.avatar.length > 0 &&
        <Image source={{uri : dataUser.avatar}} style={styles.avatar} />
      }
      <Text>{dataUser.first_name}  {dataUser.last_name}</Text>
      <Text>{dataUser.email}</Text>

    </View>
  )
}

export default CallAPI

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  textTitle: {
    textAlign: 'center'
  },
  avatar: {
    width: 100,
    height: 100
  }
})
