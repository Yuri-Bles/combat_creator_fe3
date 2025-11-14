import { Welcome } from "../welcome/welcome";
import DraftStatHtml from "../Components/DraftStat";
import type { DraftStat } from "~/Models/DraftStatModel";
import { useState, useEffect } from "react";

interface ApiResponse {
  message: string;
  stats: any[][];
}

export default function CombatSystemDraft() {
  const [name, setName] = useState("");

  const [stats, setStats] = useState<DraftStat[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/combat_system_draft", {
      method: 'GET',
      headers: {
        "api-key": "w6+7OT8yc>I=aR%)h{sG(dTU"
      }
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.statusText}`);
        }
        return response.json() as Promise<ApiResponse>;
      })
    .then(data => {
      const mappedStats = data.stats.map((statArray: any[], index: number) => ({
        Id: index + 1,
        Name: statArray[0],
        DefaultValue: statArray[1],
        MinValue: statArray[2],
        MaxValue: statArray[3]
      }));
      setStats(mappedStats);
    })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!stats) return <div>Loading stats...</div>;

  return (
    <div>
      <Welcome />
        {stats.map((stat) => (
          <DraftStatHtml key={stat.Id} DraftStat={stat} />
        ))}
    </div>
  );
}
