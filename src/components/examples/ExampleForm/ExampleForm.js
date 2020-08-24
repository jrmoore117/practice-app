import React from 'react';
import { useForm } from '../../../hooks';
import { Form, TextInput, Checkbox, Radio } from '../../../components';

export const ExampleForm = () => {
   const { form, set, setCheckbox, reset } = useForm({
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
            <TextInput placeholder="First Name" {...set("firstName")} />
            <TextInput placeholder="Last Name" {...set("lastName")} />
            <TextInput placeholder="Email" {...set("email")} />
            <Checkbox {...setCheckbox("promoEmails")}/>
            <Radio {...set("gender", "male")} />
            <Radio {...set("gender", "female")} />
            <Radio {...set("gender", "other")} />
            <select {...set("city")}>
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