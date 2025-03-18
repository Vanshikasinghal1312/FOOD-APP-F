	import {Text,View, StyleSheet} from 'react-native'
	
	function List({data}){
	    return data.map((dataitem1)=><View key={dataitem1} style={styles.List1}>
	        <Text style={styles.list2} >{dataitem1}</Text>
	    </View>)
	}
	export default List;
	
	const styles= StyleSheet.create({
	    List1:{
	        paddingHorizontal:10,
	        paddingVertical:5,
	        borderRadius:15,
	        borderColor:'maroon',
	        borderWidth:2,
	        marginHorizontal:40,
	        marginVertical:3,
	        alignItems:'center',
	        backgroundColor:'darkgray'
	    },
	    list2:{
	        color:'maroon',
	        textAlign:'center',
	        fontWeight:'bold',
	    }
	
	})
