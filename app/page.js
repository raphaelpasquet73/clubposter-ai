'use client';

import { useRef, useState } from 'react';
import html2canvas from 'html2canvas';

export default function Home() {
  const posterRef = useRef(null);
  const [data, setData] = useState({
    club: "FC Vallée de l'Udon",
    adversaire: "US Briouze",
    date: "Dimanche 12 juillet",
    heure: "15h00",
    lieu: "Stade Pierre Daulny",
    competition: "Départemental U17",
    message: "Venez nombreux soutenir notre équipe !",
    couleur: "#16a34a"
  });

  function update(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  async function downloadPoster() {
    if (!posterRef.current) return;
    const canvas = await html2canvas(posterRef.current, {
      backgroundColor: null,
      scale: 2
    });
    const link = document.createElement('a');
    link.download = 'affiche-match.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  }

  return (
    <main>
      <nav className="nav">
        <div className="brand">⚽ ClubPoster AI</div>
        <div className="navlinks">
          <a href="#app">Créer</a>
          <a href="#pricing">Tarifs</a>
          <a href="#roadmap">Fonctions</a>
        </div>
      </nav>

      <section className="hero">
        <div>
          <p className="pill">SaaS pour clubs amateurs</p>
          <h1>Crée des affiches de match professionnelles en 30 secondes.</h1>
          <p className="sub">
            ClubPoster AI aide les clubs à créer des visuels propres pour Instagram,
            Facebook et WhatsApp sans perdre de temps.
          </p>
          <a className="mainBtn" href="#app">Créer une affiche</a>
        </div>

        <div className="dashboardPreview">
          <div className="dashTop">
            <span></span><span></span><span></span>
          </div>
          <h3>Tableau de bord</h3>
          <div className="statGrid">
            <div><strong>24</strong><small>Affiches</small></div>
            <div><strong>8</strong><small>Matchs</small></div>
            <div><strong>3</strong><small>Équipes</small></div>
          </div>
          <div className="miniPoster">MATCH DAY<br/>FCVU VS USB</div>
        </div>
      </section>

      <section id="app" className="app">
        <div className="panel">
          <h2>Générateur d’affiche</h2>
          <p>Remplis les infos, puis télécharge l’affiche en PNG.</p>

          <label>Club</label>
          <input name="club" value={data.club} onChange={update} />

          <label>Adversaire</label>
          <input name="adversaire" value={data.adversaire} onChange={update} />

          <label>Date</label>
          <input name="date" value={data.date} onChange={update} />

          <label>Heure</label>
          <input name="heure" value={data.heure} onChange={update} />

          <label>Lieu</label>
          <input name="lieu" value={data.lieu} onChange={update} />

          <label>Compétition</label>
          <input name="competition" value={data.competition} onChange={update} />

          <label>Message</label>
          <input name="message" value={data.message} onChange={update} />

          <label>Couleur principale</label>
          <input name="couleur" type="color" value={data.couleur} onChange={update} />

          <button onClick={downloadPoster}>Télécharger en PNG</button>
        </div>

        <div className="posterWrap">
          <div ref={posterRef} className="poster" style={{ background: `linear-gradient(145deg, #06130b, ${data.couleur})` }}>
            <div className="posterBadge">⚽ MATCH DAY ⚽</div>
            <h2>{data.club}</h2>
            <div className="vs">VS</div>
            <h2>{data.adversaire}</h2>
            <div className="info">
              <p>📅 {data.date}</p>
              <p>🕒 {data.heure}</p>
              <p>📍 {data.lieu}</p>
              <p>{data.competition}</p>
            </div>
            <h3>{data.message}</h3>
          </div>
        </div>
      </section>

      <section id="pricing" className="pricing">
        <h2>Offres</h2>
        <div className="cards">
          <div className="card">
            <h3>Gratuit</h3>
            <strong>0 €</strong>
            <p>3 affiches / mois</p>
          </div>
          <div className="card active">
            <h3>Club</h3>
            <strong>9,99 € / mois</strong>
            <p>Affiches illimitées + export PNG</p>
          </div>
          <div className="card">
            <h3>Premium</h3>
            <strong>19,99 € / mois</strong>
            <p>Affiches, résultats, classements, équipes</p>
          </div>
        </div>
      </section>

      <section id="roadmap" className="roadmap">
        <h2>Prochaines fonctions à ajouter</h2>
        <div className="roadGrid">
          <div>🔐 Connexion utilisateurs</div>
          <div>💳 Abonnements Stripe</div>
          <div>☁️ Sauvegarde des affiches</div>
          <div>🏆 Générateur de classements</div>
        </div>
      </section>

      <footer>
        © 2026 ClubPoster AI — MVP prêt pour Vercel
      </footer>
    </main>
  );
}
