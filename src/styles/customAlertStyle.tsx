import React from 'react'
import { StyleSheet } from 'react-native'

const customAlertStyle = StyleSheet.create({
        contentModal:{
            flex:1,
            backgroundColor:'rgba(0,0,0,0.5)',
            alignItems:'center',
            justifyContent:'center'
        },
        contentAlert:{
            width:200,
            height:200,
            backgroundColor:'#f7f7f7',
            borderRadius:10,
            borderStyle:'solid',
            borderColor:'#363636'
        },
        titleCardAlert:{
            height:'20%',
            //backgroundColor:'blue'
        },
        contentCardAlert:{
            height:'60%',
            //backgroundColor:'green'
        },
        buttomCardAlert:{
            height:'20%',
           //backgroundColor:'red',
            justifyContent:'flex-end',
            flex:1
        },
        textTitle:{
            color:'black'
        },
        iconCardAlert:{
            color:'black',
            backgroundColor:'red',
            fontSize:50,
        }
    }
)
export default customAlertStyle