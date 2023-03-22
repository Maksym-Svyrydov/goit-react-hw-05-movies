import styled from 'styled-components';

export const CastWrapper = styled.div`
  display: flex;
  padding: 5px 5px;
  ${'' /* outline: 2px solid tomato; */}
`;
export const CastList = styled.ul`
  display: flex;
  ${'' /* outline: 2px solid tomato; */}
  list-style: none;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`;

export const CastItem = styled.li`
  display: flex;
  ${'' /* outline: 2px solid tomato; */}
  list-style: none;
  gap: 10px;
  flex-direction: column;

  align-items: center;
  justify-content: center;
`;

export const CastImg = styled.img`
  border-radius: 6px;
`;
