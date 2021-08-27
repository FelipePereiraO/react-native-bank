import React from 'react'
import { View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import styles from '../css/PixCss'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Pix({navigation}){
    return(
        <View>
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.back}
                    onPress={() => navigation.goBack()}
                >
                    <Ionicons name='chevron-back-sharp' size={30} color={'white'}/>
                </TouchableOpacity>   
                <Text style={styles.titulo}>Pix</Text>               
            </View>
            <View style={styles.painel}>
                <TouchableOpacity
                    style={styles.bt}
                    onPress={() => navigation.navigate("Cam")}
                >
                    <Ionicons name='qr-code-sharp' size={30} color={'black'}/>
                    <Text>Ler Qr Code</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.bt}
                >
                    <Ionicons name='people-sharp' size={30} color={'black'}/>
                    <Text>Contatos</Text>
                </TouchableOpacity>
            </View>
            <View>
                <View style={styles.cec}>
                    <Text>Pix Copiar e Cola</Text>
                    <TouchableOpacity style={styles.btColar}>
                        <Text>Colar QR Code</Text>
                    </TouchableOpacity>                    
                </View>
                <Text style={styles.text}>Para quem você quer transferir?</Text>
                <View style={styles.chave}>
                    <TextInput placeholder="Chave Pix" style={styles.input}/>
                    <TouchableOpacity
                        onPress={() => alert("Chave não encontrada")}
                    >
                        <Ionicons name='search-sharp' size={30} color={'black'}/>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}