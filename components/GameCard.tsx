import { Game } from "../types";

type GameCardProps = {
    game: Game;
};

export default function GameLibrary({ game }: GameCardProps) {
    function handleClick() {
        alert(game.overview);
    }

    return (

        <div
            style={{
                border: "1px solid white",
                width: 300,
                height: 400,
                marginTop: 16,
            }}
            onClick={handleClick}
        >
            <img
                src={game.poster_path}
                alt={game.title}
                style={{
                    height: 300,
                    width: 300,
                }}
            />
            <div>{game.title}</div>
            <div>{game.release_date}</div>
            <div>Genre: {game.genre}</div>
            <div>Rating: {game.rating}</div>
        </div>
    );
};