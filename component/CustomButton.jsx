import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../styles/Styles'
import { useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'
const CustomButton = ({name,color,navigate,textColor,size,func,submit}) => {
  const navigation = useNavigation()
  return (
    <View>
      {   
        textColor&&size ? (<LinearGradient
        start={{ x: 0, y: 0 }}
        end={{x: 1, y: 1 }}
        colors={['rgba(255, 83, 26,0.8)', 'rgba(255, 83, 26,0.6)', 'rgba(255, 83, 26,0.9)']}
        style={{...styles.gradient,margin:0}}
        >
        <TouchableOpacity 
           style={{
            padding:3,
            borderRadius:100,
            paddingLeft:0,
            paddingRight:0,
            alignSelf:"center",
          }}
          onPress={()=>navigation.navigate(navigate)} > 
             <Text style={{
              fontSize:12,
              fontWeight:"900",
              color:textColor?textColor:"purple",
             }} >{name}</Text>
            </TouchableOpacity>
            </LinearGradient>   ):
      textColor?(
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{x: 1, y: 1 }}
        colors={['rgba(255, 83, 26,0.8)', 'rgba(255, 83, 26,0.6)', 'rgba(255, 83, 26,0.9)']}
      style={styles.gradient}
      >
      <TouchableOpacity 
         style={{
          padding:10,
          borderRadius:100,
          paddingLeft:50,
          paddingRight:50,
          alignSelf:"center",
        }}
        onPress={()=>func?submit():navigation.navigate(navigate)} > 
           <Text style={{
            fontSize:18,
            fontWeight:"900",
            color:textColor?textColor:"purple",
           }} >{name}</Text>
          </TouchableOpacity>
          </LinearGradient>):
             
             ( <TouchableOpacity 
         style={{
          backgroundColor:color?color:colors.color2,
          padding:15,
          borderRadius:100,
          paddingLeft:50,
          paddingRight:50,
          alignSelf:"center",
        }}
        onPress={()=>func?submit():navigation.navigate(navigate)} > 
           <Text style={{
            fontSize:18,
            fontWeight:"900",
            color:textColor?textColor:"purple",
           }} >{name}</Text>
          </TouchableOpacity>)}
        </View>
  )
}
const styles = StyleSheet.create({
  gradient: {
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 100,
    margin: 20
  },
})
export default CustomButton