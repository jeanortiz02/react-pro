import { Formik, Form } from 'formik';
import fromJson from '../data/custom-form.json';
import { MySelect, MytextInput } from '../components';
import * as Yup from 'yup';


const intialValues : {[key: string] : any} = {}
const requiredFields : {[key: string]: any} = {};

for ( const input of fromJson) {
    intialValues[input.name] = input.value;

    if(!input.validations) continue;

    let schema = Yup.string();

    for( const rule of input.validations) {
      if (rule.type === 'required') {
        schema = schema.required(rule.message)
      }

      if(rule.type === 'minLength') {
        schema = schema.min( (rule as any).value, rule.message)
      }

      if(rule.type === 'email') {
        schema = schema.email(rule.message);
      }
    }

    requiredFields[input.name] = schema;
}


const validationSchema = Yup.object({ ...requiredFields });

export const DynamicFormPage = () => {
  return (
    <div>
        <h1>Dynamic Form Page</h1>

        <Formik
          initialValues={intialValues}
          validationSchema={validationSchema}
          onSubmit={ (values) => {
            console.log(values)
          }}
        >
            { () => (

              <Form noValidate>

                {fromJson.map( ({name, label, type, placeholder, options }) => {

                  if(type === 'input' || type === 'password' || type === 'email') {
                    return <MytextInput 
                              key={name} 
                              type={(type as any)} 
                              label={label} 
                              name={name} 
                              placeholder={ placeholder }
                            />
                  } else if (type === 'select') {
                    return <MySelect 
                              key={name} 
                              label={label} 
                              name={name}
                            >
                              <option value="">-- Select an Option --</option>
                              {options?.map( option => (
                                <option 
                                  key={option.id} 
                                  value={option.id}
                                >{option.label}</option>
                              ))}
                    </MySelect>
                  }

                  throw new Error(`Type ${type} not supported`)
                })}


                <span>Hola mundo</span>
                <button type='submit'>Enviar</button>
              </Form>

            )}
        </Formik>
    </div>
  )
}
