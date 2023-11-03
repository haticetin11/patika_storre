import { StyleSheet,Dimensions } from "react-native";
export default StyleSheet.create({
    container:{
        backgroundColor:'white',
        margin:6,
        borderRadius:10,
        width:Dimensions.get('window').width /2,
    },
    product_image:{
        width:Dimensions.get('window').width / 2,
        height:250,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        alignItems:'center',
        justifyContent: 'center',
        
        
    },
    product_name:{
        fontWeight:'bold',
        fontSize:16,
        marginBottom:10,
    },
    product_price:{
        fontStyle:'italic',
        textAlign:'right'

    },
    product_stock:{
        color:'red',
        fontSize:16,
        fontWeight:'bold'
    },
    inner_container:{
        padding:10,
    }

})