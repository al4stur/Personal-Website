import TypingText from "./TypingText";
import "./App.css"; // Import your styles

function App() {
    return (
        <div className="main-page">
            {/* Typing Animation */}
            <TypingText />

            {/* Profile Picture */}
            <div className="profile-pic">
                <img src="/icons/pfp.png" alt="Alastaire Balin" />
            </div>

            {/* Social Links */}
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

            {/* Buttons */}
            <div className="buttons">
                <button onClick={() => window.location.href = '#about'}>About Me</button>
                <button onClick={() => window.location.href = '#projects'}>Projects</button>
            </div>
        </div>
    );
}

export default App;
