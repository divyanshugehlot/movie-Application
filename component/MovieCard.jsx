import { Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { colors } from '../styles/Styles'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { setData } from '../redux/movieSlice'
const MovieCard = ({title,overview,id,releaseDate,data}) => {

  const navigation = useNavigation()
  const dispatch = useDispatch()

  return (
    <View 
        style={styles.main}
    >
        <TouchableOpacity style={styles.container} 
          onPress={()=>{
           data&& dispatch(setData(data))
            navigation.navigate("movie")}}
        >
      
     <View
     style={{
        justifyContent:"center",
        alignSelf:"center",
        width:"100%",
        padding:10,
        height:"30%"

     }}
     >
        <View style={{width:"100%"}} >
            <Text style={{fontSize:23,padding:3,fontWeight:"600",color:colors.color3}} >{title}</Text>
        </View>
        <View style={{width:"100%"}} >
            <View style={{margin:2,width:"100%"}}>
              <Text 
              style={{fontSize:17,paddingRight:6,color:"grey",fontWeight:"700"}}
              
              >
               {releaseDate}
                </Text>
                </View>
        </View>
     </View>
     
     <View
        style={{
            alignItems:"center",
            justifyContent:"center",
            width:"30%"
        }}
      >
        
        
     </View>
     <View 
      style={{
        width: "90%",
        height: "50%",
        borderRadius:10,
        marginTop:12,
        
        
      }}
      >
     <Text style={{fontSize:18,justifyContent:"center",color:"black",display:"flex",justifyContent:"center",marginLeft:8}} numberOfLines={3} >
      {overview}
        </Text>
     </View>
    </TouchableOpacity>
    </View>
    
  )
}

export default MovieCard

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:"100%",
        flexDirection:"column",
        backgroundColor:colors.color2,
        justifyContent:"center",
        borderRadius: 20,
        elevation: 15,
    },
    main:{
        
        width: 350,
        margin: 5,
        height: 200,
    }
})