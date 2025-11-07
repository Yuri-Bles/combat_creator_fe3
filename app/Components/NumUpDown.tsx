import "../styles.css";

type TextboxProps = {
  value: number;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
};

export default function NumUpDown({ value, onChange, placeholder = "", disabled = false }: TextboxProps) {
    return (
    <input
      className="num-updown"
      type="number"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
}