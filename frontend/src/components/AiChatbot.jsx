import React, { useState } from 'react';

export default function AIChatbot() {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!userInput.trim()) return;
    setLoading(true);
    setMessages([...messages, { sender: "user", text: userInput }]);
    // Replace /api/openai-proxy with your actual backend proxy endpoint
    const response = await fetch('/api/openai-proxy', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: userInput })
    });
    const data = await response.json();
    setMessages(msgs => [...msgs, { sender: "ai", text: data.reply }]);
    setUserInput('');
    setLoading(false);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: 16, width: 350 }}>
      <h3>AI Chatbot</h3>
      <div style={{ maxHeight: 200, overflowY: 'auto', marginBottom: 8 }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ textAlign: msg.sender === "user" ? "right" : "left" }}>
            <b>{msg.sender === "user" ? "You" : "AI"}:</b> {msg.text}
          </div>
        ))}
      </div>
      <input
        value={userInput}
        onChange={e => setUserInput(e.target.value)}
        onKeyDown={e => { if (e.key === 'Enter') sendMessage(); }}
        disabled={loading}
        style={{ width: '80%' }}
      />
      <button onClick={sendMessage} disabled={loading}>Send</button>
    </div>
  );
}