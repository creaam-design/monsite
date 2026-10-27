"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { galerie } from "./contenu-demo";

export default function Galerie() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState<number | null>(null);
  const photo = active === null ? null : galerie[active];

  function ouvrir(i: number) {
    setActive(i);
    dialogRef.current?.showModal();
  }

  function fermer() {
    dialogRef.current?.close();
  }

  return (
    <>
      <div className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {galerie.map((p, i) => (
          <figure key={p.src} className="mb-4 break-inside-avoid">
            <button
              type="button"
              onClick={() => ouvrir(i)}
              aria-label={`Agrandir : ${p.legende}`}
              className="group relative block w-full cursor-zoom-in overflow-hidden rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <Image
                src={p.src}
                alt={`${p.legende} (photo de démonstration)`}
                width={p.largeur}
                height={p.hauteur}
                sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw"
                className="h-auto w-full transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute top-3 left-3 rounded bg-white/80 px-2 py-1 text-xs text-muted">
                Démo n°{i + 1}
              </span>
            </button>
            <figcaption className="mt-2 text-sm text-muted">{p.legende}</figcaption>
          </figure>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        onClose={() => setActive(null)}
        // Un clic sur l'overlay (en dehors de l'image) ferme la modale
        onClick={(e) => e.target === e.currentTarget && fermer()}
        aria-label={photo?.legende}
        className="m-auto max-h-none max-w-none bg-transparent p-0 backdrop:bg-black/80"
      >
        {photo && (
          <figure className="relative flex flex-col items-center">
            <Image
              src={photo.src}
              alt={`${photo.legende} (photo de démonstration)`}
              width={photo.largeur}
              height={photo.hauteur}
              sizes="(min-width: 640px) 75vw, 92vw"
              className="h-auto max-h-[75vh] w-auto max-w-[92vw] rounded-lg object-contain sm:max-w-[75vw]"
            />
            <figcaption className="mt-3 text-center text-sm text-white/90">
              {photo.legende} — photo de démonstration par{" "}
              <a href={photo.lien} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">
                {photo.auteur}
              </a>{" "}
              (Unsplash)
            </figcaption>
            <button
              type="button"
              onClick={fermer}
              aria-label="Fermer"
              className="absolute -top-3 -right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-xl leading-none text-foreground shadow transition-colors hover:bg-accent hover:text-white"
            >
              ×
            </button>
          </figure>
        )}
      </dialog>
    </>
  );
}
