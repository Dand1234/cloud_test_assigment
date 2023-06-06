import { useNavigate } from "react-router-dom";

export const AdvantagePage = () => {

    const navigate = useNavigate();

    return (
      <>
        <p>AdvantagePage</p>
        <button onClick={() => navigate("../about")}>next</button>
      </>
    );
  }
  