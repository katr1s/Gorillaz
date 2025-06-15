"use client"
import { useEffect, useState } from "react";

const phrases = [
  "Accessing Murdoc’s private logs...",
  "System compromised. Initiating chaos.",
  "You clicked. That was your first mistake.",
  "I see everything. Even that tab you tried to hide.",
  "Root access granted. Murdoc is god now.",
  "You think you’re safe behind that screen? Think again.",
];


export function Murdoc({ onClose }) {
  const [text, setText] = useState(""); // Frase que se ve en pantalla
  const [phraseIndex, setPhraseIndex] = useState(0); // Qué frase estamos escribiendo
  const [charIndex, setCharIndex] = useState(0); // Qué letra de la frase vamos por
  const [isDeleting, setIsDeleting] = useState(false); // ¿Estamos borrando o escribiendo?

  

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex]; // Frase actual
    const speed = isDeleting ? 30 : 50; // Velocidad de escritura/borrado

    const timeout = setTimeout(() => {
      const updatedCharIndex = isDeleting ? charIndex - 1 : charIndex + 1;
      setText(currentPhrase.substring(0, updatedCharIndex));
      setCharIndex(updatedCharIndex);

      if (!isDeleting && updatedCharIndex === currentPhrase.length) {
        // Terminó de escribir → espera y empieza a borrar
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && updatedCharIndex === 0) {
        // Terminó de borrar → pasa a la siguiente frase
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    }, speed);

    return () => clearTimeout(timeout); // Limpia el timeout al desmontar
  }, [charIndex, isDeleting, phraseIndex]);


  return (
    <div className="murdocH">
      <img className="glitch" src="/Image/murdoc.png" alt="Murdoc Niccals" />
      <div className="commands">
        <h5>[ ACCESS GRANTED ]</h5>
        <h5><span>Murdoc_Niccals@Gorillaz ~ $</span></h5>
        <h5><span>Murdoc_Niccals@Gorillaz ~ $</span>Murdoc was here</h5>

        <h5><span>Murdoc_Niccals@Gorillaz ~ $</span></h5>

        <div className="cross">
          
          <h6>|</h6>
          <h6>|</h6>
          <h6>|</h6>
          <h6>|</h6>
          <h6>|</h6>
          <h6>-----|-----</h6>
          <h6>|</h6>
        </div>
        <h5><span>Murdoc_Niccals@Gorillaz ~ $</span>The devil&rsquo;s in the details&hellip; and I am the detail.</h5>
        <h5></h5>
        <h5><span>Murdoc_Niccals@Gorillaz ~ $</span>This isn&rsquo;t a bug. It&rsquo;s a blessing.</h5>
        <h5><span>Murdoc_Niccals@Gorillaz ~ $</span>{text}</h5>

        <audio src="/sound/murdoc.mp3" controls autoPlay></audio>
      </div>
      <button onClick={onClose}>X</button>
    </div>
  );
}
