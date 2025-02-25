import { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);
  const chatBoxRef = useRef(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [chat]);

  const handleSendMessage = async () => {
    if (message.trim()) {
      setChat([...chat, { sender: "user", text: message }]);
      setMessage("");
      setLoading(true);

      try {
        const response = await fetch("http://127.0.0.1:5000/generate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt: message }),
        });

        if (!response.ok) {
          throw new Error("Server error");
        }

        const data = await response.json();
        setChat((prevChat) => [...prevChat, { sender: "bot", text: data.response }]);
      } catch (error) {
        console.error("Error:", error);
        setChat((prevChat) => [
          ...prevChat,
          { sender: "bot", text: "Oops! Something went wrong. 🤖" },
        ]);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="app-container">
      <div className="page-header">
        <h1 className="main-title">Welcome to FarmBuddy 🧑‍🌾</h1>
        <p className="subheading">Your personal assistant for all agricultural queries and issues.</p>
      </div>
      <div className="chat-container">
        <header className="chat-header">
          <div className="bot-icon">🧑‍🌾</div>
          <h1 className="chat-title">FarmBuddy</h1>
        </header>

        <div className="chat-box" ref={chatBoxRef}>
          {chat.map((msg, index) => (
            <div key={index} className={`chat-message ${msg.sender}`}>
              <div className="avatar">
                {msg.sender === "user" ? "👤" : "🧑‍🌾"}
              </div>
              <div className="message-bubble">
                <span>{msg.text}</span>
              </div>
            </div>
          ))}
          {loading && (
            <div className="chat-message bot">
              <div className="avatar">🧑‍🌾</div>
              <div className="typing-indicator">
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
              </div>
            </div>
          )}
        </div>

        <div className="input-container">
          <input
            type="text"
            className="chat-input"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
          />
          <button
            className="send-button"
            onClick={handleSendMessage}
            disabled={loading || !message.trim()}
          >
            ➤
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;