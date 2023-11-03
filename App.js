import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View,FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProductCard from './src/components/ProductCard';
import product_data from './src/product_data.json'
export default function App() {
  const renderProducts= ({item})=><ProductCard products={item}/>
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>PATIKASTORE</Text>
        <TextInput style={styles.input}
        placeholder='search'
        />
        <FlatList
        keyExtractor={(item,index)=>item.u_id.toString()}
          data={product_data}
          numColumns={2}
          renderItem={renderProducts}
          contentContainerStyle={styles.flatListContent}
        />
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
  title:{
    color:'purple',
    fontSize:30,
    fontWeight:'bold',
    paddingLeft:10
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor:'#E8E9E8',
    borderColor:'#E8E9E8',
    borderRadius:12,
  },
  flatListContent: {
    paddingBottom: 100,
  },
});
