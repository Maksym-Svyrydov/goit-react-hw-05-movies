import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Form = styled.form`
  display: flex;
  gap: 5px;
  padding: 5px 10px;
`;
export const Input = styled.input`
  border-radius: 4px;
`;
export const Button = styled.button`
  padding: 4px;
  font-weight: 400px;
  min-width: 100px;
  min-height: 32px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #cfd8dc;
    font-weight: 800px;
    font-size: 17px;
  }
`;
