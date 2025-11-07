import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import DraftStatHtml from "../Components/DraftStat";
import type { DraftStat } from "~/Models/DraftStatModel";
import PrimaryButton from "../Components/PrimaryButton";
import SecondaryButton from "../Components/SecondaryButton";
import Textbox from "~/Components/Textbox";
import { useState } from "react";


export default function CombatSystemDraft() {
  const [name, setName] = useState("");

  function handleClick() {
    alert("Button clicked!");
  }

  const ExampleDraftStat: DraftStat = {
    Id: 1,
    Name: "HP",
    DefaultValue: 10,
    MinValue: 1,
    MaxValue: 20
  };

  return (
    <div>
          <p>Combat System Draft</p>
        <h1>Combat System Draft Page</h1>
      <Welcome />
      <DraftStatHtml DraftStat={ExampleDraftStat} />
      <PrimaryButton label="Yes" onClick={handleClick} />
      <SecondaryButton label="No" type="submit" />
      <Textbox value={name} onChange={setName} placeholder="Enter your name" />
    </div>
  );
}
