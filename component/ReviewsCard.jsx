import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ReviewsCard = ({name,review,rating}) => {
  return (
    <View style={styles.main} >
      <View style={styles.container} >
      <View style={styles.cardHeader} >
      <View style={styles.icon}>
      <Octicons size={27} name = "person" color="white" />
        </View>
      <View style={styles.name} >
        <View>
          <Text style={{fontSize:18,fontWeight:"500",color:"grey"}} >
            {name}
            </Text>
          </View>
        <View style={{flexDirection:"row",marginTop:3}} >
        <AntDesign size={11} name = "star" color="#FFD700" />
        <AntDesign size={11} name = "star" color="#FFD700" />
        <AntDesign size={11} name = "star" color="#FFD700" />
        <AntDesign size={11} name = "star" color="grey" />
        <AntDesign size={11} name = "star" color="grey" />
        </View>
      </View>
      </View>
      <View 
        style={ styles.underline } />
      <View style={styles.reviewText} >
      <Text style={{color:"grey"}} >
        {review}
      </Text>
      </View>
      </View>
    </View>
  )
}

export default ReviewsCard

const styles = StyleSheet.create({
    cardHeader:{
      flexDirection:"row",
      marginTop:10
    },
    main:{
      height:150,
      marginTop:6,
    },
    icon:{
      backgroundColor:"#f2f2f2",
      marginLeft:10,
      borderRadius:100,
      padding:8,
    },
    container:{
      height:"90%",
      width:"90%",
      backgroundColor:"white",
      alignSelf:"center",
      borderRadius:20,
      
      elevation:3
    },
    name:{
      marginLeft:20,
      color:"grey"
    },
    underline:{
      height:"0.7%",
      backgroundColor:"grey",
      width:"88%",
      alignSelf:"center",
      marginTop:10
    },
    reviewText:{
      width:"88%",
      alignSelf:"center",
      marginTop:10,
      color:"grey"
    }
})