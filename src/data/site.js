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
    ["LinkedIn", "https://www.linkedin.com/company/14781954/"]
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
  {n:"Kinnie Benelux", s:"Webshop", u:"kinnie-benelux.nl", f:"kinnie-benelux", year:"2026", tools:["Shopify","Claude","ChatGPT"],
   intro:"Mediterraans gevoel, makkelijk bestellen.", colors:["#2A0B0E","#7A2A10","#FE8A2A"],
   about:"Kinnie is de bittere sinaasappelfrisdrank uit Malta, sinds 1952. Voor Kinnie Benelux bouwde ik een webshop om Kinnie in Nederland en België te verkopen.\n\nJe kiest snel tussen Classic, Zero en Zest, stelt zelf een bundel samen en ziet direct wat je bespaart. Sfeerbeelden van Malta geven de shop het zonnige gevoel van het merk."},
  {n:"Reben", s:"Webshop, technische ondersteuning", u:"byreben.com", f:"reben", year:"2024", tools:["Shopify","ChatGPT"],
   intro:"Een eigenzinnig product, helder gepresenteerd.", colors:["#310114","#6B0635","#D58FB4"],
   about:"Reben maakt rabarberlikeur en een Rhubarb Spritz met een kwart van de suiker van een klassieke spritz. Zo'n bijzonder product vraagt om een webshop die het verhaal en de beelden de ruimte geeft.\n\nIk bouwde de webshop in Shopify, met grote sfeerbeelden, een rustige productpresentatie en een duidelijke route naar bestellen. Met de store locator vind je snel waar Reben te koop is.\n\nDaarna bleef ik betrokken voor technische ondersteuning, zodat de webshop meegroeit met nieuwe producten en samenwerkingen."},
  {n:"Albertus Magnus", s:"Web development, technische ondersteuning", u:"albertus.nl", f:"albertus", year:"2023", tools:["WordPress","Elementor"],
   intro:"Een vereniging met geschiedenis, online overzichtelijk.", colors:["#0B2A16","#1F5A2E","#D4A72C"],
   about:"R.K.S.V. Albertus Magnus is sinds 1896 een algemene studentenvereniging in Groningen. De website brengt nieuws, de vereniging, senioren en zakelijke partners bij elkaar.\n\nIk werkte mee aan de ontwikkeling van de site en verzorg technische ondersteuning, zodat de vereniging de website goed kan blijven gebruiken."},
  {n:"Buddy Run Noord", s:"Website-ontwerp, development", u:"buddyrun-noord.nl", f:"buddyrun-noord", year:"2026", tools:["Astro","Vercel","GitHub","Claude","ChatGPT"],
   intro:"Samen over de finish, ook online.", colors:["#00243B","#00446D","#FD881E"],
   about:"Buddy Run Noord is een obstakelrun in Groningen voor mensen met een verstandelijke beperking en hun buddy's. De nieuwe website laat meteen voelen waar de dag om draait.\n\nVeel ruimte voor foto's van eerdere edities, en een duidelijke route om mee te doen, vrijwilliger te worden of te sponsoren. Op desktop en mobiel."},
  {n:"Graveyard", s:"Web development, technische ondersteuning", u:"graveyardevents.nl", f:"graveyard", year:"2024", tools:["WordPress","Elementor"],
   intro:"Een eventsite met de juiste sfeer.", colors:["#08090A","#2A0B0D","#E8262C"],
   about:"Graveyard organiseert events in Patronaat, Haarlem. De website zet de edities, data en tickets op een donkere, sfeervolle pagina.\n\nIk werkte aan de ontwikkeling van de site en verzorg technische ondersteuning."}
];

/* Extra logo's die alleen op projectpagina's verschijnen, niet bij "Slimme tools" op de homepage */
export const EXTRA_LOGOS = [
  {"name": "WordPress", "file": "/tools/wordpress.png", "ratio": "200/200"},
  {"name": "Elementor", "file": "/tools/elementor.png", "ratio": "200/200"}
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
  },
  {
    "name": "Supabase",
    "use": "Database, logins en opslag",
    "file": "/tools/supabase.png",
    "width": 46,
    "ratio": "194/200"
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
  {name:"Patrick v.d. Berg", org:"StuRents", photo:"patrick-van-den-berg",
   text:"Bart heeft verstand van zaken en werkt nauwkeurig. Na een eerste meeting heeft Bart onze wensen in kaart gebracht, en vervolgens bovenverwachting uitgevoerd."},
  {name:"Esther Laven", org:"'t Houten Höfke", photo:"esther-laven",
   text:"Bart is rustig en neemt de tijd om iets uit te leggen. Al mijn vragen of eventuele veranderingen werden ook meteen opgepakt. Positief is zeker de duidelijke en snelle communicatie. En met weinig woorden van mijn kant als leek zijnde begreep hij altijd snel wat ik bedoelde. En natuurlijk zeer tevreden over het eindresultaat!"}
];
