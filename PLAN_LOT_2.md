# 📋 Plan micro-tâches — Lot 2 (Loader)
### Beatrix — Spec Awwwards/FWA · Phase 2

> **Statut :** Soumis pour validation humaine.
> **Source :** `DESIGN.md` §A3 + spec §2 ch.0, §8 T1, §9 Loader, §17.8.
> **Dépendances bloquantes :** ✅ Lot 0 (tokens) + Lot 1 (primitives + motion) mergés.
> **Cible :** Loader « entrée dans le stade » avec swoosh draw + barre de progression, morph T1 vers l'accueil.

---

## 0. Pré-requis

- ✅ Lots 0 et 1 mergés (`03cf0c4`)
- ✅ Motion 12.42 installé
- ✅ Tokens `bx-green`, `bx-blue`, `bx-gradient-swoosh` disponibles
- ⏸ Branche à créer : `feat/lot-2-loader`

---

## 1. Décisions verrouillées pour ce lot

| Sujet | Choix | Source |
|---|---|---|
| Forme du swoosh | SVG inline, path `M20 60 C 60 10, 100 70, 180 20` (spec §17.8) | spec §17.8 |
| Dégradé stroke | `linearGradient` SVG `x1=0,y1=0,x2=1,y2=0` → `#00E676` → `#00B0FF` (spec §17.8) | spec §17.8 |
| Durée draw | 1000ms `ease-out-expo` (spec §17.8) | spec §17.8 |
| Durée totale min | 1000ms (spec §9 Loader) — on simule un chargement si trop court | spec §9 |
| Morph T1 sortie | Swoosh s'étire → fade out 500ms (spec §8 T1 : morph 1000ms expo) | spec §8 T1 |
| Trigger sortie | Automatique après draw complet (1.5s total min) ou click utilisateur (skip) | spec §2 ch.0 |
| Skip accessible | Bouton « Passer » visible après 800ms (a11y : éviter piège à clic forcé) | spec §19 |
| Reduced-motion | Si activé : fade simple 300ms sans draw | spec §19 |
| Persistance | Loader démonté après sortie → `AnimatePresence` gère le cycle | spec §17.8 |
| Affichage | Overlay `fixed inset-0 z-[100] bg-bx-bg` au-dessus de tout | YAGNI |
| Tests | Manuels : `pnpm build` + smoke visuel (refresh → loader apparaît puis disparaît) | DESIGN.md §A4 |

---

## 2. Inventaire des livrables

| # | Composant | Rôle | Spec |
|---|---|---|---|
| C1 | `LoaderSwoosh` | SVG animé : courbe swoosh qui se dessine (`pathLength 0→1`) | §17.8 |
| C2 | `LoaderBar` | Barre de progression dégradée swoosh qui remplit 0→100% | §9 Loader |
| C3 | `Loader` | Composant racine : assemble C1 + C2, gère le timing, expose `onDone` | §9 |
| C4 | `useLoader` | Hook optionnel pour skip / état exposé | YAGNI |

→ **Pas de hook séparé**, on inline la logique dans `Loader.tsx` (YAGNI).

---

## 3. Micro-tâches (10 tâches)

### T1 — Composant `LoaderSwoosh` SVG animé *(5 min)*

- **Fichier :** `components/loader/LoaderSwoosh.tsx`
- **Action :**
  - `"use client"` + `motion` importé depuis `motion/react`
  - SVG `viewBox="0 0 200 80"`, taille `size-40` (160px)
  - `<defs>` avec `<linearGradient id="loader-swoosh">` stop `#00E676` → `#00B0FF`
  - `<motion.path>` avec `d="M20 60 C 60 10, 100 70, 180 20"` (la courbure du logo)
  - Props : `strokeWidth?: number` (défaut 6), `duration?: number` (défaut 1000)
  - `initial={{ pathLength: 0 }}`, `animate={{ pathLength: 1 }}`
  - `transition={{ duration, ease: [0.16, 1, 0.3, 1] }}`
  - `strokeLinecap="round"`, `fill="none"`
  - Respecter `useReducedMotion()` : si réduit, fade opacity 0→1 sur 300ms
