import React, { useState } from 'react'
import { ActivityIndicator, StatusBar, StatusBarStyle, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export const StatusBarComponent = () => {
    const [hiddenState, sethiddenState] = useState(false);

    const hiddenStatusBar = (state:boolean) => {
        sethiddenState(state);
    }

    const [backgroundState, setbackgroundState] = useState("#363636");

    const backgroundStatusBar = (background:string) => {
        setbackgroundState(background);
    }

    const [barStyle, setbarStyle] = useState<StatusBarStyle>('default');

    const barStyleStatusBar = (statusBar:StatusBarStyle) => {
        setbarStyle(statusBar);
    }

  return (
    <View style={statusBar.contentButton}>
        <StatusBar 
            backgroundColor={backgroundState}
            hidden = {hiddenState}
            barStyle = {barStyle} 
        / >
        <TouchableOpacity onPress={ () => hiddenStatusBar(true) }>
            <View style={[statusBar.styleButton]}>
                <Text style={[statusBar.textButton]}> HIDDEN STATUSBAR </Text>
            </View> 
        </TouchableOpacity>
        <TouchableOpacity onPress={() => hiddenStatusBar(false)}>
            <View style={[statusBar.styleButton]}>
                <Text style={[statusBar.textButton]}>   SHOW STATUSBAR  </Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={ () => backgroundStatusBar('#0083C6')}>
            <View style={[statusBar.styleButton,statusBar.styleButton2]}>
                <Text style={[statusBar.textButton,
                    statusBar.textWhite]}> CHANGE BACKGROUND </Text>
            </View> 
        </TouchableOpacity>
        <TouchableOpacity onPress={ () => backgroundStatusBar('transparent')}>
            <View style={[statusBar.styleButton,statusBar.styleButton2]}>
                <Text style={[statusBar.textButton,
                    statusBar.textWhite]}> CHANGE BACKGROUND </Text>
            </View> 
        </TouchableOpacity>
        <TouchableOpacity onPress={ () => backgroundStatusBar('#EBC05E')}>    
            <View style={[statusBar.styleButton,statusBar.styleButton1]}>
                <Text style={[statusBar.textButton]}> CHANGE BACKGROUND </Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={ () => barStyleStatusBar('default') }>
            <View style={[statusBar.styleButton]}>
                <Text style={[statusBar.textButton]}> CHANGE STYLE BARSTYLE DEFAULF </Text>
            </View> 
        </TouchableOpacity>
        <TouchableOpacity onPress={ () => barStyleStatusBar('light-content') }>
            <View style={[statusBar.styleButton]}>
                <Text style={[statusBar.textButton]}> CHANGE STYLE BARSTYLE LIGHT </Text>
            </View> 
        </TouchableOpacity>
        <TouchableOpacity onPress={ () => barStyleStatusBar('dark-content') }>
            <View style={[statusBar.styleButton]}>
                <Text style={[statusBar.textButton]}> CHANGE STYLE BARSTYLE DARK </Text>
            </View> 
        </TouchableOpacity>
    </View>
  )
}

let statusBar = StyleSheet.create({
    contentButton:{
        flex:1,
        backgroundColor:"f7f7f7",
        justifyContent:'center',
        alignItems:'center',
    },
    styleButton:{
        borderRadius:5,
        padding:10,
        marginVertical:20,
        backgroundColor:'#363636'
    },
    styleButton1:{
        backgroundColor:"#EBC05E",
    },
    styleButton2:{
        backgroundColor:"#0083C6",
    },
    textButton:{
        fontWeight:'700',
        color:'white'
    },
    textWhite:{
        color:'white',
    }
});