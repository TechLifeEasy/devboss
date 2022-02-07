import React from 'react';

export default function fun({text}) {
  return (
      <>

      {

          text.split('/n').map((d)=><p>{d}</p>)
      }

      </>
  );
}
