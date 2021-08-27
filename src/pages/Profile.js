import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../css/ProfileCss';

export default function Profile(){
    return(
        <View>
            <View style={styles.header}>
            </View>
            <View style={styles.painel}>
                <Ionicons name='wallet-sharp' size={20} color={'#1ab2ff'}/>
                <Text style={styles.titulo}>Felipe Pereira</Text>  
                <Text style={styles.text}>Banco: BankPress</Text>  
                <Text style={styles.text}>Agência: 001</Text>  
                <Text style={styles.text}>Agência: 000123456-7</Text>   
            </View>
            <View>
                <TouchableOpacity style={styles.bt}>
                    <Ionicons name='person-circle' size={25} color={'#1ab2ff'}/>
                    <Text style={styles.btText}>Meus dados</Text>
                    <Ionicons name='chevron-forward' size={25} color={'#1ab2ff'} style={styles.icon}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bt}>
                    <Ionicons name='chatbubble-ellipses' size={25} color={'#1ab2ff'}/>
                    <Text style={styles.btText}>Ajuda</Text>
                    <Ionicons name='chevron-forward' size={25} color={'#1ab2ff'} style={styles.icon}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bt}>
                    <Ionicons name='card' size={25} color={'#1ab2ff'}/>
                    <Text style={styles.btText}>Cartões</Text>
                    <Ionicons name='chevron-forward' size={25} color={'#1ab2ff'} style={styles.icon}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bt}>
                    <Ionicons name='hammer' size={25} color={'#1ab2ff'}/>
                    <Text style={styles.btText}>Serviços</Text>
                    <Ionicons name='chevron-forward' size={25} color={'#1ab2ff'} style={styles.icon}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bt}>
                    <Ionicons name='exit' size={25} color={'#1ab2ff'}/>
                    <Text style={styles.btText}>Finalizar sessão</Text>
                    <Ionicons name='chevron-forward' size={25} color={'#1ab2ff'} style={styles.icon}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}