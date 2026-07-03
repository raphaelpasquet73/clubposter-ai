<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FootPoster Pro - Créez vos affiches de match</title>
    <link rel="stylesheet" href="css/style.css">
    <link href="[fonts.googleapis.com](https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap)" rel="stylesheet">
    <link rel="stylesheet" href="[cdnjs.cloudflare.com](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css)">
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar">
        <div class="nav-container">
            <a href="index.html" class="logo">
                <i class="fas fa-futbol"></i>
                <span>FootPoster Pro</span>
            </a>
            <ul class="nav-links">
                <li><a href="#features">Fonctionnalités</a></li>
                <li><a href="#templates">Modèles</a></li>
                <li><a href="pricing.html">Tarifs</a></li>
            </ul>
            <div class="nav-auth">
                <button class="btn btn-outline" onclick="openModal('loginModal')">Connexion</button>
                <button class="btn btn-primary" onclick="openModal('signupModal')">Essai Gratuit</button>
            </div>
            <button class="mobile-menu-btn">
                <i class="fas fa-bars"></i>
            </button>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero">
        <div class="hero-content">
            <h1>Créez des affiches <span class="highlight">professionnelles</span> pour votre club</h1>
            <p>L'outil ultime pour les clubs de football. Créez des affiches de match, des annonces et des visuels en quelques clics.</p>
            <div class="hero-buttons">
                <button class="btn btn-primary btn-lg" onclick="openModal('signupModal')">
                    <i class="fas fa-rocket"></i> Commencer gratuitement
                </button>
                <button class="btn btn-outline btn-lg" onclick="window.location.href='editor.html?demo=true'">
                    <i class="fas fa-play"></i> Voir la démo
                </button>
            </div>
            <div class="hero-stats">
                <div class="stat">
                    <span class="stat-number">500+</span>
                    <span class="stat-label">Clubs actifs</span>
                </div>
                <div class="stat">
                    <span class="stat-number">10k+</span>
                    <span class="stat-label">Affiches créées</span>
                </div>
                <div class="stat">
                    <span class="stat-number">50+</span>
                    <span class="stat-label">Modèles</span>
                </div>
            </div>
        </div>
        <div class="hero-image">
            <div class="poster-preview">
                <div class="poster-card">
                    <div class="poster-header">
                        <span class="competition">LIGUE 1</span>
                    </div>
                    <div class="poster-teams">
                        <div class="team">
                            <div class="team-logo placeholder-logo">⚽</div>
                            <span>FC Local</span>
                        </div>
                        <div class="vs">VS</div>
                        <div class="team">
                            <div class="team-logo placeholder-logo">⚽</div>
                            <span>AS Visiteur</span>
                        </div>
                    </div>
                    <div class="poster-info">
                        <p><i class="fas fa-calendar"></i> Samedi 15 Mars</p>
                        <p><i class="fas fa-clock"></i> 15:00</p>
                        <p><i class="fas fa-map-marker-alt"></i> Stade Municipal</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="features">
        <div class="container">
            <h2 class="section-title">Tout ce dont votre club a besoin</h2>
            <p class="section-subtitle">Des outils puissants pour créer des visuels professionnels</p>
            
            <div class="features-grid">
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-magic"></i>
                    </div>
                    <h3>Éditeur intuitif</h3>
                    <p>Glissez-déposez vos éléments, modifiez les textes et personnalisez chaque détail facilement.</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-images"></i>
                    </div>
                    <h3>Import d'images</h3>
                    <p>Importez vos logos, photos de joueurs et sponsors directement depuis votre appareil.</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-palette"></i>
                    </div>
                    <h3>Couleurs du club</h3>
                    <p>Personnalisez avec les couleurs officielles de votre club pour une identité forte.</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-download"></i>
                    </div>
                    <h3>Export HD</h3>
                    <p>Téléchargez vos affiches en haute définition, prêtes pour l'impression ou les réseaux sociaux.</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-layer-group"></i>
                    </div>
                    <h3>50+ Modèles</h3>
                    <p>Choisissez parmi notre bibliothèque de modèles professionnels et personnalisables.</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-share-alt"></i>
                    </div>
                    <h3>Partage facile</h3>
                    <p>Partagez directement sur les réseaux sociaux ou générez un lien de partage.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Templates Section -->
    <section id="templates" class="templates">
        <div class="container">
            <h2 class="section-title">Modèles populaires</h2>
            <p class="section-subtitle">Commencez avec nos modèles prêts à l'emploi</p>
            
            <div class="templates-grid">
                <div class="template-card" data-template="match">
                    <div class="template-preview template-match">
                        <span class="template-badge">Match</span>
                        <div class="template-content">
                            <h4>JOUR DE MATCH</h4>
                            <p>Équipe A vs Équipe B</p>
                        </div>
                    </div>
                    <div class="template-info">
                        <h4>Affiche de Match</h4>
                        <p>Annoncez vos rencontres</p>
                    </div>
                </div>
                
                <div class="template-card" data-template="recruitment">
                    <div class="template-preview template-recruitment">
                        <span class="template-badge">Recrutement</span>
                        <div class="template-content">
                            <h4>REJOINS-NOUS</h4>
                            <p>Saison 2024-2025</p>
                        </div>
                    </div>
                    <div class="template-info">
                        <h4>Recrutement</h4>
                        <p>Attirez de nouveaux joueurs</p>
                    </div>
                </div>
                
                <div class="template-card" data-template="results">
                    <div class="template-preview template-results">
                        <span class="template-badge">Résultats</span>
                        <div class="template-content">
                            <h4>VICTOIRE !</h4>
                            <p>3 - 1</p>
                        </div>
                    </div>
                    <div class="template-info">
                        <h4>Résultats</h4>
                        <p>Partagez vos scores</p>
                    </div>
                </div>
                
                <div class="template-card" data-template="event">
                    <div class="template-preview template-event">
                        <span class="template-badge">Événement</span>
                        <div class="template-content">
                            <h4>TOURNOI</h4>
                            <p>Été 2024</p>
                        </div>
                    </div>
                    <div class="template-info">
                        <h4>Événement</h4>
                        <p>Tournois et festivités</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Pricing Preview -->
    <section class="pricing-preview">
        <div class="container">
            <div class="pricing-box">
                <div class="pricing-content">
                    <h2>Un prix simple, toutes les fonctionnalités</h2>
                    <p>Accès illimité à tous les outils et modèles</p>
                </div>
                <div class="pricing-price">
                    <span class="price">12€</span>
                    <span class="period">/mois</span>
                </div>
                <button class="btn btn-primary btn-lg" onclick="openModal('signupModal')">
                    Commencer l'essai gratuit
                </button>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-brand">
                    <a href="index.html" class="logo">
                        <i class="fas fa-futbol"></i>
                        <span>FootPoster Pro</span>
                    </a>
                    <p>L'outil de création d'affiches pour les clubs de football.</p>
                </div>
                <div class="footer-links">
                    <h4>Produit</h4>
                    <ul>
                        <li><a href="#features">Fonctionnalités</a></li>
                        <li><a href="#templates">Modèles</a></li>
                        <li><a href="pricing.html">Tarifs</a></li>
                    </ul>
                </div>
                <div class="footer-links">
                    <h4>Support</h4>
                    <ul>
                        <li><a href="#">Centre d'aide</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>
                <div class="footer-links">
                    <h4>Légal</h4>
                    <ul>
                        <li><a href="#">CGU</a></li>
                        <li><a href="#">Confidentialité</a></li>
                        <li><a href="#">Mentions légales</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 FootPoster Pro. Tous droits réservés.</p>
            </div>
        </div>
    </footer>

    <!-- Login Modal -->
    <div id="loginModal" class="modal">
        <div class="modal-content">
            <button class="modal-close" onclick="closeModal('loginModal')">
                <i class="fas fa-times"></i>
            </button>
            <h2>Connexion</h2>
            <form id="loginForm" onsubmit="handleLogin(event)">
                <div class="form-group">
                    <label for="loginEmail">Email</label>
                    <input type="email" id="loginEmail" required placeholder="votre@email.com">
                </div>
                <div class="form-group">
                    <label for="loginPassword">Mot de passe</label>
                    <input type="password" id="loginPassword" required placeholder="••••••••">
                </div>
                <button type="submit" class="btn btn-primary btn-full">Se connecter</button>
            </form>
            <p class="modal-footer">
                Pas encore de compte ? 
                <a href="#" onclick="switchModal('loginModal', 'signupModal')">S'inscrire</a>
            </p>
        </div>
    </div>

    <!-- Signup Modal -->
    <div id="signupModal" class="modal">
        <div class="modal-content">
            <button class="modal-close" onclick="closeModal('signupModal')">
                <i class="fas fa-times"></i>
            </button>
            <h2>Créer un compte</h2>
            <p class="modal-subtitle">7 jours d'essai gratuit, puis 12€/mois</p>
            <form id="signupForm" onsubmit="handleSignup(event)">
                <div class="form-group">
                    <label for="clubName">Nom du club</label>
                    <input type="text" id="clubName" required placeholder="FC Exemple">
                </div>
                <div class="form-group">
                    <label for="signupEmail">Email</label>
                    <input type="email" id="signupEmail" required placeholder="contact@club.com">
                </div>
                <div class="form-group">
                    <label for="signupPassword">Mot de passe</label>
                    <input type="password" id="signupPassword" required placeholder="Min. 8 caractères">
                </div>
                <button type="submit" class="btn btn-primary btn-full">Commencer l'essai gratuit</button>
            </form>
            <p class="modal-footer">
                Déjà un compte ? 
                <a href="#" onclick="switchModal('signupModal', 'loginModal')">Se connecter</a>
            </p>
        </div>
    </div>

    <script src="js/app.js"></script>
    <script src="js/auth.js"></script>
</body>
</html>



      
