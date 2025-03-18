	import {Text, View, StyleSheet} from 'react-native'
	import TabScreen from '../Screens/TabScreen'
	import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
	import AntDesign from '@expo/vector-icons/AntDesign';
	
	const Tab= createBottomTabNavigator()
	
	export default function TTabnavigation(){
	    return (
	   <Tab.Navigator>
	    <Tab.Screen name='Folder1' component={Tab1} options={{headerShown:false, tabBarIcon:()=>(<AntDesign name="camerao" size={24} color="orange" />), tabBarActiveTintColor:'red', tabBarInactiveTintColor:'purple'}} />
	    <Tab.Screen name='Folder2' component={TabScreen} options={{headerShown:false, tabBarIcon:()=>(<AntDesign name="camerao" size={24} color="orange" />) ,tabBarActiveTintColor:'red',tabBarInactiveTintColor:'purple'}}/>
	    
	   </Tab.Navigator>
	
	       
	      
	    )
	}
	
	const Tab1=()=>(
	    <View style={styles.D1}>
	    <Text style={styles.D2}>This is Tab1 Folder</Text>
	</View>
	
	)
	const styles= StyleSheet.create({
	    D1:{
	        backgroundColor:'grey',
	        flex:1
	    },
	    D2:{
	        color:'white',
	        fontSize:30,
	        textAlign:'center',
	        marginTop:200,
	        fontWeight:'bold'
	
	    }
})
