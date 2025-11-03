import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import PrimaryButton from "../Components/PrimaryButton";
import SecondaryButton from "../Components/SecondaryButton";
import Textbox from "~/Components/Textbox";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const [name, setName] = useState("");

  function handleClick() {
    alert("Button clicked!");
  }

  return (
    <div>
      <Welcome />
      <PrimaryButton label="Yes" onClick={handleClick} />
      <SecondaryButton label="No" type="submit" />
      <Textbox value={name} onChange={setName} placeholder="Enter your name" />
    </div>
  );
}
