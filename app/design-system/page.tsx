import {
  Badge,
  Button,
  Card,
  IndicatorGauge,
  Reveal,
  Tabs,
} from "@/components/ui";
import { ArrowRight, Sparkles, Target, Trophy } from "./_components/icons";
import { LiveTickDemo } from "./_components/LiveTickDemo";

export const metadata = {
  title: "Beatrix — Design System",
  description: "Internal showcase of the Beatrix UI primitives.",
};

const sectionTitle = "font-display text-3xl font-semibold text-bx-text sm:text-4xl";
const sectionLead = "mt-2 text-sm text-bx-text-muted";

export default function DesignSystemPage() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-20 px-6 py-16 sm:px-10">
      <Reveal>
        <header className="flex flex-col gap-3">
          <Badge variant="neutral">Lot 1 — Design System</Badge>
          <h1 className="font-display text-5xl font-bold tracking-tight text-bx-text sm:text-6xl">
            Beatrix primitives
          </h1>
          <p className="max-w-2xl text-base text-bx-text-muted sm:text-lg">
            7 composants de base, branchés sur les tokens <code className="font-mono text-bx-blue">bx-*</code> et la motion library.
          </p>
        </header>
      </Reveal>

      {/* Button */}
      <section className="flex flex-col gap-6">
        <div>
          <h2 className={sectionTitle}>Button</h2>
          <p className={sectionLead}>3 variants × 3 tailles — focus ring bleu, hover scale 1.05.</p>
        </div>
        <Reveal>
          <div className="flex flex-wrap items-end gap-4">
            <Button variant="primary" size="sm">Primaire · sm</Button>
            <Button variant="primary" size="md">Primaire · md</Button>
            <Button variant="primary" size="lg">Primaire · lg</Button>
            <Button variant="secondary" size="md">Secondaire</Button>
            <Button variant="ghost" size="md">Ghost</Button>
            <Button variant="primary" disabled>Désactivé</Button>
          </div>
        </Reveal>
      </section>

      {/* Badge */}
      <section className="flex flex-col gap-6">
        <div>
          <h2 className={sectionTitle}>Badge</h2>
          <p className={sectionLead}>5 variants sémantiques. Le variant &laquo; live &raquo; pulse en continu.</p>
        </div>
        <Reveal>
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="live">En direct</Badge>
            <Badge variant="positive" icon={ArrowRight}>Positif</Badge>
            <Badge variant="negative" icon={Target}>Négatif</Badge>
            <Badge variant="warning" icon={Sparkles}>Attention</Badge>
            <Badge variant="neutral" icon={Trophy}>Neutre</Badge>
          </div>
        </Reveal>
      </section>

      {/* Card */}
      <section className="flex flex-col gap-6">
        <div>
          <h2 className={sectionTitle}>Card</h2>
          <p className={sectionLead}>3 variants. Hover lift −6px + bordure bleue + ombre.</p>
        </div>
        <Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Card variant="default">
              <Badge variant="neutral">Default</Badge>
              <h3 className="mt-3 font-display text-2xl font-semibold text-bx-text">Lyon — Marseille</h3>
              <p className="mt-1 font-mono text-xl text-bx-text-muted">2 — 1</p>
            </Card>
            <Card variant="glass">
              <Badge variant="positive" icon={ArrowRight}>+0.4 xG</Badge>
              <h3 className="mt-3 font-display text-2xl font-semibold text-bx-text">PSG — Monaco</h3>
              <p className="mt-1 text-sm text-bx-text-muted">Verre dépoli, profondeur accrue.</p>
            </Card>
            <Card variant="live">
              <Badge variant="live">75&apos;</Badge>
              <h3 className="mt-3 font-display text-2xl font-semibold text-bx-text">Live</h3>
              <p className="mt-1 text-sm text-bx-text-muted">Bordure rouge + halo.</p>
            </Card>
          </div>
        </Reveal>
      </section>

      {/* Tabs */}
      <section className="flex flex-col gap-6">
        <div>
          <h2 className={sectionTitle}>Tabs</h2>
          <p className={sectionLead}>Underline dégradé qui suit l&apos;onglet actif (layoutId).</p>
        </div>
        <Reveal>
          <Tabs
            tabs={[
              { id: "summary", label: "Résumé" },
              { id: "events", label: "Événements" },
              { id: "analysis", label: "Analyse" },
            ]}
            defaultValue="summary"
          />
        </Reveal>
      </section>

      {/* IndicatorGauge */}
      <section className="flex flex-col gap-6">
        <div>
          <h2 className={sectionTitle}>IndicatorGauge</h2>
          <p className={sectionLead}>Barre dégradé vert → bleu, animée au scroll-reveal.</p>
        </div>
        <Reveal>
          <div className="flex flex-col gap-5">
            <IndicatorGauge label="Intensité" value={72} />
            <IndicatorGauge label="Pression" value={45} />
            <IndicatorGauge label="Solidité" value={88} />
          </div>
        </Reveal>
      </section>

      {/* LiveTick */}
      <section className="flex flex-col gap-6">
        <div>
          <h2 className={sectionTitle}>LiveTick</h2>
          <p className={sectionLead}>Flash vert à chaque incrément (toutes les 1s dans cette démo).</p>
        </div>
        <Reveal>
          <div className="flex items-baseline gap-2 font-display text-5xl font-bold text-bx-text">
            <LiveTickDemo />
            <span className="text-base font-normal text-bx-text-muted">buts marqués en direct</span>
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-bx-border pt-6 text-xs text-bx-text-subtle">
        Page de démo interne — supprimable à la livraison finale.
      </footer>
    </main>
  );
}
