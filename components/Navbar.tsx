type Props = {
  onSelect: (view: "Home" | "Games" | "Other") => void;
}

export default function Navbar({ onSelect }: Props) {
  return (
    <nav>
      <button onClick={() => onSelect("Home")}>Home</button>
      <button onClick={() => onSelect("Games")}>Games</button>
      <button onClick={() => onSelect("Other")}>Other</button>
    </nav>
  );
}