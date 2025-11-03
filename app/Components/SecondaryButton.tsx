import "../styles.css";

type ButtonProps = {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

export default function SecondaryButton({ label, onClick, type = "button" }: ButtonProps) {
  return (
    <button className="button-secondary"
      type={type}
      onClick={onClick}
    >
      {label}
    </button>
  );
}