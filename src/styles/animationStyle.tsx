import React from 'react';
import {StyleSheet,Dimensions} from 'react-native';

let widthCurrent = Dimensions.get('window').width; 
let heightCurrent = Dimensions.get('window').height; 

const animationStyle = StyleSheet.create({
    content:{
        height:'100%',
        padding:10,
        display:'flex',
        alignItems:'center',
        justifyContent:'flex-start',
        width:widthCurrent,
    },
    h1:{
        fontWeight:'600',
        fontSize:30,
        color:'#363636'
    },
    contentCard:{
        width:'100%',
        height:300,
        display:'flex',
        justifyContent:'center',
        alignContent:'center',
        borderRadius:10,
        //borderStyle:'solid',
        //borderWidth:2,
        shadowColor: "rgba(54, 54, 54, 1)",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5,

        elevation: 7,
        margin:20,
        flexDirection:'row',
        flexWrap:'wrap'
    },
    imageCard2:{
        width:300,
        height:'100%',
        resizeMode:'stretch',
        borderRadius:30
    },
    imageCard:{
        width:300,
        height:'100%',
       resizeMode:'stretch',
       borderRadius:30
    },
    contentImage:{
        height:'80%',
        width:300,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    descriptionText:{
        fontWeight:'700',
        fontSize:20,
        textAlign:'center',
    }
});

export default animationStyle;
