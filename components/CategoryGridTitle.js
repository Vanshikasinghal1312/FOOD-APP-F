import { View,Text,Pressable , StyleSheet} from "react-native";

function CategoryGridTitle({title,color,onPress}){
    return (
    <View style={[styles.gridItem, {backgroundColor:color}]}>
        <Pressable android_ripple={{color:'pink'}}style={styles.button}
        onPress={onPress}>
            <View style={styles.innerContainer}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </Pressable>
    </View>
    )
}
export default CategoryGridTitle;
 
const styles= StyleSheet.create({
    gridItem:{
        flex:1,
        margin:12,
        height:120,
        borderRadius:5,
        //borderWidth:2,
        overflow:'hidden'
    },
    innerContainer:{
        justifyContent:'center',
        alignItems:'center',
        padding:35
    },
    button:{
        flex:1,
    },
    title:{
        fontWeight:'bold',
        fontSize:15
    }

})
