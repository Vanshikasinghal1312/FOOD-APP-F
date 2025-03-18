import {Text, View, FlatList, StyleSheet} from 'react-native'
import MealItems from './MealItem';

function MealssList({items}){
   function renderMealItem(itemData){
        return <MealItems 
            id={itemData.item.id}
            title={itemData.item.title}
            imageUrl={itemData.item.imageUrl}
            duration={itemData.item.duration}
            affordability={itemData.item.affordability}
            complexity={itemData.item.complexity}  
            />
            }
     return(
            <View style={styles.viewA}>
                <FlatList 
                data={items}
                keyExtractor={(item)=>item.id}
                renderItem={renderMealItem}
                />
            </View>
    )
   
}
export default MealssList;

const styles=StyleSheet.create({
    viewA:{
        backgroundColor:'grey',
        flex:1
    }
})
