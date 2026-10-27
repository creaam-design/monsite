// CONTENU DE DÉMONSTRATION — à remplacer par les vraies informations du photographe.
// Nom, adresse e-mail, textes, tarifs et visuels sont fictifs.

export const photographe = {
  nom: "Robert Exemple",
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

// Photos factices : illustrations SVG dans public/demo/, à remplacer par les vraies photos.
export const galerie = [
  { legende: "Portrait en lumière naturelle", src: "/demo/portrait-lumiere.svg", largeur: 600, hauteur: 800 },
  { legende: "Mariage — cérémonie", src: "/demo/mariage-ceremonie.svg", largeur: 800, hauteur: 800 },
  { legende: "Paysage urbain", src: "/demo/paysage-urbain.svg", largeur: 800, hauteur: 600 },
  { legende: "Portrait studio", src: "/demo/portrait-studio.svg", largeur: 800, hauteur: 800 },
  { legende: "Produit — céramique", src: "/demo/produit-ceramique.svg", largeur: 600, hauteur: 800 },
  { legende: "Soirée d’entreprise", src: "/demo/soiree-entreprise.svg", largeur: 800, hauteur: 600 },
];
