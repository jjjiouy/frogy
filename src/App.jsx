import React, { useState, useEffect } from "react";

export default function CatchGame() {
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(30);
  const [frogPos, setFrogPos] = useState({ x: 100, y: 100 });

  // Перемещение лягушки каждые 800мс
  useEffect(() => {
    const interval = setInterval(() => {
      setFrogPos({
        x: Math.random() * (window.innerWidth - 80),
        y: Math.random() * (window.innerHeight - 120),
      });
    }, 800);
    return () => clearInterval(interval);
  }, []);

  // Таймер
  useEffect(() => {
    if (time <= 0) return;
    const timer = setInterval(() => setTime((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [time]);

  const handleCatch = () => {
    setScore((s) => s + 1);
  };

  return (
    <div className="w-screen h-screen bg-gradient-to-b from-blue-400 to-blue-600 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="text-white text-2xl absolute top-4">
        <p>Ball: {score}</p>
        <p>Vaqt: {time}s</p>
      </div>

      {time > 0 ? (
        <div
          className="absolute text-4xl cursor-pointer select-none"
          style={{ left: frogPos.x, top: frogPos.y }}
          onClick={handleCatch}
        >
          🐸
        </div>
      ) : (
        <h1 className="text-white text-4xl">Game Over! Score: {score}</h1>
      )}
    </div>
  );
}
