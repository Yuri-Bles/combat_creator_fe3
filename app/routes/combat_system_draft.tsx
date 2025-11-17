import { Welcome } from "../welcome/welcome";
import DraftStatHtml from "../Components/DraftStat";
import type { DraftStat } from "~/Models/DraftStatModel";
import PrimaryButton from "../Components/PrimaryButton";
import { useState, useEffect } from "react";

interface ApiResponse {
  message: string;
  stats: any[][];
}

const system_id = 1;

export default function CombatSystemDraft() {
  const [stats, setStats] = useState<DraftStat[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleStatChange = (updatedStat: DraftStat) => {
    setStats((prevStats) =>
      prevStats.map((stat) => (stat.Id === updatedStat.Id ? updatedStat : stat))
    );
  };

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/combat_system_draft?system_id=${system_id}`, {
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
        Id: statArray[0],
        Name: statArray[1],
        DefaultValue: statArray[2],
        MinValue: statArray[3],
        MaxValue: statArray[4]
      }));
      setStats(mappedStats);
    })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  const createStat = () =>
  {
    fetch(`http://127.0.0.1:5000/create_system_stat`, 
    {
      method: "POST",
      headers: 
      {
        "Content-Type": "application/json",
        "api-key": "w6+7OT8yc>I=aR%)h{sG(dTU"
      },
      body: JSON.stringify({
        system_id: 1
      })
    })
    .then(response => {
      if (!response.ok) throw new Error("Failed to create stat");
      return response.json();
    })
    .then(data => {
      console.log("Creation succeeded:", data);
    })
    .catch(err => {
      console.error("Update error:", err);
      alert(`Update failed: ${err.message}`);
    });
  }

  const updateStats = () => 
  {
    fetch(`http://127.0.0.1:5000/update_system_stats_by_system_id`, 
    {
      method: "POST",
      headers: 
      {
        "Content-Type": "application/json",
        "api-key": "w6+7OT8yc>I=aR%)h{sG(dTU"
      },
      body: JSON.stringify({
        system_id: 1,
        stats: stats
      })
    })
    .then(response => {
      if (!response.ok) throw new Error("Failed to update stats");
      return response.json();
    })
    .then(data => {
      console.log("Update succeeded:", data);
    })
    .catch(err => {
      console.error("Update error:", err);
      alert(`Update failed: ${err.message}`);
    });
  }

  if (error) return <div>Error: {error}</div>;
  if (!stats) return <div>Loading stats...</div>;

  return (
    <div>
      <Welcome />
        {stats.map((stat) => (
          <DraftStatHtml key={stat.Id} DraftStat={stat} onChange={handleStatChange} />
        ))}
        <PrimaryButton label="Create New Stat" onClick={createStat} />
        <PrimaryButton label="Update Stats" onClick={updateStats} />
    </div>
  );
}
