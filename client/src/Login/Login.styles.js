import styled from "styled-components";

export const Input = styled.input`
  font-size: 1rem;
  border: 1px solid grey;
  border-radius: 4px;
  box-shadow: none;
  padding: 8px;
  margin-bottom: 10px;
`;

export const Button = styled.input`
  background-color: #e91e63;
  color: white;
  cursor: pointer;
  border-radius: 4px;
  text-align: center;
  font-size: 1rem;
  padding: 8px;
  :hover {
    background-color: #b0003a;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 40%;
  padding: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  margin: auto;
  flex-direction: column;
  text-align: center;
`;

export const H4 = styled.h4`
  color: #b0003a;
`;