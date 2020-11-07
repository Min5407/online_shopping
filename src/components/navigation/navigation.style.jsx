import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const OptionStyles = css`
  padding: 5px 20px;
  font-size: 1.3rem;
  margin: 0 1rem;
  cursor: pointer;
`;

export const NavContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const Logo = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const Options = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  ${OptionStyles}
`;
export const OptionDiv = styled.div`
  ${OptionStyles}
`;
