import React from 'react';
import { useForm } from '../../../hooks';

export const Form = () => {
   const {form, bind, bindCheckbox, reset } = useForm({
      firstName: '',
      lastName: '',
      email: '',
      promoEmails: false,
      gender: '',
      city: ''
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
            <input type="checkbox" {...bindCheckbox("promoEmails")}/>
            <input type="radio" {...bind("gender", "male")} />
            <input type="radio" {...bind("gender", "female")} />
            <input type="radio" {...bind("gender", "other")} />
            <select {...bind("city")}>
               <option disabled value="">Select a city</option>
               <option value="Rocklin">Rocklin</option>
               <option value="Sacramento">Sacramento</option>
               <option value="San Francisco">San Francisco</option>
            </select>
            <input type="submit" value="submit" />
         </form>
      </div>
   );
}