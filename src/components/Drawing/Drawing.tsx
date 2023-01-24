import React from 'react';
import { Base, Body, Head, LeftArm, LeftLeg, Line, RightArm, RightLeft } from './Drawing.styles';

type DrawingProps = {
  numberOfGuesses: number;
};

function Drawing({ numberOfGuesses }: DrawingProps) {
  const base = <Base />;
  const line = <Line />;
  const head = <Head />;
  const body = <Body />;
  const rightArm = <RightArm />;
  const leftArm = <LeftArm />;
  const rightLeg = <RightLeft />;
  const leftLeg = <LeftLeg />;
  const hangmanDrawing = [base, line, head, body, rightArm, leftArm, rightLeg, leftLeg];
  return (
    <div style={{ position: 'relative', height: '500px' }}>
      {hangmanDrawing.slice(0, numberOfGuesses)}
      <div
        style={{
          height: '50px',
          width: '10px',
          background: 'black',
          marginLeft: '120px',
          position: 'absolute',
          top: '0',
          right: '0',
        }}
      />
      <div style={{ height: '10px', width: '200px', background: 'black', marginLeft: '120px' }} />
    </div>
  );
}

export default Drawing;
