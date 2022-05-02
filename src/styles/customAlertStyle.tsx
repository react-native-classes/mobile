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
            height:'25%',
            backgroundColor:'#f7f7f7',
            borderRadius:10,
            borderStyle:'solid',
            borderColor:'#363636',
            padding:15,
            display:'flex',
            position:'relative'
        },
        titleCardAlert:{
            backgroundColor:'blue',
            flex:1
        },
        contentCardAlert:{
            flex:2,
            flexDirection:'column',
            justifyContent:'space-between',
            alignItems:'center'
        },
        textTitle:{
            color:'black'
        },
        iconCardAlert:{
            width:100,
            textAlign:'center',
        },
        buttomCardAlert:{
            justifyContent:'flex-end',
            flex:1
        }
    }
)
export default customAlertStyle