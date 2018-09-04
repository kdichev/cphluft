import React from "react";
import styled from "styled-components";

const InputField = styled.input`
  background: rgb(56, 64, 104);
  height: 40px;
  border-radius: 4px;
  border: none;
  width: 100%;
  text-indent: 48px;
  color: white;
  outline: none;
  &::placeholder {
    color: #b0b3c3;
  }
`;

const TextFieldContainer = styled.div`
  width: 100%;
  display: flex;
  align-items:center;
  position:relative;
  margin-bottom: 8px;
`;

const TextFieldIcon = styled.div`
  position: absolute;
  left: 12px;
  color: #b0b3c3;
  display: flex;
  align-items: center;
`;

export default props => (
  <TextFieldContainer>
    <TextFieldIcon>{props.icon}</TextFieldIcon>
    <InputField placeholder={props.placeholder} />
  </TextFieldContainer>
);
