import styled from "styled-components";

export const Wrapper = styled.div`
  width: 200px;
  border: 1px solid grey;
  border-radius: 16px;
  margin: 10px;
  padding: 0 15px;
  align-self: ${({ alignRight }) =>
    alignRight ? 'flex-end' : 'flex-start'};
  background-color: ${({ alignRight }) =>
    alignRight ? '#fce4ec' : '#ede7f6'};
`;

export const Username = styled.p`
  font-weight: bold;
`;