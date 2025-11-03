import "../styles.css";

type ButtonProps = {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

export default function PrimaryButton({ label, onClick, type = "button" }: ButtonProps) {
  return (
    <button className="button-primary"
      type={type}
      onClick={onClick}
    >
      {label}
    </button>
  );
}