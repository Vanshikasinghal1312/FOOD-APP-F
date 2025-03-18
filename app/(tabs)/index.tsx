import {Text, View, StyleSheet, ImageBackground} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import CategoryScreen from '../../Screens/CategoryScreen'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
// import MealOverview from '../../Screens/MealOverviewScreen'
import MealsOverviewScreen from '../../Screens/MealOverviewScreen'
import MealDetailScreen from '../../Screens/MealsDetailScreen'
import Favourite from '../../Screens/favourite'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Entypo from '@expo/vector-icons/Entypo';
// import FavouriteContextProvider from '../../store/Context/context-api'
import FavouriteScreen from '../../Store/Context/Favourite'

import TTabnavigation from '../../Screens/favourite'
import {Provider} from 'react-redux'
import { store } from '../../Store/Redux/Store'

const Stack= createNativeStackNavigator();
const Drawer= createDrawerNavigator();

function DrawerHandler(){
    return (
    <Drawer.Navigator >
        <Drawer.Screen name='MealCategory'  component={CategoryScreen} options={{
                title:'Meal Categories', 
                 drawerActiveTintColor:'brown',
                 drawerActiveBackgroundColor:'orange',
                 drawerInactiveBackgroundColor:'white',
                 drawerInactiveTintColor:'black',
                 headerStyle:{backgroundColor:'orange'}, 
                 headerTintColor:'brown', 
                 drawerIcon:()=>(<Entypo name="align-right" size={24} color="red" />)
                }}/>
                <Drawer.Screen name='Favourite'  component={FavouriteScreen} options={{
                title:'Favourites', 
                 drawerActiveTintColor:'brown',
                 drawerActiveBackgroundColor:'orange',
                 drawerInactiveBackgroundColor:'white',
                 drawerInactiveTintColor:'black',
                 headerStyle:{backgroundColor:'orange'}, 
                 headerTintColor:'brown', 
                 drawerIcon:()=>(<Entypo name="align-right" size={24} color="red" />)
                }}/>
                <Drawer.Screen name='TTabnavigation'  component={TTabnavigation} options={{
                title:'TTabnavigation', 
                 drawerActiveTintColor:'brown',
                 drawerActiveBackgroundColor:'orange',
                 drawerInactiveBackgroundColor:'white',
                 drawerInactiveTintColor:'black',
                 headerStyle:{backgroundColor:'orange'}, 
                 headerTintColor:'brown', 
                 drawerIcon:()=>(<Entypo name="align-right" size={24} color="red" />)
                }}/>
        
    </Drawer.Navigator>
    )
}
export default function App(){
    return(
        <Provider store={store}>
        {/* //<FavouriteContextProvider> */}
        <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:'brown'}, 
        headerTintColor:'white', 
        contentStyle:{backgroundColor:'grey'}}} >
            <Stack.Screen name= "drawer"  component={DrawerHandler} options={{headerShown:false}}/>
            <Stack.Screen name= "MealCategory"  component={CategoryScreen} options={{
                title:'All Categories', 
                }}/>   
            <Stack.Screen name= "MealsOverviewScreen" component={MealsOverviewScreen}/>   
            <Stack.Screen name= "MealDetailScreen" component={MealDetailScreen}/>   

        </Stack.Navigator>
       
        {/* // </FavouriteContextProvider> */}
        </Provider>
    )
}

const styles= StyleSheet.create({
    container:{        
        backgroundColor:'black',
        flex:1
    }
})
