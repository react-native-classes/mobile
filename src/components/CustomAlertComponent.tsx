import React from 'react'
import { Button, Modal, Text, View } from 'react-native'
import customAlertStyle from '../styles/customAlertStyle'
import { dataCustumAlert } from '../models/alertModel'
import Icon from 'react-native-vector-icons/Ionicons';

export const CustomAlertComponent = ({dataCustomAlert,closeAlert,property}:any) => {
  return (
     <Modal visible={dataCustomAlert.visible} transparent={property.transparent} animationType={property.animationType}>
         <View style={customAlertStyle.contentModal}>
            <View style={customAlertStyle.contentAlert}>
               <View style={customAlertStyle.titleCardAlert}>
                  <Text>{dataCustomAlert.header}</Text>   
               </View>
               <View style={customAlertStyle.contentCardAlert}>
                  <Text style={customAlertStyle.textTitle}>{dataCustomAlert.title}</Text> 
                  <Text>{dataCustomAlert.icon}</Text>
                  <Text>{dataCustomAlert.icon}</Text>
                  <Text>
                     <Icon style={customAlertStyle.iconCardAlert} name='add' />   
                  </Text>
                  
                  <Text>{dataCustomAlert.message}</Text>   
               </View>
               <View style={customAlertStyle.buttomCardAlert}>
                  <Button  title='close' onPress={() => closeAlert(false)}></Button> 
               </View>     
            </View>
            
         </View>
     </Modal>
  )
}
