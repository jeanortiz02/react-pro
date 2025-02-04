
import { Form, Formik } from 'formik';
import '../styles/style.css'
import * as Yup from 'yup';
import { MytextInput } from '../components';
export const RegisterFormikPage = () => {


  return (
    <div>
        <h1>Register formikPage</h1>
        <Formik
            initialValues= {{
                name: '',
                email: '',
                password: '',
                password2: ''
            }}
            onSubmit={ (values) => {
                console.log(values);
            }}
            validationSchema={
                Yup.object({
                    name: Yup.string()
                       .min(2, 'First name must be 2 character or more')
                       .max(15, 'Last name must be 15 characters or less')
                       .required('First name is required'),
                    email: Yup.string()
                       .email('Invalid email address')
                       .required('Email is required'),
                    password: Yup.string()
                       .min(6, 'Password must be at least 6 characters')
                       .required('Password is required'),
                       password2: Yup.string()
                       .oneOf([Yup.ref('password')], 'Passwords must match')
                       .required('Password is required')
                    })
                }
        >

            {
                ({ handleReset}) => (
                    <Form>

                        <MytextInput
                            label='Name'
                            name='name'
                            placeholder='Jean Carlos'
                        />
                        <MytextInput
                            label='Email'
                            name='email'
                            placeholder='correo@correo.com'
                        />
                        <MytextInput
                            label='Enter Password'
                            name='password'
                            placeholder='*****'
                            type='password'
                        />
                        <MytextInput
                            label='Confirm Password'
                            name='password2'
                            placeholder='*****'
                            type='password'
                        />

                        <button type="submit">Create</button>
                        <button type="button" onClick={handleReset}>Reset</button>
                    </Form>
                )
            }

        </Formik>

        {/* <form noValidate onSubmit={ handleSubmit }>
            <input 
                type="text" 
                placeholder="Name"
                name='name'
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

        </form> */}
    </div>
  )
}
