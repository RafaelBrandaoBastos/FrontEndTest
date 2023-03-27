import React from 'react'
import {InputU, InputP} from'./style.js'
import { MapTo } from '@adobe/aem-react-editable-components';

const Input = ({type, register, onChange, inputUsercolor, inputUserText, inputdata, className, inputPasswordcolor, inputPasswordText}) => {
        if(type == "user"){
            return (
                <InputU type={type} onChange = {onChange} labelcolor={inputUsercolor} 
                placeholder = {inputUserText} defaultValue={inputdata} editable={true} 
                {...register} className={className}/>   
            ) 
        }
        if(type == "password"){
            return (
                <InputP type={type} onChange = {onChange} labelcolor={inputPasswordcolor} 
                placeholder = {inputPasswordText} defaultValue={inputdata} 
                editable={true} {...register} className={className}/>   
            ) 
        }
         
     
}; export default MapTo("reactapp/components/logininput-component")(Input);
