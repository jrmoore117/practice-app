import React, { useRef, useState } from 'react';

const useForm = (initialFormState = {}) => {
   const [form, setForm] = useState(initialFormState);
   return {
      form,
      setForm,
      reset: () => setForm(initialFormState),
      useBind: (name, value) => {
         const input = useRef(null);
         return {
            ref: input,
            name,
            // can this be just - value || form[name]?
            value: value ? value : form[name],
            onChange: (event) => {
               // trying to get the ability to add validation/other attribute changes through the ref
               console.log(this.ref);
               // const { name, value } = event.target;
               // setForm(Object.assign({}, form, { [name]: value }));
            }
         }
      },
      bindCheckbox: (name) => ({
         name,
         value: name,
         checked: form[name],
         onChange: (event) => {
            const { checked } = event.target;
            setForm(Object.assign({}, form, { [name]: checked }));
         }
      })
   };
};

export const RefExample = () => {

   const {form, useBind, bindCheckbox, reset } = useForm()

   // const element = useRef(null);
   // const onClick = () => {
   //    element.current.innerHTML === 'goodbye!'
   //       ? element.current.innerHTML = 'hello!'
   //       : element.current.innerHTML = 'goodbye!';
   //    console.log(element.current);
   // }
   return(
      <div>
         {/* <div ref={element}>Hello world!</div>
         <button onClick={onClick}>Log Ref</button> */}
         <input type="text" {...useBind("test")}/>
      </div>
   );
}