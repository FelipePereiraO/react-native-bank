import React from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import styles from '../css/HomeCss'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Transf from '../components/Transf';
export default function Home({navigation}){

    return(
        <View>
            <View style={styles.header}>
                <View style={styles.headerTitulo}>
                    <Text style={styles.welcome}>Bem Vindo!</Text>
                    <Text style={styles.titulo}>Felipe Pereira</Text>
                </View>
                <View style={styles.saldo}>
                  
                    <Text style={styles.welcome}>Saldo</Text>
                    <Text style={styles.valor}>R$ 702,80</Text>
                </View>                
                <View style={styles.nav}>
                    <TouchableOpacity
                        style={styles.bt}
                        onPress={() => navigation.navigate("Pix")}
                    >
                        <Ionicons name='qr-code-sharp' size={30} color={'black'} style={styles.pay}/>
                        <Text>Pix</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.bt}
                        onPress={() => navigation.navigate("Transferencia")}
                    >
                        <Ionicons name='swap-horizontal-sharp' size={30} color={'black'} style={styles.pay}/>
                        <Text>Transferência</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.bt}
                        onPress={() => navigation.navigate("Pagamentos")}
                    >
                        <Ionicons name='cash-sharp' size={30} color={'black'} style={styles.pay}/>
                        <Text>Pagamento</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.historico}>
               <Text style={styles.TituloH}>Historico</Text> 
                <ScrollView style={styles.scrollhistorico}>
                    <Transf titulo="Steam" valor={-120}/>
                    <Transf titulo="McDonalds" valor={-34.50}/> 
                    <Transf titulo="Uber" valor={-16}/>
                    <Transf titulo="Salário" valor={2000}/>
                    <Transf titulo="Pizzaria" valor={-27}/>
                    <Transf titulo="Uber" valor={-23}/>
                </ScrollView>               
            </View>



        </View>
    )
}