import "../styles.css"
import type { DraftStat } from "../Models/DraftStatModel";
import Textbox from "./Textbox";
import NumUpDown from "./NumUpDown"
import PrimaryButton from "./PrimaryButton";
import { useState } from "react";

type Props = {
  DraftStat: DraftStat;
  onChange: (updatedStat: DraftStat) => void;
};

export default function DraftStatHtml({ DraftStat, onChange }: Props) {
  const {
    Id, Name, DefaultValue, MinValue, MaxValue
  } = DraftStat;

  const deleteStat = () =>
  {
    fetch(`http://127.0.0.1:5000/delete_system_stat`, 
    {
      method: "POST",
      headers: 
      {
        "Content-Type": "application/json",
        "api-key": "w6+7OT8yc>I=aR%)h{sG(dTU"
      },
      body: JSON.stringify({
        stat_id: Id,
      })
    })
    .then(response => {
      if (!response.ok) throw new Error("Failed to delete stat");
      return response.json();
    })
    .then(data => {
      console.log("Delete succeeded:", data);
    })
    .catch(err => {
      console.error("Delete error:", err);
      alert(`Delete failed: ${err.message}`);
    });
  }

  return (
    <div className="element-outline" style={{ display: "flex", gap: "20px", alignItems: "center" }}>
      <h3>Name:</h3>
      <Textbox
        value={Name}
        onChange={(val) => onChange({ ...DraftStat, Name: val })}
      />
      <h3>Default Value:</h3>
      <NumUpDown
        value={DefaultValue}
        onChange={(val) => onChange({ ...DraftStat, DefaultValue: Number(val) })}
      />
      <h3>Minimum Value:</h3>
      <NumUpDown
        value={MinValue}
        onChange={(val) => onChange({ ...DraftStat, MinValue: Number(val) })}
      />
      <h3>Maximum Value:</h3>
      <NumUpDown
        value={MaxValue}
        onChange={(val) => onChange({ ...DraftStat, MaxValue: Number(val) })}
      />
      <PrimaryButton
      label="Delete"
      onClick={deleteStat}
      />
    </div>
  );
}