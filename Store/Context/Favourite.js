import { useContext } from "react";
import {View,Text, StyleSheet} from 'react-native'
import MealssList from '../../components/MealList/MealssList'
//import {FavouriteContext, favouriteContext} from '../Context/context-api'
import {MEALS} from '../../Data/Dummy-data'
import { useSelector } from "react-redux";

function FavouriteScreen(){
    //const FavouiteMealsContext= useContext(FavouriteContext)
    const FavouriteMealIds= useSelector((state)=> state.favouriteMeals.ids)

    const favouriteMeals= MEALS.filter((meal)=>
           FavouriteMealIds.includes(meal.id))
         //FavouiteMealsContext.ids.includes(meal.id)) 

      if (favouriteMeals.length == 0){
        return <View style= {styles.containerA}>
            <Text style={styles.TextA}>You have not added Favourite meals yet!</Text>
        </View>
    }
    return <MealssList items={favouriteMeals}/>
}

export default FavouriteScreen;

const styles= StyleSheet.create({
    containerA:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'grey'
    },
    TextA:{
        fontSize:18,
        color:'white',
        fontWeight:'bold'
    }
})
