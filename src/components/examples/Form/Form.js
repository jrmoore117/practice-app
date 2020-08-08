import React from 'react';
import { useForm } from '../../../hooks';

export const Form = () => {
   const {form, bind, reset } = useForm({
      firstName: '',
      lastName: '',
      email: ''
   });
   const handleSubmit = (event) => {
      event.preventDefault();
      console.log(form);
      reset();
   }
   return (
      <div>
         <h4>useForm: Custom Hook for Form State</h4>
         <form onSubmit={handleSubmit}>
            <input type="text" placeholder="First Name" {...bind("firstName")} />
            <input type="text" placeholder="Last Name" {...bind("lastName")} />
            <input type="text" placeholder="Email" {...bind("email")} />
            <input type="submit" value="submit" />
         </form>
      </div>
   );
}