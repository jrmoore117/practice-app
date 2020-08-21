import React, { useState, useRef } from 'react';
/* @jsx jsx */
import { css, jsx } from '@emotion/core';

const useForm = (initialFormState = {}) => {
   const [form, setForm] = useState(initialFormState);
   return {
      form,
      setForm,
      reset: () => setForm(initialFormState),
      set: (name, settings) => ({
         name,
         value: settings ? settings.value : form[name],
         required: settings ? settings.required : false,
         minLength: settings ? settings.minLength : null,
         maxLength: settings ? settings.maxLength : null,
         onChange: (event) => {
            const { name, value } = event.target;
            setForm(Object.assign({}, form, { [name]: value }));
         }
      })
   };
};

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
               {...set("test", { required: true, minLength: 5, maxLength: 10 })}
               css={css`color: red; &:valid{ color: green; }`}
            />
            <input type="submit" value="Clear"/>
         </form>
      </div>
   );
}