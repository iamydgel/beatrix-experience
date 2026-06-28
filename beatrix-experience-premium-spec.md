# 🎬 Beatrix — Spécification d'Expérience Digitale Premium
### Application du Framework Unifié « Expérience Digitale Premium Awwwards/FWA » au PRD Beatrix v3.0

> **Document de production.** Directement exploitable par une équipe UX, UI, Motion Design et Front-end.
> Le Design System « Precision Dark » (§8 du PRD) est **délibérément ignoré**. L'identité ci-dessous est **totalement reconstruite** à partir du logo fourni (dégradé vert → bleu, « B » cinétique).
> Toutes les valeurs sont numériques, cohérentes et immédiatement exploitables.

---

## 🧭 Étape 0 — Méthode de réflexion (obligatoire, exécutée)

| # | Étape | Résultat pour Beatrix |
|---|---|---|
| 1 | **Comprendre** l'objectif | Rendre les stats sportives *lisibles pour tous* (débutants inclus), donc le visuel doit **réassurer et guider**, jamais intimider. |
| 2 | **Profil psychologique** | Le fan du dimanche, canapé + téléphone, qui veut *comprendre vite* sans paraître ignorants → besoin de **clarté rassurante** et de **récit**, pas de tableaux. |
| 3 | **Émotion principale** | **La lucidité** — « je vois ce qui se passe, je comprends pourquoi ». Secondaires : vivacité (live), confiance (data fiable). |
| 4 | **Rythme de navigation** | **Dynamique sur les live**, **contemplatif sur les analyses**. Deux vitesses, une cohérence. |
| 5 | **Langage visuel** | Transposé du logo : dégradé **vert → bleu**, ligne **swoosh** = trajectoire du jeu. Lumière = data. |
| 6 | **Langage d'animation** | Mouvement **directionnel** (le jeu avance), **élastique** (le ballon rebondit), **réactif** (le live palpite). |
| 7 | **Identité unifiée** | **« La trajectoire lumineuse »** : chaque stat est un point de lumière qui se déplace sur une trajectoire, comme le ballon sur le terrain. |

---

## 📦 1. Vision Créative

| Élément | Description |
|---|---|
| **Concept** | **« Lire le jeu »** — Beatrix transforme un match en une trajectoire lumineuse que l'on suit du coup d'envoi au coup de sifflet final. |
| **Univers** | Un terrain vu d'en haut, la nuit, où chaque donnée est une lumière qui s'allume, se déplace et raconte l'action. |
| **Histoire** | L'utilisateur *suit une trajectoire* : il entre dans un stade nocturne, accompagne le ballon-lumière de stat en stat, et arrive à la compréhension claire du match. |
| **Métaphore** | **La trajectoire / le swoosh.** Reprise directe du logo : la virgule de mouvement du « B » devient le fil conducteur de tout le site. Chaque carte, chaque transition, chaque curseur suit une trajectoire. |
| **Ambiance** | Nocturne, **sport-chic**, vivant, jamais clinquant. La lumière est dense et contrôlée, comme un terrain sous projecteurs. |
| **Valeurs** | Clarté · Vivacité · Confiance · Accessibilité · Modernité |
| **Message** | *« Tu vois ce que les chiffres veulent dire. »* |

> **Pourquoi cette direction est la meilleure :** le logo impose déjà le mouvement (swoosh) et l'énergie (dégradé). Partir de la *trajectoire* au lieu d'un tableau fait basculer Beatrix du statut d'« outil » à celui d'« expérience ». La métaphore est auto-portée par le logo, donc cohérence maximale entre marque et produit. L'objectif business (compréhension > 80% sans aide, PRD §1.3) est servi : on *montre* plutôt qu'on *affiche*.

---

## 📖 2. Storytelling UX — Parcours écran par écran

> Chaque écran est un chapitre. La trajectoire lumineuse court du premier au dernier.

### Chapitre 0 — Loader / « L'entrée dans le stade »

| Paramètre | Contenu |
|---|---|
| **Objectif** | Préparer l'œil, signer la marque, masquer le chargement des données |
| **Émotion** | Attente électrique, promesse de spectacle |
| **Informations** | Logo « B », barre de progression |
| **Priorité** | Logo → progression → fondu |
| **Point d'attention** | Le swoosh du B qui se dessine |
| **CTA** | Aucun (automatique) |
| **Transition** | Le swoosh s'étire en ligne lumineuse qui devient le Hero |

### Chapitre 1 — Accueil / « Que se passe-t-il aujourd'hui ? »

| Paramètre | Contenu |
|---|---|
| **Objectif** | Répondre en 3 s : « quoi, maintenant, et que disent les chiffres » |
| **Émotion** | Vivacité, sentiment de direct |
| **Informations** | Matchs live (palpitants) → matchs à venir → récents + barre de recherche |
| **Priorité** | Live > À venir > Terminés > Recherche |
| **Point d'attention** | Badge **EN DIRECT** pulsant en haut de la première carte |
| **CTA** | « Voir l'analyse → » |
| **Transition** | Camera travel : on **plonge dans la carte match** qui s'agrandit |

### Chapitre 2 — Fiche Match / « Tout sur ce match, sans jargon »

| Paramètre | Contenu |
|---|---|
| **Objectif** | Comprendre le match en < 30 s (PRD §4.2) |
| **Émotion** | Lucidité, maîtrise |
| **Informations** | Résumé → Timeline événements → Analyse comparative |
| **Priorité** | Score > Phrase-contexte > 3 indicateurs > Onglets |
| **Point d'attention** | Le score central, puis la phrase-contexte (le « pourquoi ») |
| **CTA** | Onglets Résumé / Événements / Analyse |
| **Transition** | Sur onglet Événements : la **timeline se déroule** comme une trajectoire verticale. Sur Analyse : les **barres-comparatives poussent** depuis la gauche. |

### Chapitre 3 — Explorer / « Trouver son match »

| Paramètre | Contenu |
|---|---|
| **Objectif** | Filtrer (sport, compétition, statut) rapidement |
| **Émotion** | Contrôle, fluidité |
| **Informations** | Filtres persistants + grille de cartes résultats |
| **Priorité** | Recherche > Filtres > Grille |
| **Point d'attention** | Champ de recherche focus auto |
| **CTA** | Cartes résultats → Fiche Match |
| **Transition** | Au changement de filtre : **morph liquide** des cartes (réorganisation fluide) |

### Chapitre 4 — Fiche Équipe / « Comment joue cette équipe ? »

| Paramètre | Contenu |
|---|---|
| **Objectif** | Saisir le style de jeu d'une équipe |
| **Émotion** | Découverte, intuition |
| **Informations** | En bref > Tendances > Moments clés > Comparaison |
| **Priorité** | Forme récente > Tendances > Moments clés |
| **Point d'attention** | Jauge « Intensité / Pression / Solidité » (PRD §5.4) |
| **CTA** | Voir les matchs de l'équipe |
| **Transition** | Camera travel latéral vers la liste des matchs |

