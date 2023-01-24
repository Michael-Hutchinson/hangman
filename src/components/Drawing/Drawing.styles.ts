import styled from 'styled-components';

export const Head = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  border: 10px solid black;
  position: absolute;
  top: 50px;
  right: -30px;
`;

export const Body = styled.div`
  height: 100px;
  width: 10px;
  background: black;
  position: absolute;
  top: 120px;
  right: 0;
`;

export const RightArm = styled.div`
  width: 100px;
  height: 10px;
  background: black;
  position: absolute;
  top: 150px;
  right: -150px;
  rotate: -30deg;
  transform-origin: left bottom;
`;

export const LeftArm = styled.div`
  width: 100px;
  height: 10px;
  background: black;
  position: absolute;
  top: 150px;
  right: 10px;
  rotate: 30deg;
  transform-origin: right bottom;
`;

export const RightLeft = styled.div`
  width: 100px;
  height: 10px;
  background: black;
  position: absolute;
  top: 210px;
  right: -90px;
  rotate: 60deg;
  transform-origin: left bottom;
`;

export const LeftLeg = styled.div`
  width: 100px;
  height: 10px;
  background: black;
  position: absolute;
  top: 210px;
  right: 0;
  rotate: -60deg;
  transform-origin: right bottom;
`;
