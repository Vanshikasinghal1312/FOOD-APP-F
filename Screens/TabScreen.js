import {Text, View, StyleSheet} from 'react-native'
	
export default function TabScreen(){
	return (
	        <View style={styles.tab1}>
	            <Text style={styles.tab2}> This is Tab2 folder.</Text>
	        </View>
	    )
	}
const styles= StyleSheet.create({
	    tab1:{
	        backgroundColor:'grey',
	        flex:1
	    },
	    tab2:{
	        color:'white',
	        fontSize:30,
	        textAlign:'center',
	        marginTop:200,
	        fontWeight:'bold'
	
	    }
	})
