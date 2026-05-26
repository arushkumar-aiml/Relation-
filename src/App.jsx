import { useState } from "react";
import { Heart, Sparkles, RotateCcw, ChevronDown, ChevronUp, Users } from "lucide-react";
import "./App.css";

const RELATIONS = {
  F: {
    word: "Friends",
    hindi: "Pakke Dost",
    emoji: "🤝",
    color: "#06d6a0",
    pct: 70,
    desc: "Tumhare beech gehri dosti hai! Ek doosre ke bina adhure ho tum dono. Yeh dosti umar bhar chale!"
  },
  L: {
    word: "Lovers",
    hindi: "Pyaar",
    emoji: "❤️",
    color: "#ff4d6d",
    pct: 95,
    desc: "Dil ki baat dil jaanta hai! Tumhare beech ek khaas pyaar ki feeling hai jo shabdon mein nahi aati."
  },
  A: {
    word: "Acquaintance",
    hindi: "Jaanpehchan",
    emoji: "😊",
    color: "#ffd166",
    pct: 45,
    desc: "Abhi toh bas jaanpehchan hai — lekin kaun jaane, aage yeh rishta kya rang le!"
  },
  M: {
    word: "Made for Each Other",
    hindi: "Husband-Wife",
    emoji: "💍",
    color: "#c77dff",
    pct: 92,
    desc: "Ek doosre ke liye bane ho tum! Shaadi ka rishta asmaan mein likha hai tumhara."
  },
  E: {
    word: "Enemies",
    hindi: "Dushman",
    emoji: "⚡",
    color: "#ff6b35",
    pct: 15,
    desc: "Arey yaar! Thodi takrar hai — par yaad raho, kaante mein hi gulaab khilta hai! 😄"
  },
  S: {
    word: "Siblings",
    hindi: "Bhai-Bahen",
    emoji: "🧡",
    color: "#a8dadc",
    pct: 88,
    desc: "Bhai-Bahen ka rishta! Duniya ka sabse pyaar bhara aur anokhaa bandhan. Ladte bhi hain, pyaar bhi karte hain!"
  },
};

function detectRelation(n1, n2) {
  const s1 = n1.toLowerCase().replace(/\s/g, "");
  const s2 = n2.toLowerCase().replace(/\s/g, "");

  // Common letters count
  let a1 = s1.split("");
  let a2 = s2.split("");
  for (let i = 0; i < a1.length; i++) {
    if (a1[i] === null) continue;
    const j = a2.indexOf(a1[i]);
    if (j !== -1) { a1[i] = null; a2[j] = null; }
  }
  const remaining = Math.max(
    a1.filter(c => c !== null).length + a2.filter(c => c !== null).length,
    1
  );

  // Name length sum for extra uniqueness
  const lenSum = s1.length + s2.length;
  const combined = remaining + lenSum;

  const letters = ["F","L","A","M","E","S"];
  let arr = [...letters];
  let idx = 0;
  const elim = [];

  while (arr.length > 1) {
    idx = (idx + combined - 1) % arr.length;
    elim.push(arr[idx]);
    arr.splice(idx, 1);
    if (idx >= arr.length) idx = 0;
  }

  return { winner: arr[0], elimOrder: elim, remaining, combined, s1, s2 };
}

