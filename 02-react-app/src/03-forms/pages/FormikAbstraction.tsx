import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import '../styles/style.css';
import { MytextInput, MyCheckBox, MySelect } from '../components'

export const FormikAbstraction = () => {

  return (
    <div>
        <h1>Formik Abstraction</h1>


        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                terms:false,
                jobType: ''
            }}
            onSubmit={ (values) => {
                console.log(values);
            }}
            validationSchema={
                Yup.object({
                    firstName: Yup.string()
                       .max(15, 'First name must be 15 characters or less')
                       .required('First name is required'),
                    lastName: Yup.string()
                       .max(20, 'Last name must be 20 characters or less')
                       .required('Last name is required'),
                    email: Yup.string()
                       .email('Invalid email address')
                       .required('Email is required'),
                    terms: Yup.boolean()
                        .required('Required')
                        .oneOf([true], 'You must accept the terms and conditions'),
                    jobType: Yup.string()
                        .notOneOf(['it-junior'], 'Junior is not allowed')
                        .required('Job type is required')

                })
            }
        >

            { (formik) => (
                    <Form>

                        <MytextInput
                            label='First Name'
                            name='firstName'
                            placeholder='Jean Carlos'
                        />
                        <MytextInput
                            label='Last Name'
                            name='lastName'
                            placeholder='Ortiz'
                        />
                        <MytextInput
                            label='Email'
                            name='email'
                            type='email'
                            placeholder='john.doe@example.com'
                        />

                        <MySelect label="Job Type" name="jobType" >
                            <option value="">Pick Something</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Designer</option>
                            <option value="it-senior">IT Senior</option>
                            <option value="it-junior">IT Junior</option>
                        </MySelect>


                        <MyCheckBox label={'Terms and Conditions'} name={'terms'} />
                    
                        <button type='submit'>Submit</button>
                    </Form>
                )
            }

        </Formik>

    </div>
  )
}
