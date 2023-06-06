import { Formik } from "formik";
import { useNavigate } from "react-router-dom";

export const StartPage = () => {

    const navigate = useNavigate();

    return (
      <div>
        <Formik>
          
        </Formik>
        <button onClick={() => navigate("name")}>next</button>
      </div>
    )
  }
  