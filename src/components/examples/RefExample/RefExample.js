import React, { useState, useRef } from 'react';

const useForm = (initialFormState = {}) => {
   const [form, setForm] = useState(initialFormState);
   return {
      form,
      setForm,
      reset: () => setForm(initialFormState),
      bind: (name, value) => ({
         name,
         value: value || form[name],
         onChange: (event) => {
            const { name, value } = event.target;
            console.log(value);
            setForm(Object.assign({}, form, { [name]: value }));
         }
      })
   };
};

export const RefExample = () => {
   const {form, bind, reset } = useForm({
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
         <div>
            <input type="text" {...bind("test")}/>
            <button onClick={() => reset()}>Clear</button>
         </div>
      </div>
   );
}