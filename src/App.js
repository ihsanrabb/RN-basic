import React from 'react'
import {Text, View, TextInput, ScrollView} from 'react-native'
import StyledComponent from './components/StyledComponent'
import FlexComponent from './components/FlexComponent'
import PositionRN from './components/PositionRN'
import FlexBox from './pages/FlexBox'
import RnSvg from './pages/RnSvg'
import CallAPI from './pages/CallAPI.js'
import LocalAPI from './pages/LocalAPI'

const App = () => {
  console.log('hellow debugger')
  return (
    <View>
      <ScrollView>
        {/* <Text>Ihsanuddin</Text>
        <Text>Ihsanuddin</Text>
        <Text>Rabbani</Text> */}
        {/* <TextInput style={{borderWidth: 1, padding: 10}} />
        <StyledComponent />
        <StyledComponent />
        <StyledComponent />
        <FlexComponent />
        <FlexBox />
        <PositionRN /> */}
        {/* <RnSvg />
        <CallAPI /> */}
        <LocalAPI />
      </ScrollView>
    </View>
  )
}

export default App