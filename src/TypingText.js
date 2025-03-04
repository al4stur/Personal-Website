import { useState, useEffect } from "react";

function TypingText() {
    const text = 'print("Hey, I\'m Alastaire")';
    const [displayText, setDisplayText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayText(text.slice(0, index + 1));
                setIndex(index + 1);
            }, 100);
            return () => clearTimeout(timeout);
        }
    }, [index, text]);

    return (
        <h1>
            {displayText}
            <span className="typing-cursor">|</span>
        </h1>
    );
}

export default TypingText;