### Chapitre 5 — Favoris & Paramètres / « Mon Beatrix »

| Paramètre | Contenu |
|---|---|
| **Objectif** | Personnaliser, suivre ses équipes |
| **Émotion** | Appropriation, confort |
| **Informations** | Équipes suivies / préférences |
| **Priorité** | Favoris > Réglages |
| **Point d'attention** | Cartes favoris en tête |
| **CTA** | Ajouter / retirer un favori |
| **Transition** | Panneau Paramètres en **slide-over** depuis la droite |

> **Continuité narrative :** à chaque transition, une **ligne lumineuse swoosh** relie visuellement les écrans. L'utilisateur n'a jamais l'impression de « changer de page » mais de **se déplacer le long d'une même trajectoire**.

---

## 🎨 3. Moodboard & Direction Artistique

> Construite **exclusivement** à partir du logo : dégradé vert → bleu, swoosh, luminosité.

### Palette de couleurs

#### Primaires (signature logo)

| Token | HEX | RGB | Usage / Justification psychologique |
|---|---|---|---|
| `--bx-green` | `#00E676` | 0,230,118 | Pôle positif du dégradé. Énergie, vivacité, « ça avance ». Couleur des hausses et du live. |
| `--bx-blue` | `#00B0FF` | 0,176,255 | Pôle冷静/fiabilité du dégradé. Confiance, data, profondeur. Couleur des liens et du focus. |

#### Dégradé signature

| Token | Définition | Justification |
|---|---|---|
| `--bx-gradient-swoosh` | `linear-gradient(120deg, #00E676 0%, #00B0FF 100%)` | **Reprise exacte du logo.** Angle 120° = sensation de mouvement vers l'avant-haut (dynamisme). Le swoosh du B se retrouve sur tous les CTA, la barre live, les séparateurs. |
| `--bx-gradient-glow` | `radial-gradient(circle, rgba(0,176,255,.35) 0%, rgba(0,230,118,0) 70%)` | Halo lumineux derrière les éléments actifs. Crée l'ambiance « terrain sous projecteurs ». |

#### Secondaires & surfaces (fond nocturne pour faire vibrer le dégradé)

| Token | HEX | Usage |
|---|---|---|
| `--bx-bg` | `#06080D` | Fond profond, presque noir-bleuté. Accentue la lecture lumineuse des stats. |
| `--bx-bg-elevated` | `#0C111B` | Élévation niveau 1 (cartes) |
| `--bx-surface` | `#111827` | Surface des cartes et panneaux |
| `--bx-surface-glass` | `rgba(255,255,255,0.04)` | Verre (glassmorphism) |
| `--bx-border` | `rgba(255,255,255,0.08)` | Bordures subtiles |
| `--bx-border-strong` | `rgba(0,176,255,0.30)` | Bordure focus/active (bleu signature) |

#### Texte

| Token | HEX | Usage |
|---|---|---|
| `--bx-text` | `#F1F5F9` | Texte principal (contraste 16.2:1 sur bg → WCAG AAA) |
| `--bx-text-muted` | `#94A3B8` | Secondaire, labels, dates (contraste 6.9:1 → AA) |
| `--bx-text-subtle` | `#64748B` | Tertiaire, légendes |

#### Sémantiques (harmonisées au dégradé, conformes PRD §5.3)

| Token | HEX | Sémantique | Rationale |
|---|---|---|---|
| `--bx-positive` | `#00E676` | Au-dessus de la moyenne / bon signe | = pôle vert du logo : cohérence maximale |
| `--bx-negative` | `#FF4D6D` | En dessous / alerte | Rouge-rosé chaud, complémentaire au vert, lisible sur fond sombre (contraste 5.1:1) |
| `--bx-warning` | `#FFB020` | À surveiller | Ambre, distinct du vert/bleu, signal d'attention neutre |
| `--bx-live` | `#FF3B5C` | Badge « En direct » | Rouge pulsant, urgence, distinct du `negative` (plus saturé) |

> **Justification psychologique d'ensemble :** fond nocturne + dégradé lumineux = métaphore du **stade éclairé la nuit**. Les données *brillent*, donc l'attention va naturellement vers elles — exactement ce que demande le PRD (« un chiffre = une phrase »).

### Typographie

| Usage | Police | Graisse | Tailles (desktop / mobile) | Justification |
|---|---|---|---|---|
| **Display / H1** | `Space Grotesk` | 700 | 56/40 px | Géométrique au caractère tech, proche du lettrage du logo. Personnalité forte sans être aggressive. |
| **Titres H2–H4** | `Space Grotesk` | 600/500 | 40/32, 28/24, 22/20 px | Cohérence de famille, hiérarchie par graisse. |
| **Corps / UI** | `Inter` | 400/500 | 16/15 px | Lisibilité maximale sur écran (PRD §7.1 : « tout lisible sur téléphone »). |
| **Chiffres / scores / stats** | `JetBrains Mono` | 600 | selon contexte | **Alignement tabulaire parfait** des colonnes de stats (PRD §8.2 conservé sur ce point). |
| **Labels / captions** | `Inter` | 500 uppercase, letter-spacing 0.04em | 12/11 px | Étiquettes discrètes type « EN DIRECT ». |

- **Interlignage titres** : 1.05 ; **corps** : 1.6 (lisibilité).
- **Tracking titres** : −0.02em (resserre le caractère tech).
- **Subset + preload** des 3 familles (Display, Body, Mono) pour le LCP.

### Iconographie

| Paramètre | Choix | Justification |
|---|---|---|
| **Style** | Linéaire, **2 px** d'épaisseur, extrémités arrondies | Cohérent avec le trait fin du swoosh logo. Doux, accessible. |
| **Bibliothèque** | **Lucide React** (PRD §6 conservé) | Cohérent, léger, tree-shakable. |
| **Rayon des coins** | 2 px (icônes) — 12/16/20 px (composants) | Coins doux mais pas enfantins. |
| **Grille** | 24×24 px, clé optique 2 px | Alignement parfait entre icônes. |
| **Icônes sport custom**** | Ballon, corner, carton dessinés au trait reprenant la **courbure du swoosh** | Signature de marque. |

### Photographie / Illustration

| Paramètre | Choix |
|---|---|
| **Style** | Visuels **sombre-dominants**, sujets éclairés ras (technique *low-key*), stades nocturnes |
| **Traitement** | Désaturation −30%, overlay dégradé vert→bleu en mode *overlay* 25%, **grain 35%** |
| **Composition** | Beaucoup d'espace négatif ; le sujet décalé pour laisser respirer le texte |
| **Justification** | Renforce l'ambiance « projecteurs », ne concurrence pas les chiffres lumineux. |

### Textures & Matières

