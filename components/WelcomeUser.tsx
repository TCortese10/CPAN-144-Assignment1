import { useState } from "react";

export default function WelcomeUser() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [inputName, setInputName] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        if (inputName.trim() !== "") {
            setUsername(inputName.trim());
            setIsLoggedIn(true);
            setInputName("");
        }
    };

    const handleLoggout = () => {
        setIsLoggedIn(false);
        setUsername("");
    };

    return (
        <div>
            {isLoggedIn ? (
                <div>
                    <p>Welcome, {username}!</p>
                    <button onClick={handleLoggout}>Logout</button>
                </div>
            ) : (
                <div>
                    <p>Welcome! Please enter your name and log in.</p>
                    <input
                        type="text"
                        placeholder="Enter name"
                        value={inputName}
                        onChange={(event) => setInputName(event.target.value)}
                    />
                    <button onClick={handleLogin} disabled={inputName.trim() === ""}>Login</button>
                </div>
            )}
        </div>
    );

};