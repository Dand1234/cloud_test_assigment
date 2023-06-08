import { useNavigate } from "react-router-dom";

export const AboutPage = () => {

    const navigate = useNavigate();

    const validationsSchema = yup.object().shape({
      about: yup.string('Tell us about yourself').required('Required!'),
    });

    const onSubmit = () => {
      navigate("../final")
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
                <label htmlFor='about'>About</label><br />
                <input
                  className='input'
                  name='about'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.about}
                />
              </div>
              <button onClick={() => {handleSubmit}}>next</button>
            </div>
          )}
        </Formik>
      </>
    );
  }
  