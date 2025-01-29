import { useForm } from '../hooks/useForm';
import { FormEvent } from 'react';
import '../styles/style.css'
export const RegisterPage = () => {

   const { 
    email, 
    formData, 
    isValidEmail, 
    name, 
    onChange, 
    password, 
    password2, 
    resetForm

   } = useForm({
           name: '',
           email: '',
           password: '',
           password2: ''
       });

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log( formData );
    }

  return (
    <div>
        <h1>Register Page</h1>

        <form noValidate onSubmit={ onSubmit }>
            <input 
                type="text" 
                placeholder="Name"
                name='name'
                value={name}
                onChange={onChange}
                className={`${name.trim().length <=0 && 'has-error'}`}
            />
            { name.trim().length <=0 && <span>Este campo es necesario</span>}
            <input 
                type="email" 
                placeholder="Email Address"
                name='email'
                value={email}
                className={`${!isValidEmail(email) && 'has-error'}`}
                onChange={onChange}
                />
                { !isValidEmail(email) && <span>Este email no es valido</span>}
            <input 
                type="password" 
                placeholder="Password" 
                name='password' 
                value={password}
                onChange={onChange}
                
                />
            { password.trim().length <=0 && <span>Este campo es necesario</span>}
            { password.trim().length <6 &&  password.trim().length > 0 && <span>El password requiere minimo 6 caracteres</span>}
            <input 
                type="password" 
                placeholder="Repeat Password"  
                name='password2'
                value={password2}
                onChange={onChange}
            />
                { password2.trim().length <=0 && <span>Este campo es necesario</span>}
                { password2.trim().length > 0 && password !== password2 && <span>Los password deben ser iguales</span>}

            <button type="submit">Create</button>
            <button type="button" onClick={resetForm}>Reset</button>
        </form>
    </div>
  )
}
