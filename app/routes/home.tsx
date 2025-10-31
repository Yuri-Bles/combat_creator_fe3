import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Button from "../Components/Button";
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
      <Button label="Click Me" onClick={handleClick} />
      <Button label="Submit" type="submit" />
      <Textbox value={name} onChange={setName} placeholder="Enter your name" />
    </div>
  );
}
