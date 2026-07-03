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
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Éditeur - FootPoster Pro</title>
    <link rel="stylesheet" href="css/style.css">
    <link href="[fonts.googleapis.com](https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap)" rel="stylesheet">
    <link rel="stylesheet" href="[cdnjs.cloudflare.com](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css)">
</head>
<body class="editor-page">
    <!-- Editor Header -->
    <header class="editor-header">
        <div class="editor-nav">
            <a href="dashboard.html" class="back-btn">
                <i class="fas fa-arrow-left"></i>
                <span>Retour</span>
            </a>
            <div class="project-name">
                <input type="text" id="projectName" value="Nouvelle Affiche" class="project-input">
            </div>
            <div class="editor-actions">
                <button class="btn btn-outline" onclick="savePoster()">
                    <i class="fas fa-save"></i> Sauvegarder
                </button>
                <button class="btn btn-primary" onclick="exportPoster()">
                    <i class="fas fa-download"></i> Exporter
                </button>
            </div>
        </div>
    </header>

    <div class="editor-container">
        <!-- Left Sidebar - Tools -->
        <aside class="editor-sidebar left-sidebar">
            <div class="sidebar-section">
                <h3>Modèles</h3>
                <div class="templates-list">
                    <div class="template-thumb" onclick="loadTemplate('match')">
                        <i class="fas fa-futbol"></i>
                        <span>Match</span>
                    </div>
                    <div class="template-thumb" onclick="loadTemplate('recruitment')">
                        <i class="fas fa-user-plus"></i>
                        <span>Recrutement</span>
                    </div>
                    <div class="template-thumb" onclick="loadTemplate('results')">
                        <i class="fas fa-trophy"></i>
                        <span>Résultats</span>
                    </div>
                    <div class="template-thumb" onclick="loadTemplate('event')">
                        <i class="fas fa-calendar-alt"></i>
                        <span>Événement</span>
                    </div>
                </div>
            </div>

            <div class="sidebar-section">
                <h3>Éléments</h3>
                <div class="elements-list">
                    <button class="element-btn" onclick="addElement('text')">
                        <i class="fas fa-font"></i>
                        <span>Texte</span>
                    </button>
                    <button class="element-btn" onclick="addElement('image')">
                        <i class="fas fa-image"></i>
                        <span>Image</span>
                    </button>
                    <button class="element-btn" onclick="addElement('shape')">
                        <i class="fas fa-shapes"></i>
                        <span>Forme</span>
                    </button>
                    <button class="element-btn" onclick="addElement('icon')">
                        <i class="fas fa-icons"></i>
                        <span>Icône</span>
                    </button>
                </div>
            </div>

            <div class="sidebar-section">
                <h3>Import</h3>
                <div class="import-zone">
                    <input type="file" id="imageUpload" accept="image/*" multiple hidden>
                    <button class="import-btn" onclick="document.getElementById('imageUpload').click()">
                        <i class="fas fa-cloud-upload-alt"></i>
                        <span>Importer des images</span>
                    </button>
                    <div id="uploadedImages" class="uploaded-images"></div>
                </div>
            </div>
        </aside>

        <!-- Canvas Area -->
        <main class="editor-canvas-area">
            <div class="canvas-controls">
                <button onclick="zoomOut()" title="Zoom arrière">
                    <i class="fas fa-search-minus"></i>
                </button>
                <span id="zoomLevel">100%</span>
                <button onclick="zoomIn()" title="Zoom avant">
                    <i class="fas fa-search-plus"></i>
                </button>
                <button onclick="resetZoom()" title="Réinitialiser">
                    <i class="fas fa-undo"></i>
                </button>
            </div>
            
            <div class="canvas-wrapper" id="canvasWrapper">
                <div class="poster-canvas" id="posterCanvas">
                    <!-- Dynamic content will be added here -->
                    <div class="canvas-placeholder">
                        <i class="fas fa-plus-circle"></i>
                        <p>Sélectionnez un modèle ou ajoutez des éléments</p>
                    </div>
                </div>
            </div>
        </main>

        <!-- Right Sidebar - Properties -->
        <aside class="editor-sidebar right-sidebar">
            <div class="sidebar-section">
                <h3>Propriétés du poster</h3>
                <div class="property-group">
                    <label>Format</label>
                    <select id="posterFormat" onchange="changePosterFormat()">
                        <option value="portrait">Portrait (A4)</option>
                        <option value="landscape">Paysage (A4)</option>
                        <option value="square">Carré (Instagram)</option>
                        <option value="story">Story (9:16)</option>
                    </select>
                </div>
                <div class="property-group">
                    <label>Couleur de fond</label>
                    <div class="color-picker-wrapper">
                        <input type="color" id="bgColor" value="#1a1a2e" onchange="changeBgColor()">
                        <input type="text" id="bgColorText" value="#1a1a2e" onchange="changeBgColorText()">
                    </div>
                </div>
            </div>

            <div id="elementProperties" class="sidebar-section" style="display: none;">
                <h3>Élément sélectionné</h3>
                
                <!-- Text Properties -->
                <div id="textProperties" class="properties-panel">
                    <div class="property-group">
                        <label>Texte</label>
                        <input type="text" id="textContent" placeholder="Votre texte" oninput="updateTextContent()">
                    </div>
                    <div class="property-group">
                        <label>Police</label>
                        <select id="fontFamily" onchange="updateFontFamily()">
                            <option value="Poppins">Poppins</option>
                            <option value="Arial">Arial</option>
                            <option value="Impact">Impact</option>
                            <option value="Georgia">Georgia</option>
                        </select>
                    </div>
                    <div class="property-row">
                        <div class="property-group half">
                            <label>Taille</label>
                            <input type="number" id="fontSize" value="24" onchange="updateFontSize()">
                        </div>
                        <div class="property-group half">
                            <label>Couleur</label>
                            <input type="color" id="textColor" value="#ffffff" onchange="updateTextColor()">
                        </div>
                    </div>
                    <div class="property-group">
                        <label>Style</label>
                        <div class="style-buttons">
                            <button id="boldBtn" onclick="toggleBold()"><i class="fas fa-bold"></i></button>
                            <button id="italicBtn" onclick="toggleItalic()"><i class="fas fa-italic"></i></button>
                            <button id="underlineBtn" onclick="toggleUnderline()"><i class="fas fa-underline"></i></button>
                        </div>
                    </div>
                    <div class="property-group">
                        <label>Alignement</label>
                        <div class="align-buttons">
                            <button onclick="alignText('left')"><i class="fas fa-align-left"></i></button>
                            <button onclick="alignText('center')"><i class="fas fa-align-center"></i></button>
                            <button onclick="alignText('right')"><i class="fas fa-align-right"></i></button>
                        </div>
                    </div>
                </div>

                <!-- Image Properties -->
                <div id="imageProperties" class="properties-panel" style="display: none;">
                    <div class="property-group">
                        <label>Opacité</label>
                        <input type="range" id="imageOpacity" min="0" max="100" value="100" oninput="updateImageOpacity()">
                    </div>
                    <div class="property-group">
                        <label>Bordure arrondie</label>
                        <input type="range" id="imageBorderRadius" min="0" max="50" value="0" oninput="updateImageBorderRadius()">
                    </div>
                </div>

                <div class="property-group">
                    <label>Position</label>
                    <div class="property-row">
                        <div class="property-group half">
                            <label>X</label>
                            <input type="number" id="posX" onchange="updatePosition()">
                        </div>
                        <div class="property-group half">
                            <label>Y</label>
                            <input type="number" id="posY" onchange="updatePosition()">
                        </div>
                    </div>
                </div>

                <div class="property-actions">
                    <button class="btn btn-outline btn-small" onclick="duplicateElement()">
                        <i class="fas fa-copy"></i> Dupliquer
                    </button>
                    <button class="btn btn-danger btn-small" onclick="deleteElement()">
                        <i class="fas fa-trash"></i> Supprimer
                    </button>
                </div>
            </div>

            <div class="sidebar-section">
                <h3>Calques</h3>
                <div id="layersList" class="layers-list">
                    <p class="empty-state">Aucun élément</p>
                </div>
            </div>
        </aside>
    </div>

    <!-- Export Modal -->
    <div id="exportModal" class="modal">
        <div class="modal-content">
            <button class="modal-close" onclick="closeModal('exportModal')">
                <i class="fas fa-times"></i>
            </button>
            <h2>Exporter votre affiche</h2>
            <div class="export-options">
                <div class="export-option" onclick="downloadPoster('png')">
                    <i class="fas fa-file-image"></i>
                    <h4>PNG</h4>
                    <p>Haute qualité, fond transparent</p>
                </div>
                <div class="export-option" onclick="downloadPoster('jpg')">
                    <i class="fas fa-file-image"></i>
                    <h4>JPG</h4>
                    <p>Taille réduite, idéal web</p>
                </div>
                <div class="export-option" onclick="downloadPoster('pdf')">
                    <i class="fas fa-file-pdf"></i>
                    <h4>PDF</h4>
                    <p>Prêt pour l'impression</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Hidden file input for images -->
    <input type="file" id="addImageInput" accept="image/*" hidden>

    <script src="[cdnjs.cloudflare.com](https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js)"></script>
    <script src="[cdnjs.cloudflare.com](https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js)"></script>
    <script src="js/editor.js"></script>
</body>
</html>



      
