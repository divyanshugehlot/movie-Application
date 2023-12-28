import { Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { colors } from '../styles/Styles'
import { useNavigation } from '@react-navigation/native'

const ProductCard = ({image,name,price}) => {

  const [quantity, setQuantity] = useState(1)
  const navigation = useNavigation()

  const handleIncrement = ()=>{
    setQuantity((prev)=>prev+1)
  }
  const handleDecrement = ()=>{
   quantity>1&& setQuantity((prev)=>prev-1)
  }

  return (
    <View 
        style={styles.main}
    >
        <TouchableOpacity style={styles.container} 
          onPress={()=>navigation.navigate("product")}
        >
     <View 
      style={{
        width: "35%",
        height: "100%",
        alignItems:"baseline",
        justifyContent:"flex-end",
      }}
      >
     <Image
        source={
           require("../assets/furni.png")
        }
        style={{
          width: "100%",
          height: "80%",
          resizeMode: "contain",
        }}
        alt="furniture"
        />
     </View>
     <View
     style={{
        justifyContent:"center",
        width:"35%",
        padding:10
     }}
     >
        <View style={{width:"100%",alignItems:"center"}} >
            <Text style={{fontSize:23,padding:3,fontWeight:"600",color:colors.color3}} >{name}</Text>
        </View>
        <View style={{flexDirection:"row",marginTop:4,justifyContent:"space-evenly"}} >
            <View style={{margin:2}}>
              <Text 
              style={{fontSize:25,paddingRight:6,color:"grey"}}
              onPress={()=>handleDecrement()}
              >
                -
                </Text>
              </View>
            <View style={{borderWidth:0,padding:10,elevation:2,borderColor:"grey"}}><Text style={{fontSize:13,color:"grey"}}>{quantity}</Text></View>
            <View style={{margin:2}} >
              <Text 
              style={{fontSize:25,paddingLeft:6,color:"grey"}}
              onPress={()=>handleIncrement()}
              >
                +
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
        <View>
        <Text style={{color:"grey"}}>${price}</Text>
        </View>
        <View style={{marginTop:4}} >
        <Text style={{
            color:"purple",
            fontSize:18,
            fontWeight:"600"
        }} >$500</Text>
        </View>
     </View>
    </TouchableOpacity>
    </View>
    
  )
}

export default ProductCard

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:"100%",
        flexDirection:"row",
        backgroundColor:colors.color2,
        justifyContent:"center",
        borderRadius: 20,
        elevation: 15,
    },
    main:{
        
        width: 350,
        margin: 5,
        height: 100,
    }
})