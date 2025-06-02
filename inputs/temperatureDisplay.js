import { Text } from "react-native";
import { s } from "./temperatureDisplay.style";
import { getOppositeUnit } from "../services/temperature.service";

export function TemperatureDisplay({value, unit}) {
    return (
        <Text style={s.text}>
            {value} {unit}
        </Text>
    );
}