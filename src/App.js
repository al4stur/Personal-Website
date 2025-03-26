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
                <div className="about-profile-pic">
                    <img src="/icons/pfp.png" alt="Alastaire Balin" />
                </div>
                <div className="about-content">
                    <p>
                        HEYY GUYS!! I'm Alastaire Balin, first-year student studying at Northeastern University,
                        combined majoring in Computer Science and Business Administration. 
                    </p>
                    <p>
                        Currently, I am learning more about web development and design. Soon to learn more about
                        full-stack development.
                    </p>
                    <p>
                        Outside of academics, I enjoy marathon running, going on matcha runs, and RAVING!
                    </p>

                    {/* Skills Section */}
                    <div className="skills-section">
                        <h2>Skills</h2>
                        <div className="skills-grid">
                            <div className="skill-item">
                                <img src="/icons/icons8-java-500.svg" alt="Java" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
