import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const clicked = () => {
    return alert("Hello");
  };
  return (
    <div>
      <Navbar />
      <button onClick={() => navigate("/about")}>About</button>
      <button onClick={clicked}>Click me</button>
    </div>
  );
};

export default Home;
