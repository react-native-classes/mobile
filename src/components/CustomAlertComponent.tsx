import React from 'react'
import { Button, Modal, Text, View } from 'react-native'
import customAlertStyle from '../styles/customAlertStyle'
import { dataCustumAlert } from '../models/alertModel'
import Icon from 'react-native-vector-icons/Ionicons';

export const CustomAlertComponent = ({dataCustomAlert,closeAlert,property}:any) => {
   //{...dataCustomAlert}
  return (
     <Modal visible={dataCustomAlert.visible} transparent={property.transparent} animationType={property.animationType}>
         <View style={customAlertStyle.contentModal}>
            <View style={customAlertStyle.contentAlert}>
               {(dataCustomAlert.header!='')&&<View style={customAlertStyle.titleCardAlert}>
                  <Text>{dataCustomAlert.header}</Text>   
               </View>}
               <View style={customAlertStyle.contentCardAlert}>
                  {(dataCustomAlert.title!='')&&<Text style={customAlertStyle.textTitle}>{dataCustomAlert.title}</Text> }
                  {(dataCustomAlert.icon!='')&&<Text style={customAlertStyle.iconCardAlert}>
                     <Icon size={65} color={dataCustomAlert.iconColor} name={dataCustomAlert.icon} />
                  </Text>}
                  <Text>{dataCustomAlert.message}</Text>   
               </View>
               <View style={customAlertStyle.buttomCardAlert}>
                  <Button  title='ENTENDIDO' onPress={() => closeAlert(false)}></Button> 
               </View>     
            </View>
            
         </View>
     </Modal>
  )
}
