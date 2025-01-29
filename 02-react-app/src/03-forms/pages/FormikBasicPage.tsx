import { FormikErrors, useFormik } from 'formik';
import '../styles/style.css';


interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
}
export const FormikBasicPage = () => {

    const validate = ({firstName, lastName, email}: FormValues) => {

        const errors: FormikErrors<FormValues> = {};

        if (!firstName.trim()) {
            errors.firstName = 'First name is required';
        }

        if (!lastName.trim()) {
            errors.lastName = 'Last name is required';
        }

        if (!email.trim()) {
            errors.email = 'Email is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            errors.email = 'Invalid email address';
        }
        return errors;

    }

    const { handleChange, values, handleSubmit, errors, handleBlur, touched} = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: values => {
            console.log(values);
        },
        validate: validate
    })


  return (
    <div>
        <h1>Formik Basic Tutorial</h1>

        <form noValidate onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input 
                onBlur={ handleBlur }
                type="text"
                name="firstName"
                onChange={ handleChange }
                value={ values.firstName }
            />
            { touched.firstName && errors.firstName && <span>{errors.firstName}</span>}

            
            <label htmlFor="lastName">Last Name</label>
            <input 
                onBlur={ handleBlur}
                type="text"
                name="lastName"
                onChange={ handleChange }
                value={ values.lastName }
            />
            {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}


            <label htmlFor="email">Email Address</label>
            <input 
                onBlur={ handleBlur}
                type="email"
                name="email"
                onChange={ handleChange }
                value={ values.email }
            />

            {touched.email && errors.email && <span>{errors.email}</span>}
            {/* <span>Check format of the email</span> */}
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
