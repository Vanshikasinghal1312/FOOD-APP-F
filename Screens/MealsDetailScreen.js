	import React,{useLayoutEffect}from 'react'
	import { Text, View, Image,StyleSheet,ScrollView, Button} from 'react-native'
	import { MEALS } from '../Data/Dummy-data';
	import  MealDetails from '../components/MealDetails'
	import List from '../components/MealD/Lists'
	import { setOptions } from 'expo-splash-screen';
	import IconButton from '../components/iconButton'
	import { useContext } from 'react';
	//import { FavouriteContext } from '@/store/Context/context-api';
	import AntDesign from '@expo/vector-icons/AntDesign';
	import { addFavourite, removeFavourite } from '../Store/Redux/Favouite1';
	import { useSelector, useDispatch } from 'react-redux';
	
	function MealDetailScreen({route,navigation}){
	  const FavouriteMealIds= useSelector((state)=> state.favouriteMeals.ids);
	  const dispatch= useDispatch();
	
	    //const FavouiteMealsContext= useContext(FavouriteContext);
	    const mealId= route.params.mealId;
	    const selectedMeal = MEALS.find((meal)=>meal.id === mealId);
	
	    //const mealIsFav= FavouiteMealsContext.ids.includes(mealId)
	    const mealIsFav= FavouriteMealIds.includes(mealId)
	    function changefavouriteastatusHandler(){
	      if (mealIsFav){
	        dispatch(removeFavourite({id:mealId}))
	        // FavouiteMealsContext.removeFavourite(mealId)
	      }
	      else {
	        // FavouiteMealsContext.addFavourite(mealId)
	        dispatch(addFavourite({id:mealId}))
	      }
	    }
	
	    useLayoutEffect(()=>{
	        navigation.setOptions({
	            headerRight:()=>{
	                return (
	                <IconButton 
	                icon={mealIsFav? 'star':'staro'}
	                color='white'
	                onPress={changefavouriteastatusHandler}
	                />
	        )}
	        })
	    },[navigation, changefavouriteastatusHandler])
	    return (
	    <ScrollView style={styles.scrollview1}>
	        <Image source={{uri:selectedMeal.imageUrl}} style={styles.image1}/>
	        <Text style={styles.title1}>{selectedMeal.title}</Text>
	   
	        <View>
	            <MealDetails 
	            duration={selectedMeal.duration} 
	            affordability={selectedMeal.affordability}
	            complexity={selectedMeal.complexity} 
	            textstyle={styles.detailtext}
	            />
	        </View>
	        
	        <View style={styles.subtitlecontainer} >
	        <Text style={styles.subtitle}>INGREDIENTS</Text>
	        </View>
	
	         <List data={selectedMeal.ingredients}/>       
	        
	        <View style={styles.subtitlecontainer}>
	        <Text style={styles.substitle2}>Steps</Text>
	        </View>
	        <List data={selectedMeal.steps}/>       
	        
	
	    </ScrollView>
	    
	    )   
	}
	
export default MealDetailScreen;
	
	const styles= StyleSheet.create({
	    image1:{
	        width:'100%',
	        height:200,
	        marginTop:5
	    },
	    title1:{
	        fontWeight:'bold',
    	        fontSize:25,
    	        color:'darkred',
    	        margin:5,
    	        textAlign:'center'    
    	},
    	detailtext:{
    	    color:'darkgreen'
    	},
    	subtitle:{
    	    color:'darkblue',
    	    fontSize:20,
    	    fontWeight:'bold',
            padding:8,
    	    textAlign:'center'
    	     
    	},
    	substitle2:{
    	    color:'darkblue',
    	    fontSize:20,
    	    fontWeight:'bold',
    	    padding:8,
    	    textAlign:'center',
    	    marginTop:25
    	
    	},
    	//   subtitlecontainer:{
    	//     borderBottomColor:'darkblue',
    	//     borderBottomWidth:3,
    	//     marginHorizontal:90,
    	     
    	//   },
    	  scrollview1:{
    	    marginBottom:80
    	  },
    	
    	})
    