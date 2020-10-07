import React from 'react'
import {View, Text} from 'react-native'

const FlexBox = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <View style={{backgroundColor: '#ee5253', flex: 1, height: 100}} />
      <View style={{backgroundColor: '#feca57', flex: 1, height: 100}} />
      <View style={{backgroundColor: '#1dd1a1', flex: 1, height: 100}} />
      <View style={{backgroundColor: '#5f27cd', flex: 1, height: 100}} />
    </View>
  )
}

export default FlexBox