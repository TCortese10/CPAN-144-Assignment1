import { Game } from "../types";
import { useState } from "react";

// list of games with corresponding information
const games: Game[] = [
    {
        id: 1,
        title: "Call of Duty: Modern Warfare 2",
        overview: "A first-person shooter where players fight in a modern military conflict, featuring a cinematic campaign, multiplayer modes, and tactical gameplay. Players join elite special forces to battle enemies globally",
        poster_path: "https://pics.filmaffinity.com/call_of_duty_modern_warfare_2-189813699-large.jpg",
        release_date: "11/10/2009",
        genre: "FPS",
        rating: 9.2,
    },
    {
        id: 2,
        title: "Battlefield 3",
        overview: "Large-scale FPS focusing on modern warfare with vast maps, vehicle combat, and squad-based multiplayer battles.",
        poster_path: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/09/battlefield-3-poster.jpg",
        release_date: "10/25/2011",
        genre: "FPS",
        rating: 8.0,
    },
    {
        id: 3,
        title: "Minecraft",
        overview: "A sandbox exploration and crafting game where players build and explore blocky procedurally generated worlds.",
        poster_path: "https://tse1.mm.bing.net/th/id/OIP.Vt3ZVGCnfF-wmDXetJJ2gAHaJ4?rs=1&pid=ImgDetMain&o=7&rm=3",
        release_date: "11/18/2011",
        genre: "Exploration",
        rating: 9.0,
    },
    {
        id: 4,
        title: "Skyrim (The Elder Scrolls V)",
        overview: "Vast open-world fantasy RPG where players customize characters and explore a rich, immersive world full of quests",
        poster_path: "https://assets-prd.ignimgs.com/2021/08/19/elder-scrolls-skyrim-button-2017-1629409446732.jpg",
        release_date: "11/11/2011",
        genre: "RPG",
        rating: 9.1,
    },
    {
        id: 5,
        title: "Call of Duty: Black Ops II",
        overview: "Futuristic military FPS blending campaign missions and competitive multiplayer with advanced tech weapons.",
        poster_path: "https://th.bing.com/th/id/R.2a9a2722c22e706cf915abf6aafaaaeb?rik=CujAUHS%2bcRgPCA&riu=http%3a%2f%2fimages3.wikia.nocookie.net%2f__cb20120507204923%2fcallofduty%2fimages%2fthumb%2fd%2fd7%2fBlack_Ops_II_Poster_2.jpg%2f1024px-Black_Ops_II_Poster_2.jpg&ehk=Ubc4mjwCo1qoZKcgxCUNzvFCnt9U32K0d60%2fYmUVO10%3d&risl=&pid=ImgRaw&r=0",
        release_date: "11/13/2012",
        genre: "FPS",
        rating: 8.5,
    },
    {
        id: 6,
        title: "Subnautica",
        overview: "Underwater exploration and survival game where players explore an alien ocean planet’s depths and ecosystems",
        poster_path: "https://image.api.playstation.com/vulcan/img/rnd/202009/3006/C76j3lYg8BNBWJRSYtI2ONbo.png",
        release_date: "01/23/2018",
        genre: "Exploration",
        rating: 8.2,
    },
    {
        id: 7,
        title: "No Man's Sky",
        overview: "Sci-fi exploration game featuring an infinite procedurally generated universe to discover planets and lifeforms.",
        poster_path: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/12/mixcollage-07-dec-2024-08-42-am-1209.jpg",
        release_date: "08/12/2016",
        genre: "Exploration",
        rating: 7.5,
    },
    {
        id: 8,
        title: "The Witcher 3: Wild Hunt",
        overview: "An open-world RPG that follows Geralt of Rivia on epic quests in a rich fantasy world filled with monsters and moral choices.",
        poster_path: "https://store-images.s-microsoft.com/image/apps.13986.69531514236615003.534d4f71-03cb-4592-929a-b00a7de28b58.c4152bcf-9088-4e35-98b5-9a2e44b927c5",
        release_date: "05/19/2015",
        genre: "RPG",
        rating: 9.8,
    },
];

export default function GameLibrary() {
    // list of users current selected games
    const [filteredGames, setFilteredGames] = useState<Game[]>(games); 

    // filters the games with dropdown menu
    const filterGamesByGenre = (genre: string) => { 
        if (genre === "") {
            setFilteredGames(games);
        } else {
            setFilteredGames(games.filter(game => game.genre.toLowerCase() === genre.toLowerCase()));
        }
    };

    // shows each individual game card
    function GameCard({ game }: { game: Game }) { 
        function handleClick() {
            alert(game.overview); //shows popup with game description when clicked
        }
        return (
            <div 
                
                style={{ 
                    backgroundColor: "white",
                    color: "black",
                    borderRadius: 10,
                    width: 300,
                    height: 400, 
                    marginTop: 16,
                    fontSize: 15,
                    margin: 15
                }} 
                onClick={handleClick}
            >
                <img 
                    src={game.poster_path} 
                    alt={game.title} 
                    style={{ 
                        height: 300, 
                        width: 300,
                        borderRadius: 5
                    }} 
                />
                <div
                    style={{
                        marginLeft: 5,
                        fontSize: 18,
                    }}>{game.title}</div>
                <div
                    style={{
                        marginLeft: 5,
                        fontSize: 12,
                        fontStyle: "italic"
                    }}>{game.release_date}</div>
                <div
                    style={{
                        marginLeft: 5
                    }}>Genre: {game.genre}</div>
                <div
                    style={{
                        textAlign: "right",
                        fontSize: 22,
                        marginRight: 10,
                        marginBottom: 5
                    }}>{game.rating}</div>
            </div>
        );
    }

    const genres = Array.from(new Set(games.map(game => game.genre))); // retrieves all unique genres

    return (
        <div>
            <select onChange={(event) => filterGamesByGenre(event.target.value)} defaultValue="" 
                style={{ 
                    marginTop: 16, 
                    padding: 8, 
                    fontSize: 16, 
                    backgroundColor: "white",
                    borderRadius: 10,
                    color: "black",
                    marginLeft: 10
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



