import { useEffect, useRef, useState } from 'react';
import { Bot, Send } from 'lucide-react';
import { kiroKB as defaultKiroKB } from '../data/kiroData';

const defaultPrompts = [
  'Who is yadnyesh.readme?',
  'What projects has yadnyesh built?',
  "What's the tech stack?",
  'Is yadnyesh open to internships?',
  "What's the GitHub username?",
];

function simpleAnswer(query, kb) {
  const q = query.toLowerCase().trim();
  // exact or keyword match
  for (const item of kb) {
    if (q === item.q || q.includes(item.q)) return item.a;
  }
  // fallback: simple pattern
  if (q.includes('project') || q.includes('projects')) return 'Check the Projects page for a curated list.';
  if (q.includes('tech') || q.includes('stack')) return 'Primary stack: React, Node.js, MongoDB. See Skills for details.';
  return "I don't know that yet — you can train me by adding a short Q/A below.";
}

export default function Kiro() {
  const [messages, setMessages] = useState([
    { from: 'kiro', text: 'Hi — I am KIRO. Ask me about yadnyesh.readme.' },
  ]);
  const [input, setInput] = useState('');
  const [training, setTraining] = useState('');
  const [customKB, setCustomKB] = useState([]);
  const messagesRef = useRef(null);

  useEffect(() => {
    if (messagesRef.current) messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  }, [messages]);

  useEffect(() => {
    // load custom KB from localStorage
    try {
      const raw = localStorage.getItem('kiro_custom_kb');
      if (raw) setCustomKB(JSON.parse(raw));
    } catch (e) {
      // ignore parse errors
    }
  }, []);

  const send = (text) => {
    if (!text.trim()) return;
    setMessages((m) => [...m, { from: 'user', text }]);
    // simulate processing
    setTimeout(() => {
      const kb = [...defaultKiroKB, ...customKB];
      const reply = simpleAnswer(text, kb);
      setMessages((m) => [...m, { from: 'kiro', text: reply }]);
    }, 300);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send(input);
      setInput('');
    }
  };

  const handleTrain = () => {
    // training format: question||answer
    const parts = training.split('||');
    if (parts.length !== 2) return alert('Training format: question||answer');
    const entry = { q: parts[0].toLowerCase().trim(), a: parts[1].trim(), tags: ['custom'] };
    const next = [...customKB, entry];
    setCustomKB(next);
    try {
      localStorage.setItem('kiro_custom_kb', JSON.stringify(next));
    } catch (e) {
      // ignore storage errors
    }
    setTraining('');
    alert('KIRO trained locally and saved — ask the new question now.');
  };

  return (
    <div className="clone-page subpage kiro-page">
      <section className="kiro-panel">
        <div className="kiro-avatar"><Bot size={34} /></div>
        <h1>KIRO</h1>
        <p>AI assistant for yadnyesh.readme</p>
        <span>Ask anything about yadnyesh.readme or the projects</span>

        <div className="prompt-cloud">
          {defaultPrompts.map((prompt) => (
            <button key={prompt} type="button" onClick={() => send(prompt)}>
              {prompt}
            </button>
          ))}
        </div>

        <div ref={messagesRef} className="kiro-messages" style={{ maxHeight: 240, overflow: 'auto', margin: '12px 0' }}>
          {messages.map((m, i) => (
            <div key={i} className={`kiro-msg ${m.from}`}>
              <strong>{m.from === 'user' ? 'You' : 'KIRO'}</strong>
              <p>{m.text}</p>
            </div>
          ))}
        </div>

        <label className="kiro-input">
          <textarea
            placeholder="Ask KIRO about yadnyesh..."
            rows={3}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button type="button" aria-label="Send" onClick={() => { send(input); setInput(''); }}>
            <Send size={18} />
          </button>
        </label>
        <small>Enter to send · Shift+Enter for new line</small>

        <div style={{ marginTop: 16 }}>
          <p style={{ marginBottom: 6, fontSize: 13 }}>Train KIRO locally (question||answer):</p>
          <div style={{ display: 'flex', gap: 8 }}>
            <input value={training} onChange={(e) => setTraining(e.target.value)} style={{ flex: 1 }} placeholder="example: What is X?||X is..." />
            <button type="button" onClick={handleTrain}>Train</button>
          </div>
        </div>
      </section>
    </div>
  );
}
