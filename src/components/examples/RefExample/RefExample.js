import React, { useState, useRef } from 'react';
/* @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useForm } from '../../../hooks';

export const RefExample = () => {
   const {form, set, reset } = useForm({
      test: ''
   })
   const element = useRef(null);
   const onClick = () => {
      element.current.innerHTML === 'goodbye!'
         ? element.current.innerHTML = 'hello!'
         : element.current.innerHTML = 'goodbye!';
      console.log(element.current);
   }
   return(
      <div>
         <div>
            <div ref={element}>Hello world!</div>
            <button onClick={onClick}>Log Ref</button>
         </div>
         <form onSubmit={(e) => {
            e.preventDefault();
            console.log(form);
            reset();
         }}>
            <input
               type="text"
               {...set("test", { required: true, minLength: 5, maxLength: 40})}
               css={css`color: #FF3040; &:valid{ color: #365AF2; }`}
            />
            <input type="submit" value="Clear"/>
         </form>
      </div>
   );
}