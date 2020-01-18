import styled from "styled-components";

export const Input = styled.input`
  font-size: 1rem;
  border: 1px solid grey;
  border-radius: 4px;
  box-shadow: none;
  padding: 8px;
  width: 200px;
`;

export const Button = styled.input`
  background-color: #e91e63;
  color: white;
  cursor: pointer;
  border-radius: 4px;
  text-align: center;
  font-size: 1rem;
  padding: 8px;
  width: 70px;
  margin-left: 10px;
  :hover {
    background-color: #b0003a;
  }
`;

export const Form = styled.form`
  display: flex;
  margin: auto;
  width: 300px;
  padding: 20px;
  position:absolute;
  bottom:0px;
  right:25%;
  left:50%;
  margin-left:-150px;
`;
