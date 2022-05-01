import { StyleSheet } from 'react-native'

const activityIndicatorStyle = StyleSheet.create({
    contentBox:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems:'center',
        width:'100%',
        flexDirection:'column',
        height:'100%',
        paddingTop:30
    },
    contentCard:{
        color:"#363636",
        backgroundColor:"#f7f7f7",
        width:'70%',
        display:'flex',
        justifyContent:'center',
        borderRadius:15,
        marginBottom:30,
        padding:20,
        shadowColor: "#363636",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
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
    }
})
export default activityIndicatorStyle