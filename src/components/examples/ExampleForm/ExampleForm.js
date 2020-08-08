import React from 'react';
import { useForm } from '../../../hooks';
import { Form, TextInput, Checkbox, Radio } from '../../../components';

export const ExampleForm = () => {
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
         <Form onSubmit={handleSubmit}>
            <TextInput placeholder="First Name" {...bind("firstName")} />
            <TextInput placeholder="Last Name" {...bind("lastName")} />
            <TextInput placeholder="Email" {...bind("email")} />
            <Checkbox {...bindCheckbox("promoEmails")}/>
            <Radio {...bind("gender", "male")} />
            <Radio {...bind("gender", "female")} />
            <Radio {...bind("gender", "other")} />
            <select {...bind("city")}>
               <option disabled value="">Select a city</option>
               <option value="Rocklin">Rocklin</option>
               <option value="Sacramento">Sacramento</option>
               <option value="San Francisco">San Francisco</option>
            </select>
            <input type="submit" value="submit" />
         </Form>
      </div>
   );
}