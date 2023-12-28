import { View, Text,StyleSheet, TouchableOpacity,TextInput } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { colors, defaultStyle } from '../styles/Styles'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
const Header = ({title,back=false,icon,isSearch=false,search}) => {
  const navigation = useNavigation()
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{x: 1, y: 1 }}
      colors={['rgba(255, 191, 0,0.4)', 'rgba(255, 140, 26,0.8)', 'rgba(255, 83, 26,0.8)']}
      style={{
        padding:back||isSearch?10:25,
        
      }}
      >
     { title&&  <View style={styles.container}>
     {back&&<TouchableOpacity style={styles.back} onPress={()=>navigation.goBack()} >
            <Ionicons name="chevron-back" 
            size={30} 
            color={colors.color2}
          />
          </TouchableOpacity>}
          <View style={styles.title}>
            <Text style={styles.titleText}>
              {title}
              </Text>
              </View>
        </View>
        }
        {
          isSearch&&
            <View style={styles.searchContainer}>
               <Ionicons name="search-outline" 
            size={20} 
            color={"purple"}
          />
              <TextInput
            placeholder="search movie"
            placeholderTextColor="grey"
            onChangeText={search}
            style={styles.search}
            />
            </View>
            
          
        }
      </LinearGradient>
  )
}

const styles = StyleSheet.create({
 
  container:{
    flexDirection:"row",
    paddingTop:4,
    width:"100%",
  },
  title:{
    
  },
  titleText:{
    color:colors.color2,
    fontWeight:"900",
    fontSize:18
  },
  back:{
    width:"30%",
  },
  search:{
    fontSize: 18,
    marginLeft: 10,
    width: "88%",
  },
  searchContainer:{
    flexDirection: "row",
    width: "93%",
    backgroundColor: colors.color2,
    borderRadius: 15,
    alignItems: "center",
    justifyContent:"center",
    paddingLeft:6,
    marginLeft:10,
    margin:3
  }
})

export default Header