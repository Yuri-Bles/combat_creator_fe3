export type DraftStat = {
    Id: number;
    Name: string;
    DefaultValue: number;
    MinValue: number;
    MaxValue: number;
  };

  export function ConvertDraftStat(item: unknown): DraftStat {
    const json = typeof item === "string" ? JSON.parse(item) : (item as any);    
    return{
        Id: json.Id,
        Name: json.Name,
        DefaultValue: json.DefaultValue,
        MinValue: json.MinValue,
        MaxValue: json.MaxValue
    }
  }