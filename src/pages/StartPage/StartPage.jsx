import { Formik } from "formik";
import * as yup from 'yup';
import { useNavigate } from "react-router-dom";

export const StartPage = () => {

    const navigate = useNavigate();

    const validationsSchema = yup.object().shape({
      email: yup.string('example@mail.com').email().required('Email is required!'),
      number: yup.number('+7 (999) 999-99-99').required('Phone number is required!'),
    });

    const onSubmit = () => {
      navigate("name")
    }


    return (
      <div>
        <Formik
          initialValues={initialValues}
          validateOnBlur
          onSubmit={onSubmit}
          validationSchema={validationsSchema}
        >
          {({ values, handleSubmit, handleChange, handleBlur }) => (
            <div>
              <div>
                <label htmlFor='email'>Email</label><br />
                <input
                  className='input'
                  type='email'
                  name='email'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
              </div>
              <div>
                <label htmlFor='number'>Phone number</label><br />
                <input
                  className='input'
                  type='number'
                  name='number'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
              </div>
              <button onClick={() => {handleSubmit}}>next</button>
            </div>
          )}
        </Formik>
      </div>
    )
  }
  