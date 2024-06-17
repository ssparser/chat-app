import { Button } from "@mui/material";
import React from "react";

const CustomButton = ({ label, additionalStyles, disabled, onclick }) => {
  return (
    <Button
      variant="conatined"
      sx={{
        bgcolor: "#5865F2",
        color: "white",
        textTransform: "none",
        fontWeight: 500,
        width: "100%",
        height: "40px",
      }}
      style={additionalStyles ? additionalStyles : {}}
      disabled={disabled}
      onclick={onclick}
    >
      {label}
    </Button>
  );
};

export default CustomButton;
