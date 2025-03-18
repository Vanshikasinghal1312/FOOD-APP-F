import { Pressable, StyleSheet } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function IconButton({icon,color, onPress}){
    return (
    <Pressable onPress={onPress}>
       <AntDesign name={icon} size={24} color={color} />
       </Pressable>
    )
}
const styles=StyleSheet.create({

})
