import {Text, TouchableOpacity} from 'react-native';
import {s} from "./buttonConvert.style";

export function ButtonConvert({onPress, unit}) {
    return (
        <TouchableOpacity onPress={onPress} style={s.button}>
            <Text style= {s.text}>Convertir en {unit} </Text>
        </TouchableOpacity>
    );
}