import React from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import styles from '../css/PixCss'
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function Pagamentos({navigation}){
    return(
        <View>
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.back}
                    onPress={() => navigation.goBack()}
                >
                    <Ionicons name='chevron-back-sharp' size={30} color={'white'}/>
                </TouchableOpacity>   
                <Text style={styles.titulo}>Pagamento</Text>               
            </View>
            <View style={styles.painel}>
                <TouchableOpacity
                    style={styles.bt}
                    onPress={() => navigation.navigate("Cam")}
                >
                    <Ionicons name='barcode-sharp' size={30} color={'black'}/>
                    <Text>Ler Codigo</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.bt}
                >
                    <Ionicons name='calendar-sharp' size={30} color={'black'}/>
                    <Text>Faturas</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.text}>Digite o Código de Barras</Text>
            <View style={styles.chave}>
                <TextInput placeholder="Código do Boleto" style={styles.input}/>
                <TouchableOpacity
                    onPress={() => alert("Boleto não encontrado")}
                >
                    <Ionicons name='search-sharp' size={30} color={'black'}/>
                </TouchableOpacity>
            </View>            
        </View>
    )
}