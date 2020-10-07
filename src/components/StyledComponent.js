import React from 'react'
import {Text, View, StyleSheet, Image} from 'react-native'
import macbook from '../assets/img/macbook.jpeg'

const StyledComponent = () => {
  return (
    <View>
      <Text style={styles.text}>Styling Component</Text>
      <View style={styles.boxWrap}>
        <Image source={macbook} style={styles.img} />
        <Text style={styles.titleBox}>New Macbook Pro</Text>
        <Text style={styles.titlePrice}>Rp. 25.000.000.000</Text>
        <View style={styles.btn}>
          <Text style={styles.btnText}>Beli</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#10ac84',
    marginLeft: 20,
    marginTop: 40
  },
  boxWrap: {
    padding: 12,
    backgroundColor: '#f2f2f2',
    width: 212,
    borderRadius: 8,
    margin: 10
  },  
  img: {
    width: 188,
    height: 107,
    borderRadius: 8
  },
  titleBox: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 16
  },
  titlePrice: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#f2994a',
    marginTop: 12
  },
  btn: {
    backgroundColor: '#6fcf96',
    paddingVertical: 6,
    borderRadius: 25,
    marginTop: 10
  },
  btnText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center'
  }
})

export default StyledComponent