| Paramètre | Valeur | Justification |
|---|---|---|
| **Grain** | Intensité 30%, taille 1.2 px, opacité 0.04 | Évite le « plat numérique », apporte du premium. |
| **Verre (glass)** | bg `rgba(255,255,255,0.04)`, blur 16px, bordure 1px `rgba(255,255,255,0.08)` | Cartes live, navbar. Profondeur sans surcharge. |
| **Profondeur** | Ombres z-translate (voir Elevation) | Sensation 3D subtile, soutient la métaphore du terrain. |
| **Reflet gradient** | Linéature 1px dégradé swoosh sur bordures actives | Signature. |

### Style global

> **HYBRID justifié :**
> - **Glassmorphism** (cartes, navbar) → pour la profondeur et le premium.
> - **Minimalism** (hiérarchie, espace) → pour la lisibilité exigée par le PRD.
> - **Punctual Maximalism** (live, hero) → pour l'émotion et le spectacle *au bon moment*.

> On évite le Brutalism (trop froid pour un public grand public) et le Neumorphism (trop daté, faible contraste → échec a11y).

---

## 🗺️ 4. Architecture UX

### Arborescence

```
Beatrix/
├── 🏠 Accueil              → matchs live + à venir + récents + recherche
│
├── 🔍 Explorer             → recherche + filtres (sport, compétition, statut)
│
├── 📊 Fiche Match [id]
│   ├── Vue Résumé          (défaut)
│   ├── Vue Événements      (timeline)
│   └── Vue Analyse         (comparatif)
│
├── 🏆 Fiche Équipe [id]    → forme, tendances, moments clés, comparaison
│
├── 🔔 Mes Favoris          (connecté)
│
└── ⚙️ Paramètres           (slide-over) → langue, sport défaut, affichage
```

### Navigation

| Élément | Desktop | Mobile |
|---|---|---|
| **Menu principal** | Barre top fixe, fond glass, logo gauche, liens centre, recherche droite | Barre bottom fixe (5 entrées icône + label), top-bar réduite (logo + recherche) |
| **Menu secondaire** | Onglets sous le titre de page (Résumé/Événements/Analyse) | Même, scroll horizontal avec indicateur swoosh |
| **Fil d'Ariane** | Sur Fiche Match : `Accueil › Competition › Match` | Masqué, remplacé par bouton retour |
| **Navigation contextuelle** | Lien « Équipe » depuis une carte match | Idem |

### Hiérarchie de l'information

| Niveau | Exemple |
|---|---|
| **Vu en 1er** | Score, badge live, phrase-contexte |
| **Secondaire** | Les 3 indicateurs clés, jauges |
| **Caché mais accessible** | Données brutes (analyste), glossaire, paramètres |

### Wireframe textuel — Accueil (desktop, 12 colonnes)

```
┌──────────────────────────────────────────────────────────┐
│  [B logo]   Accueil  Explorer  Favoris        [🔍][ ⚙ ]  │  Navbar glass
├──────────────────────────────────────────────────────────┤
│                                                            │
│   CE SOIR                                                  │  H1 Display
│   Suivez chaque match comme une trajectoire.               │
│                                                            │
│   ┌──── EN DIRECT ────────────────┐  ┌──── 21:00 ────────┐ │
│   │ 🔴 LIVE   75'                  │  │ À venir           │ │  Cartes live
│   │  Lyon      2 — 1   Marseille   │  │ PSG – Monaco      │ │  (stagger)
│   │  🎯7  📐5  🤚8                  │  │ « PSG marque tôt »│ │
│   │  [Voir l'analyse →]            │  └────────────────────┘ │
│   └────────────────────────────────┘                         │
│                                                              │
│   ─── Terminés récemment ───────────────────────────────    │
│   [ carte ] [ carte ] [ carte ]                            │  Grille
└────────────────────────────────────────────────────────────┘
│  [B]  À propos · Mentions · API        © Beatrix 2026      │  Footer
```

### Responsive

| Breakpoint | Adaptations spécifiques |
|---|---|
| **Desktop > 1024px** | Grille 12 col, gouttière 24px, marge 64px. Cartes en rangées de 3. Curseur custom actif. |
| **Tablet 768–1024px** | Grille 8 col, marge 40px. Cartes en 2 colonnes. Parallax réduit à 50%. |
| **Mobile < 768px** | Grille 4 col, marge 20px. Cartes pleine largeur empilées. **Curseur custom désactivé** (touch). Navbar en barre bottom. Timeline horizontale scrollable. |

---

## 🖼️ 5. Direction UI

### Positionnement

| Paramètre | Valeur |
|---|---|
| **Grille** | 12 colonnes (desktop), gouttière 24px, marge extérieure 64px |
| **Alignements** | Texte gauche par défaut ; chiffres alignés à droite (tabular-nums) |
| **Spacing** | Échelle 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128 px |

### Typographie (UI)

| Niveau | Usage | Specs |
|---|---|---|
| **H1** | Titre page | Space Grotesk 700, 56/40px, lh 1.05, ls −0.02em |
| **H2** | Section | 40/32px, 600 |
| **H3** | Sous-section | 28/24px, 600 |
| **H4** | Composant | 22/20px, 500 |
| **Body** | Corps | Inter 400, 16/15px, lh 1.6 |
| **Label** | UI / badges | Inter 500, 12px, uppercase, ls 0.04em |
| **Caption** | Légendes | Inter 400, 12px, color muted |
| **Stat** | Chiffres | JetBrains Mono 600, tabular-nums |

### Composants clés

**Carte Match (Match Card)** — verre glass, bordure 1px, hover lift + glow swoosh.

**Jauge d'Indicateur** — barre qui se remplit selon le dégradé vert→bleu, scale au scroll-reveal.

**Badge Tendance** — pill avec icône flèche, couleur sémantique, micro-pulse si live.

**CTA primaire** — fond plein dégradé swoosh, texte `#06080D` (contraste 11:1).

### États interactifs (communs à tous composants)

| État | Description |
|---|---|
| **Default** | Repos |
| **Hover** | Scale 1.02, glow gradient, bordure bleue |
| **Focus** | Anneau 2px `--bx-blue` offset 2px |
| **Active** | Scale 0.97 |
| **Disabled** | Opacity 0.4, cursor not-allowed |
| **Loading** | Skeleton shimmer (jamais de blanc — PRD §7.1 règle 4) |
| **Error** | Bordure `--bx-negative` + shake |
| **Success** | Checkmark draw + flash vert |

---

## 🎬 6. Motion Language & Tokens

### Caractéristiques générales

| Caractéristique | Choix | Pourquoi |
|---|---|---|
| **Vitesse dominante** | Médium (400ms) — rapide sur micro (250ms) | Ni léthargique ni nerveux : rassure le débutant, suit le live |
| **Accélération (ease-in)** | `power2.in` | Les éléments « prennent leur élan » comme un joueur |
| **Décélération (ease-out)** | `--ease-out-expo` | Arrêt net et premium, signature Awwwards |
| **Poids** | Moyen-léger | Les chiffres ont une présence sans peser |
| **Inertie** | Faible | Réactif = sensation de direct |
| **Élasticité** | Springs doux sur feedback (boutons, cartes) | Évoque le rebond du ballon |
| **Profondeur (Z)** | Parallaxe multi-couches | Métaphore terrain vu d'en haut |
| **Respiration** | Subtile, permanente, sur éléments live | Le site « respire » comme un stade vivant |

