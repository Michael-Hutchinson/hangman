import React from 'react';
import { Body, Head, LeftArm, LeftLeg, RightArm, RightLeft } from './Drawing.styles';

type DrawingProps = {
  numberOfGuesses: number;
};

function Drawing({ numberOfGuesses }: DrawingProps) {
  const head = <Head />;
  const body = <Body />;
  const rightArm = <RightArm />;
  const leftArm = <LeftArm />;
  const rightLeg = <RightLeft />;
  const leftLeg = <LeftLeg />;
  const bodyParts = [head, body, rightArm, leftArm, rightLeg, leftLeg];
  return (
    <div style={{ position: 'relative' }}>
      {bodyParts.slice(0, numberOfGuesses)}
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
      <div style={{ height: '400px', width: '10px', background: 'black', marginLeft: '120px' }} />
      <div style={{ height: '10px', width: '250px', background: 'black' }} />
    </div>
  );
}

export default Drawing;
