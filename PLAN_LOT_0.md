# 📋 Plan micro-tâches — Lot 0 (Bootstrap)
### Beatrix — Spec Awwwards/FWA · Phase 2

> **Statut :** Soumis pour validation humaine.
> **Source :** `DESIGN.md` §0, §1, §4 + spec §17.1.
> **Règles :** Chaque micro-tâche = 2-5 min, fichier exact, périmètre strict, critère de vérification.
> **Cible :** `pnpm dev` opérationnel avec fond `#06080D`, tokens Beatrix exposés, page d'accueil vide mais stylée.

---

## 0. Pré-requis

- ✅ Repo GitHub `iamydgel/beatrix-experience` cloné (ou lien déjà fait)
- ✅ Identité Git `iamydgel <iamydgel@gmail.com>` configurée
- ✅ Node.js 18.18+ installé (vérifier `node --version`)
- ✅ `pnpm` installé (vérifier `pnpm --version`)

---

## 1. Décisions verrouillées pour ce lot

| Sujet | Choix | Source |
|---|---|---|
| Version Next.js | **15.x** (LTS, App Router stable, compatible Framer 12) | DESIGN.md §A2 |
| Version Tailwind | **v4.x** (CSS-first, `@theme`) | DESIGN.md §A2 |
| TypeScript | **strict + noUncheckedIndexedAccess** | Context7 / `microsoft/typescript` |
| Package manager | **pnpm** | DESIGN.md §A2 |
| Mode Next | **Turbopack** activé par défaut (Next 15+) | Context7 / `vercel/next.js` |
| Polices | **Space Grotesk**, **Inter**, **JetBrains Mono** via `next/font/google` | spec §17.1 |
| Pas d'app CRUD cette session | `create-next-app` minimal (TypeScript + Tailwind + App Router + ESLint, **sans src/**, **sans import alias**) | YAGNI |

---

## 2. Micro-tâches (12 tâches)

### T1 — Initialiser `package.json` à la main *(2 min)*

**Pourquoi :** Éviter l'interactivité de `create-next-app` et contrôler 100% du contenu. On installe les deps explicitement.

- **Fichier :** `package.json` (racine)
- **Action :**
  - Créer `package.json` avec `name: "beatrix-experience"`, `private: true`, `version: "0.1.0"`
  - Scripts : `dev`, `build`, `start`, `lint`
  - Engines : `node: ">=18.18.0"`
- **Critère :** `pnpm install` ne lance pas d'erreur de syntaxe JSON.

### T2 — Installer dépendances Next.js + React 19 *(2 min)*

- **Fichier :** `package.json` (via `pnpm add`)
- **Action :** `pnpm add next@15 react@19 react-dom@19`
- **Critère :** `pnpm list next react` retourne `next 15.x` et `react 19.x`.

### T3 — Installer TypeScript + types *(2 min)*

- **Fichier :** `package.json` (via `pnpm add -D`)
- **Action :** `pnpm add -D typescript @types/react@19 @types/react-dom@19 @types/node`
- **Critère :** `pnpm list typescript` retourne `5.x`.

### T4 — Installer Tailwind v4 + PostCSS *(2 min)*

- **Fichier :** `package.json` (via `pnpm add`)
- **Action :** `pnpm add -D tailwindcss@next @tailwindcss/postcss postcss`
- **Critère :** `pnpm list tailwindcss` retourne `4.x`.

### T5 — Configurer `tsconfig.json` strict *(3 min)*

- **Fichier :** `tsconfig.json` (racine)
- **Action :** Étendre `next/core-web-vitals` + `next/typescript`, ajouter :
  ```json
  "strict": true,
  "noUncheckedIndexedAccess": true,
  "noImplicitOverride": true,
  "forceConsistentCasingInFileNames": true
  ```
- **Critère :** `pnpm tsc --noEmit` ne sort pas d'erreur sur un fichier vide.

### T6 — Configurer `postcss.config.mjs` *(1 min)*

- **Fichier :** `postcss.config.mjs` (racine)
- **Action :**
  ```js
  export default { plugins: { "@tailwindcss/postcss": {} } };
  ```
- **Critère :** Le fichier existe et est valide JS module.

### T7 — Configurer `next.config.ts` *(2 min)*

- **Fichier :** `next.config.ts` (racine)
- **Action :** Export `nextConfig` avec `reactStrictMode: true`, `experimental.typedRoutes: true`.
- **Critère :** Pas d'erreur au `pnpm dev` (avant app/).

### T8 — Créer `app/layout.tsx` avec fonts `next/font` *(5 min)*

- **Fichier :** `app/layout.tsx`
- **Action :**
  - Importer 3 polices via `next/font/google` : `Space_Grotesk`, `Inter`, `JetBrains_Mono`
  - Variables CSS : `--font-display`, `--font-sans`, `--font-mono`
  - Balises `lang="fr"`, `className` sur `<html>` combinant les 3 vars, `<body className="font-sans bg-bx-bg text-bx-text">`
  - Métadonnées titre + description
- **Critère :** Inspecter le HTML généré → les 3 vars CSS sont injectées, `<body>` a `bg-bx-bg`.