### Motion Tokens

```css
/* ─── Durées ─────────────────────────────────── */
--duration-xs:  150ms;   /* Micro-feedback instantané (hover bouton) */
--duration-s:   250ms;   /* Interactions rapides (état focus)         */
--duration-m:   400ms;   /* Transitions standard (cartes, onglets)    */
--duration-l:   600ms;   /* Transitions importantes (modale)          */
--duration-xl: 1000ms;   /* Animations narratives (loader, hero)      */

/* ─── Delays ─────────────────────────────────── */
--delay-none:    0ms;
--delay-xs:     50ms;
--delay-s:     100ms;
--delay-m:     200ms;
--delay-l:     400ms;
--delay-xl:    800ms;

/* ─── Springs ────────────────────────────────── */
--spring-gentle: { mass: 1, tension: 170, friction: 26 };  /* cartes, badges   */
--spring-snappy: { mass: 1, tension: 280, friction: 20 };  /* boutons, toggles */
--spring-bouncy: { mass: 1, tension: 400, friction: 15 };  /* favoris, succès  */

/* ─── Bezier Presets ─────────────────────────── */
--ease-in-out-smooth: cubic-bezier(0.4,  0,   0.2, 1);
--ease-out-expo:      cubic-bezier(0.16, 1,   0.3, 1);
--ease-in-out-quint:  cubic-bezier(0.83, 0,   0.17, 1);
--ease-spring:        cubic-bezier(0.34, 1.56, 0.64, 1);

/* ─── Opacity ─────────────────────────────────── */
--opacity-subtle: 0.6;
--opacity-medium: 0.8;
--opacity-full:   1;

/* ─── Scale ──────────────────────────────────── */
--scale-subtle: 1.02;
--scale-medium: 1.05;
--scale-large:  1.1;

/* ─── Rotation ───────────────────────────────── */
--rotation-subtle:  2deg;
--rotation-medium:  5deg;
--rotation-large:  15deg;

/* ─── Blur ───────────────────────────────────── */
--blur-subtle:  4px;
--blur-medium:  8px;
--blur-large:  16px;

/* ─── Distance ───────────────────────────────── */
--distance-xs:   8px;
--distance-s:   16px;
--distance-m:   32px;
--distance-l:   64px;
--distance-xl: 128px;
```

> **Pourquoi ces valeurs :** le `ease-out-expo` est la courbe signature du premium (décélération nette, jamais « molle »). Les springs `gentle/snappy` couvrent 90 % des cas sans surcharge cognitive pour les devs. Les durées sont calibrées sur la lecture : 400ms = temps de fixation oculaire, parfait pour révéler une donnée sans frustration.

---

## 🎞️ 7. Storyboard Complet

> Exemple détaillé pour la **page Accueil**. Même niveau de précision attendu sur chaque section.

### Entrée de la section (après loader)

| Ordre | Élément | Animation | Durée | Easing | Delay |
|---|---|---|---|---|---|
| 1 | Trait swoosh lumineux | Dessin du tracé (stroke-dashoffset 100→0), part du logo | 1000ms | `--ease-out-expo` | 0ms |
| 2 | H1 « CE SOIR » | Reveal mot par mot, translateY 24px + opacity 0→1 | 600ms | `--ease-out-expo` | 400ms |
| 3 | Sous-titre | Idem, delay 120ms par mot | 600ms | expo | 600ms |
| 4 | Cartes live | Stagger : translateY 32px + opacity, 1 carte / 100ms | 500ms | `--spring-gentle` | 900ms |
| 5 | Badge EN DIRECT | Scale 0→1 + début pulse permanent | 400ms | `--ease-spring` | 1100ms |

**Ressenti :** l'œil suit le swoosh → le titre → les cartes. La pulsation live ancre l'attention sur le direct. **Storytelling :** on vient d'entrer dans le stade, les projecteurs s'allument.

### Vie de la section — animations permanentes

| Couche | Paramètres | Justification |
|---|---|---|
| **Parallax** | Fond stade : amplitude 40px (scroll velocity). Avant-plan cartes : 12px. Direction verticale. | Profondeur terrain. |
| **Background** | Halo gradient radial qui se déplace lentement (loop 20s), opacité 0.15→0.3 | « Respiration » du stade. |
| **Particules** | 40 particules, vitesse 0.3px/frame, dérive douce, opacité 0.3 | Poussière dans les projecteurs (subtil, jamais gênant). |
| **Lumière** | Pointer-light suit curseur : radial bleu, rayon 300px, opacité 0.08 | Interaction spatiale, sensation de contrôle. |
| **Mouse tracking** | Cartes : rotateY/X max 4deg selon position souris | Réactivité, premium. |
| **Floating** | Icônes live : translateY ±4px, loop 3s ease-in-out | Vivant sans agresser. |
| **Cards** | Au scroll velocity élevé : tiltDirectionnel + motion-blur 2px | Sensation de vitesse = live. |
| **Badge live** | Pulse scale 1→1.08 + opacité halo 0.4→0.8, loop 1.2s | Urgence/attention (PRD badge live). |

### Sortie de section (scroll vers Fiche Match)

| Élément | Animation | Durée | Easing |
|---|---|---|---|
| Carte cliquée | Scale 1→1.4, translate vers centre, les autres reculent + flou 8px | 600ms | `--ease-in-out-quint` |
| Fond | Zoom ×1.1 + fondu vers bg | 600ms | expo |
| Swoosh | S'étire en diagonale pour devenir séparateur de la page suivante | 500ms | expo |

**Continuité :** le swoosh relie visuellement Accueil → Fiche Match. L'utilisateur a « suivi la trajectoire ».

---

## 🔁 8. Transitions Iconiques entre Sections

> **Règle du framework : jamais de simple fade.** Chaque transition simule une **caméra virtuelle**.

| # | De → Vers | Type | Durée | Easing | Direction | Détails | Justification |
|---|---|---|---|---|---|---|---|
| T1 | Loader → Accueil | **Morph** | 1000ms | `--ease-out-expo` | — | Le swoosh du logo B s'étire et devient le trait lumineux du Hero | Signature de marque ; entrée en scène. |
| T2 | Accueil → Fiche Match | **Camera travel (zoom avant)** | 600ms | `--ease-in-out-quint` | Z avant | Carte cliquée grossit, fond fonce, swoosh devient séparateur | « On entre dans le match ». |
| T3 | Fiche Match : Résumé → Événements | **Mask reveal vertical** | 500ms | `--ease-out-expo` | Haut→Bas | La timeline se révèle sous un masque qui glisse, comme un rideau de lumière | Déroulement chronologique = métaphore temporelle. |
| T4 | Événements → Analyse | **Scale + slide** | 500ms | `--spring-gentle` | Gauche→Droite | Les barres comparatives poussent depuis la gauche | Comparaison = opposition gauche/droite. |
| T5 | Vers Explorer | **Liquid morph** des cartes | 600ms | `--ease-in-out-quint` | — | Les cartes se réorganisent fluide (FLIP) au changement de filtre | Pas de rupture, l'œil garde le fil. |
| T6 | Vers Favoris/Paramètres | **Curtain (slide-over)** | 400ms | `--ease-out-expo` | Droite→Gauche | Panneau coulissant, backdrop blur 8px | Secondaire, ne coupe pas le flux. |
| T7 | Retour arrière | **Camera travel (zoom arrière)** | 500ms | `--ease-out-expo` | Z arrière | Inverse de T2 | Cohérence spatiale (on « recule »). |

