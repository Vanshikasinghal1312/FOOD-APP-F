import {Text, View, StyleSheet} from 'react-native'

function MealDetails({duration,affordability, complexity,style,textstyle}){
    return(
        <View style={[styles.Text2,style]}>
            <Text style={[styles.text3,textstyle]}>{duration}m</Text>
            <Text style={[styles.text3,textstyle]}>{affordability.toUpperCase()}</Text>
            <Text style={[styles.text3,textstyle]}>{complexity.toUpperCase()}</Text>
        </View>
    )

}
export default MealDetails;

const styles= StyleSheet.create({
    Text2:{
        flexDirection:'row',
        alignSelf:'center',
        justifyContent:'space-between',
        padding:6
    },
    text3:{
        marginHorizontal:'5',
        fontSize:15
    }
})
