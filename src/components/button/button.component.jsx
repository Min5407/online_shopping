import React from "react";
import { ButtonContainer } from "./button.style";
export const Button = ({ children, ...props }) => (
  <ButtonContainer {...props}>{children}</ButtonContainer>
);
