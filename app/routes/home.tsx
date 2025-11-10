import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import PrimaryButton from "../Components/PrimaryButton";
import SecondaryButton from "../Components/SecondaryButton";
import NavbarButton from "../Components/NavbarButton";
import Textbox from "~/Components/Textbox";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  function handleClick() {
    alert("Button clicked!");
  }

  return (
    <div className="w-screen min-h-screen m-0 p-0 overflow-x-hidden">
      <Welcome />
      <PrimaryButton label="Yes" onClick={handleClick} />
      <SecondaryButton label="No" type="submit" />
      <NavbarButton label="To Draft Page" onClick={() => navigate("/combat_system_draft")}/>
      <Textbox value={name} onChange={setName} placeholder="Enter your name" />
    </div>
  );
}
