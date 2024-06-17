import React, { useState } from "react";
import AuthBox from "../../../components/authBox";
import LoginPageHeader from "./LoginPageHeader";
import LoginPageForm from "./LoginPageForm";
import LoginPageFooter from "./LoginPageFooter";

const LoginPage = () => {
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("")
    const [isFormValid, setIsFormValid] = useState(true);
    
    const handleLogin = () => {
        console.log('login');
    }
  return (
    <div>
      <AuthBox>
        <LoginPageHeader />
        <LoginPageForm
            mail = {mail}
            setMail={setMail}
            password={password}
            setPassword={setPassword}
        />
        <LoginPageFooter isFormValid={isFormValid} handleLogin={handleLogin}/>
      </AuthBox>
    </div>
  );
};

export default LoginPage;
