import { StyleSheet,View,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import { colors } from '../styles/Styles';
import Icon from "react-native-vector-icons/Entypo"
import Octicons from 'react-native-vector-icons/Octicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const Footer = () => {
    const navigate = useNavigation();
    const avatarOptions = {
         color: colors.color2,
        size: 50,
        style: {
           backgroundColor: "grey",
        },
      };
    const navigatationHandler = (key) => {
        switch (key) {
          case 0:
            navigate.navigate("movielist");
            break;
         
          default:
            navigate.navigate("movielist");
            break;
        }
      };
  return (
    <View
    style={{
        backgroundColor: colors.color2,
        padding:6,
        width: "100%",
        bottom: 0,
        elevation:5
      }}>
      <View style={styles.container}>
        <TouchableOpacity onPress={()=>navigatationHandler(0)}>
        <AntDesign size={30} name = "stepbackward" color="#FFD700" />
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection:"row"}} onPress={()=>navigatationHandler(2)}>
          <AntDesign size={11} name = "star" color="#FFD700" />
          <AntDesign size={11} name = "star" color="#FFD700" />
          <AntDesign size={11} name = "star" color="#FFD700" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
    container:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
})