import React from "react";
import {Text, View,StyleSheet,Pressable, Image} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import MealDetails from '../MealDetails'

export default function MealItems({id,title,imageUrl,duration, affordability, complexity}){
    const navigation= useNavigation()
     function mealpressHandler(){
       navigation.navigate('MealDetailScreen', {
            mealId:id
        })
    }
   
    return(
        <View style={styles.View1}>
        <Pressable android_ripple={{color:'darkgrey'}} 
        onPress={mealpressHandler}>
        <View>
            <Image source={{uri:imageUrl}} style={styles.imagestyle}/>
            <Text style={styles.textStyle}>{title}</Text>
        </View>
        <View>
            <MealDetails 
duration={duration} 
affordability={affordability} 
complexity={complexity}/>
</View>

</Pressable>
</View>
)
}

const styles= StyleSheet.create({
View1:{
margin:20,
flex:1,
backgroundColor:'white',
borderRadius:20,

},
imagestyle:{
width:'100%', 
height:200,
borderRadius:20,
backgroundColor:'grey'

},
textStyle:{
textAlign:'center',
fontWeight:'bold',
fontSize:15,
margin:5

},
Text2:{
flexDirection:'row',
alignSelf:'center',
justifyContent:'space-between',
padding:6
},
text3:{
marginHorizontal:'5',
fontSize:15
}
})
