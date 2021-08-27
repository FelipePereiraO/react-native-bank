import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";


const styles = StyleSheet.create({
    header:{
        backgroundColor: "#1ab2ff",
        height: 350     
    },
    headerTitulo:{
        marginTop: 90,
        marginLeft: 20,
    },
    welcome:{
        fontSize: 19,
        color: "white",
        fontWeight: "200"
    },
    titulo:{
        fontSize: 23,
        color: "white",
    },
    saldo:{
        marginTop: 50,
        marginLeft: 20, 
    },
    valor:{
        color: "white",
        fontSize: 25,
    },
    nav:{
        marginTop: 50,
        height: 100,
        width: '80%',
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center',
        marginLeft: '10%',
        borderRadius: 8,
    },
    bt:{
        justifyContent: 'center',
        marginLeft: 20
    },
    pay:{
        textAlign: 'center',
        marginBottom: 5
    },
    historico:{
        marginTop: 70,
        marginLeft: 10,
        height: '50%'
    },
    TituloH:{
        fontSize: 20,
        fontWeight: "200",
        marginBottom: 10
    },
    scrollhistorico:{
        width:'97%',
        backgroundColor: 'white',
        borderRadius: 8
    },
    transf:{
        flexDirection: "row",
        margin: 20,
        alignItems: "center"

    },
    negativo:{
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 50,
        backgroundColor: '#ffb3b3',
        borderRadius: 5,
    },
    positivo:{
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 50,
        backgroundColor: '#b3ffb3',
        borderRadius: 5,
    },
    historicoTitulo:{
        marginLeft: "5%"
    },
    historicoValor:{
        marginLeft: "auto"
    }
    
    


})

export default styles