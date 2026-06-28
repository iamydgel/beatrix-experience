# 📋 Plan micro-tâches — Lot 1 (Design System : Primitives)
### Beatrix — Spec Awwwards/FWA · Phase 2

> **Statut :** Soumis pour validation humaine.
> **Source :** `DESIGN.md` §A2 + spec §3, §5, §9 + §17.
> **Dépendances bloquantes :** ✅ Lot 0 mergé (PR #1, commit `189e867`).
> **Cible :** `components/ui/` opérationnel avec 5 primitives brandées + tokens motion exportés, page de démo accessible.

---

## 0. Pré-requis

- ✅ Lot 0 mergé sur `main` (Next 15, TS strict, Tailwind v4, tokens Beatrix)
- ✅ Node 24, pnpm 11.8
- ⏸ Branche de travail à créer : `feat/lot-1-design-system`
- ⏸ Context7 utilisé : `/lucide-icons/lucide`, `/websites/motion_dev`, `/lukeed/clsx`

---

## 1. Décisions verrouillées pour ce lot

| Sujet | Choix | Source |
|---|---|---|
| Lib animations | **`motion`** (rebrand de Framer Motion) — import `from "motion/react"` | Context7 motion.dev |
| Icônes | **`lucide-react`** (tree-shakable, ESM) | Context7 lucide-icons |
| Utilitaire classes | **`clsx`** + **`tailwind-merge`** via helper `cn()` | Context7 clsx + pratique standard |
| Arborescence | `components/ui/` (primitives) + `components/icons/` (wrappers Lucide) + `lib/utils.ts` | YAGNI |
| Animations | **Toujours** wrapping `motion.*` pour les éléments interactifs (spec §9) | spec §9 |
| Couleurs sémantiques | Réutiliser les tokens `--color-bx-*` déjà créés (Lot 0) | DESIGN.md §A2 |
| Réductions motion | Toutes les primitives honorent `prefers-reduced-motion` (Framer gère via prop `useReducedMotion`) | spec §18, §19 |
| Page de démo | `app/(design-system)/page.tsx` (Route Group pour isoler) | YAGNI — route de test supprimable |
| Tests | **Manuels** : `pnpm build` + smoke visuel sur la page démo | DESIGN.md §A4 |

---

## 2. Inventaire des primitives à livrer

| # | Primitive | Spec § | Notes |
|---|---|---|---|
| P1 | **`Button`** (variants : primary, secondary, ghost, sizes : sm/md/lg) | §5, §17.2 | CTA gradient primary, focus ring bleu, hover scale 1.05 + halo |
| P2 | **`Badge`** (variants : live, positive, negative, warning, neutral) | §5 | Pill, micro-pulse si `live`, uppercase |
| P3 | **`Card`** (variants : default, glass, live) | §5, §9 (Cards) | Glassmorphism, hover lift −6px, bordure bleu au hover |
| P4 | **`Tabs`** (animated underline) | §4, §9 | Underline swoosh draw L→R, transition `ease-out-expo` 250ms |
| P5 | **`IndicatorGauge`** | §5 | Barre dégradé vert→bleu, scale au scroll-reveal |
| P6 | **`LiveTick`** (helper) | §17.7 | Count-up flash sur changement de chiffre |
| P7 | **`Reveal`** (helper) | §17.3 | Intersection Observer, stagger ready |

---

## 3. Micro-tâches (15 tâches)

### T1 — Installer dépendances *(2 min)*

- **Action :**
  ```bash
  pnpm add motion lucide-react clsx tailwind-merge
  ```
- **Critère :** `pnpm list motion lucide-react clsx tailwind-merge` retourne versions installées.

### T2 — Helper `cn()` *(2 min)*

- **Fichier :** `lib/utils.ts`
- **Action :**
  ```ts
  import { clsx, type ClassValue } from "clsx";
  import { twMerge } from "tailwind-merge";
  export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
  }
  ```
- **Critère :** `pnpm typecheck` passe, fonction exportée.

### T3 — Composant `Reveal` (helper) *(5 min)*

- **Fichier :** `components/ui/Reveal.tsx`
- **Action :** Wrapper Intersection Observer comme spec §17.3. Props : `children`, `delay`, `className`.
- **Critère :** Import + rendu dans `page.tsx` test ne crash pas, élément apparaît au scroll.

### T4 — Composant `Button` *(5 min)*

- **Fichier :** `components/ui/Button.tsx`
- **Action :** Forwarded ref, variants via `cn()`. Implémente :
  - `primary` : gradient swoosh, texte `#06080D`, halo glow (spec §17.2)
  - `secondary` : verre glass, bordure bleu, texte `bx-text`
  - `ghost` : transparent, hover underline
  - `whileHover={{ scale: 1.05 }}`, `whileTap={{ scale: 0.95 }}`, transition `ease-out-expo`
  - Focus ring `ring-2 ring-bx-blue ring-offset-2 ring-offset-bx-bg`
- **Critère :** Render dans page démo avec 3 variants × 3 sizes → 9 boutons visibles, tous stylés distinctement.

### T5 — Composant `Badge` *(5 min)*

- **Fichier :** `components/ui/Badge.tsx`
- **Action :**
  - Pill `rounded-full`, padding `px-2.5 py-1`, `text-xs font-medium uppercase tracking-wider`
  - Variants : `live` (rouge pulsant via Framer), `positive` (vert), `negative` (rouge-rosé), `warning` (ambre), `neutral` (gris)
  - Icône optionnelle via prop `icon`
- **Critère :** Render dans page démo avec 5 variants + 1 avec `icon={Trophy}` → tous visibles avec couleurs sémantiques distinctes.

### T6 — Composant `Card` *(5 min)*

- **Fichier :** `components/ui/Card.tsx`
- **Action :**
  - `rounded-2xl border border-white/8 bg-white/[0.04] backdrop-blur-md p-5`
  - Hover : `whileHover={{ y: -6 }}`, bordure `hover:border-bx-blue/30`, ombre `0_8px_24px_rgba(0,0,0,0.4)`
  - Variants : `default`, `glass` (plus transparent), `live` (badge pulsant intégré en haut)
- **Critère :** Render dans page démo avec 3 cards côte à côte, hover fonctionne (visible dans DevTools que `y` change).

### T7 — Composant `Tabs` *(5 min)*

- **Fichier :** `components/ui/Tabs.tsx`
- **Action :**
  - Props : `tabs: { id, label }[]`, `defaultValue`, `onChange`
  - Container flex, onglets avec `motion.button`, underline animé `motion.div` qui suit l'onglet actif (layoutId trick)
  - Underline : dégradé `bx-gradient-swoosh`, hauteur 2px
- **Critère :** Click sur un onglet → underline glisse via `layoutId` (spec §9 Tabs), contenu change (slot `children` indexé).

### T8 — Composant `IndicatorGauge` *(5 min)*

- **Fichier :** `components/ui/IndicatorGauge.tsx`
- **Action :**
  - Props : `label`, `value: number (0-100)`, `color?: 'positive' | 'warning' | 'negative'`
  - Container : label en `text-xs uppercase bx-text-muted`, track `h-2 bg-bx-surface rounded-full`, fill `h-full rounded-full`
  - Fill animé : `motion.div` avec `initial={{ width: 0 }}`, `animate={{ width: `${value}%` }}`, transition `ease-out-expo 600ms`
  - Couleur du fill : gradient `linear-gradient(90deg, var(--color-bx-green), var(--color-bx-blue))`
- **Critère :** Render dans page démo avec 3 jauges (25%, 60%, 90%), à l'arrivée les fills s'animent de 0 à leur valeur.

### T9 — Composant `LiveTick` (helper) *(3 min)*

- **Fichier :** `components/ui/LiveTick.tsx`
- **Action :** Comme spec §17.7. `AnimatePresence` + `motion.span` avec `key={value}`. Scale 1.2 + flash vert → 1 + couleur texte normale.
- **Critère :** Render dans page démo avec un compteur qui s'incrémente toutes les 1s → flash visible à chaque changement.

### T10 — Index `components/ui/index.ts` *(2 min)*

- **Fichier :** `components/ui/index.ts`
- **Action :** Barrel export des 7 composants.
- **Critère :** `import { Button, Badge, Card, Tabs, IndicatorGauge, LiveTick, Reveal } from "@/components/ui"` fonctionne.

### T11 — Route Group démo `app/(design-system)/page.tsx` *(5 min)*

- **Fichier :** `app/(design-system)/page.tsx`
- **Action :** Page qui rend chaque composant avec plusieurs variants. Layout en sections (`<section>` par primitive) avec titres `H2 font-display`. **PAS de navbar/footer** — page isolée pour test.
- **Critère :** `pnpm dev` → `/design-system` (ou `/` car Route Group transparent) → toutes les primitives visibles et fonctionnelles.

### T12 — Vérification TypeCheck + Lint *(2 min)*

- **Action :** `pnpm typecheck` + `pnpm lint`
- **Critère :** 0 erreur, 0 warning.

### T13 — Vérification Build *(2 min)*

- **Action :** `pnpm build`
- **Critère :** Build OK, page démo apparaît dans les routes générées.

### T14 — Smoke visuel (via `pnpm dev` + curl) *(3 min)*

- **Action :**
  - Lancer `pnpm dev` en background
  - `curl localhost:3000/` → HTTP 200
  - Vérifier présence dans le HTML de mots-clés : `bg-bx-green`, `linear-gradient`, `button`, `badge`, `card`
  - Tuer le serveur
- **Critère :** HTTP 200, mots-clés présents dans le HTML rendu.

### T15 — Commit + Push + PR *(3 min)*

- **Action :**
  - `git add .`
  - `git commit -m "feat(lot-1): design system primitives (Button, Badge, Card, Tabs, IndicatorGauge, LiveTick, Reveal)"`
  - `git push -u origin feat/lot-1-design-system`
  - Ouvrir PR `feat/lot-1-design-system` → `main`
- **Critère :** PR ouverte, build CI (ou manuel) vert.

---

## 4. Critère de succès global du Lot 1

```bash
$ pnpm dev
   ▲ Next.js 15.5.19
   - Local: http://localhost:3001
   ✓ Ready
```

Navigateur sur `/` :
- ✅ Page démo rendue avec 7 sections (une par primitive)
- ✅ Boutons : 3 variants × 3 sizes visibles, hover scale
- ✅ Badges : 5 variants + 1 avec icône Trophy
- ✅ Cards : 3 variants, hover lift
- ✅ Tabs : 3 onglets, underline qui glisse au clic
- ✅ Jauges : 3 fills animés au mount
- ✅ LiveTick : compteur qui flash
- ✅ Reveal : section apparaît au scroll

Et :
- ✅ `pnpm typecheck` propre
- ✅ `pnpm lint` propre
- ✅ `pnpm build` OK

---

## 5. Hors-périmètre du Lot 1

- ❌ Pas de composants domaine (`MatchCard`, `TeamCard`) — Lot 5+
- ❌ Pas de pages réelles (Accueil, Fiche Match…) — Lots 5+
- ❌ Pas de données mock (`/data/`) — Lot 1bis ou Lot 5
- ❌ Pas de Lenis (smooth scroll) — Lot 3 (Navbar)
- ❌ Pas de Three.js (Hero WebGL) — Lot 5
- ❌ Pas de cursor custom — Lot 4
- ❌ Pas de i18n — Lot 5bis
- ❌ Pas de tests unitaires Vitest — DESIGN.md §A4

**YAGNI strict.**

---

## 6. Risques identifiés

| Risque | Mitigation |
|---|---|
| `motion` v12 vs v11 (différentes APIs) | Fixer `motion@12` dans package.json, Context7 confirme usage |
| `tailwind-merge` conflits avec nos classes custom `bg-bx-*` | Tester T4 (Button) en premier, ajuster si besoin |
| Route Group `(design-system)` peut masquer la home | Vérifier que `/` affiche bien la démo, ou déplacer vers `/design-system` |
| `prefers-reduced-motion` non géré | Utiliser `useReducedMotion()` de motion dans les composants interactifs (T4, T6, T9) |

---

## 7. Validation requise

| Question | Action |
|---|---|
| Tu valides les 15 micro-tâches ci-dessus ? | GO global OU ajustements |
| Tu confirmes le périmètre (5 primitives + 2 helpers + page démo) ? | OK / Étendre / Réduire |
| Tu confirmes `motion` (nouveau nom de Framer Motion) plutôt que `framer-motion` ? | OK / Force ancien nom |
| Tu confirmes la Route Group `(design-system)/page.tsx` (page démo supprimable) ? | OK / Autre approche |

**Si GO :** J'exécute T1 → T15 dans l'ordre. Commits groupés en 2 :
- "feat: install motion + lucide + clsx + add cn helper" (T1-T2)
- "feat: 7 primitives UI (Button, Badge, Card, Tabs, IndicatorGauge, LiveTick, Reveal) + démo" (T3-T11)
- "chore: verify build/lint + open PR" (T12-T15)

---

## 8. Rollback plan

- Branche dédiée `feat/lot-1-design-system` → supprimée si rejet
- `main` reste protégé, aucun push direct sans PR + merge
- Si中途 blocage : `git checkout main` et nettoyage local