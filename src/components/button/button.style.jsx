import styled, { css } from "styled-components";

const getBtnStyles = (props) => {
  if (props.googleButton) {
    return googleBtn;
  } else {
    return props.addToCart ? addToCartBtn : NormalBtn;
  }
};

export const ButtonContainer = styled.button`
  min-width: 165px;
  display: flex;
  justify-content: center;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: none;
  cursor: pointer;

  ${getBtnStyles}
`;
const NormalBtn = css`
  background-color: black;
  color: white;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const addToCartBtn = css`
  background-color: lightgray;
  color: black;
  &:hover {
    background: black;
    color: white;
  }

  &:focus {
    outline: none;
  }
`;

const googleBtn = css`
  background-color: #4285f4;
  color: #fff;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;
