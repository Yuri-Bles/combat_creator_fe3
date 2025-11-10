import "../styles.css";
import NavbarButton from "~/Components/NavbarButton";
import ImagePlaceholder from "./ImagePlaceholder.png";
import { useNavigate } from "react-router-dom";

export function Welcome() {
  const navigate = useNavigate();

  return (
    <main className="navbar">
      <div className="flex">        
        <img
          src={ImagePlaceholder}
          alt="React Router"
          className="block w-1/40 m-0"
        />
        <NavbarButton label="To Draft Page" onClick={() => navigate("/combat_system_draft")}/>
      </div>
    </main>
  );
}
