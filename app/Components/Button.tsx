import "../styles.css";

type ButtonProps = {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

export default function Button({ label, onClick, type = "button" }: ButtonProps) {
  return (
    <button className="button"
      type={type}
      onClick={onClick}
    >
      {label}
    </button>
  );
}