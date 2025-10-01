type NavbarProps = {
    name?: string;
}

/*
props = {
    name: "MovieCatalog"
}
*/
export default function Navbar({ name = "MovieCatalog" }: NavbarProps) {
  return (
    <div
      style={{
        border: "1px solid white",
        padding: 10,
      }}
    >
      {name}
    </div>
  );
}