- **Critère :** Composant rendu dans Storybook mental affiche la courbure qui se dessine en 1s.

### T2 — Composant `LoaderBar` *(3 min)*

- **Fichier :** `components/loader/LoaderBar.tsx`
- **Action :**
  - Container `relative h-1 w-48 overflow-hidden rounded-full bg-bx-surface`
  - `motion.div` intérieur, `initial={{ scaleX: 0 }}`, `animate={{ scaleX: 1 }}`, `transformOrigin: "left center"`
  - Fill : `h-full bg-[linear-gradient(120deg,#00E676_0%,#00B0FF_100%)]`
  - Props : `duration?: number` (défaut 1500ms)
- **Critère :** Composant rendu → barre se remplit de gauche à droite en 1.5s.

### T3 — Composant `Loader` (racine) *(5 min)*

- **Fichier :** `components/loader/Loader.tsx`
- **Action :**
  - `"use client"`, gère le state `done` interne
  - Props : `minDuration?: number` (défaut 1500ms), `onDone?: () => void`
  - State : `exiting` qui passe à `true` après `minDuration` écoulée
  - Rendu via `AnimatePresence` :
    - `<motion.div fixed inset-0 z-[100] bg-bx-bg flex flex-col items-center justify-center gap-8>`
    - `<LoaderSwoosh>` centré
    - En dessous : `<LoaderBar>`
    - `exit={{ opacity: 0 }}` transition 500ms expo
  - Bouton « Passer » (a11y) apparaît après 800ms, click force `exiting=true`
  - Cleanup : après exit animation, appelle `onDone?.()`
- **Critère :** Le Loader s'affiche, fait son cycle (~2.5s total), appelle `onDone`, puis disparaît.

### T4 — Hook d'auto-mount côté accueil *(3 min)*

