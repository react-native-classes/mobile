import React, { useState } from 'react'
import { ActivityIndicator, Alert, Button, Image, KeyboardAvoidingView, ModalProps, ScrollView, Text, TextInput, View } from 'react-native'
import { dataCustumAlert } from '../models/alertModel'
import { dataPerson } from '../models/dataPerson'
import activityIndicatorStyle from '../styles/activityIndicatorStyle'
import { CustomAlertComponent } from './CustomAlertComponent'

export const ActivityIndicatorArray = () => {
    
    let personajesInitialState: Array<dataPerson> = []

    let dataModalInitialState:dataCustumAlert={
        header:"",
        title:"",
        icon:"",
        message:"",
        iconColor:"",
        visible:false,
        propertyModal:{
            animationType:'fade',
            transparent:true    
        }
    }

    let initialDataForm:dataPerson = {
        name:"",
        phone:""
    }

    const [personajes, setPersonajes] = useState<any>(personajesInitialState)
    const [dataCustomAlert, setDataCustomAlert] = useState<dataCustumAlert>(dataModalInitialState)
    const [dataForm, setdataForm] = useState(initialDataForm)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const addElementWithAlert = async () => {
        await updateUserService()
        setPersonajes([...personajes,dataForm])
        Alert.alert(
            "",
            "Se añadio con exito el nuevo elemento",
            [
              {
                text: "ENTENDIDO",
                onPress: () => console.log("Se mostro la alerta informatica"),
                style:'default'
              },
            ]
          );
    }
    
    const addElementWithCustomAlert = () => {
        let contentAlert:dataCustumAlert={...dataCustomAlert,
        icon:'checkmark-circle',visible:true,iconColor:"#4BB543",
        message:'Se agrego con exito el elemnto'}
        setDataCustomAlert(contentAlert)
        setPersonajes([...personajes,dataForm])
    }

    const closeAlert = (newState:boolean) => {
        setDataCustomAlert({...dataCustomAlert,visible:newState})
    }

    const custumAlertModal = () => {
        return (
        <View><CustomAlertComponent dataCustomAlert={dataCustomAlert}
        closeAlert={closeAlert} property={dataCustomAlert.propertyModal
        }/></View>)
    }

    const changeNameInput = (value:any,index:any) => {
        let newDataInput:dataPerson = {...dataForm}
        newDataInput.name=(index==0)?value:newDataInput.name
        newDataInput.phone=(index==1)?value:newDataInput.phone
        setdataForm(newDataInput)
    }

    const updateUserService = async () => { 
        setIsLoading(true)
        setTimeout(() => { //Esta tambien es un callback
            console.log('Set timeout terminado')
            setIsLoading(false)
        }, 2000); //1 segundo
    }

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="height">
            <ScrollView>{custumAlertModal()}
                <View style={[activityIndicatorStyle.contentBox]}>
                    <Image
                        style={activityIndicatorStyle.logo}
                        source={require('../assets/logoBaufest.jpg')}
                    />
                    <View style={[ activityIndicatorStyle.contentInput]}>
                        <TextInput style={activityIndicatorStyle.input} placeholder='Name User'
                            placeholderTextColor="#363636" onChangeText={(value) => {changeNameInput(value,0)}}
                            value={dataForm.name}></TextInput>
                        <TextInput style={activityIndicatorStyle.input} placeholder="Number Phone"
                            placeholderTextColor="#363636" keyboardType="phone-pad" 
                            onChangeText={(value) => {changeNameInput(value,1)} } value={dataForm.phone}></TextInput>
                        
                        <View style={activityIndicatorStyle.buttonAdd}>
                            <Button title='Add element with alert' onPress={() => addElementWithAlert()} />    
                        </View>
                        <View style={activityIndicatorStyle.buttonAdd}>
                            <Button title='Add element with custum alert ' 
                            onPress={() => addElementWithCustomAlert()} />
                        </View>
                    </View>
                    <View style={[activityIndicatorStyle.contentArrayPersonajes,activityIndicatorStyle.shadow]}>
                        { (isLoading) && <ActivityIndicator color={'#ff3030'} size={'large'}/> }
                        {(personajes.length==0) && <View style={activityIndicatorStyle.whitOutContent}>
                                <Text>No Hay Elementos en el Array</Text>
                            </View>}
                        {(personajes.length>0 && !isLoading)&&
                            (personajes.map((data: any,index:number) => {
                                return (
                                    <View key={index+1} style={activityIndicatorStyle.contentCard}>
                                        <Text style={activityIndicatorStyle.textCenter}><Text style={activityIndicatorStyle.descriptionText}>Nombre: </Text>{data['name']}</Text>
                                        <Text style={activityIndicatorStyle.textCenter}><Text style={activityIndicatorStyle.descriptionText}>Telefono: </Text>{data['phone']}</Text>
                                    </View>
                                )
                            }))
                        }    
                    </View>
                    
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}
