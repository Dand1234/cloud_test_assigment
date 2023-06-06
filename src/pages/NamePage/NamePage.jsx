import { useNavigate } from "react-router-dom";

export const NamePage = () => {

    const navigate = useNavigate();

    return (
      <>
        <p>NamePage</p>
        <button onClick={() => navigate("../advantages")}>next</button>
      </>
    );
  }
  