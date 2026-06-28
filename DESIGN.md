# 🎬 Beatrix — DESIGN.md
### Contrat d'exécution de la spec « Beatrix — Spécification d'Expérience Digitale Premium »

> **Statut :** Document de cadrage — Phase 1 (Brainstorming) **validée**.
> **Source de vérité unique :** [`beatrix-experience-premium-spec.md`](./beatrix-experience-premium-spec.md) (ci-après « la spec »).
> **Ce document :** Consigne nos **arbitrages**, **divergences assumées** vs spec, et **plan d'exécution** par lots.
> Aucune valeur (couleur, taille, durée, easing) n'est définie ici sans **renvoi explicite** à une section de la spec.

---

## 0. Identité du projet

| Élément | Valeur | Source |
|---|---|---|
| Nom de code | **Beatrix** | spec titre |
| Concept | **« Lire le jeu »** — stats sportives en trajectoire lumineuse | spec §1 |
| Métaphore | **La trajectoire / le swoosh** (reprise directe du logo) | spec §1, §3 |
| Métaphore émotionnelle | **Stade nocturne vu d'en haut** | spec §1 |
| Logo source | `Gemini_Generated_Image_pscia2pscia2psci-removebg-preview.png` | repo root |
| Ambiance | Nocturne, sport-chic, vivant, jamais clinquant | spec §1 |
| Valeurs | Clarté · Vivacité · Confiance · Accessibilité · Modernité | spec §1 |
| Message | « Tu vois ce que les chiffres veulent dire. » | spec §1 |

---

## 1. Arbitrages vs spec (consignés)

> La spec est notre référence. Quand une décision technique ou visuelle diverge, elle est documentée ici.

### A1 — Dégradé logo (DIVERGENCE ASSUMÉE vs spec §3)

**Spec §3 dit :** `--bx-gradient-swoosh: linear-gradient(120deg, #00E676 0%, #00B0FF 100%)` (horizontal vert→bleu).

**Logo réel observé :** Dégradé **vertical** sur le « B » (vert clair en haut → vert plus profond en bas), avec un **swoosh bleu** extérieur uniforme.

**Décision :** Le logo est la source de vérité (spec §16 : « reconstruit depuis le logo »). On conserve `--bx-green` et `--bx-blue` comme pôles sémantiques, mais on définit **deux familles** de dégradés :

| Token | Valeur | Usage |
|---|---|---|
| `--bx-gradient-swoosh` *(spec originel)* | `linear-gradient(120deg, #00E676 0%, #00B0FF 100%)` | CTA primaire, séparateurs narratifs (T1→T7), halos sous éléments actifs |
| `--bx-gradient-logo` *(ajout Beatrix)* | `linear-gradient(180deg, #00E676 0%, #00B85A 100%)` | Rendu du « B » dans navbar/loader, jauges positives, accents logo-aligned |
| `--bx-blue-pure` *(ajout Beatrix)* | `#00B0FF` | Swoosh signature (loader, contour du B, séparateurs vifs) |

→ **Justification :** respecter la spec là où elle s'applique (CTA, halos) tout en restant fidèle au visuel du logo (B dégradé vertical + swoosh bleu distinct).

### A2 — Stack technique (CONFIRMÉE spec §17, §11)

| Couche | Choix | Renvoi spec |
|---|---|---|
| Framework | **Next.js 15** (App Router) | spec §17 |
| Langage | **TypeScript strict** + **React 19** | spec §17 |
| Style | **Tailwind CSS v4** (syntaxe `@theme`, CSS-first, **pas de config JS**) | spec §17.1 |
| Animations | **Framer Motion v12** (remplace GSAP — cf. spec §11 « si ScrollTrigger alourdit ») | spec §11 |
| Smooth scroll | **Lenis** (avec fallback natif si `prefers-reduced-motion`) | spec §17.5 |
| WebGL Hero | **Three.js + React Three Fiber**, dynamic import `ssr:false`, fallback statique | spec §15 |
| Icônes | **Lucide React** (2px, coins ronds) | spec §3, §17 |
| Data | **Mock JSON statique** dans `/data` (cette session) | décision projet |
| Package manager | **pnpm** | décision projet |

### A3 — Périmètre de la session « option C — tout coder »

Source : discussion Phase 1. **9 lots**, chacun = 1 branche + 1 PR + commits français.

