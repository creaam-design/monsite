import { photographe, prestations } from "./contenu-demo";
import Galerie from "./galerie";

const mailto = `mailto:${photographe.email}?subject=${encodeURIComponent(
  "Demande de prestation photo",
)}`;

function BoutonContact({ className = "" }: { className?: string }) {
  return (
    <a
      href={mailto}
      className={`inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 font-medium text-white transition-colors hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${className}`}
    >
      Me contacter par e-mail
    </a>
  );
}

export default function Home() {
  return (
    <>
      <p className="bg-accent-soft px-4 py-2 text-center text-sm text-accent-hover">
        Site de démonstration — les noms, textes, tarifs et images sont fictifs.
      </p>

      <header className="sticky top-0 z-10 border-b border-border bg-background/90 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <a href="#" className="font-semibold tracking-tight">
            {photographe.nom}
            <span className="text-accent">.</span>
          </a>
          <ul className="hidden gap-6 text-sm text-muted sm:flex">
            <li><a href="#presentation" className="hover:text-accent">Présentation</a></li>
            <li><a href="#prestations" className="hover:text-accent">Prestations</a></li>
            <li><a href="#galerie" className="hover:text-accent">Galerie</a></li>
          </ul>
          <a
            href="#contact"
            className="rounded-full border border-accent px-4 py-1.5 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-white"
          >
            Contact
          </a>
        </nav>
      </header>

      <main className="flex-1">
        {/* Accroche */}
        <section className="mx-auto max-w-5xl px-4 pt-16 pb-12 sm:px-6 sm:pt-24">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            {photographe.metier}
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            {photographe.accroche}
          </h1>
          <p className="mt-4 text-muted">{photographe.ville}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <BoutonContact />
            <a
              href="#galerie"
              className="inline-flex h-12 items-center justify-center rounded-full border border-border px-6 font-medium transition-colors hover:border-accent hover:text-accent"
            >
              Voir la galerie
            </a>
          </div>
        </section>

        {/* Présentation */}
        <section id="presentation" className="scroll-mt-20 border-t border-border">
          <div className="mx-auto grid max-w-5xl gap-8 px-4 py-16 sm:px-6 md:grid-cols-[1fr_2fr] md:gap-12">
            <div
              role="img"
              aria-label="Portrait du photographe (image de démonstration)"
              className="relative aspect-[4/5] w-full max-w-xs rounded-lg bg-gradient-to-br from-orange-100 to-stone-300"
            >
              <span className="absolute bottom-3 left-3 rounded bg-white/80 px-2 py-1 text-xs text-muted">
                Photo de démonstration
              </span>
            </div>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Présentation</h2>
              <div className="mt-6 space-y-4 leading-relaxed text-muted">
                {photographe.presentation.map((paragraphe) => (
                  <p key={paragraphe}>{paragraphe}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Prestations */}
        <section id="prestations" className="scroll-mt-20 border-t border-border bg-surface">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Prestations</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {prestations.map((p) => (
                <article
                  key={p.titre}
                  className="flex flex-col rounded-lg border border-border bg-background p-6"
                >
                  <div className="h-1 w-10 rounded-full bg-accent" />
                  <h3 className="mt-4 text-lg font-semibold">{p.titre}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.description}</p>
                  <ul className="mt-4 space-y-1 text-sm">
                    {p.details.map((d) => (
                      <li key={d} className="flex gap-2">
                        <span className="text-accent" aria-hidden="true">—</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-auto pt-6 text-sm font-medium">{p.prix}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Galerie */}
        <section id="galerie" className="scroll-mt-20 border-t border-border">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Galerie</h2>
            <p className="mt-2 text-sm text-muted">
              Photos de démonstration (Unsplash) — cliquez pour agrandir.
            </p>
            <Galerie />
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-20 border-t border-border bg-surface">
          <div className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Un projet en tête ?</h2>
            <p className="mx-auto mt-4 max-w-md text-muted">
              Décrivez-moi votre besoin, je vous réponds sous 48 h avec une proposition adaptée.
            </p>
            <BoutonContact className="mt-8 w-full sm:w-auto" />
            <p className="mt-4 text-sm text-muted">
              {photographe.email} <span className="text-xs">(adresse de démonstration)</span>
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-border px-4 py-6 text-center text-sm text-muted">
        © {photographe.nom} — site de démonstration
      </footer>
    </>
  );
}