---

## 🧩 9. Animations par Composant

> Toutes les valeurs sont exactes. Format : `Durée · Easing · Delay · Ordre`.

### Navbar
| Action | Specs | Justifications |
|---|---|---|
| Apparition chargement | translateY(−24px)→0 + opacity, 600ms, expo, delay 200ms | Signe l'arrivée, en dernier (priorité au contenu). |
| Scroll down | Masquage translateY(−100%), 300ms, expo | Plus d'espace de lecture. |
| Scroll up | Réapparition, 300ms | Retour rapide à la nav. |
| Hover item | Underline swoosh draw L→R, 250ms, expo + color text→blue | Feedback clair, signature. |
| État actif | Underline permanent dégradé + texte bleu | Repérage. |
| Menu mobile ouverture | Diapositive bas→haut full-screen, 400ms, expo ; items stagger 60ms | Mobile-first (PRD §7.1). |

### Hero
| Élément | Specs |
|---|---|
| Swoosh de fond | Loop dessin 4s, opacité 0.2 |
| Titre | Split mot, stagger 80ms, 600ms, expo |
| Sous-titre | Idem, delay 200ms après titre |
| CTA principal | Scale 0.9→1 + glow pulse loop 2s (halo dégradé 0.3→0.6) |
| Scroll indicator | Bounce translateY 0→8px, loop 1.5s ease-in-out, opacité 1→0.3 |

### CTA (tous états) — voir tableau §5 États interactifs + :
| État | Animation |
|---|---|
| Hover | Scale 1.05, glow halo dégradé, 250ms `--ease-out-expo` |
| Active | Scale 0.95, 150ms `power2.in`, ripple radial depuis pointeur |
| Loading | Texte fondu + spinner rotate 800ms linéaire |
| Success | Checkmark draw 400ms + flash vert 200ms |

### Cards (Match Card)
| Action | Specs |
|---|---|
| Apparition | Stagger 80ms, translateY(32px)+opacity, 500ms, `--spring-gentle` |
| Hover | translateY(−6px), glow halo, bordure bleue, 300ms expo |
| Hover (3D) | rotateX/Y max 4deg selon curseur, 200ms |
| Click | Scale 0.98, 150ms |
| Loading | Skeleton shimmer (gradient mobile L→R, 1.2s loop) |

### Images / visuels
| Action | Specs |
|---|---|
| Apparition | Scale 1.1→1 + opacity, 800ms, expo (Ken Burns léger) |
| Hover | Scale 1.05 + overlay dégradé, 400ms |
| Lazy | Blur-up : flou 12px→0, 600ms |

### Titres (scroll-triggered)
| Action | Specs |
|---|---|
| Reveal | Split par mot, stagger 60ms, translateY 20px + opacity, 500ms expo |
| Parallax | translateY lié au scroll, amplitude 30px |

### Paragraphes / phrases-contexte
| Action | Specs |
|---|---|
| Apparition | Line-by-line fade, stagger 100ms, 400ms expo |
| Lecture | Sur focus/scroll lent : highlight subtil du chiffre clé (background bleu fade 300ms) |

### Lists / filtres
| Action | Specs |
|---|---|
| Apparition | Stagger slide-in gauche, 50ms par item, 300ms expo |
| Hover item | Indent +8px, couleur text→blue, 200ms |

### Testimonials / témoignages (v2)
| Action | Specs |
|---|---|
| Carousel | Slide 3D rotate, 500ms `--ease-in-out-quint`, autoplay 6s pause on hover |

### Projects / grille matchs
| Action | Specs |
|---|---|
| Grille | Stagger, 60ms, 500ms |
| Hover | Preview + overlay + scale 1.05, 300ms |
| Click | Expand vers Fiche Match (transition T2) |

### Forms (connexion, recherche)
| Action | Specs |
|---|---|
| Input focus | Bordure → bleu + glow halo + label float haut, 250ms expo |
| Validation ok | Checkmark + bordure verte, 300ms |
| Erreur | Shake (translateX ±6px ×3) + bordure rouge, 400ms |
| Submit | Loading spinner + texte fondu, success confetti léger |

### Footer
| Action | Specs |
|---|---|
| Apparition | Fade + slide-up, 500ms expo au scroll-reveal |
| Liens hover | Underline draw + couleur blue, 200ms |

### Menu Mobile
| Action | Specs |
|---|---|
| Ouverture | Slide bas→haut full-screen, 400ms expo ; items stagger 50ms slide-droite |
| Fermeture | Reverse, 300ms |

### Loader
| Action | Specs |
|---|---|
| Type | Créatif : swoosh du B qui se dessine (stroke-dashoffset) + barre de progression dégradée |
| Durée | 1000ms min, jusqu'à chargement données |
| Sortie | Swoosh s'étire → devient séparateur Hero (T1) |

### Modal
| Action | Specs |
|---|---|
| Ouverture | Scale 0.95→1 + opacity, 300ms `--ease-out-expo` |
| Backdrop | Blur 8px + opacity 0→0.6, 300ms |
| Fermeture | Reverse, 200ms |

### Tooltip / glossaire (PRD §7.3)
| Action | Specs |
|---|---|
| Apparition | Scale 0.9→1 + opacity, 200ms expo, delay 300ms avant show |
| Position | Auto (flip si débordement) |

### Accordion (Fiche Équipe)
| Action | Specs |
|---|---|
| Ouverture | height auto (spring gentle), icône rotate 180°, 400ms |
| Fermeture | Reverse |

### Carousel / Timeline Événements
| Action | Specs |
|---|---|
| Slide | Snap + momentum, 400ms `--ease-out-expo` |
| Auto-scroll timeline live | Avance automatique synchronisée sur le minuteur réel du match |

### Gallery / lightbox
| Action | Specs |
|---|---|
| Lightbox | Scale from thumb + opacity, 400ms ; nav flèches + swipe |

### Video (résumés v2)
| Action | Specs |
|---|---|
| Play/pause | Fondu contrôles 200ms ; barre progression dégradée |

---

## ✨ 10. Micro-interactions

