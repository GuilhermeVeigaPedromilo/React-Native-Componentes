import { Text } from "react-native";

export default function TextTouch({children}){
    return(
        <Text style={{fontSize: 15,}} >{children}</Text>
    );
}