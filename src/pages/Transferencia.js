import React from 'react'
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import styles from '../css/PixCss'
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function Transferencia({navigation}){
    return(
        <View>
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.back}
                    onPress={() => navigation.goBack()}
                >
                    <Ionicons name='chevron-back-sharp' size={30} color={'white'}/>
                </TouchableOpacity>   
                <Text style={styles.titulo}>Transferência</Text>               
            </View>
            <ScrollView style={styles.scroll}>
                <View style={styles.painel}>
                    <TouchableOpacity
                        style={styles.bt}
                    >
                        <Ionicons name='people-sharp' size={30} color={'black'}/>
                        <Text>Contatos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.bt}
                    >
                        <Ionicons name='time-sharp' size={30} color={'black'}/>
                        <Text>Recentes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.bt}
                    >
                        <Ionicons name='star-sharp' size={30} color={'black'}/>
                        <Text>Favoritos</Text>
                    </TouchableOpacity>
                </View>     
                <Text style={styles.text}>Dados do Destino</Text>  
                <View>
                    <Text style={styles.label}>Banco</Text>
                    <TextInput placeholder="Ex: Banco do Brasil" style={styles.inputL}/>
                    <Text style={styles.label}>Tipo de Conta</Text>
                    <TextInput placeholder="Corrente ou Poupança" style={styles.inputL}/>
                    <TextInput placeholder="Agência"style={styles.inputL}/>
                    <TextInput placeholder="Conta" style={styles.inputL}/>
                </View>    
                <TouchableOpacity
                    style={styles.btavancar}
                    onPress={() => alert("Preencha os campos!")}
                >
                    <Text>Avançar</Text>
                    <Ionicons name='chevron-forward' size={30} color={'black'}/>
                </TouchableOpacity>
            </ScrollView>  
        </View>                
            

    )
}