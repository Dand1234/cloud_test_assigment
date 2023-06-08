import { Formik, Field } from "formik";
import * as yup from 'yup';
import { useNavigate } from "react-router-dom";

export const NamePage = () => {

    const navigate = useNavigate();

    const validationsSchema = yup.object().shape({
      name: yup.string('John').required('Name is required!'),
      surname: yup.number('Doe').required('Surname is required!'),
    });

    const onSubmit = () => {
      navigate("../advantages")
    }

    return (
      <>
        <Formik
          initialValues={initialValues}
          validateOnBlur
          onSubmit={onSubmit}
          validationSchema={validationsSchema}
        >
          {({ values, handleSubmit, handleChange, handleBlur }) => (
            <div>
              <div>
                <label htmlFor='name'>Name</label><br />
                <Field
                  className='input'
                  name='name'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
              </div>
              <div>
                <label htmlFor='surname'>Surname</label><br />
                <Field
                  className='input'
                  name='surname'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.surname}
                />
              </div>
              <button onClick={() => {handleSubmit}}>next</button>
            </div>
          )}
        </Formik>
      </>
    );
  }
  