import { Image, StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import Feather from 'react-native-vector-icons/Feather';
import CustomButton from '../component/CustomButton';
import { colors } from '../styles/Styles';
import { useSelector } from 'react-redux';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
const SelectedMovie = () => {

    const {data}= useSelector((state)=>state.movies)
  return (
    <>
    <Header/>
     <View
     style={{
        height:"86%",
       }} 
     >
      <View style={styles.container}>
      <View style={styles.imageContainer} >
        <View 
        style={{width:"100%",
        height:"100%",
        alignSelf:"center",
        marginTop:20
        
        }} >
        <Image
        source={
           {uri:data?.poster_path}
        }
        style={{
          width: "100%",
          height: "100%",
          resizeMode: "contain",
        }}
        alt="furniture"
        />
        </View>  
      </View> 
      <View style={styles.cardContainer}>
        <View style={styles.card}>
            <View style={styles.cardHeader}>
                <View >
                    <Text style={styles.cardHeaderText} >{data?.title}</Text>
                    <View 
                    style={{backgroundColor:"#ffd700",height:"12%"}}></View>
                    </View>
            </View>
            <View style={styles.cardBody} >
                <View> 
                    <Text 
                    style={{
                        ...styles.cardHeaderText,
                        color:"grey",
                        fontSize:20
                    }} >Release Date : {data?.release_date}</Text>
                 </View>
                <View>
                
                </View>
            </View>
        </View>
      </View>
      <View style={styles.descriptionContainer} >
        <View 
        style={{
            flexDirection:"row",
            marginTop:8,
            marginLeft:6,
            width:"80%",
            alignSelf:"center"
            }}>
        <View style={{padding:5}} >
        <SimpleLineIcons name="bag" size={27} color="#ffd700" />
        </View>
        <View style={{padding:5}} >
            <Text style={styles.cardHeaderText} >Overview</Text>
        </View>
        </View>
        <View style={{width:"80%",alignSelf:"center"}} >
            <Text style={{fontWeight:"700",color:"grey"}} >
              {data?.overview}
            </Text>
        </View>
      </View>
      </View>
    </View>
    <Footer/>
    </>
   
  )
}

export default SelectedMovie

const styles = StyleSheet.create({
 container:{
    width:"100%",
    flexDirection:'column',
   backgroundColor:"white"
 },
 cardContainer:{
    height:"25%",
    width:"95%",
    alignItems:"center",
    justifyContent:"center",
    marginTop:5,
    backgroundColor:"white",
    alignSelf:"center"
 },
 card:{
    flexDirection:"column",
   width:"100%",
   height:"90%",
   alignSelf:"center",
   borderRadius:15,
   borderColor:"white",
   elevation:20,
   backgroundColor:"white"
 },
 cardHeader:{
    flexDirection:"row",
    justifyContent:"space-between",
    padding:8,
    width:"90%",
    marginTop:10,
    alignSelf:"center",
    backgroundColor:"white",
 },
 cardHeaderText:{
    fontWeight:"900",
    fontSize:20,
    color:"grey"
 },
 cardBody:{
    flexDirection:"row",
    justifyContent:"space-between",
    width:"90%",
    alignSelf:"center"
 },
 imageContainer:{
    height:"30%",
    flexDirection:"column",
    backgroundColor:"white"
 },
 descriptionContainer:{
    height:"43%",
    marginTop:1,
   backgroundColor:"white",
   elevation:10
 }
})