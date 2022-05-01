import React, { useState } from 'react'
import { Button, KeyboardAvoidingView, ModalProps, ScrollView, Text, TextInput, View } from 'react-native'
import { dataCustumAlert } from '../models/alertModel'
import { dataPerson } from '../models/dataPerson'
import activityIndicatorStyle from '../styles/activityIndicatorStyle'
import { CustomAlertComponent } from './CustomAlertComponent'

export const ActivityIndicatorArray = () => {

    let personajesInitialState: dataPerson[] = [
        {
            name: "Jorge Beltran",
            phone: '1123554876'
        },
        {
            name: "Federico Gutierrez",
            phone: '1123554876'
        },
        {
            name: "Rogger Paredes",
            phone: '1123554876'
        },
    ]

    let dataModalInitialState:dataCustumAlert={
        header:"null",
        title:"Se agrego con Exito ",
        icon:"wallet",
        message:"null",
        visible:false,
        propertyModal:{
            animationType:'fade',
            transparent:true    
        }
    }

    const [first, setfirst] = useState<any>(personajesInitialState)
    const [dataCustomAlert, setDataCustomAlert] = useState<dataCustumAlert>(dataModalInitialState)

    const addElementWithAlert = () => {
        let newElement: dataPerson = {
            name: "Jorge",
            phone: "116233589"
        }
    }
    
    const addElementWithCustomAlert = () => {
        let newElement: dataPerson = {
            name: "Jorge",
            phone: "116233589"
        }
        setDataCustomAlert({...dataCustomAlert,visible:true})
    }

    const closeAlert = (newState:boolean) => {
        setDataCustomAlert({...dataCustomAlert,visible:newState})
    }

    const custumAlertModal = () => {
        return (
        <View><CustomAlertComponent dataCustomAlert={dataCustomAlert}
        closeAlert={closeAlert} property={dataCustomAlert.propertyModal}/></View>)
    }

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="height">
            <ScrollView>{custumAlertModal()}
                <View style={[activityIndicatorStyle.contentBox]}>
                    <View style={[ activityIndicatorStyle.contentInput]}>
                        <TextInput style={activityIndicatorStyle.input} placeholder='Name User'
                            placeholderTextColor="#363636" keyboardType='phone-pad'></TextInput>
                        <TextInput style={activityIndicatorStyle.input} placeholder="Number Phone"
                            placeholderTextColor="#363636" keyboardType="phone-pad"></TextInput>
                        <View style={activityIndicatorStyle.buttonAdd}>
                            <Button title='Add element with alert' onPress={() => addElementWithAlert()} />    
                        </View>
                        <View style={activityIndicatorStyle.buttonAdd}>
                            <Button title='Add element with custum alert ' onPress={() => addElementWithCustomAlert()} />
                        </View>
                    </View>
                    {
                        (first.map((data: any,index:number) => {
                            return (
                                
                                <View key={index} style={activityIndicatorStyle.contentCard}>
                                    <Text style={activityIndicatorStyle.textCenter}><Text style={activityIndicatorStyle.descriptionText}>Nombre: </Text>{data['name']}</Text>
                                    <Text style={activityIndicatorStyle.textCenter}><Text style={activityIndicatorStyle.descriptionText}>Telefono: </Text>{data['phone']}</Text>
                                </View>
                            )
                        }))
                    }
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}
