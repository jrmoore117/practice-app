import { useState } from "react";

export const useForm = initialFormState => {
   const [form, setForm] = useState(initialFormState);
   return {
      form,
      setForm,
      reset: () => setForm(initialFormState),
      bind: (name) => ({
         name,
         value: form[name],
         onChange: (event) => {
            const { value } = event.target;
            setForm(Object.assign({}, form, {[name]: value}));
         }
      })
   };
};