export default function App() {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [result, setResult] = useState(null);
  const [showSteps, setShowSteps] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCalc = () => {
    if (!name1.trim() || !name2.trim()) {
      setError("Dono naam likhna zaroori hai! 🙏");
      return;
    }
    setError("");
    setLoading(true);
    setResult(null);
    setShowSteps(false);
    setTimeout(() => {
      setResult(detectRelation(name1.trim(), name2.trim()));
      setLoading(false);
    }, 800);
  };

  const reset = () => {
    setName1(""); setName2(""); setResult(null); setShowSteps(false); setError("");
  };

  const data = result ? RELATIONS[result.winner] : null;

  return (
    <div className="app">
      <div className="bg-orbs">
        <div className="orb o1"/><div className="orb o2"/><div className="orb o3"/>
      </div>

      <div className="wrap">
        {/* Header */}
        <header>
          <div className="logo-wrap">
            <span className="logo-emoji">💫</span>
          </div>
          <h1>Relation</h1>
          <p className="tagline">Do naam — ek raaz</p>
          <div className="rel-chips">
            {["🤝 Dost","❤️ Pyaar","🧡 Bhai-Bahen","💍 Husband-Wife","⚡ Dushman","✨ Soulmates"].map(r => (
              <span key={r} className="chip">{r}</span>
            ))}
          </div>
        </header>

        {/* Card */}
        <div className="card">
          <div className="field-group">
            <label><Users size={13}/> Pehla Naam</label>
            <input
              className="inp"
              value={name1}
              onChange={e => { setName1(e.target.value); setError(""); }}
              placeholder="Tumhara naam likhो..."
              onKeyDown={e => e.key === "Enter" && handleCalc()}
            />
          </div>

          <div className="vs-row">
            <div className="vs-line"/>
            <Heart size={20} className="vs-heart"/>
            <div className="vs-line"/>
          </div>

          <div className="field-group">
            <label><Users size={13}/> Doosra Naam</label>
            <input
              className="inp"
              value={name2}
              onChange={e => { setName2(e.target.value); setError(""); }}
              placeholder="Unka naam likhо..."
              onKeyDown={e => e.key === "Enter" && handleCalc()}
            />
          </div>

          {error && <p className="error">{error}</p>}

          <button className={"btn" + (loading ? " loading" : "")} onClick={handleCalc}>
            {loading
              ? <><span className="spin">🔮</span> Raaz dhundh raha hoon...</>
              : <><Sparkles size={16}/> Raaz Jaano</>
            }
          </button>
        </div>

        {/* Result */}
        {result && data && (
          <div className="result" style={{"--rc": data.color}}>

            {/* FLAMES track */}
            <p className="track-label">Relationship Track</p>
            <div className="track">
              {["F","L","A","M","E","S"].map(l => (
                <div key={l}
                  className={"tl" + (result.elimOrder.includes(l) ? " out" : "") + (l === result.winner ? " win" : "")}
                  style={l === result.winner ? {background: data.color, borderColor: data.color, color:"#fff"} : {}}
                  title={RELATIONS[l].word}>
                  {l}
                </div>
              ))}
            </div>

            {/* Main result */}
            <div className="res-box">
              <span className="res-emoji">{data.emoji}</span>
              <span className="res-sub">Tumhara rishta hai</span>
              <span className="res-word" style={{color: data.color}}>{data.hindi}</span>
              <span className="res-eng">({data.word})</span>
              <p className="res-desc">{data.desc}</p>
            </div>

            {/* Compatibility bar */}
            <div className="compat">
              <div className="compat-top">
                <span>Rishte ki mazbooti</span>
                <span style={{color: data.color, fontWeight: 700}}>{data.pct}%</span>
              </div>
              <div className="bar">
                <div className="bar-fill" style={{width: data.pct + "%", background: `linear-gradient(90deg, ${data.color}aa, ${data.color})`}}/>
              </div>
            </div>

            {/* Steps */}
            <button className="steps-btn" onClick={() => setShowSteps(s => !s)}>
              {showSteps ? <ChevronUp size={13}/> : <ChevronDown size={13}/>}
              {showSteps ? "Chhupao" : "Calculation kaise hua?"}
            </button>
            {showSteps && (
              <div className="steps">
                <div className="step-row"><span>📝 Naam 1</span><b>{result.s1}</b></div>
                <div className="step-row"><span>📝 Naam 2</span><b>{result.s2}</b></div>
                <div className="step-row"><span>🔢 Baaki akshar</span><b>{result.remaining}</b></div>
                <div className="step-row"><span>➕ Total count</span><b>{result.combined}</b></div>
                <div className="step-row"><span>❌ Hata diye</span><b>{result.elimOrder.join(" → ")}</b></div>
                <div className="step-row"><span>🏆 Winner</span><b style={{color: data.color}}>{result.winner} = {data.hindi}</b></div>
              </div>
            )}

            <button className="reset-btn" onClick={reset}>
              <RotateCcw size={13}/> Naye naam try karo
            </button>
          </div>
        )}

        <footer>
          <p>💫 Relation &nbsp;·&nbsp; Har rishta khaas hota hai</p>
        </footer>
      </div>
    </div>
  );
}
