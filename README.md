# Portfolio Data Analyst Premium - ANGORAN Kouamé Gilles

## 🎯 À Propos du Projet

Portfolio professionnel Single Page moderne et épuré pour un Data Analyst, conçu avec une identité visuelle premium et des interactions fluides. Le site met en valeur les compétences techniques, les projets réalisés et l'expertise en analyse de données et Business Intelligence.

---

## ✨ Fonctionnalités Actuellement Implémentées

### ✅ Design & Style
- **Palette de couleurs premium** : Beige clair (#F3EDE4), Bleu nuit (#0F1B2D), Or/Moutarde (#C89B3C)
- **Style Bento Grid** : Cartes avec coins très arrondis (24px+) et bordures fines
- **Typographie moderne** : Police Inter avec graisses variées pour hiérarchie visuelle
- **Responsive Design** : Adaptation complète mobile, tablette et desktop
- **Ombres et effets** : Ombres portées légères pour effet de profondeur

### ✅ Sections Complètes
### ✅ Sections Complètes (Dans l'ordre)
1. **Header** - Navigation sticky avec logo "AKG" doré : Accueil | Impact | Projets | Expériences | Compétences | CV & Certificats
2. **Hero Section (Accueil)** : Présentation avec nom, rôle et carte "Profil orienté impact"
3. **Impact Stats** : 4 cartes statistiques (9 dashboards, 7 projets, -40% temps, 85-92% précision)
4. **Projets** - Section complète structurée en 5 sous-sections :
   - **Projets Phares** : 2 réalisations majeures (Holt-Winters, Aide Humanitaire 10M$)
   - **Projets Statistiques** : 2 projets (Segmentation ACM/Clustering, Régression Linéaire)
   - **Projets Excel VBA & Applications Business** : 6 applications (Caisse, Ventes, Gestion Commerciale, Abattages, Gantt, Stock)
   - **Projets Power BI & Dashboards Analytiques** : 3 dashboards (Analyses Commerciales, Segmentation Client, Tableau de Bord Ventes)
   - **Web Scraping & Extraction de Données** : 1 démonstration vidéo Python
5. **Expériences** : Timeline chronologique (INSSEDS, Freelance) avec réalisations détaillées
6. **Compétences** : Tags et catégories (Langages, BI, Analyse, Data Engineering)
7. **CV & Certificats** : Section avec 3 cartes (CV téléchargeable + 2 certificats Power BI et Excel avec options "Voir en ligne")
8. **Footer/Contact** : Fond bleu nuit avec coordonnées et réseaux sociaux

### ✅ Interactions JavaScript
- **Smooth Scroll** : Navigation fluide entre les sections
- **Animations Fade-in** : Apparition progressive au défilement (Intersection Observer)
- **Effets Hover** : Élévation des cartes avec ombres accentuées
- **Header dynamique** : Ajout d'ombre au scroll
- **Active Nav Link** : Mise en surbrillance du lien actif selon la section
- **Scroll to Top** : Bouton de retour en haut avec animation
- **Counter Animation** : Animation des chiffres statistiques
- **Parallax subtil** : Effet de profondeur sur la section Hero
- **Mobile Menu** : Toggle responsive pour navigation mobile

### ✅ Accessibilité & Performance
- **Semantic HTML** : Structure avec balises appropriées
- **ARIA Labels** : Pour les boutons et liens sociaux
- **Icons Font Awesome** : Via CDN pour icônes élégantes
- **Google Fonts** : Police Inter optimisée
- **Console personnalisé** : Message d'accueil pour développeurs curieux

---

## 📁 Structure des Fichiers

```
portfolio-data-analyst/
│
├── index.html           # Structure HTML complète
├── css/
│   └── style.css        # Styles CSS (Bento Grid, animations, responsive)
├── js/
│   └── main.js          # Interactions JavaScript
└── README.md            # Documentation du projet
```

---

## 🚀 Points d'Entrée Fonctionnels

### Page Principale
- **URI** : `/index.html`
- **Sections (dans l'ordre)** :
  - `#home` - Accueil (Hero Section)
  - `#impact` - Statistiques d'impact
  - `#projects` - Projets (Phares, Statistiques, Excel VBA, Power BI, Web Scraping)
  - `#experience` - Expériences professionnelles
  - `#skills` - Compétences techniques
  - `#certificates` - CV & Certificats
  - `#contact` - Coordonnées et réseaux sociaux (Footer)

### Navigation
Menu : **Accueil | Impact | Projets | Expériences | Compétences | CV & Certificats**
Tous les liens de navigation fonctionnent avec smooth scroll vers les sections correspondantes.

---

## 🎨 Palette de Couleurs

| Élément | Couleur | Code Hex |
|---------|---------|----------|
| Fond principal | Beige clair | `#F3EDE4` |
| Cartes | Blanc | `#FFFFFF` |
| Texte principal | Bleu nuit | `#0F1B2D` |
| Texte secondaire | Gris anthracite | `#374151` |
| Accent/CTA | Or/Moutarde | `#C89B3C` |
| Bordures | Beige foncé | `#E7DCCB` |

---

## 🔧 Technologies Utilisées

- **HTML5** : Structure sémantique
- **CSS3** : Variables CSS, Grid, Flexbox, Animations
- **JavaScript (Vanilla)** : Interactions, Intersection Observer, Smooth Scroll
- **Font Awesome 6.4.0** : Icônes vectorielles
- **Google Fonts (Inter)** : Typographie moderne

---

## 📝 Fonctionnalités Non Encore Implémentées

### 🔜 Améliorations Futures Suggérées

1. **Formulaire de Contact**
   - Intégration d'un formulaire fonctionnel avec validation
   - Possibilité d'utiliser un service comme Formspree ou EmailJS

2. **Blog/Articles**
   - Section pour partager des articles sur la data
   - Possibilité d'intégrer Medium RSS feed

3. **Projets Détaillés**
   - Pages dédiées pour chaque projet avec images et démos
   - Modales ou pages séparées pour cas d'usage détaillés

4. **Dark Mode**
   - Toggle pour basculer entre mode clair et sombre
   - Préférence utilisateur sauvegardée dans localStorage

5. **Témoignages/Recommandations**
   - Slider de témoignages clients ou collègues
   - Intégration de recommandations LinkedIn

6. **Section CV Téléchargeable**
   - Bouton pour télécharger le CV en PDF
   - Version imprimable optimisée

7. **Localisation Multilingue**
   - Français/Anglais toggle
   - i18n pour internationalisation

8. **Intégration Analytics**
   - Google Analytics ou Plausible
   - Tracking des interactions utilisateurs

9. **Animations Avancées**
   - GSAP pour animations plus complexes
   - Lottie pour animations vectorielles

10. **Backend Integration**
    - API pour récupérer projets depuis une base de données
    - CMS headless pour gestion de contenu

---

## 🎯 Prochaines Étapes Recommandées

### Priorité Haute 🔴
1. **Ajouter les liens réseaux sociaux réels**
   - Remplacer les `#` par les vrais liens LinkedIn, GitHub, etc.

2. **Personnaliser les projets**
   - Ajouter des projets réels avec images et liens
   - Intégrer des captures d'écran de dashboards

3. **Optimisation SEO**
   - Ajouter les meta tags (description, keywords, Open Graph)
   - Implémenter un sitemap.xml

### Priorité Moyenne 🟡
4. **Formulaire de contact fonctionnel**
   - Intégrer FormSubmit ou EmailJS

5. **Images optimisées**
   - Ajouter des visuels de projets (format WebP)
   - Lazy loading pour les images

6. **Tests cross-browser**
   - Vérifier la compatibilité sur tous les navigateurs
   - Tester les performances Lighthouse

### Priorité Basse 🟢
7. **PWA (Progressive Web App)**
   - Ajouter manifest.json
   - Service Worker pour offline

8. **Animations avancées**
   - Ajouter des micro-interactions
   - Animations au survol plus sophistiquées

---

## 📊 Modèles de Données

### Projet
```javascript
{
  id: String,
  title: String,
  description: String,
  icon: String (Font Awesome class),
  tags: Array[String],
  result: {
    icon: String,
    value: String,
    label: String
  },
  images: Array[String],
  link: String (optional)
}
```

### Expérience
```javascript
{
  id: String,
  role: String,
  company: String,
  period: String,
  icon: String (Font Awesome class),
  achievements: Array[String]
}
```

### Compétence
```javascript
{
  category: String,
  icon: String,
  skills: Array[{
    name: String,
    tools: Array[String]
  }]
}
```

---

## 🌐 Déploiement

### Pour publier votre site :
1. Rendez-vous dans l'onglet **Publish** de l'interface
2. Cliquez sur **Publier** pour déployer automatiquement
3. Récupérez l'URL publique de votre portfolio

### Hébergement alternatif :
- **Netlify** : Déploiement gratuit avec CI/CD
- **Vercel** : Déploiement rapide pour sites statiques
- **GitHub Pages** : Hébergement gratuit via repository Git
- **Cloudflare Pages** : Performance optimale avec CDN global

---

## 📞 Contact

**ANGORAN Kouamé Gilles**
- 📍 Abidjan, Côte d'Ivoire
- 📱 +225 07 49 34 94 03
- 📧 gilleangoran@gmail.com

---

## 📜 Licence

© 2026 ANGORAN Kouamé Gilles. Tous droits réservés.

---

## 🙏 Crédits

- **Fonts** : Google Fonts (Inter)
- **Icons** : Font Awesome
- **Design** : Style Bento Grid personnalisé
- **Développement** : Portfolio créé avec HTML, CSS, JavaScript vanilla

---

**Version** : 1.0.0  
**Dernière mise à jour** : 17 Mars 2026