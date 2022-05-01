export interface dataCustumAlert { 
    header:null|string,
    title:null|string,
    icon:string,
    message:null|string,
    visible:boolean,
    propertyModal:propertyModal
}

interface propertyModal {
    animationType:null|string
    transparent:boolean,
}