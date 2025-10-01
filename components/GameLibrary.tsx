import { Game } from "../types";
import GameCard from "./GameCard";

type GameCardProps = {
    game: Game;
};

export default function GameLibrary({ game }: GameCardProps) {
    const appName = "GameCatalog"
    const games: Game[] = [
        {
            id: 1,
            title: "Test",
            overview: "blafksabfnkslfnklasfnas",
            poster_path: "https://ontapsportsnet.com/wp-content/uploads/2025/09/Bears-vs-Raiders-scaled.jpg",
            release_date: "May 12tgh",
            genre: "war",
            rating: 8.7,
        },
        {
            id: 2,
            title: "Test222",
            overview: "blafksabfnkslfnklasfnas",
            poster_path: "https://ontapsportsnet.com/wp-content/uploads/2025/09/Bears-vs-Raiders-scaled.jpg",
            release_date: "May 12tgh",
            genre: "war",
            rating: 8.337,
        },
        {
            id: 1,
            title: "Test",
            overview: "blafksabfnkslfnklasfnas",
            poster_path: "https://ontapsportsnet.com/wp-content/uploads/2025/09/Bears-vs-Raiders-scaled.jpg",
            release_date: "May 12tgh",
            genre: "war",
            rating: 8.7,
        },
        {
            id: 1,
            title: "Test",
            overview: "blafksabfnkslfnklasfnas",
            poster_path: "https://ontapsportsnet.com/wp-content/uploads/2025/09/Bears-vs-Raiders-scaled.jpg",
            release_date: "May 12tgh",
            genre: "war",
            rating: 8.7,
        },
        {
            id: 1,
            title: "Test",
            overview: "blafksabfnkslfnklasfnas",
            poster_path: "https://ontapsportsnet.com/wp-content/uploads/2025/09/Bears-vs-Raiders-scaled.jpg",
            release_date: "May 12tgh",
            genre: "war",
            rating: 8.7,
        },
        {
            id: 1,
            title: "Test",
            overview: "blafksabfnkslfnklasfnas",
            poster_path: "https://ontapsportsnet.com/wp-content/uploads/2025/09/Bears-vs-Raiders-scaled.jpg",
            release_date: "May 12tgh",
            genre: "war",
            rating: 8.7,
        },
    ];

    return (
        <div>
            <h1>{appName}</h1>
            {games.map((game) => (
                <GameCard key={game.id} game={game} />
            ))}
        </div>
    );
};

