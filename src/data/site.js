/* Alle inhoud van de site op één plek. Later kan dit bestand plaatsmaken voor inhoud uit een CMS. */
export const SITE = {
  name: "TodayOnline",
  url: "https://todayonline.nl",
  title: "TodayOnline | Websites op maat uit Amsterdam",
  description: "Websites op maat uit Amsterdam. De slagkracht van een bureau, gewoon contact met Bart Ziemerink.",
  mail: "hello@todayonline.nl",
  formMail: "bart@todayonline.nl",
  /* Web3Forms access key. Leeg = het formulier opent het mailprogramma van de bezoeker. */
  formKey: "37c4e512-df84-4d14-b1a6-a7def7a26cef",   /* hier komt het bericht uit het formulier terecht */
  tel: "+31 6 345 40 298",
  socials: [
    ["Instagram", "https://www.instagram.com/todayonline.nl/"],
    ["LinkedIn", "https://www.linkedin.com/company/14781954/"],
    ["Facebook", "https://www.facebook.com/todayonline.nl"]
  ]
};

/* Stappenplan: t = titel, jij = wat de klant aanlevert, wij = wat ik doe, res = resultaat, gate = kader na de stap */
export const STEPS = [
  {t:"Kennismaken", jij:"Je vertelt over je bedrijf, je wensen en je doelen. En wat je later zelf wilt kunnen aanpassen.", wij:"Ik luister, vraag door en leg vast wat de website moet doen.", res:"We weten allebei waar we naartoe werken."},
  {t:"Richting bepalen", jij:"Je kiest de richting die klopt en vult aan wat nog mist.", wij:"Ik verken met AI meerdere ideeën en leg de structuur vast, met een beheeromgeving die bij je past.", res:"Een plan met pagina's, opbouw, stijl en beheer."},
  {t:"Preview bekijken", jij:"Je bekijkt het ontwerp en zegt eerlijk wat je ervan vindt.", wij:"Ik maak je ideeën snel zichtbaar en verwerk je feedback gericht.", res:"Een ontwerp dat jij hebt goedgekeurd.",
   gate:["Vóór de bouw","Scope, kosten en planning spreken we af voordat ik ga bouwen. Je weet vooraf waar je aan toe bent."]},
  {t:"Bouwen en verfijnen", jij:"Je levert teksten en beelden aan en geeft tussendoor feedback.", wij:"Ik combineer AI met vakmanschap en richt het CMS zo in dat je teksten, afbeeldingen, projecten en andere afgesproken inhoud zelf makkelijk aanpast.", res:"Een complete website die je zelf kunt bijhouden."},
  {t:"Live en verder", jij:"Je loopt de website na en geeft akkoord.", wij:"Ik zet de website live en leg je uit hoe het beheer werkt. Heb je daarna een vraag, dan schakel je rechtstreeks met mij.", res:"Je website staat online en je kunt zelfstandig verder.",
   gate:["Slim gebouwd, makkelijk bij te houden","AI helpt mij bij het maken en verbeteren. Het CMS maakt het dagelijkse beheer voor jou eenvoudig."]}
];

/* Projecten: f = bestandsnaam van de screenshot in src/assets/work/<f>-desktop.jpg (optioneel <f>-mobile.jpg) */
export const WORK = [
  {n:"Kinnie Benelux", s:"Webshop", u:"kinnie-benelux.nl", f:"kinnie-benelux"},
  {n:"Reben", s:"Webshop, conversieoptimalisatie", u:"byreben.com", f:"reben"},
  {n:"Albertus Magnus", s:"Web development, technische ondersteuning", u:"albertus.nl", f:"albertus"},
  {n:"Stichting Oekraïne Express", s:"Website-ontwerp, usability (UX)", u:"stichting-oekraine-express.nl", f:"oekraine-express"},
  {n:"Graveyard", s:"Web development, technische ondersteuning", u:"graveyardevents.nl", f:"graveyard"}
];

/* Tools: logo's staan als masker in public/tools/. width = weergavebreedte in px, ratio = oorspronkelijke verhouding */
export const TOOLS = [
  {
    "name": "Claude",
    "use": "AI voor ideeën, tekst en code",
    "file": "/tools/claude.png",
    "width": 51,
    "ratio": "1279/1280"
  },
  {
    "name": "ChatGPT",
    "use": "AI voor ideeën en varianten",
    "file": "/tools/chatgpt.png",
    "width": 52,
    "ratio": "3790/3840"
  },
  {
    "name": "GitHub",
    "use": "Versiebeheer van de code",
    "file": "/tools/github.png",
    "width": 51,
    "ratio": "256/250"
  },
  {
    "name": "Vercel",
    "use": "Hosting en livegang",
    "file": "/tools/vercel.png",
    "width": 114,
    "ratio": "2035/407"
  },
  {
    "name": "Shopify",
    "use": "Webshops en betalingen",
    "file": "/tools/shopify.png",
    "width": 43,
    "ratio": "417/473"
  },
  {
    "name": "Sanity",
    "use": "Beheer van je inhoud (CMS)",
    "file": "/tools/sanity.png",
    "width": 54,
    "ratio": "540/447"
  },
  {
    "name": "Astro",
    "use": "Snelle websites bouwen",
    "file": "/tools/astro.png",
    "width": 45,
    "ratio": "170/214"
  }
];

/* Previews van projecten:
   speed   = scrollsnelheid in framebreedtes per seconde (hoger is sneller)
   maxLeg  = langste tijd in seconden om van boven naar beneden te scrollen; een heel lange pagina gaat daardoor vanzelf sneller
   pause   = pauze in seconden boven en onder */
export const PREVIEW = {speed:0.08, maxLeg:35, pause:1.8};

/* Reviews: photo = bestandsnaam in src/assets/reviews/<photo>.png. Zonder foto verschijnen de initialen. */
export const REVIEWS = [
  {name:"Sabine Bossink", org:"Pedicurepraktijk N°50", photo:"sabine-bossink",
   text:"Een hele fijne manier van werken met heel veel enthousiasme. Kort mijn wensen aan Bart verteld en eigelijk was de conceptversie al bijna goed. Elke keer als ik iets aangepast wilde hebben werd dit ook snel gedaan. Bart denkt goed met je mee. Voor iedereen die een web-site wil maken zou ik Bart zeker aanbevelen!"},
  {name:"Sjors van den Hoogen", org:"Belanesia Teamwear", photo:"sjors-van-den-hoogen",
   text:"Bart heeft me meerdere keren perfect geholpen. Van one-pagers tot uitgebreide websites, hij denkt van a tot z mee, en komt met creatieve oplossingen die bovenal nuttig zijn. Ik kom zeker terug als ik nog eens wat nodig heb."},
  {name:"Erik Jan Souhoka", org:"Stichting Oekraïne Express", photo:"erik-jan-souhoka",
   text:"Bart van TodayOnline heeft de website voor onze stichting ontworpen, en we zijn ontzettend tevreden met het resultaat. Hij heeft goed geluisterd naar onze wensen en wist op basis van onze schetsen precies te realiseren wat we voor ogen hadden. Tijdens het hele ontwerpproces en zelfs daarna begeleidde hij ons uitstekend met zijn expertise en creatieve ideeën. 100% aan te raden!"},
  {name:"Patrick v.d. Berg", org:"StuRents", photo:"",
   text:"Bart heeft verstand van zaken en werkt nauwkeurig. Na een eerste meeting heeft Bart onze wensen in kaart gebracht, en vervolgens bovenverwachting uitgevoerd."}
];
