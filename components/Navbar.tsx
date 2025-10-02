type Props = { // defines props and allows selection between views
  onSelect: (view: "Home" | "Games") => void;
}

// calls the Props and shows nav buttons for each display
export default function Navbar({ onSelect }: Props) {
  return (
    <nav>
      <button 
        style={{
          border: "1px solid white", 
          borderRadius: 10,
          fontSize: 20,
          width: 75,
          height: 35,
          marginTop: 10, 
          marginRight: 25,
          marginLeft: 10,
          color: "black"
        }} 
        onClick={() => onSelect("Home")}>Home</button> 
      <button 
        style={{
          border: "1px solid white", 
          borderRadius: 10,
          fontSize: 20,
          width: 75,
          height: 35,
          marginTop: 10, 
          marginRight: 20,
          color: "black"
        }}  
        onClick={() => onSelect("Games")}>Games</button>
    </nav>
  );
}