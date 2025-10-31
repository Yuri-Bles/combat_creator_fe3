type ButtonProps = {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

export default function Button({ label, onClick, type = "button" }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="px-3 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
    >
      {label}
    </button>
  );
}