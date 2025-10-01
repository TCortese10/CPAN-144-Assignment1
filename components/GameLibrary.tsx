import { Game } from "../types";
import { useState } from "react";

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
        genre: "nfkd",
        rating: 8.337,
    },
    {
        id: 3,
        title: "Test",
        overview: "blafksabfnkslfnklasfnas",
        poster_path: "https://ontapsportsnet.com/wp-content/uploads/2025/09/Bears-vs-Raiders-scaled.jpg",
        release_date: "May 12tgh",
        genre: "dsdsds",
        rating: 8.7,
    },
    {
        id: 4,
        title: "Test",
        overview: "blafksabfnkslfnklasfnas",
        poster_path: "https://ontapsportsnet.com/wp-content/uploads/2025/09/Bears-vs-Raiders-scaled.jpg",
        release_date: "May 12tgh",
        genre: "war",
        rating: 8.7,
    },
    {
        id: 5,
        title: "Test",
        overview: "blafksabfnkslfnklasfnas",
        poster_path: "https://ontapsportsnet.com/wp-content/uploads/2025/09/Bears-vs-Raiders-scaled.jpg",
        release_date: "May 12tgh",
        genre: "war",
        rating: 8.7,
    },
    {
        id: 6,
        title: "Test",
        overview: "blafksabfnkslfnklasfnas",
        poster_path: "https://ontapsportsnet.com/wp-content/uploads/2025/09/Bears-vs-Raiders-scaled.jpg",
        release_date: "May 12tgh",
        genre: "war",
        rating: 8.7,
    },
];

export default function GameLibrary() {
    const [filteredGames, setFilteredGames] = useState<Game[]>(games);

    const filterGamesByGenre = (genre: string) => {
        if (genre === "") {
            setFilteredGames(games);
        } else {
            setFilteredGames(games.filter(game => game.genre.toLowerCase() === genre.toLowerCase()));
        }
    };

    function GameCard({ game }: { game: Game }) {
        function handleClick() {
            alert(game.overview);
        }
        return (
            <div 
                style={{ 
                    border: "1px solid white", 
                    width: 300,
                    height: 400, 
                    marginTop: 16 
                }} 
                onClick={handleClick}
            >
                <img 
                    src={game.poster_path} 
                    alt={game.title} 
                    style={{ 
                        height: 300, 
                        width: 300 
                    }} 
                />
                <div>{game.title}</div>
                <div>{game.release_date}</div>
                <div>Genre: {game.genre}</div>
                <div>Rating: {game.rating}</div>
            </div>
        );
    }

    const genres = Array.from(new Set(games.map(game => game.genre)));

    return (
        <div>
            <h1>GameCatalog</h1>
            <select onChange={(event) => filterGamesByGenre(event.target.value)} defaultValue="" 
                style={{ 
                    marginTop: 16, 
                    padding: 8, 
                    fontSize: 16 
                }}
            >
                <option value="">All Genres</option>
                {genres.map((genre) => (
                    <option key={genre} value={genre}>{genre.charAt(0).toUpperCase() + genre.slice(1)}</option>
                ))}
            </select>

            {filteredGames.length > 0 ? filteredGames.map(game => <GameCard key={game.id} game={game} />) : <p style={{ marginTop: 16 }}>No games found</p>}
        </div>
    );
}



