import styled, { css } from 'styled-components';
import { Spin } from 'antd';

export const RowsWrapper = styled.div`
  position: relative;
  width: 300px;
  height: 60vh;
  margin: 50px;
  box-shadow: rgba(17, 12, 46, 0.25) 0px 48px 80px 0px;
  ${(props) => !props.even && css`
    box-shadow: none;
  `}
`;
export const StyledImg = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    ${(props) => props.even && css`
      height: 100%;
      width: 100%;
      object-fit: cover;
    `}
    ${(props) => !props.even && css`
      display: none;
    `}
`;
export const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Notification = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledSpin = styled(Spin)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%)
`;
