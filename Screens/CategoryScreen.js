	import { CATEGORIES } from '../Data/Dummy-data';
	import { FlatList, View } from "react-native";
	import CategoryGridTitle from '../components/CategoryGridTitle';
	
function CategoryScreen({navigation}){
  function randerCategoryItem(itemData){
	    function pressHandler(){
	      navigation.navigate("MealsOverviewScreen",{
	        categoryID:itemData.item.id
	      })
	    }
	      return(
	        <CategoryGridTitle 
	        title={itemData.item.title} 
	        color ={itemData.item.color} 
	        onPress={pressHandler} 
	        />
	    )
	  }
	    return (
	      <View style={{backgroundColor:'grey'}}>
	   <FlatList 
	    data={CATEGORIES} 
	    keyrenderItem={(item)=>item.id}
	    renderItem={randerCategoryItem}
	    numColumns={2}
	    // scrollEnabled={true}
	    // contentContainerStyle={{ paddingBottom: 20 }}
	
	    //scrollEnabled={true} 
	    /> 
	    </View>
	    )
	}
	export default CategoryScreen;
