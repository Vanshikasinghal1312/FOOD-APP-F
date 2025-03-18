import React from 'react'
import {Text, View, FlatList, StyleSheet} from 'react-native'
import Meal from '../Models/Meal';
import MealItems from '../components/MealList/MealItem'
import { MEALS } from '../Data/Dummy-data';
import MealssList from '../components/MealList/MealssList'

 function MealsOverviewScreen({route}){
    const catId = route.params.categoryID;
   
    const displayMeals= MEALS.filter((mealItem)=>{
        return mealItem.categoryIds.indexOf(catId)>=0;
    })
 return <MealssList items={displayMeals}/>
   
//     function renderMealItem(itemData){
        
//         return <MealItems 
//         id={itemData.item.id}
//         title={itemData.item.title}
//         imageUrl={itemData.item.imageUrl}
//         duration={itemData.item.duration}
//         affordability={itemData.item.affordability}
//         complexity={itemData.item.complexity}  
//         />
        
//    }
//     return(
//         <View style={styles.viewA}>
//             <FlatList 
//             data={displayMeals}
//             keyExtractor={(item)=>item.id}
//             renderItem={renderMealItem}
        
//             />
//         </View>
//     )
  
}
export default MealsOverviewScreen

const styles=StyleSheet.create({
    viewAB:{
        backgroundColor:'darkgrey'
    }
})
