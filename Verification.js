import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, Button} from 'react-native';
//import
const Verification = () => {
    return(
    <View style={styles.mainContainer }>
    <Text style={styles.mainHeader}>Verification Code</Text>
    <Image source={{uri:"https://5.imimg.com/data5/KB/ZB/NA/SELLER-81980457/instagram-verification-500x500.png"}}
    style={{height:100, width:200, alignItems:'center'}}/>
    <Text style={styles.description}>We have send you Verification Code on provided email</Text>


    <View style={styles.inputContainer}>
        <TextInput style={styles.inputStyle}/>
    <Text style={styles.lable}>Enter code</Text>

    <View>
    <Button 
    title ="Confirm Verification"
    color={"darkorange"}/>
    </View> 

    </View>
    </View>
    
    )};
const styles= StyleSheet.create({
    mainContainer:{
        flex:1,
        aglinItems:'center',
        justifyContent:'center',
        marginTop:50,
    },
    mainHeader:
    {
        justifyContent:'center',
        alignItems:"center",
        flex:1,
        fontSize:40,
        color:"blue",
        padding:30,
    },
    inputContainer:
    {
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white',
        borderColor:'black',
    },
    inputStyle:
    {
        
        padding:20,
        paddingHorizontal:10,
        paddingVertical:15,
        margin:10,
    },
    lable:
    {
        margin:10,
    },
    Button:
    {
        padding:20,
        paddingHorizontal:15,
        paddingVertical:15,
        margin:10,
        
    }
}); 
export default Verification