- **Fichier :** `components/loader/LoaderHost.tsx` (client component)
- **Action :**
  - State : `show` booléen initial `true`
  - Rendu : `<Loader onDone={() => setShow(false)} />` + `AnimatePresence`
  - Wrapper à utiliser dans `app/page.tsx` (ou page d'accueil future)
  - Une fois `show=false`, ne rend rien
- **Critère :** Au mount, le Loader joue ; après ~2.5s, disparaît sans laisser de DOM résiduel.

### T5 — Intégration dans `app/page.tsx` (remplace le smoke test) *(3 min)*

- **Fichier :** `app/page.tsx`
- **Action :**
  - Remplacer le contenu actuel (h1 « Beatrix » + p « Lot 0 — bootstrap OK » + cercle vert) par :
    - `<LoaderHost />` qui contient le Loader
    - Puis le contenu de l'accueil (placeholder pour le moment : juste le h1 « Beatrix » centré)
  - Le `LoaderHost` peut wraper le contenu entier via `children` pour gérer l'apparition du contenu après le loader
- **Critère :** `pnpm dev` → refresh → loader joue, puis contenu apparaît.

### T6 — Vérification typecheck + lint *(2 min)*

- **Action :** `pnpm typecheck && pnpm lint`
- **Critère :** 0 erreur, 0 warning.

### T7 — Vérification build *(2 min)*

- **Action :** `pnpm build`
- **Critère :** Build OK, route `/` générée.

### T8 — Smoke visuel *(3 min)*

- **Action :**
  - Lancer `pnpm dev` en background
  - `curl localhost:3000/` → HTTP 200
  - Vérifier dans HTML : présence de `M20 60` (le path SVG), `linearGradient`, `loader-swoosh`, `bx-bg`
  - Tuer le serveur
- **Critère :** HTTP 200, mots-clés Loader présents.

### T9 — Test manuel du skip (rapport) *(2 min)*

- **Action :**
  - Lancer `pnpm dev`
  - **Documenter** (rapport texte dans le commit) que le bouton « Passer » apparaît après 800ms et force la sortie
  - Tuer le serveur
- **Critère :** Comportement de skip documenté, même si on ne peut pas le screenshoter ici.

### T10 — Commit + Push + PR *(3 min)*

- **Action :**
  - `git add .`
  - `git commit -m "feat(lot-2): loader swoosh draw + barre progression + morph T1"`
  - `git push -u origin feat/lot-2-loader`
  - Ouvrir PR `feat/lot-2-loader` → `main`
- **Critère :** PR ouverte, build vert.

---

## 4. Critère de succès global du Lot 2

```bash
$ pnpm dev
   ▲ Next.js 15.5.19
   ✓ Ready
```

Navigateur sur `/` :
- ✅ Loader plein écran apparaît immédiatement
- ✅ Swoosh SVG se dessine en 1s (courbe verte→bleue)
- ✅ Barre de progression se remplit dessous (0→100%)
- ✅ Après ~1.5s, fade out complet (500ms)
- ✅ Bouton « Passer » apparaît après 800ms (click → sortie immédiate)
- ✅ Respecte `prefers-reduced-motion` (fade simple sans draw)
- ✅ Contenu de l'accueil apparaît derrière (ici : h1 « Beatrix »)

Et :
- ✅ `pnpm typecheck` propre
- ✅ `pnpm lint` propre
- ✅ `pnpm build` OK

---

## 5. Hors-périmètre du Lot 2

- ❌ Pas de page d'accueil complète (juste placeholder) — Lot 5
- ❌ Pas de Hero WebGL — Lot 5
- ❌ Pas de parallaxe — Lot 5
- ❌ Pas de transition T1 vers une vraie page (on fade out, c'est tout) — affinée au Lot 5
- ❌ Pas de cache du Loader entre sessions (re-joue à chaque refresh) — spec §2 ch.0 dit « aucun CTA automatique » mais ne dit pas si persistant

**YAGNI strict.**

---

## 6. Risques identifiés

| Risque | Mitigation |
|---|---|
| `motion.path` API différente en v12 vs v11 | Vérifié via Context7, `pathLength` est stable |
| Skip button clignote pendant l'anim draw | Délai 800ms avant affichage, opacity transition |
| Loader bloque trop longtemps | `minDuration=1500ms` max, skip accessible |
| `prefers-reduced-motion` casse l'effet draw | `useReducedMotion()` détecté, fallback fade simple 300ms |
| SVG inline mal rendu sur Safari | viewBox + size fixes, pas de CSS width/height dans SVG |
| `AnimatePresence` exit ne se déclenche pas | Vérifier que le composant est bien conditionné par `show` (et non unmounté d'un autre endroit) |

---

## 7. Validation requise

| Question | Action |
|---|---|
| Tu valides les 10 micro-tâches ? | GO global OU ajustements |
| Tu confirmes `minDuration=1500ms` (assez court pour UX, assez long pour effet) ? | OK / Plus court / Plus long |
| Tu confirmes le bouton « Passer » après 800ms (a11y) ? | OK / Retirer / Plus tôt |
| Tu confirmes qu'on remplace le smoke test de `app/page.tsx` par le Loader + placeholder accueil ? | OK / Garder le smoke test |

**Si GO :** J'exécute T1 → T10 dans l'ordre, commits groupés :
- "feat: 3 composants loader (Swoosh, Bar, Loader)" (T1-T3)
- "feat: intégration LoaderHost + page accueil placeholder" (T4-T5)
- "chore: verify + open PR" (T6-T10)

---

## 8. Rollback plan

- Branche dédiée `feat/lot-2-loader` supprimée si rejet
- `main` protégé, aucune modif directe
- Si中途 blocage : `git checkout main`