| Interaction | Déclencheur | Animation | Timing | Feedback | Justification (UX / émotion / storytelling) |
|---|---|---|---|---|---|
| **Hover bouton** | Hover | Scale 1.05 + glow halo | 250ms / `--ease-out-expo` | Visuel | UX : zone cliquable claire. Émotion : réactif. Story : « ça vibre ». |
| **Click bouton** | Click | Scale 0.95 + ripple radial | 150ms / `power2.in` | Visuel | Confirmation tactile. |
| **Ajout favori ★** | Click | Star fill + burst particules vertes + bounce | 400ms / `--spring-bouncy` | Visuel (+ haptique mobile) | Récompense, joie. |
| **Focus input** | Focus | Bordure bleue + label float + glow | 250ms / expo | Visuel | Oriente la saisie. |
| **Succès form** | Submit ok | Checkmark draw + flash vert | 400ms / expo | Visuel | Confiance. |
| **Erreur form** | Submit ko | Shake + bordure rouge + message slide | 400ms | Visuel | Alerte sans angoisse. |
| **Drag carte timeline** | Drag | Rotation axiale ±3deg + ombre accrue | spring snappy | Visuel | Sensation de manipulation physique. |
| **Swipe carousel** | Swipe | Snap + momentum | 400ms / expo | Visuel (+ haptique) | Naturel sur mobile. |
| **Live tick (nouvelle stat)** | Data push | Chiffre scale 1.2 + flash vert + count-up | 600ms / expo | Visuel | « Le direct entre par les yeux ». |
| **Changement de filtre** | Click | Cartes FLIP morph | 500ms / quint | Visuel | Pas de rupture de lecture. |
| **Hover terme glossaire** | Hover | Souligné pointillé + tooltip | 200ms / delay 300ms | Visuel | Aide contextuelle (PRD §7.3). |

---

## 📜 11. Scroll Experience

| Technique | Usage | Détails |
|---|---|---|
| **Scroll reveal** | Tous les blocs | Intersection Observer, stagger |
| **Sticky** | En-tête de Fiche Match (score) | Reste visible pendant le scroll des stats |
| **Pinning** | Hero accueil | Épinglé 100vh, contenu suivant le chevauche (parallaxe) |
| **Scrubbing** | Timeline Événements | Avance liée au scroll, comme on « débobine » le match |
| **Camera movement** | Transitions T2/T7 | Zoom Z avant/arrière |
| **Depth / parallaxe** | Couches bg/milieu/avant | Amplitudes 40/20/12 px |
| **Velocity** | Cartes au scroll rapide | Motion-blur + tilt |
| **Momentum** | Listes horizontales | Inertie douce |

| Technologie | Usage | Justification |
|---|---|---|
| **Lenis** | Smooth scroll global | Natif, léger, parfait pour le premium. **Fallback : scroll natif** si `prefers-reduced-motion`. |
| **GSAP ScrollTrigger** | Pinning + scrubbing timeline | Puissant, mature. |
| **Framer Motion** | Révélations React, `useScroll`/`useTransform` | Aligné stack PRD (Framer Motion v12). |
| **Intersection Observer** | Reveal simple | Zero-dependency, perf maximale. |

> **Alternative perf :** si ScrollTrigger alourdit, remplacer le pinning par `position: sticky` CSS + Framer `useScroll`.

---

## 🖱️ 12. Cursor Experience

> **Desktop uniquement.** Désactivé sur touch (mobile/tablet) — retour au curseur natif.

| Paramètre | Valeur | Justification |
|---|---|---|
| **Forme** | Cercle | Doux, premium |
| **Taille** | 14px (pointeur) + 36px (halo follower) | Deux couches : précision + ambiance |
| **Couleur** | Bordure `--bx-blue` 1.5px, fond transparent | Lisible sur fond sombre, signature |
| **Blend mode** | `difference` sur halo | Contraste auto sur tout fond |
| **Blur** | Halo : blur 2px | Nébuleuse lumineuse |
| **Opacité** | 0.9 | Présent sans masquer |
| **Spring follower** | `--spring-gentle` (mass 1, tension 170, friction 26) | Traînée douce = swoosh vivant |
| **Stretch** | Selon vélocité (max 1.6×, rotation selon direction) | Évoque la vitesse du jeu |
| **Magnétisme** | Attiré vers CTA (rayon 60px), snap au centre | Confort, guide vers l'action |

| État | Comportement |
|---|---|
| **Default** | Halo suit en spring |
| **Hover bouton/CTA** | Pointeur scale 1→1.5, halo rempli dégradé, blend normal |
| **Hover lien** | Pointeur → petit cercle plein + underline draw |
| **Hover carte match** | Halo agrandi 48px + icône « → » au centre |
| **Hover image/vidéo** | Scale halo + icône play/zoom |
| **Drag** | Stretch vertical + rotation |
| **Click** | Scale down 0.8 + ripple |
| **Hover chiffre/stat** | Mini tooltip auto contextuel |

> **Pourquoi ce curseur :** le swoosh traînant reproduit le **mouvement du logo**. Chaque déplacement rappelle la marque. L'émotion : « je contrôle la trajectoire ».

---

## 💡 13. Lighting System

| Type | Usage | Paramètres |
|---|---|---|
| **Glow** | Derrière CTA, badges live | radial dégradé, rayon 200px, opacité 0.3→0.6 au hover |
| **Gradient** | Swoosh de fond, séparateurs | linear 120° vert→bleu |
| **Bloom** | Chiffres clés en hover | Diffusion lumineuse 6px |
| **Vignette** | Bords de page | radial sombre, opacité 0.4 |
| **Shadow** | Élévation cartes | Voir Elevation |
| **Aura** | Équipes favorites | Halo vert pulsant |
| **Pointer light** | Suit curseur | radial bleu, rayon 300px, opacité 0.08 |
| **Backlight** | Hero | Rétroéclairage dégradé derrière le titre |

| Comportement | Détail |
|---|---|
| **Intensité** | Live = forte ; analyse = douce |
| **Couleur** | Vert = positif/live ; bleu = data/focus ; rouge = alerte |
| **Mouvement** | Pulse 1.2s sur live ; stable ailleurs |
| **Interaction** | Réagit au hover (bloom) et au scroll (parallaxe lumineuse) |

> **Comment la lumière accompagne les transitions :** à chaque changement de section, le halo global **glisse** dans le sens du mouvement, donnant l'impression que le projecteur accompagne la caméra. Émotion : immersion stade.

---

## 🌌 14. Effets Immersifs

> **Règle d'or respectée : aucun effet gratuit.** Chacun sert la narration.

| Effet | Où | Justification (story / émotion / UX) |
|---|---|---|
| **Aura/Glow** | CTA, badges, favoris | Guide l'attention (UX), réconfort (émotion), signature (story). |
| **Bloom** | Chiffres au hover | Met en valeur la donnée = cœur du produit. |
| **Noise/Grain** | Toute la page (overlay global) | Premium, organic, casse le « plastique numérique ». |
| **Particles** | Hero + fond live | Poussière de stade ; immersion. |
| **Distorsion** | Transitions liquid (T5) | Fluidité, pas de rupture. |
| **Glass** | Navbar, cartes live, modale | Profondeur, hiérarchie. |
| **Reflection** | Bordures actives (liseré dégradé) | Signature, raffinement. |
| **Depth** | Parallaxe multi-couches | Métaphore terrain 3D. |

