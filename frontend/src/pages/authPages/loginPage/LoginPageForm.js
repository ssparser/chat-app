import React, { useState } from "react";
import {styled} from "@mui/system";
import InputWithLabel from "../../../components/InputWithLabel";

const LoginPageForm = ({mail, setMail, password,setPassword}) =>{
   
    return <div>
        <InputWithLabel
            value={mail}
            setValue={setMail}
            label = 'Email'
            type="text"
            placeholder="enter email"
        />  
        <InputWithLabel
            value={password}
            setValue={setPassword}
            label = 'password'
            type="password"
            placeholder="enter password"
        />           
    </div>
}

export default LoginPageForm;