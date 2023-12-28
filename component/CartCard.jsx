import { StyleSheet, Text, View,Image} from 'react-native'
import React,{useState} from 'react'

const CartCard = ({id,name,price,total,setTotal}) => {
  const [qty, setQty] = useState(1);
 
  const handleIncrement = ()=>{
    setTotal((prev)=>prev+price)
    setQty((prev)=>prev+1)
   
  }
  const handleDecrement = ()=>{
    qty>1&&setTotal((prev)=>prev-price)
   qty>1&& setQty((prev)=>prev-1)
  }
  
  console.log(qty)
  return (
    <View style={styles.main} >
        <View style={styles.container} >
        <View style={styles.left}>
        <View style={styles.imageContainer} >
        <Image
        source={
           require("../assets/furni.png")
        }
        style={{
          width: "100%",
          height: "100%",
          resizeMode: "contain",
        }}
        alt="furniture"
        />
        </View>
        <View 
        style={{
          padding:5,
          marginLeft:8,
          height:"100%",
          justifyContent:"space-between"
          }}>
            <View >
             <Text 
                style={{fontWeight:"400",
                fontSize:18,color:"grey"}} >
                {name}
            </Text>
            </View>
            <View><Text style={styles.text} >${price}</Text></View>
        </View>
     </View>
     <View style={styles.right}>
     <View 
     style={{
      flexDirection:"row",
      marginTop:4,
      justifyContent:"space-evenly"
      }}
       >
            <View style={{margin:2}}>
              <Text 
              style={{fontSize:25,paddingRight:6,color:"grey"}}
              onPress={()=>handleDecrement(id)}
              >
                -
              </Text></View>
            <View 
            style={styles.qty}
            >
              <Text 
              style={{fontSize:13,color:"grey"}}>
                {id&&qty}
                </Text>
              </View>
            <View style={{margin:2}} >
              <Text 
              style={{fontSize:25,paddingLeft:6,color:"grey"}}
              onPress={()=>handleIncrement(id)}
              >+</Text></View>
        </View>
     </View>
        </View>
    </View>
  )
}

export default CartCard

const styles = StyleSheet.create({
container:{
 flexDirection:"row",
 height:"100%",
 width:"98%",
 alignSelf:"center",
  backgroundColor:"white",
},
imageContainer:{
    height:"88%",
    width:"50%",
    flexDirection:"row",
    elevation:2,
    marginLeft:6,
    marginTop:5,
    borderWidth:1,
    borderColor:"white"
},
left:{
    width:"70%",
    flexDirection:"row",
    paddingLeft:4,
    borderRadius:20
},
right:{
    width:"30%",
    height:"100%",
    alignItems:"center",
    justifyContent:"center"

},
main:{
     marginTop:2,
    justifyContent:"center",
    height:100,
     backgroundColor:"white"
},
text:{
    fontWeight:"900",
    fontSize:25,
    color:"grey"
},
qty:{
  borderWidth:0,
  padding:10,
  elevation:2,
  borderColor:"grey",
  height:40
}
})