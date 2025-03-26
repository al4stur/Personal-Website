import { useState } from "react";
import TypingText from "./TypingText";
import "./App.css";

function App() {
    const [showAbout, setShowAbout] = useState(false);

    return (
        <div className="main-page">
            <TypingText />

            <div className="profile-pic">
                <img src="/icons/pfp.png" alt="Alastaire Balin" />
            </div>

            <div className="socials">
                <a href="https://github.com/al4stur/" target="_blank" rel="noreferrer">
                    <img src="/icons/github-icon.svg" alt="GitHub" />
                </a>
                <a href="https://instagram.com/al4stur/" target="_blank" rel="noreferrer">
                    <img src="/icons/insta-icon.svg" alt="Instagram" />
                </a>
                <a href="https://linkedin.com/in/alastaire-balin" target="_blank" rel="noreferrer">
                    <img src="/icons/linkedin-icon.svg" alt="LinkedIn" />
                </a>
            </div>

            <div className="buttons">
                <button onClick={() => setShowAbout(true)}>About Me</button>
                <button onClick={() => alert("Projects Coming Soon!")}>Projects</button>
            </div>

            {/* About Me Slide-in Panel */}
            <div className={`about-panel ${showAbout ? "show" : ""}`}>
                <button className="close-btn" onClick={() => setShowAbout(false)}>✕</button>
                <h2>About Me</h2>
                <p>
                    I'm Alastaire Balin, a curious mind passionate about building beautiful interfaces,
                    thoughtful experiences, and typing animations just for fun. 🚀
                </p>
                <p>
                    I'm currently exploring React, refining my design sense, and slowly becoming besties with CSS.
                </p>
                <p>
                    Fun fact: I can spend hours aligning pixels and not even realize it.
                </p>
            </div>
        </div>
    );
}

export default App;