| # | Lot | Livrable | Renvoi spec |
|---|---|---|---|
| 0 | Bootstrap | Repo + Next.js + TS + Tailwind v4 + tokens `@theme` | §17.1 |
| 1 | Design system | `tokens.css`, `globals.css`, polices via `next/font`, primitives (`Button`, `Badge`, `Card`, `Tabs`, `IndicatorGauge`) | §3, §5 |
| 2 | Loader | Swoosh draw → morph T1 vers Accueil | §2 ch.0, §9 Loader, §17.8 |
| 3 | Layout & Navigation | Navbar desktop glass + bottom-bar mobile + Footer | §4, §9 Navbar |
| 4 | Cursor custom | 2 couches (pointeur + halo) + spring + magnétisme CTA | §12, §17.6 |
| 5 | Page Accueil | H1 reveal + cartes live stagger + rail + terminés | §2 ch.1, §7 |
| 6 | Page Explorer | Filtres persistants + grille + morph FLIP | §2 ch.3, §8 T5 |
| 7 | Fiche Match × 3 onglets | Score sticky + Résumé + Timeline + Analyse | §2 ch.2, §8 T2/T3/T4 |
| 8 | Fiche Équipe + Favoris + Paramètres | 3 vues + T6 slide-over | §2 ch.4/ch.5, §8 T6 |

### A4 — Hors périmètre (cette session)

| Élément exclu | Raison | Renvoi |
|---|---|---|
| Auth réelle | Spec silencieuse, démo UI only | — |
| i18n multi-langue | FR uniquement, strings centralisées dans `lib/i18n/fr.ts` | §5 (Paramètres) |
| Tests unitaires automatisés | Spec parle de QA manuel + smoke build | §20 |
| Déploiement / CDN | Pas de cible précisée, on s'arrête à `pnpm build` qui passe | §18 |
| Backend / API | Mocks JSON dans `/data` | décision projet |

---

## 2. Renvois opérationnels vers la spec

> Toutes les valeurs d'implémentation (tokens, durées, easings, transitions) sont dans la spec. Ce DESIGN.md **pointe**, ne **reproduit pas**.

| Domaine | Section spec à ouvrir |
|---|---|
| Couleurs & tokens | §3, §16 |
| Typographie | §3, §5, §16 |
| Iconographie & illustration | §3 |
| Architecture UX / arborescence | §4 |
| Composants UI | §5, §9 |
| Motion language & durées | §6, §9 |
| Storyboard entrée/sortie de section | §7 |
| Transitions entre pages | §8 |
| Micro-interactions | §10 |
| Scroll experience | §11 |
| Cursor custom | §12 |
| Lighting system | §13 |
| Effets immersifs | §14 |
| WebGL Hero | §15 |
| Code snippets prêts à l'emploi | §17.1–§17.8 |
| Perf / a11y / QA | §18, §19, §20 |

---

## 3. Règles d'or (rappel, non négociables)

1. **Source de vérité = spec.** Toute valeur (couleur, taille, durée, easing) doit pouvoir être citée depuis une section de la spec.
2. **Zéro improvisation.** Si une valeur manque dans la spec, on **demande** avant de décider.
3. **Fidélité au logo.** Le visuel du `B` avec swoosh bleu prime sur toute description textuelle divergente.
4. **Modifications chirurgicales** (Phase 3 TDD) : on ne touche que ce qui est strictement nécessaire à la micro-tâche.
5. **YAGNI** : pas d'abstractions pour du code à usage unique. Si 200 lignes → 50, on réécrit.
6. **Commits en français**, identité `iamydgel <iamydgel@gmail.com>`.

---

## 4. Plan d'exécution — Ordre des 9 lots

```
[0] Bootstrap ──────► [1] Design system ──────► [2] Loader
                                                  │
                       [4] Cursor ────────────────┤
                                                  ▼
                       [3] Navbar/Footer ──► [5] Accueil ──► [6] Explorer
                                                              │
                                                              ▼
                                          [7] Fiche Match ×3 ──► [8] Équipe + Favoris + Paramètres
```

**Dépendances bloquantes :**
- Lots 2 → 5 dépendent de 1 (primitives + tokens).
- Lots 4, 5, 6 dépendent de 3 (layout).
- Lot 7 dépend de 5 (transition T2 = carte Accueil → Fiche Match).
- Lot 8 dépend de 7 (slide-over T6 réutilise la mécanique).

---

## 5. Décisions en attente (à trancher avant lot 0)

> Aucune. Tous les arbitrages nécessaires ont été pris en A1–A4.
> Si une nouvelle ambiguïté émerge pendant l'implémentation, on **s'arrête** et on l'inscrit ici avant de continuer.

---

## 6. Validation Phase 1

| Phase | Statut | Date | Validation |
|---|---|---|---|
| Brainstorming | ✅ Validé | 2026-06-28 | « GO A + 1 » |
| DESIGN.md | ✅ Verrouillé | 2026-06-28 | ce document |
| Prochaine étape | ⏸ Phase 2 — Plan micro-tâches | — | GO utilisateur requis |

---

> **Ce DESIGN.md est notre contrat d'exécution.**
> La spec reste la **bible**. Le code doit pouvoir répondre « spec §X.Y » à toute question de design.
