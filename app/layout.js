import './globals.css';

export const metadata = {
  title: 'ClubPoster AI',
  description: 'SaaS pour créer des affiches de match pour clubs amateurs',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
