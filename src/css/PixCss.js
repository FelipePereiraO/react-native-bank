import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    header:{
        backgroundColor: "#1ab2ff",
        height: 200 
    },
    titulo:{
        marginTop: "auto",
        marginBottom: 50,
        textAlign: "center",
        fontSize: 40,
        color: "white",
        fontWeight: "200"

    },
    back:{
        marginTop: 60,
        marginLeft: 5
    },
    input:{
        height: 50,
        width: "85%",
        margin:10,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#bfbfbf'
    },
    inputL: {
        height: 50,
        margin:10,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#bfbfbf'
    },
    painel:{
        padding: 20,
        height: 100,
        width: "90%",
        backgroundColor: "white",
        margin: "5%",
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center"
    },
    bt:{
        justifyContent: 'center',
        marginLeft: 20
        
    },
    cec:{
        height: 50,
        padding: 10,
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        width: '60%',
        marginLeft:'20%',
        borderRadius: 8
    },
    btColar:{
        backgroundColor: "#e6e6e6",
        height: 30,
        width: 110,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        borderRadius: 8
    },
    text:{
        margin: 15,
        fontSize: 20,
        fontWeight: '200'
    },
    chave:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    label:{
        marginLeft: 10,
        fontSize: 15,
        fontWeight: '200'
    },
    btavancar:{
        margin: '10%',
        alignItems: 'center',
        flexDirection: 'row',
        width: '20%'

    },
    scroll:{
        height: '70%'
    }

    
})


export default styles