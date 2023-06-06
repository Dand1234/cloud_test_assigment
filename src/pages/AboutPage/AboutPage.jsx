import { useNavigate } from "react-router-dom";

export const AboutPage = () => {

    const navigate = useNavigate();

    return (
      <>
        <p>AboutPage</p>
        <button onClick={() => navigate("../final")}>next</button>
      </>
    );
  }
  