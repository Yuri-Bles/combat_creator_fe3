import "../styles.css";

type ButtonProps = {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

export default function NavbarButton({ label, onClick, type = "button" }: ButtonProps) {
  return (
    <button className="button-navbar"
      type={type}
      onClick={onClick}
    >
      {label}
    </button>
  );
}