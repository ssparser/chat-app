import React from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../../components/CustomButton";
import RedirectInfo from "../../../components/RedirectInfo";

const LoginPageFooter = ({ isFormValid, handleLogin }) => {
  const navigate = useNavigate();

  const handlePushToRegisterPage = () => {
    navigate('/register');
  };

  return (
    <div>
      <CustomButton
        label="login"
        additionalStyles={{ marginTop: "30px" }}
        disabled={!isFormValid}
        onClick={handleLogin}
      />
      <RedirectInfo 
        text="Need an account? "
        redirectText="Create an account"
        additionalStyles={{ marginTop: "10px" }}
        redirectHandler={handlePushToRegisterPage}
      />
    </div>
  );
};

export default LoginPageFooter;
