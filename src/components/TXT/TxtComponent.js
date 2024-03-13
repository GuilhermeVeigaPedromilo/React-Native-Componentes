import { Text } from "react-native";

export default function TextTtitulo({children}){
    return(
        <Text style={{fontSize: 20, color: 'white'}} >{children}</Text>
    );
}
