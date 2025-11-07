import "../styles.css"
import type { DraftStat } from "../Models/DraftStatModel";
import Textbox from "./Textbox";
import NumUpDown from "./NumUpDown"
import { useState } from "react";

type Props = {
  DraftStat: DraftStat;
};

export default function DraftStatHtml({ DraftStat }: Props) {
  const {
    Id
  } = DraftStat;

  const [Name, setName] = useState(DraftStat.Name);
  const [DefaultValue, setDefaultValue] = useState(DraftStat.DefaultValue)
  const [MinValue, setMinValue] = useState(DraftStat.MinValue)
  const [MaxValue, setMaxValue] = useState(DraftStat.MaxValue)

  return (
    <div className="element-outline" style={{ display: "flex", gap: "20px", alignItems: "center" }}>
      <h3>Name:</h3>
      <Textbox value={Name} onChange={setName} />
      <h3>Default Value:</h3>
      <NumUpDown value={DefaultValue} onChange={(val) => setDefaultValue(Number(val))} />
      <h3>Minimum Value:</h3>
      <NumUpDown value={MinValue} onChange={(val) => setMinValue(Number(val))} />
      <h3>Maximum Value:</h3>
      <NumUpDown value={MaxValue} onChange={(val) => setMaxValue(Number(val))} />
    </div>
  );
}