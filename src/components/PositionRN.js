import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import cart from '../assets/img/shopping-cart.png'

 const PositionRN = () => {
  return (
    <>
      <View style={styles.cartWrapper}>
        <Image source={cart} style={styles.iconCart} />
        <Text style={styles.notif}>10</Text>
      </View>
      <Text>Keranjang belanja anda</Text>
    </>
  )
}

const styles = StyleSheet.create({
  cartWrapper: {
    borderWidth: 1,
    borderColor: '#4398D1',
    width: 93,
    height: 93,
    borderRadius: 92/2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },  
  iconCart: {
    width: 50,
    height: 50
  },
  notif: {
    fontSize: 12,
    color: '#fff',
    backgroundColor: '#6fcf97',
    padding: 4,
    borderRadius: 25,
    width: 24,
    height: 24,
    position: 'absolute',
    top: 0,
    right: 0
  }
})

export default PositionRN