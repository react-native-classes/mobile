import { useEffect, useState } from 'react';
import { Dimensions, StyleSheet } from 'react-native'

const activityIndicatorStyle = StyleSheet.create({
    contentBox:{
        alignItems:'center',
        width:Dimensions.get('window').width,
        flexDirection:'column',
        height:Dimensions.get('window').height,
        paddingTop:0,
        justifyContent:'center'
    },
    logo:{
        width:200,
        height:100,
        resizeMode: 'stretch',
    },
    shadow:{
       shadowColor: "#363636",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10, 
    },
    contentArrayPersonajes:{
        backgroundColor:'#f7f7f7',
        width:'80%',
        padding:20,
        borderRadius:20,
        alignItems:'center',
    },
    whitOutContent:{
        padding:10,
        width:'60%',
        textAlign:'center',
    },
    contentCard:{
        color:"#363636",
        backgroundColor:"white",
        width:'80%',
        display:'flex',
        justifyContent:'center',
        borderRadius:15,
        margin:5,
        padding:20,
    },
    textCenter:{
        fontSize:15,
        marginBottom:5
    },
    descriptionText:{
        fontWeight:'600',
        fontSize:17,
        letterSpacing:0.5
    },
    buttonAdd:{
        marginVertical:10,
    },
    contentInput:{
        backgroundColor:'#363636',
        width:"80%",
        height:250,
        padding:10,
        marginBottom:20,
        borderRadius:10
    },
    input:{
        backgroundColor:'rgba(247, 247, 247, 1)',
        color:'#363636',
        marginVertical:5,
        fontSize:14,
        flex:1,
        borderRadius:5,
        height:50
    },
    indicator:{
        fontSize:20
    }
})
export default activityIndicatorStyle