// CONTENU DE DÉMONSTRATION — à remplacer par les vraies informations du photographe.
// Nom, adresse e-mail, textes, tarifs et visuels sont fictifs.

export const photographe = {
  nom: "Camille Exemple",
  metier: "Photographe indépendant",
  ville: "Lyon (ville fictive pour la démo)",
  email: "contact@example.com",
  accroche: "Des images sincères, pensées pour durer.",
  presentation: [
    "Je photographie les personnes, les moments et les lieux avec une approche discrète et naturelle. Mon objectif : des images justes, sans artifice, qui vous ressemblent.",
    "Basé·e à Lyon, je me déplace dans toute la région pour des séances en studio, en extérieur ou sur vos événements.",
  ],
};

export const prestations = [
  {
    titre: "Portrait",
    description:
      "Séance individuelle ou en famille, en studio ou en extérieur. Idéal pour un profil professionnel ou un souvenir.",
    details: ["1 h de séance", "15 photos retouchées", "Galerie en ligne privée"],
    prix: "À partir de 150 € (tarif fictif)",
  },
  {
    titre: "Événement",
    description:
      "Mariages, anniversaires, soirées d’entreprise : je capture l’ambiance et les instants clés de votre journée.",
    details: ["Demi-journée ou journée", "Reportage complet", "Livraison sous 3 semaines"],
    prix: "À partir de 600 € (tarif fictif)",
  },
  {
    titre: "Reportage & produits",
    description:
      "Photos pour votre site, vos réseaux ou votre catalogue : produits, équipes, locaux et savoir-faire.",
    details: ["Brief préalable", "Droits d’usage inclus", "Formats web et impression"],
    prix: "Sur devis (tarif fictif)",
  },
];

// Visuels factices : de simples dégradés en attendant les vraies photos.
export const galerie = [
  { legende: "Portrait en lumière naturelle", fond: "from-orange-200 to-stone-300", format: "aspect-[3/4]" },
  { legende: "Mariage — cérémonie", fond: "from-stone-200 to-stone-400", format: "aspect-square" },
  { legende: "Paysage urbain", fond: "from-amber-100 to-orange-300", format: "aspect-[4/3]" },
  { legende: "Portrait studio", fond: "from-stone-300 to-stone-500", format: "aspect-square" },
  { legende: "Produit — céramique", fond: "from-orange-100 to-amber-200", format: "aspect-[3/4]" },
  { legende: "Soirée d’entreprise", fond: "from-stone-200 to-orange-200", format: "aspect-[4/3]" },
];
