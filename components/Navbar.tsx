type Props = {
  onSelect: (view: "Home" | "Other" | "Other") => void;
}

export default function Navbar({ onSelect }: Props) {
  return (
    <nav>
      <button onClick={() => onSelect("Home")}>Home</button>
      <button onClick={() => onSelect("Other")}>Other</button>
      <button onClick={() => onSelect("Other")}>Other</button>
    </nav>
  );
}