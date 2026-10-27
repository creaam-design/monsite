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

// Photos de démonstration : photos libres de droits issues d'Unsplash (licence Unsplash),
// téléchargées dans public/demo/photos/. À remplacer par les photos du photographe.
export const galerie = [
  { legende: "Portrait en extérieur", src: "/demo/photos/64.jpg", largeur: 1600, hauteur: 1067, auteur: "Alexander Shustov", lien: "https://unsplash.com/photos/AHBiSKaENwc" },
  { legende: "Concert — événement", src: "/demo/photos/158.jpg", largeur: 1600, hauteur: 1067, auteur: "Daniel Robert", lien: "https://unsplash.com/photos/MRxD-J9-4ps" },
  { legende: "Ville de nuit", src: "/demo/photos/43.jpg", largeur: 1600, hauteur: 1039, auteur: "Oleg Chursin", lien: "https://unsplash.com/photos/IoCWq07GaG4" },
  { legende: "Produit — chaussures", src: "/demo/photos/21.jpg", largeur: 1600, hauteur: 1068, auteur: "Alejandro Escamilla", lien: "https://unsplash.com/photos/jVb0mSn0LbE" },
  { legende: "Randonnée en montagne", src: "/demo/photos/177.jpg", largeur: 1600, hauteur: 1164, auteur: "Danka & Peter", lien: "https://unsplash.com/photos/tvicgTdh7Fg" },
  { legende: "Scène de rue", src: "/demo/photos/22.jpg", largeur: 1600, hauteur: 1346, auteur: "Alejandro Escamilla", lien: "https://unsplash.com/photos/du_OrQAA4r0" },
  { legende: "Produit — tasse de café", src: "/demo/photos/63.jpg", largeur: 1600, hauteur: 900, auteur: "Justin Leibow", lien: "https://unsplash.com/photos/ZJsseAxEcqM" },
  { legende: "Paysage de Toscane", src: "/demo/photos/116.jpg", largeur: 1600, hauteur: 1067, auteur: "Anton Sulsky", lien: "https://unsplash.com/photos/YcfCXxo7rpc" },
  { legende: "Photographe en reportage", src: "/demo/photos/91.jpg", largeur: 1600, hauteur: 1067, auteur: "Jennifer Trovato", lien: "https://unsplash.com/photos/baRYCsjO6z4" },
];
