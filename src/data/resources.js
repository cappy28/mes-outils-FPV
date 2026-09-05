export const categories = [
  { id: "ALL", label: "Tout" },
  { id: "BUILD", label: "Build" },
  { id: "TUNING", label: "Tuning" },
  { id: "FLIGHT", label: "Flight" },
  { id: "DIGITAL", label: "Digital" },
  { id: "TOOLS", label: "Tools" },
  { id: "MEDIA", label: "Media" }
];

export const levels = [
  "ALL",
  "Débutant",
  "Intermédiaire",
  "Avancé",
  "Expert"
];

const reviewed = "2026-09-05";

export const resources = [
  {
    id: "betaflight-app",
    name: "Betaflight App",
    url: "https://app.betaflight.com/",
    category: "DIGITAL",
    subcategory: "Flight controller",
    type: "Application web",
    levels: ["Débutant", "Intermédiaire", "Avancé", "Expert"],
    technologies: ["Betaflight", "WebUSB", "WebSerial"],
    tags: ["FC", "firmware", "CLI", "configuration", "presets"],
    description:
      "L’application officielle pour configurer, sauvegarder et flasher les contrôleurs de vol Betaflight.",
    why:
      "Le point de départ fiable pour les ports, modes, moteurs, OSD, rates, PID, filtres et sauvegardes CLI.",
    rating: 5,
    featured: true,
    authority: "Officiel",
    reviewed
  },
  {
    id: "betaflight-docs",
    name: "Betaflight Documentation",
    url: "https://www.betaflight.com/docs/",
    category: "MEDIA",
    subcategory: "Documentation",
    type: "Documentation officielle",
    levels: ["Débutant", "Intermédiaire", "Avancé", "Expert"],
    technologies: ["Betaflight", "CLI", "MSP"],
    tags: ["PID", "filters", "GPS", "OSD", "VTX", "failsafe"],
    description:
      "Documentation de référence concernant la configuration, le tuning, les fonctionnalités et le CLI Betaflight.",
    why:
      "Plus précise et plus sûre qu’une succession de tutoriels lorsque vous devez vérifier le comportement réel d’un paramètre.",
    rating: 5,
    authority: "Officiel",
    reviewed
  },
  {
    id: "blackbox-explorer",
    name: "Blackbox Explorer",
    url: "https://blackbox.betaflight.com/",
    category: "TUNING",
    subcategory: "Blackbox",
    type: "Analyseur web",
    levels: ["Intermédiaire", "Avancé", "Expert"],
    technologies: ["Betaflight", "BBL", "FFT"],
    tags: ["gyro", "noise", "PID", "filters", "logs", "feedforward"],
    description:
      "Visualiseur officiel des logs Blackbox avec courbes, spectres et inspection détaillée des vols.",
    why:
      "Indispensable pour distinguer problème mécanique, bruit gyro, tracking PID et comportement du feedforward.",
    rating: 5,
    featured: true,
    authority: "Officiel",
    reviewed
  },
  {
    id: "blackbox-tools",
    name: "Betaflight Blackbox Tools",
    url: "https://github.com/betaflight/blackbox-tools",
    category: "TUNING",
    subcategory: "Blackbox",
    type: "Outils CLI open-source",
    levels: ["Avancé", "Expert"],
    technologies: ["CLI", "CSV", "Blackbox"],
    tags: ["decode", "render", "automation", "logs", "data"],
    description:
      "Utilitaires officiels pour décoder les logs en CSV et générer des rendus exploitables dans une chaîne vidéo.",
    why:
      "Utile pour automatiser des analyses, produire ses propres graphiques ou intégrer les données dans un workflow scientifique.",
    rating: 4,
    authority: "Officiel",
    reviewed
  },
  {
    id: "pidtoolbox",
    name: "PIDtoolbox",
    url: "https://github.com/ianrmurphy/PIDtoolbox",
    category: "TUNING",
    subcategory: "PID / filtres",
    type: "Analyseur spécialisé",
    levels: ["Avancé", "Expert"],
    technologies: ["MATLAB", "Blackbox", "Step response"],
    tags: ["PID", "filters", "step response", "spectrogram", "noise"],
    description:
      "Suite d’analyse de logs conçue pour comparer objectivement le bruit, la réponse PID et les performances entre plusieurs vols.",
    why:
      "Sa lecture par throttle, ses step responses et ses comparaisons avant/après en font une référence du tuning avancé.",
    rating: 5,
    featured: true,
    authority: "Communauté reconnue",
    reviewed
  },
  {
    id: "saturn-fpv-tools",
    name: "Saturn FPV Tools",
    url: "https://saturnfpv.com/tools.html",
    category: "TOOLS",
    subcategory: "Suite technique",
    type: "Web app open-source",
    levels: ["Intermédiaire", "Avancé", "Expert"],
    technologies: ["Offline", "Blackbox", "RF"],
    tags: [
      "rates",
      "TPA",
      "current sensor",
      "RF link budget",
      "tip speed",
      "telemetry"
    ],
    description:
      "Collection rare de calculateurs et visualisations FPV fonctionnant principalement hors ligne.",
    why:
      "Regroupe conversion de rates, TPA, calibration courant/tension, budget RF, vitesse de bout d’hélice et analyses avancées.",
    rating: 5,
    featured: true,
    authority: "Projet communautaire",
    reviewed
  },
  {
    id: "betaflight-presets",
    name: "Betaflight Presets",
    url: "https://betaflight.com/docs/wiki/app/presets-tab",
    category: "TUNING",
    subcategory: "Presets",
    type: "Bibliothèque de configurations",
    levels: ["Débutant", "Intermédiaire", "Avancé"],
    technologies: ["Betaflight", "CLI"],
    tags: ["tune", "rates", "VTX", "OSD", "RC link"],
    description:
      "Système officiel de snippets configurables directement depuis l’application Betaflight.",
    why:
      "Accélère une configuration cohérente, à condition de vérifier l’auteur, le statut et la version cible avant application.",
    rating: 4,
    authority: "Officiel",
    reviewed
  },
  {
    id: "elrs-docs",
    name: "ExpressLRS",
    url: "https://www.expresslrs.org/",
    category: "DIGITAL",
    subcategory: "Radio link",
    type: "Documentation officielle",
    levels: ["Débutant", "Intermédiaire", "Avancé", "Expert"],
    technologies: ["LoRa", "FLRC", "CRSF", "2.4 GHz", "900 MHz"],
    tags: ["ELRS", "binding", "telemetry", "packet rate", "backpack"],
    description:
      "Documentation centrale du lien radio open-source ExpressLRS.",
    why:
      "Explique correctement les versions, domaines réglementaires, packet rates, binding phrases, télémétrie et backpacks.",
    rating: 5,
    featured: true,
    authority: "Officiel",
    reviewed
  },
  {
    id: "elrs-web-flasher",
    name: "ExpressLRS Web Flasher",
    url: "https://expresslrs.github.io/web-flasher/",
    category: "DIGITAL",
    subcategory: "Radio link",
    type: "Flasher web",
    levels: ["Intermédiaire", "Avancé"],
    technologies: ["WebSerial", "UART", "Passthrough"],
    tags: ["ELRS", "flash", "receiver", "transmitter", "backpack"],
    description:
      "Flasher web officiel pour les firmwares ExpressLRS modernes et leurs backpacks.",
    why:
      "Évite une installation desktop dans les cas compatibles et rend les opérations terrain beaucoup plus rapides.",
    rating: 5,
    authority: "Officiel",
    reviewed
  },
  {
    id: "edgetx-buddy",
    name: "EdgeTX Buddy",
    url: "https://buddy.edgetx.org/",
    category: "DIGITAL",
    subcategory: "Radio",
    type: "Flasher web",
    levels: ["Débutant", "Intermédiaire", "Avancé"],
    technologies: ["EdgeTX", "WebUSB"],
    tags: ["radio", "firmware", "SD card", "sound pack", "backup"],
    description:
      "Outil en ligne officiel pour télécharger et flasher EdgeTX ainsi que le contenu de carte SD.",
    why:
      "Particulièrement pratique pour maintenir une radio depuis un navigateur Chromium compatible.",
    rating: 5,
    authority: "Officiel",
    reviewed
  },
  {
    id: "esc-configurator",
    name: "ESC Configurator",
    url: "https://esc-configurator.com/",
    category: "BUILD",
    subcategory: "ESC",
    type: "Configurateur web",
    levels: ["Intermédiaire", "Avancé"],
    technologies: ["Bluejay", "BLHeli_S", "AM32", "WebSerial"],
    tags: ["ESC", "PWM", "startup tone", "bidirectional DShot", "flash"],
    description:
      "Configurateur web pour lire, régler et flasher plusieurs familles d’ESC compatibles.",
    why:
      "Un outil terrain essentiel pour Bluejay, BLHeli_S et certaines opérations AM32 sans logiciel desktop lourd.",
    rating: 5,
    featured: true,
    authority: "Projet open-source",
    reviewed
  },
  {
    id: "am32",
    name: "AM32",
    url: "https://am32.ca/",
    category: "BUILD",
    subcategory: "ESC",
    type: "Firmware et configurateur",
    levels: ["Avancé", "Expert"],
    technologies: ["AM32", "DShot", "ESC telemetry"],
    tags: ["ESC", "firmware", "PWM frequency", "sinusoidal startup"],
    description:
      "Firmware open-source pour ESC 32 bits avec configurateur et documentation matérielle.",
    why:
      "Permet d’explorer des réglages plus profonds sur des ESC compatibles, notamment télémétrie, PWM et démarrage moteur.",
    rating: 4,
    authority: "Officiel",
    reviewed
  },
  {
    id: "hdzero-docs",
    name: "HDZero Documentation",
    url: "https://docs.hd-zero.com/",
    category: "DIGITAL",
    subcategory: "Vidéo numérique",
    type: "Documentation officielle",
    levels: ["Débutant", "Intermédiaire", "Avancé"],
    technologies: ["HDZero", "MSP DisplayPort"],
    tags: ["VTX", "goggles", "firmware", "OSD", "video"],
    description:
      "Guides officiels pour les lunettes, VTX, mises à jour et configurations HDZero.",
    why:
      "Centralise les procédures de mise à jour et réduit le risque de mélanger des firmwares ou méthodes incompatibles.",
    rating: 5,
    authority: "Officiel",
    reviewed
  },
  {
    id: "walksnail-hub",
    name: "Walksnail Firmware Hub",
    url: "https://walksnail.app/firmware",
    category: "DIGITAL",
    subcategory: "Vidéo numérique",
    type: "Archive de firmwares",
    levels: ["Intermédiaire", "Avancé"],
    technologies: ["Walksnail Avatar", "Ascent"],
    tags: ["VTX", "goggles", "firmware", "release notes", "video"],
    description:
      "Historique structuré des firmwares Walksnail Avatar et Ascent avec notes de version.",
    why:
      "Très utile pour vérifier les avertissements matériels et la compatibilité avant mise à jour ou downgrade.",
    rating: 5,
    authority: "Hub spécialisé",
    reviewed
  },
  {
    id: "dji-o3-downloads",
    name: "DJI O3 Downloads",
    url: "https://www.dji.com/downloads/products/o3-air-unit",
    category: "DIGITAL",
    subcategory: "Vidéo numérique",
    type: "Support officiel",
    levels: ["Débutant", "Intermédiaire", "Avancé"],
    technologies: ["DJI O3", "Canvas Mode"],
    tags: ["DJI", "manual", "release notes", "installation", "firmware"],
    description:
      "Manuels, notes de version et recommandations d’installation du système DJI O3.",
    why:
      "La référence à consulter avant de modifier un montage, une alimentation ou une combinaison lunettes/air unit.",
    rating: 4,
    authority: "Officiel",
    reviewed
  },
  {
    id: "openipc-fpv",
    name: "OpenIPC FPV",
    url: "https://docs.openipc.org/use-cases/fpv/",
    category: "DIGITAL",
    subcategory: "Vidéo open-source",
    type: "Documentation technique",
    levels: ["Avancé", "Expert"],
    technologies: ["OpenIPC", "WFB-NG", "Linux", "MSP OSD"],
    tags: ["digital video", "Wi-Fi", "ground station", "latency", "telemetry"],
    description:
      "Écosystème expérimental de vidéo FPV numérique ouverte basé sur des composants et logiciels accessibles.",
    why:
      "Une porte d’entrée rare vers les systèmes vidéo modifiables, les ground stations DIY et les paramètres radio bas niveau.",
    rating: 4,
    featured: true,
    authority: "Projet open-source",
    reviewed
  },
  {
    id: "rotorbuilds",
    name: "RotorBuilds",
    url: "https://rotorbuilds.com/",
    category: "BUILD",
    subcategory: "Build database",
    type: "Base communautaire",
    levels: ["Débutant", "Intermédiaire", "Avancé", "Expert"],
    technologies: ["BOM", "Build logs"],
    tags: ["frame", "motors", "ESC", "FC", "weight", "inspiration"],
    description:
      "Base communautaire de builds documentés, listes de pièces et photos de montage.",
    why:
      "Permet de vérifier qu’une combinaison a déjà été construite et d’observer les détails de câblage ou d’intégration.",
    rating: 5,
    featured: true,
    authority: "Communauté",
    reviewed
  },
  {
    id: "quadpartpicker",
    name: "QuadPartPicker",
    url: "https://www.quadpartpicker.com/",
    category: "BUILD",
    subcategory: "Component picker",
    type: "Configurateur",
    levels: ["Débutant", "Intermédiaire", "Avancé"],
    technologies: ["Component database", "BOM"],
    tags: ["components", "builder", "price", "parts", "comparison"],
    description:
      "Outil de sélection et d’organisation de composants pour préparer une configuration FPV.",
    why:
      "Une base utile pour structurer un panier et comparer des références avant de valider soi-même la compatibilité.",
    rating: 4,
    authority: "Projet indépendant",
    reviewed
  },
  {
    id: "miniquadtestbench",
    name: "Mini Quad Test Bench",
    url: "https://www.miniquadtestbench.com/results/",
    category: "BUILD",
    subcategory: "Moteurs",
    type: "Base de mesures",
    levels: ["Intermédiaire", "Avancé", "Expert"],
    technologies: ["Thrust stand", "RPM", "Load cell"],
    tags: ["motors", "props", "thrust", "efficiency", "amps", "dyno"],
    description:
      "Archives de tests instrumentés de moteurs, hélices et ESC avec poussée, consommation et rendement.",
    why:
      "Les données mesurées sont plus instructives que les calculs théoriques lorsqu’une combinaison moteur/hélice existe dans la base.",
    rating: 5,
    authority: "Laboratoire communautaire",
    reviewed
  },
  {
    id: "ecalc",
    name: "eCalc xcopterCalc",
    url: "https://ecalc.ch/xcoptercalc.php",
    category: "TOOLS",
    subcategory: "Performance",
    type: "Calculateur avancé",
    levels: ["Intermédiaire", "Avancé", "Expert"],
    technologies: ["Performance model", "Motor database"],
    tags: ["range", "motor", "battery", "temperature", "efficiency", "thrust"],
    description:
      "Calculateur de propulsion multicoptère intégrant masse, batterie, moteurs, altitude et conditions atmosphériques.",
    why:
      "L’un des modèles les plus complets pour tester une hypothèse de propulsion, tout en gardant une marge face aux incertitudes.",
    rating: 5,
    authority: "Outil spécialisé",
    reviewed
  },
  {
    id: "rotorhazard",
    name: "RotorHazard",
    url: "https://github.com/RotorHazard/RotorHazard",
    category: "TOOLS",
    subcategory: "Race timing",
    type: "Système open-source",
    levels: ["Avancé", "Expert"],
    technologies: ["Raspberry Pi", "Python", "RX5808"],
    tags: ["racing", "lap timer", "event management", "plugins", "timing"],
    description:
      "Système open-source de chronométrage et de gestion d’événements FPV jusqu’à plusieurs pilotes simultanés.",
    why:
      "Projet profondément extensible, utilisable hors ligne et capable d’alimenter affichages, résultats et overlays live.",
    rating: 5,
    featured: true,
    authority: "Projet open-source",
    reviewed
  },
  {
    id: "gyroflow",
    name: "Gyroflow",
    url: "https://gyroflow.xyz/",
    category: "TOOLS",
    subcategory: "Post-production",
    type: "Application open-source",
    levels: ["Débutant", "Intermédiaire", "Avancé", "Expert"],
    technologies: ["Rust", "GPU", "Gyroscope"],
    tags: ["stabilization", "GoPro", "DJI", "blackbox", "rolling shutter"],
    description:
      "Stabilisation vidéo basée sur les données gyroscopiques avec correction optique et rolling shutter.",
    why:
      "Un standard de fait du workflow cinematic FPV, compatible avec de nombreuses caméras et sources de données gyro.",
    rating: 5,
    featured: true,
    authority: "Projet open-source",
    reviewed
  },
  {
    id: "frequency-planner",
    name: "FPV Frequency Planner",
    url: "https://geratools.com/fpv-frequency-channel-planner",
    category: "TOOLS",
    subcategory: "RF",
    type: "Planificateur",
    levels: ["Intermédiaire", "Avancé"],
    technologies: ["5.8 GHz", "Analog video"],
    tags: ["VTX", "channels", "raceband", "interference", "multi-pilot"],
    description:
      "Planifie des canaux vidéo analogiques espacés pour limiter les interférences entre plusieurs pilotes.",
    why:
      "Très utile en session de groupe ou événement, où le simple choix de canaux adjacents devient rapidement problématique.",
    rating: 4,
    authority: "Projet indépendant",
    reviewed
  },
  {
    id: "dronespot",
    name: "DroneSpot",
    url: "https://dronespot.fr/fr",
    category: "FLIGHT",
    subcategory: "Spots",
    type: "Carte communautaire",
    levels: ["Débutant", "Intermédiaire", "Avancé", "Expert"],
    technologies: ["Maps", "Weather", "Community"],
    tags: ["spots", "France", "Europe", "weather", "access", "photos"],
    description:
      "Carte communautaire de spots, enrichie de données météo, d’accès et d’informations de planification.",
    why:
      "Un bon point de départ pour découvrir une zone, sans remplacer la vérification réglementaire officielle du jour.",
    rating: 4,
    authority: "Communauté",
    reviewed
  },
  {
    id: "windy",
    name: "Windy",
    url: "https://www.windy.com/",
    category: "FLIGHT",
    subcategory: "Météo",
    type: "Carte météo",
    levels: ["Débutant", "Intermédiaire", "Avancé", "Expert"],
    technologies: ["ECMWF", "GFS", "ICON", "HRRR"],
    tags: ["wind", "gusts", "rain", "cloud base", "visibility", "forecast"],
    description:
      "Visualisation de modèles météo avec vent, rafales, pluie, visibilité et bases nuageuses.",
    why:
      "La comparaison des modèles et la lecture des rafales sont particulièrement utiles pour évaluer une fenêtre de vol FPV.",
    rating: 5,
    authority: "Service météo",
    reviewed
  },
  {
    id: "faa-b4ufly",
    name: "FAA B4UFLY",
    url: "https://www.faa.gov/uas/getting_started/b4ufly",
    category: "FLIGHT",
    subcategory: "Réglementation US",
    type: "Portail officiel",
    levels: ["Débutant", "Intermédiaire", "Avancé", "Expert"],
    technologies: ["Airspace", "TFR", "LAANC"],
    tags: ["FAA", "United States", "airspace", "authorization", "TRUST"],
    description:
      "Point d’entrée officiel de la FAA vers les services B4UFLY approuvés pour consulter l’espace aérien américain.",
    why:
      "À consulter avant tout vol aux États-Unis afin d’identifier espace contrôlé, restrictions temporaires et fournisseurs LAANC.",
    rating: 5,
    authority: "Officiel",
    reviewed
  },
  {
    id: "easa-geo-zones",
    name: "EASA Geo-Zones",
    url: "https://www.easa.europa.eu/en/light/topics/geo-zones-know-where-fly-your-drone",
    category: "FLIGHT",
    subcategory: "Réglementation UE",
    type: "Documentation officielle",
    levels: ["Débutant", "Intermédiaire", "Avancé", "Expert"],
    technologies: ["EASA", "Open category", "Geo-zones"],
    tags: ["Europe", "A1", "A2", "A3", "airspace", "regulation"],
    description:
      "Explication officielle des géozones européennes et de la manière de trouver la carte publiée par chaque État.",
    why:
      "Évite de supposer qu’une carte unique ou qu’une règle nationale s’applique automatiquement dans toute l’Europe.",
    rating: 5,
    authority: "Officiel",
    reviewed
  },
  {
    id: "france-drone-rules",
    name: "Service-Public — Drone",
    url: "https://www.service-public.fr/particuliers/vosdroits/F35675",
    category: "FLIGHT",
    subcategory: "Réglementation France",
    type: "Référence officielle",
    levels: ["Débutant", "Intermédiaire", "Avancé", "Expert"],
    technologies: ["DGAC", "EASA", "Open category"],
    tags: ["France", "C0", "C1", "C2", "registration", "rules"],
    description:
      "Présentation officielle des règles françaises pour les drones marqués CE et les vols en catégorie ouverte.",
    why:
      "Une source réglementaire primaire à privilégier avant les résumés commerciaux et publications communautaires.",
    rating: 5,
    authority: "Officiel",
    reviewed
  },
  {
    id: "oscar-liang",
    name: "Oscar Liang",
    url: "https://oscarliang.com/",
    category: "MEDIA",
    subcategory: "Guides techniques",
    type: "Blog spécialisé",
    levels: ["Débutant", "Intermédiaire", "Avancé"],
    technologies: ["Build", "Betaflight", "ELRS"],
    tags: ["tutorials", "reviews", "PID", "filters", "radio", "motors"],
    description:
      "Bibliothèque très étendue de guides de montage, configuration, tuning et choix de composants.",
    why:
      "Ses articles techniques offrent souvent un excellent pont entre la documentation officielle et l’application pratique.",
    rating: 5,
    featured: true,
    authority: "Média spécialisé",
    reviewed
  },
  {
    id: "culture-fpv",
    name: "Culture FPV",
    url: "https://culturefpv.fr/",
    category: "MEDIA",
    subcategory: "Média francophone",
    type: "News, guides et émissions",
    levels: ["Débutant", "Intermédiaire", "Avancé"],
    technologies: ["FPV", "Video", "Podcast"],
    tags: ["France", "news", "reviews", "tutorials", "RSS", "community"],
    description:
      "Média francophone couvrant actualités, guides, émissions, pilotes et culture FPV.",
    why:
      "Une source adaptée pour suivre l’écosystème français au-delà des seules fiches techniques anglophones.",
    rating: 4,
    authority: "Média spécialisé",
    reviewed
  },
  {
    id: "intofpv",
    name: "IntoFPV",
    url: "https://intofpv.com/",
    category: "MEDIA",
    subcategory: "Communauté",
    type: "Forum technique",
    levels: ["Débutant", "Intermédiaire", "Avancé", "Expert"],
    technologies: ["Community knowledge"],
    tags: ["troubleshooting", "builds", "tuning", "electronics", "forum"],
    description:
      "Forum technique historique avec de nombreux diagnostics, retours matériels et discussions très spécialisées.",
    why:
      "Les archives permettent souvent de retrouver un problème obscur lié à un composant, une target ou un câblage précis.",
    rating: 4,
    authority: "Communauté",
    reviewed
  },
  {
    id: "emuflight",
    name: "EmuFlight",
    url: "https://github.com/emuflight/EmuFlight",
    category: "DIGITAL",
    subcategory: "Flight firmware",
    type: "Firmware open-source",
    levels: ["Avancé", "Expert"],
    technologies: ["STM32", "IMUF", "DShot"],
    tags: ["firmware", "whoop", "filtering", "PID", "flight controller"],
    description:
      "Firmware multirotor alternatif orienté comportement de vol, filtrage et fonctionnalités expérimentales.",
    why:
      "Une branche intéressante pour les pilotes qui veulent comprendre d’autres choix de contrôle et de filtrage que Betaflight.",
    rating: 3,
    authority: "Projet open-source",
    reviewed
  },
  {
    id: "velocidrone",
    name: "VelociDrone",
    url: "https://www.velocidrone.com/",
    category: "TOOLS",
    subcategory: "Simulateur",
    type: "Simulateur FPV",
    levels: ["Débutant", "Intermédiaire", "Avancé", "Expert"],
    technologies: ["Physics simulation", "Track editor"],
    tags: ["simulator", "racing", "freestyle", "training", "multiplayer"],
    description:
      "Simulateur reconnu pour l’entraînement race, la répétition de circuits et le travail de précision.",
    why:
      "Sa valeur vient moins du spectacle que de la répétabilité des sessions et de la profondeur de son écosystème racing.",
    rating: 5,
    authority: "Produit spécialisé",
    reviewed
  },
  {
    id: "liftoff",
    name: "Liftoff",
    url: "https://www.liftoff-game.com/",
    category: "TOOLS",
    subcategory: "Simulateur",
    type: "Simulateur FPV",
    levels: ["Débutant", "Intermédiaire", "Avancé"],
    technologies: ["Physics simulation", "Multiplayer"],
    tags: ["simulator", "freestyle", "training", "workshop", "tracks"],
    description:
      "Simulateur FPV accessible avec environnements variés, atelier de drones et modes multijoueur.",
    why:
      "Une bonne porte d’entrée pour automatiser les gestes fondamentaux avant de risquer du matériel réel.",
    rating: 4,
    authority: "Produit spécialisé",
    reviewed
  }
];
