import { useState } from "react";

export default function WelcomeUser() {
    const [role, setRole] = useState<"guest" | "member">("guest");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [inputName, setInputName] = useState("");

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
        setRole("guest");
    };

    return (
        <div>
            <p>Welcome, Please select your role</p>
            <select
                value={role}
                onChange={(event) => {
                    const selectedRole = event.target.value as "guest" | "member";
                    setRole(selectedRole);
                    if (selectedRole === "guest") {
                        setIsLoggedIn(false);
                        setUsername("")
                        setInputName("");
                    }
                }}
            >
                <option value="guest">Guest</option>
                <option value="member">Member</option>
            </select>

            {role ===  "member" ? (
                isLoggedIn ? (
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
            )
        ) : ( 
            <p>You are currently set as a Guest. You cannot save your name</p>
        )}
        </div>
    );

};