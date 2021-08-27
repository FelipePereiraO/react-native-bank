import React from 'react'
import { View, Text, TouchableOpacity} from 'react-native'
import styles from '../css/HomeCss'
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function Transf(props){
    let icon = ""
    let cor = ""
    if(props.valor < 0){
        icon = "arrow-down-sharp"
        cor = "#ff3333"
    }else{
        icon = "arrow-up-sharp"
        cor = "#00cc00"
    }
    return(
        <TouchableOpacity style={styles.compras}>
            <View style={styles.transf}>
                <View className="icon" style={props.valor < 0 ? styles.negativo : styles.positivo}> 
                    <Ionicons  name={icon} size={25} color={cor}/>
                </View>
            
                <Text style={styles.historicoTitulo}>
                    {props.titulo}
                </Text>                  
                <Text style={styles.historicoValor}>R$ {props.valor}</Text>                          
            </View>
        </TouchableOpacity>
    )
}