> **Effets explicitement écartés** (justifiés) : *Smoke, Fluides lourds, Refraction* — trop coûteux en perf et peu pertinents pour de la data sportive grand public.

---

## 🧮 15. WebGL

| Technologie | Usage |
|---|---|
| **Three.js / React Three Fiber** | Hero : champ de particules + plan shader dégradé animé |
| **Shaders (fragment)** | Fond stade : dégradé bruité qui bouge lentement (FBM noise) |
| **Post Processing** | Bloom léger sur les particules |
| **Fallback (obligatoire)** | Si WebGL indisponible / `prefers-reduced-motion` / low-perf : image statique (fond stade désaturé) + dégradé CSS |

> **Décision :** WebGL **uniquement sur le Hero**, en *progressive enhancement*. Le reste du site reste DOM/CSS/Canvas2D pour garantir 60fps sur mobile d'entrée de gamme (PRD §7.1 : « tout lisible sur téléphone »).

---

## 🎛️ 16. Design System (reconstruit depuis le logo)

### Color Tokens (récap. §3)

```css
/* Primaires (logo) */
--bx-green:  #00E676;
--bx-blue:   #00B0FF;
--bx-gradient-swoosh: linear-gradient(120deg, #00E676 0%, #00B0FF 100%);

/* Surfaces nocturnes */
--bx-bg:           #06080D;
--bx-bg-elevated:  #0C111B;
--bx-surface:      #111827;
--bx-surface-glass:rgba(255,255,255,0.04);
--bx-border:       rgba(255,255,255,0.08);
--bx-border-strong:rgba(0,176,255,0.30);

/* Texte */
--bx-text:        #F1F5F9;
--bx-text-muted:  #94A3B8;
--bx-text-subtle: #64748B;

/* Sémantiques */
--bx-positive: #00E676;
--bx-negative: #FF4D6D;
--bx-warning:  #FFB020;
--bx-live:     #FF3B5C;
```

### Spacing

```
4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128 px
```

### Radius

| Niveau | Valeur | Usage |
|---|---|---|
| Small | 8px | Badges, inputs |
| Medium | 12px | Boutons |
| Large | 16px | Cartes |
| XL | 24px | Modales, panneaux |
| Full | 9999px | Pills, avatar, cercle curseur |

### Elevation (ombres portées nocturnes + glow)

| Niveau | Valeur | Usage |
|---|---|---|
| 0 | aucune | Repos |
| 1 | `0 2px 8px rgba(0,0,0,0.3)` | Cartes default |
| 2 | `0 8px 24px rgba(0,0,0,0.4)` | Cartes hover |
| 3 | `0 16px 48px rgba(0,0,0,0.5)` + glow bleu 0.15 | Modales |
| Glow | `0 0 24px rgba(0,176,255,0.3)` | Éléments actifs/live |

### Typography

- Familles : Space Grotesk (display), Inter (corps/UI), JetBrains Mono (chiffres)
- Tailles : voir §5
- Graisses : 400/500/600/700
- Espacements : ls titres −0.02em ; labels +0.04em

### Components
Bibliothèque documentée (cf. §5 + §9) : Navbar, Hero, MatchCard, IndicatorGauge, TrendBadge, CTA, Tabs, Timeline, CompareBar, Tooltip/Glossary, Accordion, Modal, MobileNav, Loader, Footer.

### Icons
Lucide React (2px, coins ronds) + icônes sport custom (swoosh). Voir §3.

### Grid
12 col / 24px gouttière / 64px marge (desktop) ; échelle mobile §4.

### Layout patterns
- **Rail live** (cartes horizontales scroll)
- **Split compare** (2 colonnes équipes)
- **Sticky score + scroll stats**
- **Slide-over paramètres**

### Motion Tokens
Voir **§6**.

### Naming convention
- Couleurs : `--bx-<role>` (ex. `--bx-positive`)
- Composants : PascalCase (`MatchCard`)
- Animations : `anim-<verbe>` (ex. `anim-reveal-up`)
- Tokens Framer : `motion.<Element>.<State>`

### Versioning
Design system versionné `vX.Y.Z` (semver) ; tokens source unique (`tokens.css`) consommés par Tailwind `@theme` (PRD §6) et Framer.

---

## 💻 17. Code & Snippets (prêts à l'emploi)

### 17.1 Tokens Tailwind v4 (`app/globals.css`)

```css
@import "tailwindcss";

@theme {
  /* Couleurs Beatrix (logo) */
  --color-bx-green:  #00E676;
  --color-bx-blue:   #00B0FF;
  --color-bx-bg:     #06080D;
  --color-bx-surface:#111827;
  --color-bx-text:   #F1F5F9;
  --color-bx-muted:  #94A3B8;
  --color-bx-positive:#00E676;
  --color-bx-negative:#FF4D6D;
  --color-bx-warning: #FFB020;
  --color-bx-live:    #FF3B5C;

  /* Polices */
  --font-display: "Space Grotesk", sans-serif;
  --font-sans:    "Inter", sans-serif;
  --font-mono:    "JetBrains Mono", monospace;
}
```

### 17.2 Bouton CTA primaire (Framer Motion)

```tsx
"use client";
import { motion } from "framer-motion";

export function CtaPrimary({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden rounded-xl px-6 py-3 font-semibold text-bx-bg
                 bg-[linear-gradient(120deg,#00E676_0%,#00B0FF_100%)]
                 shadow-[0_0_24px_rgba(0,176,255,0.3)]"
    >
      {/* Halo glow au hover */}
      <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-100
                       bg-[radial-gradient(circle,rgba(255,255,255,0.3),transparent_70%)]" />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
```

### 17.3 Reveal au scroll (Intersection Observer, zero-dep)

```tsx
"use client";
import { useEffect, useRef, useState } from "react";

export function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && (setShown(true), io.disconnect()),
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transform: shown ? "translateY(0)" : "translateY(32px)",
        opacity: shown ? 1 : 0,
        transition: `transform 500ms cubic-bezier(0.16,1,0.3,1) ${delay}ms, opacity 500ms ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
```

### 17.4 Carte Match (glass + hover)

```tsx
<motion.article
  whileHover={{ y: -6 }}
  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
  className="group rounded-2xl border border-white/8 bg-white/[0.04] p-5 backdrop-blur-md
             hover:border-bx-blue/30 hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)]"
>
  {/* Badge live pulsant */}
  {isLive && (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-bx-live/15 px-2.5 py-1 text-xs font-medium text-bx-live">
      <span className="size-1.5 animate-pulse rounded-full bg-bx-live" /> EN DIRECT
    </span>
  )}
  {/* Score */}
  <div className="mt-3 font-mono text-2xl font-semibold text-bx-text">
    {home} {scoreHome} — {scoreAway} {away}
  </div>
