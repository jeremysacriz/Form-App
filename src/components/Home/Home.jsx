import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { string, z } from 'zod';

const schema = z.object({
   firstName: string().min(1, { message: 'First Name is required'}),
   lastName: string().min(1, { message: 'Last Name is required'}),
   email: string().email(),
   password: string().min(4, { message: 'Password must contain more than 4 character(s)'}),
   confirm: string().min(4, { message: 'Passwords do not match.'}),
})
.refine((data) => data.password === data.confirm, {
   message: "Passwords do not match.",
   path: ["confirm"]
})

export const Home = () => {
   const [ userData, setUserData ] = useState({})
   const { register, handleSubmit, formState } = useForm({ 
      defaultValues: userData, 
      resolver: zodResolver(schema) 
   })

   const { errors } = formState;
   const navigate = useNavigate()

   const handleSave = (formValues) => {
      setUserData(formValues)
      navigate('/SignedUp')
   }

   return (
      <section id="form">
         <div className="form-container">
            <h1 className="form-heading">Sign Up Form</h1>
            <form onSubmit={handleSubmit(handleSave)} className="form-signup" noValidate>
               <div className="input-container first-name">
                  <input id="firstName-input" type="text" autoComplete="off" {...register('firstName')} required/>
                  <label htmlFor="firstName-input" className="placeholder">First Name*</label>
                  <h1 className="error-msg">{errors.firstName?.message}</h1>
               </div>
               <div className="input-container last-name">
                  <input id="lastName-input" type="text" autoComplete="off" {...register('lastName')} required />
                  <label htmlFor="lastName-input" className="placeholder">Last Name*</label>
                  <h1 className="error-msg">{errors.lastName?.message}</h1>
               </div>
               <div className="input-container email">
                  <input id="email-input" type="text" autoComplete="off" {...register('email')} required />
                  <label htmlFor="email-input" className="placeholder">Email*</label>
                  <h1 className="error-msg">{errors.email?.message}</h1>
               </div>
               <div className="input-container password">
                  <input id="password-input" type="password" autoComplete="off" {...register('password')} required />
                  <label htmlFor="password-input" className="placeholder">Password*</label>
                  <h1 className="error-msg">{errors.password?.message}</h1>
               </div>
               <div className="input-container confirm-password">
                  <input id="confirm-input" type="password" autoComplete="off" {...register('confirm')} required />
                  <label htmlFor="confirm-input" className="placeholder">Confirm Password*</label>
                  <h1 className="error-msg">{errors.confirm?.message}</h1>
               </div>

               <div className="submit-container">
                  <button type="submit" className="submit">
                     <h3>Submit Form</h3>
                  </button>
               </div>
            </form>
         </div>
      </section>
   )
}

