"use client";
import GlideSlider from "@/Components/glide";
import "./home.css";
import { Murdoc } from "@/Components/murdoc";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {

  const [showMurdoc, setShowMurdoc] = useState(false);

  useEffect(() => {
    const element = document.documentElement; // <html>
  element.classList.toggle("no-scroll", showMurdoc);
  }, [showMurdoc]);

  return (
    <div className="wrapper">
          <section className="hero">
        <nav className="navigation">
          <Link href="/" className="logo">
            <img
              src="Image/logo.png"
              alt="Gorillaz"
              title="Gorillaz"
              loading="lazy"
            />
          </Link>

          <div className="sections">
            <Link href="#listen">Listen</Link>
            <Link href="#history">History</Link>
            <Link href="#videos">Videos</Link>
          </div>

          <div className="youtube">
            <Link
              href="https://www.youtube.com/channel/UCfIXdjDQH9Fau7y99_Orpjw"
              target="_blank"
            >
              Subcribe
            </Link>
          </div>
        </nav>

        <div className="content">
          <h1>GORILLAZ</h1>
          <div className="characters">
            <div className="character">
              <img
                src="Image/russel.png"
                alt="Russel"
                title="Russel Hobbs"
                loading="lazy"
              />
            </div>
            <div className="character circle">
              <img src="Image/2d.png" alt="2D" title="2D" loading="lazy" />
            </div>
            <Link
              href="https://gorillaz.lnk.to/crackerislandlistenandbuy"
              target="_blank"
              className="character album"
            >
              <img className="icon" src="Icon/arrow.svg" alt="" />
              <h5>Last album</h5>
              <img
                className="back"
                src="Image/Cracker-Island.jpg"
                alt="Cracker Island"
                title="Cracker Island"
                loading="lazy"
              />
            </Link>
            <div className="character circle">
              <img
                src="Image/noddle.png"
                alt="Noodle"
                title="Noodle"
                loading="lazy"
              />
            </div>
            <div className="character">
              <img
                src="Image/murdoc.png"
                alt="Murdoc Niccals"
                title="Murdoc Niccals"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <footer>
          <Link
            href="https://www.youtube.com/watch?v=WXR-bCF5dbM"
            target="_blank"
            className="card"
          >
            <img src="Image/gorillaz.jpg" alt="Gorillaz" loading="lazy" />
            <div className="inf">
              <h6>19-200</h6>
              <p>Gorillaz</p>
            </div>
          </Link>

          <Link href="#listen" className="listen">
            <img
              className="image-1"
              src="Image/gorillaz.jpg"
              alt=""
              loading="lazy"
            />
            <img
              className="image-2"
              src="Image/Cracker-Island.jpg"
              alt=""
              loading="lazy"
            />
            <div className="circle">+</div>
          </Link>
        </footer>
      </section>

      <section className="history" id="history">
        <div className="box-1">
          <article>
            <h2>History</h2>
            <p>
              Gorillaz was created in 1998 by Damon Albarn and Jamie Hewlett as
              a virtual band that blends music and animation. It began as a
              critique of the mainstream music industry and features animated
              characters: 2-D, Murdoc, Noodle, and Russel. Their style mixes
              rock, hip-hop, and electronic music, redefining the digital music
              scene.
            </p>
          </article>
          <article className="character-1">
            <img
              src="/Character/2-D.webp"
              alt="2-D"
              title="2-D"
              loading="lazy"
            />
            <div className="inf">
              <h3>2-D</h3>
              <p>
                2-D, whose real name is Stuart Pot, is the lead vocalist and
                keyboardist of Gorillaz. He&rsquo;s from England and known for
                his calm and gentle nature. His black eyes are the result of two
                head injuries caused by Murdoc, while his blue hair comes from a
                childhood accident when he fell from a tree. Despite it all,
                he&rsquo;s the band&rsquo;s most sensitive and soulful member.
              </p>
            </div>
          </article>
        </div>
        <div className="box-2">
          <article className="character character-2">
            <img
              src="/Character/Murdoc.webp"
              alt="Murdoc Niccals"
              title="Murdoc Niccals"
              loading="lazy"
            />
            <div className="inf">
              <h3>Murdoc Niccals</h3>
              <p>
                Murdoc Niccals is the bassist and founder of Gorillaz. Born in
                England, he&rsquo;s known for his dark, eccentric, and
                provocative personality. He&rsquo;s the one who brought the band
                together and takes credit for its creation. Though egotistical
                and chaotic, he&rsquo;s a key force behind the band&rsquo;s
                unique sound and identity.
              </p>
            </div>
          </article>
          <article className="character character-3">
            <img
              src="/Character/Noodle.webp"
              alt="Noodle"
              title="Noodle"
              loading="lazy"
            />
            <div className="inf">
              <h3>Noodle</h3>
              <p>
                Noodle is the guitarist of Gorillaz and the only female member
                of the band. She mysteriously arrived in a box from Japan as a
                child, instantly impressing the others with her musical skills
                and martial arts abilities. Over time, she&rsquo;s become a
                vital part of Gorillaz&rsquo;s evolving sound and identity.
              </p>
            </div>
          </article>
          <article className="character character-4">
            <img
              src="/Character/Russel.webp"
              alt="Russel Hobbs"
              title="Russel Hobbs"
              loading="lazy"
            />
            <div className="inf">
              <h3>Russel Hobbs</h3>
              <p>
                Russel Hobbs is the drummer of Gorillaz, originally from New
                York. He grew up surrounded by hip-hop culture and had dark
                experiences, including being possessed by the spirits of his
                deceased friends&mdash;something that shaped his unique style.
                He&rsquo;s the rhythmic soul of the band, bringing powerful
                beats influenced by rap, soul, and funk.
              </p>
            </div>
          </article>
        </div>

        <div className="background">
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
          <div className="circle circle-3"></div>
        </div>
      </section>

      <section className="listen" id="listen">
         <div className="background">
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
          <div className="circle circle-3"></div>
        </div>
        <h2>Listen</h2>
        <div className="play">
          <GlideSlider />
          <Link className="murdocB" href="#listen" onClick={() => setShowMurdoc(true)}>
            <img className="activate" src="/Image/button murdoc.png" alt="" />
          </Link>
          
        </div>
        {showMurdoc && (
          <Murdoc onClose={() => setShowMurdoc(false)} />
        )}
      </section>
      
    </div>
  );
}
