import { useState } from "react";

export const useForm = (initialFormState) => {
   const [form, setForm] = useState(initialFormState);
   return {
      form,
      setForm,
      reset: () => setForm(initialFormState),
      set: (name, value) => ({
         name,
         value: value || form[name],
         onChange: (event) => {
            const { name, value } = event.target;
            setForm(Object.assign({}, form, { [name]: value }));
         }
      }),
      setCheckbox: (name) => ({
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