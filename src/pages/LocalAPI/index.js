import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import axios from 'axios'

const ItemUser = (props) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={props.onPress}>
        <Image source={{uri : `https://api.adorable.io/avatars/133/${props.email}.png`}} style={styles.avatar} />
      </TouchableOpacity>
      <View style={styles.desc}>
        <Text style={styles.descName}>Nama Lengkap: {props.name}</Text>
        <Text>Email: {props.email}</Text>
        <Text>Bidang: {props.bidang}</Text>
      </View>
      <TouchableOpacity onPress={props.onDelete}>
        <Text style={styles.delete}>X</Text>
      </TouchableOpacity>
    </View>
  )
}

const LocalAPI = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [bidang, setBidang] = useState("")
  const [users, setUsers] = useState([])
  const [btnText, setBtnText] = useState('Simpan')
  const [selectedUser, setSelectedUser] = useState('')

  useEffect(() => {
    getData()
  }, [])

  const submit = () => {
   console.log(name, email, bidang)
   
    if(btnText === 'Simpan') {
      axios.post('http://localhost:3004/users', {name, email, bidang})
      .then(res => {
        console.log('res', res)
        setName('')
        setEmail('')
        setBidang('')
        getData()
      }).catch(err => console.log(err))
    } else {
      axios.put(`http://localhost:3004/users/${selectedUser}`, {name, email, bidang})
      .then(res => {
        console.log('res', res)
        setName('')
        setEmail('')
        setBidang('')
        getData()
        setBtnText('Simpan')
      }).catch(err => console.log(err))
    }
  }

  const getData = () => {
    axios.get('http://localhost:3004/users')
      .then(res => {
        console.log('get', res)
        setUsers(res.data)
      }).catch(err => console.log(err))
  }

  const selectItem = (user) => {
    console.log('selectit', user)
    setName(user.name)
    setEmail(user.email)
    setBidang(user.bidang)
    setBtnText('Update')
    setSelectedUser(user.id)
  }

  const onDelete = (user) => {
    console.log('apus', user)
    Alert.alert(
      `Apakah ${user.name} yakin apus?`,
      `Udah diapus udah ya ${user.name}`,
      [
        {
          text: "Batalin woy",
          onPress: () => console.log('Cancel')
        },
        {
          text: "Oc",
          onPress: () => {
            axios.delete(`http://localhost:3004/users/${user.id}`)
              .then(res => {
                setName('')
                setEmail('')
                setBidang('')
                setBtnText('Simpan')
                getData()
              }).catch(err => console.log(err))
          }
        }
      ]
    )
    
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>List Form</Text>
      <Text>Masukkan Data Diri</Text>
      <TextInput placeholder="Nama qamu" style={styles.input} value={name} onChangeText={value => setName(value)} />
      <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={value => setEmail(value)} />
      <TextInput placeholder="Bidang" style={styles.input} value={bidang} onChangeText={value => setBidang(value)} />
      <Button title={btnText} onPress={submit} />
      <View style={styles.pembatas} />
     {/* <ItemUser />
     <ItemUser />
     <ItemUser /> */}
     {users.map((user) => {
       return  (
        <ItemUser 
          key={user.id} 
          name={user.name} 
          email={user.email} 
          bidang={user.bidang} 
          onPress={() => selectItem(user)} 
          onDelete={() => onDelete(user)}  
        />
       )
     })}
    </View>
  )
}

export default LocalAPI

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  textTitle: {
    textAlign: 'center'
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 100/2
  },
  input: {
    borderWidth: 1,
    marginBottom: 12,
    borderRadius: 5,
    paddingHorizontal: 18,
    paddingVertical: 10
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 10
  },
  desc: {
    marginLeft: 18,
    flex: 1
  },
  descName: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold'
  },
  delete: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red'
  },
  pembatas: {
    marginBottom: 20
  }
})
