import { useState } from "react";

// component used to welcome user and select role
export default function WelcomeUser() {
    const [role, setRole] = useState<"guest" | "member">("guest");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [inputName, setInputName] = useState("");

    // saves the name entered and toggles login status
    const handleLogin = () => {
        if (inputName.trim() !== "") {
            setUsername(inputName.trim());
            setIsLoggedIn(true);
            setInputName("");
        }
    };

    //toggles logout status and sets role to guest as default
    const handleLoggout = () => {
        setIsLoggedIn(false);
        setUsername("");
        setRole("guest");
    };

    return (
        <div
            style={{
                    textAlign: "center",
                    marginTop:45,
                }}>
            <p
                style={{
                    fontSize: 45
                }}>Welcome, Please select your role!</p>
            <select
                value={role}
                onChange={(event) => {
                    const selectedRole = event.target.value as "guest" | "member";
                    setRole(selectedRole);
                    if (selectedRole === "guest") { // resets login info on guest selection
                        setIsLoggedIn(false);
                        setUsername("")
                        setInputName("");
                    }
                }}
                style={{
                    backgroundColor: "white",
                    color: "black",
                    border: "1px solid white", 
                    borderRadius: 10,
                    fontSize: 20,
                    width: 100,
                    height: 35,
                }}
            >
                <option value="guest">Guest</option>
                <option value="member">Member</option>
            </select>

            {role ===  "member" ? ( // if role is selected as member, the following is displayed
                isLoggedIn ? (
                <div>
                    <p
                        style={{
                            marginTop:25,
                            marginBottom: 15,
                            fontSize: 35
                        }}>Welcome, {username}!</p>
                    <button
                        style={{
                            width: 75,
                            height: 35
                        }} onClick={handleLoggout}>Logout</button>
                </div>
            ) : (
                <div>
                    <p
                        style={{
                            marginTop:25,
                            marginBottom: 15,
                            fontSize: 35
                        }}>Please enter your name and log in.</p>
                    <input
                        style={{
                            backgroundColor: "white",
                            color: "black",
                            width: 300,
                            height: 35,
                            marginRight: 10,
                            borderRadius: 10,
                            padding: 10
                        }}
                        type="text"
                        placeholder="Enter name"
                        value={inputName}
                        onChange={(event) => setInputName(event.target.value)}
                    />
                    <button 
                        style={{
                            width: 75,
                            height: 35
                        }}
                            onClick={handleLogin} disabled={inputName.trim() === ""}>Login</button>
                </div>
            )
        ) : ( 
            <p
                style={{
                    marginTop:25,
                    marginBottom: 15,
                    fontSize: 35
                }}>You are currently set as a Guest. You cannot save your name</p> // message shown when guest
        )}
        </div>
    );

};