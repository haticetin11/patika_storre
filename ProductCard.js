import React from "react";
import {View,Text,Image} from 'react-native'
import styles from './ProductCard.style'
const ProductCard=({products})=>{
    return (
        <View style={styles.container}>
            <Image style={styles.product_image} source={{uri:products.imgURL}}/>
            <View style={styles.inner_container}>
               <Text style={styles.product_name}>{products.title}</Text>
               <Text style={styles.product_price}>{products.price}</Text>
               <Text style={styles.product_stock}>{products.inStock ? null : "STOKTA YOK"}</Text>

            </View>
            

        </View>
    )
}
export default ProductCard