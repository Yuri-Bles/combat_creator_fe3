import "../styles.css"
import type { DraftStat } from "../Models/DraftStatModel";
import Textbox from "./Textbox";
import NumUpDown from "./NumUpDown"
import { useState } from "react";

type Props = {
  DraftStat: DraftStat;
  onChange: (updatedStat: DraftStat) => void;
};

export default function DraftStatHtml({ DraftStat, onChange }: Props) {
  const {
    Name, DefaultValue, MinValue, MaxValue
  } = DraftStat;

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
    </div>
  );
}