### T9 — Créer `app/globals.css` avec tokens `@theme` *(5 min)*

- **Fichier :** `app/globals.css`
- **Action :**
  - `@import "tailwindcss";` (première ligne)
  - `@theme { ... }` avec **tous les tokens spec** :
    - `--color-bx-green: #00E676`
    - `--color-bx-blue: #00B0FF`
    - `--color-bx-green-deep: #00B85A` *(ajout A1, pour logo vertical)*
    - `--color-bx-bg: #06080D`
    - `--color-bx-bg-elevated: #0C111B`
    - `--color-bx-surface: #111827`
    - `--color-bx-text: #F1F5F9`
    - `--color-bx-text-muted: #94A3B8`
    - `--color-bx-text-subtle: #64748B`
    - `--color-bx-positive: #00E676`
    - `--color-bx-negative: #FF4D6D`
    - `--color-bx-warning: #FFB020`
    - `--color-bx-live: #FF3B5C`
    - `--font-display: var(--font-display)`
    - `--font-sans: var(--font-sans)`
    - `--font-mono: var(--font-mono)`
    - `--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1)`
    - `--ease-in-out-quint: cubic-bezier(0.83, 0, 0.17, 1)`
    - `--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1)`
- **Critère :** Tailwind compile, `bg-bx-bg` existe dans les utilitaires générés (vérifier avec `pnpm build` qui passe).

### T10 — Créer `app/page.tsx` smoke test *(3 min)*

- **Fichier :** `app/page.tsx`
- **Action :** Composant serveur minimal affichant :
  - `<h1 className="font-display text-bx-text">Beatrix</h1>`
  - `<p className="text-bx-text-muted">Lot 0 — bootstrap OK</p>`
  - Un `<div>` avec `className="size-20 bg-bx-green rounded-full"` pour valider visuellement le token vert
- **Critère :** `pnpm dev` ouvre `localhost:3000`, on voit le « B »… enfin le titre, et le rond vert est rendu à la bonne couleur.

### T11 — Ajouter `.eslintrc.json` minimal *(2 min)*

- **Fichier :** `.eslintrc.json`
- **Action :** Extend `next/core-web-vitals` + `next/typescript`.
- **Critère :** `pnpm lint` passe sans erreur.

### T12 — Vérification finale + commit *(3 min)*

- **Fichiers :** tous
- **Action :**
  - `pnpm install` (re-vérifier)
  - `pnpm lint`
  - `pnpm tsc --noEmit`
  - `pnpm build` (vérifier que ça compile en prod)
  - `pnpm dev` puis ouvrir navigateur, vérifier fond noir + titre + cercle vert
  - `git add . && git commit -m "feat(lot-0): bootstrap Next.js 15 + Tailwind v4 + tokens Beatrix"`
  - `git push origin main`
- **Critère :** Tous les checks passent, screenshot mental validé.

---

## 3. Hors-périmètre du Lot 0

- ❌ Pas de composants (`components/`) — c'est le Lot 1
- ❌ Pas de mock data (`/data`) — c'est le Lot 1 ou Lot 5
- ❌ Pas de Framer Motion installé — Lot 1
- ❌ Pas de Lenis — Lot 3 (smooth scroll)
- ❌ Pas de Lucide — Lot 1
- ❌ Pas de Three.js — Lot 5 (Hero)
- ❌ Pas de structure `lib/` — Lot 1

**YAGNI strict :** Le Lot 0 ne doit contenir **que** ce qui est listé ci-dessus.

---

## 4. Critère de succès global du Lot 0

```bash
$ pnpm dev
   ▲ Next.js 15.x
   - Local: http://localhost:3000
   ✓ Ready in 2s
```

Navigateur ouvert sur `localhost:3000` :
- ✅ Fond `#06080D` (noir-bleuté profond)
- ✅ Titre « Beatrix » en Space Grotesk
- ✅ Sous-titre « Lot 0 — bootstrap OK » en Inter muted
- ✅ Cercle vert `#00E676` rendu correctement

Et :
- ✅ `pnpm build` passe sans warning bloquant
- ✅ `pnpm lint` propre
- ✅ `pnpm tsc --noEmit` propre

---

## 5. Validation requise

| Question | Action |
|---|---|
| Tu valides les 12 micro-tâches ci-dessus ? | GO global OU liste d'ajustements |
| Tu confirmes Next.js **15** (pas 16) ? | OK / Force 16 |
| Tu confirmes installation **manuelle** (pas `create-next-app`) ? | OK / Utilise le scaffolder |

**Si GO :** J'exécute T1 → T12 dans l'ordre, un commit par groupe logique (pas 12 commits pour rien — plutôt ~3 commits groupés : "init deps", "config build", "app + tokens"), en respectant la règle TDD : pour chaque tâche, le critère de vérification est testé avant de passer à la suivante.

---

## 6. Rollback plan

Si une tâche échoue :
- `git restore .` annule les fichiers non commités
- `git reset --hard HEAD` annule les commits locaux
- Le remote `main` reste propre, on peut toujours reset.

Aucune action destructrice n'est faite avant validation. Le push final (T12) est le seul moment où `origin/main` est mis à jour.