</motion.article>
```

### 17.5 Smooth scroll Lenis (+ reduced-motion)

```ts
import Lenis from "lenis";

export function initSmoothScroll() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) return; // Fallback : scroll natif

  const lenis = new Lenis({ duration: 1.1, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
  function raf(time: number) { lenis.raf(time); requestAnimationFrame(raf); }
  requestAnimationFrame(raf);
}
```

### 17.6 Cursor custom (desktop only)

```tsx
"use client";
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function Cursor() {
  const x = useMotionValue(-100), y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 170, damping: 26 }), sy = useSpring(y, { stiffness: 170, damping: 26 });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return; // pas sur touch
    const move = (e: MouseEvent) => { x.set(e.clientX); y.set(e.clientY); };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div ref={ref} style={{ x: sx, y: sy }}
      className="pointer-events-none fixed left-0 top-0 z-[9999] size-9 -translate-x-1/2 -translate-y-1/2
                 rounded-full border border-bx-blue/70 backdrop-blur-[2px] mix-blend-difference" />
  );
}
```

### 17.7 Live tick (count-up flash)

```tsx
"use client";
import { motion, AnimatePresence } from "framer-motion";

export function LiveStat({ value }: { value: number }) {
  return (
    <AnimatePresence mode="popLayout">
      <motion.span key={value} initial={{ scale: 1.2, color: "#00E676" }}
        animate={{ scale: 1, color: "#F1F5F9" }} exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="font-mono font-semibold">{value}</motion.span>
    </AnimatePresence>
  );
}
```

### 17.8 Loader (swoosh draw)

```tsx
"use client";
import { motion } from "framer-motion";
export function Loader() {
  return (
    <svg viewBox="0 0 200 80" className="size-40">
      <motion.path d="M20 60 C 60 10, 100 70, 180 20" // courbure swoosh
        fill="none" stroke="url(#g)" strokeWidth="6" strokeLinecap="round"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} />
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#00E676" /><stop offset="100%" stopColor="#00B0FF" />
        </linearGradient>
      </defs>
    </svg>
  );
}
```

---

## ⚡ 18. Performances

| Métrique | Cible |
|---|---|
| **FPS** | 60 constant (WebGL isolé au Hero) |
| **LCP** | < 2.5s |
| **CLS** | < 0.1 |
| **INP** | < 200ms (excellent) |
| **TTFB** | optimisé (Edge / cache) |

**Pratiques obligatoires :**
- GPU-friendly : `transform` + `opacity` uniquement pour les animations
- `will-change` ciblé et temporaire (retirer après anim)
- Lazy loading images (`loading="lazy"`, AVIF/WebP)
- Code splitting : Hero WebGL chargé en dynamic import (`next/dynamic`, ssr:false)
- `prefers-reduced-motion` : **désactive Lenis, parallaxe, cursor custom, WebGL**

**Optimisations :**
- Fonts : subset + `preload` + `font-display: swap`
- Compression brotli, CDN, cache immutable sur assets
- Particules : max 40, `Canvas2D` hors Hero
- Polling live (TanStack Query, 30s — PRD §9.2) : ne re-render que les chiffres modifiés

---

## ♿ 19. Accessibilité

| Standard | Niveau |
|---|---|
| **WCAG** | AA minimum (AAA atteint sur texte principal) |
| **Contraste** | texte ≥ 4.5:1 ; AAA sur `--bx-text` (16.2:1) |
| **Touch targets** | ≥ 44×44px |
| **Focus visible** | Anneau 2px `--bx-blue` offset 2px, jamais retiré |
| **Navigation clavier** | 100 % ; ordre logique ; skip-link |
| **Screen readers** | ARIA labels/roles/states sur tout composant custom |
| **Reduced motion** | `prefers-reduced-motion` respecté partout (§18) |
| **Fallbacks** | Curseur natif, scroll natif, image statique si pas WebGL |
| **Glossaire** | tooltips accessibles au clavier + focusable |
| **Couleurs sémantiques** | **jamais seul canal** d'info : toujours icône + texte (PRD §7.1 règle 3 respectée) |

---

## ✅ 20. QA Checklist

**Appareils :** Desktop · Tablet · Mobile (375 → 1440 px)
**Navigateurs :** Chrome · Firefox · Safari · Edge (+ Samsung Internet)
**OS :** iOS · Android · macOS · Windows · Linux
**Interactions :** Souris · Trackpad · Touch · Clavier

| Type | Couverture |
|---|---|
| **Performance** | FPS, LCP < 2.5s, CLS < 0.1, INP |
| **Animations** | Fluidité 60fps, cohérence du système |
| **Responsive** | 375 / 768 / 1024 / 1440 px |
| **Accessibilité** | WCAG AA, audit axe + lecture clavier |
| **Cross-browser** | 5 navigateurs |
| **Cross-device** | desktop/tablet/mobile |
| **Reduced motion** | Vérifier désactivation totale |
| **Offline / réseau lent** | Skeletons (jamais de blanc) |
| **Live polling** | Mise à jour sans CLS |

---

## 🎯 Règles de précision — respectées

Aucune animation générique. Chacune spécifiée avec **durée · easing · delay · distance · opacité · origine · ordre · vitesse · justification UX · justification émotionnelle · impact storytelling**. Exemple de référence (Hero titre) :
> *Reveal mot-par-mot · stagger 80ms · 600ms · `cubic-bezier(0.16,1,0.3,1)` · translateY 24px · opacity 0→1 · origine bottom-center · ordre : titre → sous-titre → CTA · vitesse médium · UX : guide l'œil vers le CTA · émotion : promesse de spectacle · story : les projecteurs s'allument.*

---

## 🎨 Décisions clés justifiées

| Choix | Pourquoi (vs alternative) |
|---|---|
| **Fond nocturne** au lieu du « Precision Dark » du PRD | Accentue la lecture lumineuse des données (métaphore stade), meilleur contraste, premium |
| **Dégradé vert→bleu du logo** pour les CTA & sémantique positive | Cohérence marque/produit maximale ; le vert-logo = positif = intuitif |
| **Space Grotesk** (et non Inter seul) pour les titres | Caractère tech proche du lettrage logo, personnalité premium |
| **WebGL isolé au Hero** | Garantit 60fps mobile grand public (objectif accessibilité PRD) |
| **Curseur swoosh** | Reprise du mouvement logo → identité immédiate |
| **Trajectoire lumineuse** comme métaphore | Auto-portée par le logo (swoosh) → cohérence narrative totale |
| **Hybride Glass + Minimalist + Maximalist ponctuel** | Équilibre premium / lisibilité / émotion, adapté au public grand public |

---

> **Ce document constitue la spécification de production complète.** Il remplace, pour la direction artistique et l'expérience, la section 8 du PRD. La stack technique (§6 PRD), la logique d'analyse (§5 PRD), l'architecture des routes (§6.2 PRD) et l'état applicatif (§9 PRD) sont **conservés** et nourrissent directement les composants décrits ici.
