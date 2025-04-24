import { useEffect, useState } from "react";

interface TypedTextProps {
  text: string;
  style: React.CSSProperties;
}

const cursorStyle: React.CSSProperties = {
  display: "inline-block",
  marginLeft: "2px",
  animation: "blink 1s step-start infinite",
};

function TypedText({ text, style }: TypedTextProps) {
  const [visibleCharIdx, setVisibleCharIdx] = useState<number>(0);
  const charArr: string[] = text.split("").slice(0, visibleCharIdx);

  useEffect(() => {
    let isCancelled = true;
    const startDelay = setTimeout(() => {
      const typeNextChar = () => {
        setVisibleCharIdx((prev) => {
          if (prev < text.length) {
            const nextDelay = Math.floor(Math.random() * 100) + 150;
            setTimeout(typeNextChar, nextDelay);
            return prev + 1;
          }
          return prev;
        });
      };
      const initialDelay = Math.floor(Math.random() * 100) + 100;
      setTimeout(typeNextChar, initialDelay);
    }, 1000);
    return () => {
      isCancelled = true;
      clearTimeout(startDelay);
    };
  }, [text]);

  return (
    <div style={style}>
      {charArr.map((char, idx) => (
        <span key={idx}>{char}</span>
      ))}
      <span style={cursorStyle}>_</span>
    </div>
  );
}

export default TypedText;
