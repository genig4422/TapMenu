"use client";
import { useState, useEffect } from "react";

export default function MenuWithFixedButtonItalia() {
  const categories = ["Pizza","Insalate","Antipasti","Pasta","Risoto","Zuppe", "Carne","Dolci","Vini","Alcolici","Birra","Bevande","Caffè"];
 

  const content = {
    Pizza:[
      {price: "600L", name: "Margherita",  image: "/kearatares/margarita.jpg",display:"Salsa di Pomodoro, Mozzarella, Basilico"},
      {price: "700L", name: "Prosciutto",  image: "/kearatares/proshute.jpg"},
      {price: "700L", name: "Salsiccia",  image: "/kearatares/proshut.jpg"},
      {price: "800L", name: "Diavolo",  image: "/kearatares/diavola.jpg",display:"Salame Piccante, Olive, Peperoncino"},
      {price: "1.000L", name: "Quattro stagioni",  image: "/kearatares/stinet.jpg",display:"Prosciutto, Salame, Carciofi, Peperoni"},
      {price: "1.000L", name: "Quattro diatere",  image: "/kearatares/diatherat.jpg",display:"Mozzarella, Ricotta, Gorgonzola, Parmigiano"},
      {price: "1.000L", name: "Capriccioso",  image: "/kearatares/capricosa.jpg",display:"Prosciutto, Funghi, Carciofi, Olive"},
      {price: "900L", name: "Tonno e cipolle",  image: "/kearatares/ton.jpg"},
      {price: "1.100L", name: "Frutti di mare",  image: "/kearatares/deti.jpg"},
      {price: "800L", name: "Prosciutto e patate",  image: "/kearatares/patate.jpg"},
      {price: "700L", name: "Funghi",  image: "/kearatares/kerpudh.jpg"},
      {price: "1.000L", name: "Parma",  image: "/kearatares/parma.jpg",display:"Prosciutto di Parma, Rucola, Pomodorini, Parmigiano"},
      {price: "800L", name: "Romana",  image: "/kearatares/romana.jpg",display:" Acume, Olive, Capperi"},
      {price: "1.100L", name: "Bologna",  image: "/kearatares/bologna.jpg",display:"Mortadella, Mozzarella di Bufala, Pistacchio"},
    ],

    Insalate:[
        {price: "350L", name: "Insalata del villaggio",  image: "/kearatares/fshati.jpg",display:"Insalata Verde, Formaggio Bianco, Pomodoro, Cetriolo, Cipolla"},
        {price: "600L", name: "Insalata Cesare",  image: "/kearatares/cesar.jpg",display:"Petto di Pollo, Pane Tostato, Pomodori, Insalata Verde, Salsa Caesar"},
        {price: "500L", name: "Insalata di rucola",  image: "/kearatares/rukola.jpg",display:"Rucola, Parmigiano, Pomodori, Pomodorini"},
        {price: "300L", name: "Insalata di pomodori e cipolle",  image: "/kearatares/domate.jpg",},
    ],

    Antipasti:[
        {price: "300L", name: "Bruschetta",  image: "/kearatares/brusket.jpg",display:"Pane Tostato Con Fette di Pomodoro e Prezzemolo"},
        {price: "550L", name: "Arrosto di manzo",  image: "/kearatares/rosto.jpg",display:"Con Crema di Parmigiano"},
        {price: "500L", name: "Panino al tonno",  image: "/kearatares/vic.jpg",display:"Arrosto di Manzo Con Salsa al Tonno"},
        {price: "1200L", name: "Antipasti tradizionali",  image: "/kearatares/antipast.jpg",display:"Antipasti Tradizionali Albanesi e Italiani Per 2 Persone"},
        {price: "2400L", name: "Antipasti tradizionali",  image: "/kearatares/antipast.jpg",display:"Antipasti Tradizionali Albanesi e Italiani Per 4 Persone"},
        {price: "250L", name: "Crema di peperoni",  image: "/kearatares/ajke-speci.png"},
        {price: "200L", name: "Patate fritte",  image: "/kearatares/patate-fritte.jpg"},
        {price: "300L", name: "Verdure grigliate",  image: "/kearatares/perime-zgare.jpg"},
        {price: "200L", name: "Salsa allo yogurt",  image: "/kearatares/salce_kosi.jpg"},
       
    ],
    Pasta:[
      {price: "600L", name: "Pizza Margarita",  image: "/kearatares/margarita.jpg",display:"Salcë Domate, Mocarela, Borzilok"},
      {price: "700L", name: "Pizza Prosciutto",  image: "/kearatares/proshute.jpg"},
      {price: "700L", name: "Pizza Con Salsiccia",  image: "/kearatares/proshut.jpg"},
      {price: "800L", name: "Pizza Diavola",  image: "/kearatares/diavola.jpg",display:"Sallam Pikant, Ullinj, Spec Djegës"},
      {price: "1.000L", name: "Pizza 4 Stagioni",  image: "/kearatares/stinet.jpg",display:"Proshutë, Sallam, Angjinare, Speca"},
      {price: "1.000L", name: "Pizza 4 Formaggi",  image: "/kearatares/diatherat.jpg",display:"Mocarela, Rikota, Gorgonzola, Parmixhano"},
      {price: "1.000L", name: "Pizza Capricciosa",  image: "/kearatares/capricosa.jpg",display:"Proshutë, Kerpudha, Angjinare, Ullinj"},
      {price: "900L", name: "Pizza Tonno & Cipolla",  image: "/kearatares/ton.jpg"},
      {price: "1.100L", name: "Pizza Frutti Di Mare",  image: "/kearatares/deti.jpg"},
      {price: "800L", name: "Pizza Americana",  image: "/kearatares/patate.jpg"},
      {price: "700L", name: "Pizza Prosciutto & Funghi",  image: "/kearatares/kerpudh.jpg"},
      {price: "1.000L", name: "Pizza Parma",  image: "/kearatares/parma.jpg",display:"Proshutë Parma, Rukola, Domate Qershi, Djath Parmixhano"},
      {price: "800L", name: "Pizza Romana",  image: "/kearatares/romana.jpg",display:"Acuge, Ullinj, Kaperi"},
      {price: "1.100L", name: "Pizza Bologna",  image: "/kearatares/bologna.jpg",display:"Mortadela, Mocarele Bufalo, Pistak"},
    ],
    Risoto:[
        {price: "1.000L", name: "Risotto ai frutti di mare",  image: "/kearatares/frutadeti.jpg"},
        {price: "900L", name: "Risotto gamberi e zucca",  image: "/kearatares/rizoto-karkalec-kungulli.jpg"},
       
    ],
    Zuppe: [
      { price: "300L", name: "Pasta con patate",  image: "/kearatares/sup.jpg" },
      { price: "300L", name: "Legume",  image: "/kearatares/fasule.jpg" },
      { price: "300L", name: "Pollo e pasta piccola" ,  image: "/kearatares/pule.jpg"},
     
    ],
    Carne: [
      { price: "1.600L", name: "Agnello in succo",  image: "/kearatares/neleng.jpg" },
      { price: "800L", name: "Petto di pollo alla picaiola",  image: "/kearatares/paciola.jpg" },
      {price: "1.500L", name: "Ossobuco Alla Milanese",  image: "/kearatares/osobuko.jpg"},
      {price: "1.500L", name: "Mix di carne alla griglia",  image: "/kearatares/miks.jpg"},
      {price: "1.700L", name: "Coscia di agnello",  image: "/kearatares/kofshe.jpg"},
      {price: "1.600L", name: "Filetto alla griglia",  image: "/kearatares/fileto.jpg"},
      {price: "400L", name: "Fiorentina 100.gr",  image: "/kearatares/fiorentina.jpg"},
      {price: "400L", name: "Tagliatelle 100.gr",  image: "/kearatares/taliatela.jpg"},
      {price: "400L", name: "Tomahawk 100.gr",  image: "/kearatares/tomahok.jpg"},
      {price: "1.300L", name: "Scaloppina al vino bianco",  image: "/kearatares/eskalop.jpg"},
      {price: "1.500L", name: "Capesante alla milanese",  image: "/kearatares/eskalopmilanez.jpg"},
      {price: "2.500L", name: "Pollo del villaggio al forno",  image: "/kearatares/pilaf.jpg",display:"Con Riso"},
      {price: "2.500L", name: "Pollo del villaggio al forno",  image: "/kearatares/patatee.jpg",display:"Con Patate"},
      {price: "2.500L", name: "Pollo del villaggio al forno",  image: "/kearatares/ptaliatel.jpg",display:"Con un Sorriso"},
      {price: "2.500L", name: "Pollo del villaggio al forno",  image: "/kearatares/me qull.jpg",display:"Porridge Integrale"},
      
    ],
    Dolci:[
        {price: "300L", name: "Tiramisù",  image: "/kearatares/1.jpg"},
        {price: "250L", name: "Tres Leces",  image: "/kearatares/2.jpg"},
        {price: "300L", name: "Panna Cotta",  image: "/kearatares/3.jpg"}, 
    ],
    Vini: [
      {price: "2.600L", name: "Terrebaciate Merlot", image: "/kearatares/merlot.jpg" ,display:"Regione:Abruzzo,Italia"},
      {price: "6.000L", name: "Aru Monica",  image: "/kearatares/aru.jpg",display:"Regione:Sardegna,Italia"},
      {price: "3.600L", name: "Malamore Montepulciano Riserva",  image: "/kearatares/malamore.jpg",display:"Regione:Abruzzo,Italia"},
      {price: "3.600L", name: "Eremo San Quirico",  image: "/kearatares/eremo.jpg",display:"Regione:Campania,Italia meridionale"},
      {price: "7.000L", name: "Brunello Di Montalcino Castelli Martinozzi",  image: "/kearatares/brunello.jpg",display:"Regione: Toscana, Italia"},
      {price: "1.600L", name: "Imuri Negroamaro",  image: "/kearatares/imuri.jpg",display:"Regione:Puglia,Italia"},
      {price: "2.600L", name: "Saragat Cannonau Di Sardegna",  image: "/kearatares/saragat.jpg",display:"Regione:Sardegna,Italia"},
      {price: "1.600L", name: "Campo Del Re",  image: "/kearatares/campo.jpg",display:"Regione:Puglia,Italia"},
      {price: "2.000L", name: "Caldora Montepulciano D'abruzzo",  image: "/kearatares/caldora.jpg",display:"Regione:Abruzzo,Italia"},
      {price: "5.600L", name: "Riondo Amarone Della Valpolicella",  image: "/kearatares/amarone.jpg",display:"Regione:Veneto,Italia"},
      {price: "3.200L", name: "Prive",  image: "/kearatares/prive.jpg",display:"Regione:Puglia,Italia"},
      {price: "2.800L", name: "Pipoli Aglianico Del Vulture",  image: "/kearatares/piqoli.jpg",display:"Regione: Basilicata, Italia"},
      {price: "3.000L", name: "Suadens Rosso",  image: "/kearatares/suadens.jpg",display:"Regione:Campania,Italia meridionale"},
      {price: "3.500L", name: "Antorino Primitivo",  image: "/kearatares/antorino.jpg",display:"Regione:Puglia,Italia"},
      {price: "1.600L", name: "Ducaminimo Montepulciano",  image: "/kearatares/montepulciano.jpg",display:"Regione:Villamagna,Italia"},
      {price: "250L", name: "Bianco 0,25L",  image: "/kearatares/vere-gote-bardhe.jpg",display:"Vino Della Casa"},
      {price: "500L", name: "Bianco 0,5L",  image: "/kearatares/vere-gote-bardhe.jpg",display:"Vino Della Casa"},
      {price: "1.000L", name: "Bianco 1L",  image: "/kearatares/vere-gote-bardhe.jpg",display:"Vino Della Casa"},
      {price: "250L", name: "Rosso 0,25",  image: "/tokedhedet/s2/vere-gote.jpg",display:"Vino Della Casa"},
      {price: "500L", name: "Rosso 0,5",  image: "/tokedhedet/s2/vere-kane.jpg",display:"Vino Della Casa"},
      {price: "1.000L", name: "Rosso 1,00",  image: "/tokedhedet/s2/vere-kane.jpg",display:"Vino Della Casa"},
      
   ],
   Alcolici:[
      {price: "250L", name: "Jagermeister",  image: "/tokedhedet/s2/jagermeister.png"},
      {price: "200L", name: "Ramazzot",  image: "/kearatares/ramazot.jpg"},
      {price: "200L", name: "Montenegro",  image: "/tokedhedet/s2/montenegro.png"},
      {price: "200L", name: "Amaro Del Capo",  image: "/kearatares/capo.jpg"},
      {price: "200L", name: "Fernet Branca",  image: "/kearatares/fernet.jpg"},
      {price: "200L", name: "Sambuca",  image: "/kearatares/sambuka.jpg"},
      {price: "200L", name: "Limoncello",  image: "/kearatares/limoncelo.jpg"},
      {price: "200L", name: "Amaretto",  image: "/kearatares/amareto.jpg"},
      {price: "200L", name: "Baileys",  image: "/kearatares/balis.jpg"},
      {price: "200L", name: "Martini Bianco",  image: "/kearatares/martini.jpg"},
      {price: "200L", name: "Martini Rosso",  image: "/kearatares/roso.jpg"},
      {price: "350L", name: "Johnnie Walker Red",  image: "/kearatares/red.jpg"},
      {price: "350L", name: "Johnnie Walker Black",  image: "/tokedhedet/s2/johnnie-walker.jpg"},
      {price: "350L", name: "Ballentines",  image: "/kearatares/ball.jpg"},
      {price: "350L", name: "Jamerson",  image: "/kearatares/jamerson.jpg"},
      {price: "350L", name: "Jack Daniels",  image: "/tokedhedet/s2/jack-daniel.png"},
      {price: "450L", name: "Chivas",  image: "/tokedhedet/s2/chivas.jpg"},
      {price: "300L", name: "Vodka Absolut",  image: "/tokedhedet/s2/vodka.png"},
      {price: "350L", name: "Vodka Smirnoff",  image: "/kearatares/smirnof.jpg"},
      {price: "350L", name: "Vodka Sky",  image: "/kearatares/sky.jpg"},
      {price: "400L", name: "Vodka Moscovia",  image: "/kearatares/moskovia.jpg"},
      {price: "450L", name: "Hanged Gin",  image: "/kearatares/"},
      {price: "500L", name: "Roby Marton",  image: "/kearatares/robi.jpg"},
      {price: "450L", name: "Lifeguard",  image: "/kearatares/lifeguard.jpg"},
      {price: "250L", name: "Gordons",  image: "/tokedhedet/s2/gordons.jpg"},
      {price: "300L", name: "Bombey",  image: "/kearatares/bombej.jpg"},
      {price: "450L", name: "Hendrick",  image: "/tokedhedet/s2/hendrick.jpg"},
      {price: "300L", name: "Tanquerey",  image: "/kearatares/tanqu.jpg"},
      {price: "800L", name: "Baron Gaston Legrand",  image: "/kearatares/baron.jpg"},
      {price: "300L", name: "Vecchia Romagna",  image: "/kearatares/vechia.jpg"},
      {price: "500L", name: "L'agricole Ambree'Rhum",  image: "/kearatares/rum.jpg"},
      {price: "300L", name: "Bacardi",  image: "/tokedhedet/s2/bacardi.png"},
      {price: "300L", name: "Havana Club",  image: "/kearatares/havana.jpg"},
    ],

    Birra:[
      {price: "150L", name: "Jack di Korca 0,25",  image: "/kearatares/0.5.jpg"},
      {price: "300L", name: "Jack di Korca 0,5",  image: "/kearatares/0.3.jpg"},
      {price: "200L", name: "Jack di Veltins 0,25",  image: "/kearatares/0.5.jpg"},
      {price: "400L", name: "Jack di Veltins 0,5",  image: "/kearatares/0.3.jpg"},
      {price: "250L", name: "Heniken",  image: "/tokedhedet/s2/heineken-alkol.jpg"},
      {price: "400L", name: "Paulaner Weizen",  image: "/tokedhedet/s2/paulaner.jpg"},
      {price: "200L", name: "Peroni",  image: "/tokedhedet/s2/peroni.jpg"},
      {price: "250L", name: "Peroni Nastro Azzurro",  image: "/kearatares/roni.jpg"},
      {price: "300L", name: "Corona",  image: "/kearatares/rona.jpg"},
      {price: "200L", name: "Korca",  image: "/kearatares/korca-shishe.jpg"},
      {price: "200L", name: "Peja",  image: "/kearatares/peja.jpg"},
      {price: "500L", name: "Artigiano Bionda",  image: "/kearatares/bionda.jpg"},
      {price: "500L", name: "Artigiano Rossa",  image: "/kearatares/rossa.jpg"},

    ],

    Bevande: [
      {price: "150L", name: "Bravo Pjeshke",  image: "/tokedhedet/s2/bravo.jpg"},
      {price: "150L", name: "Bravo Molle",  image: "/kearatares/moll.jpg"},
      {price: "150L", name: "Bravo Luleshtrylle",  image: "/kearatares/lule.jpg"},
      {price: "150L", name: "Coca Cola",  image: "/tokedhedet/s2/coca-cola.jpg"},
      {price: "150L", name: "Coca Cola 0 Sheqer",  image: "/kearatares/kola0.jpg"},
      {price: "150L", name: "Fanta Portokall",  image: "/tokedhedet/s2/fanta.jpg"},
      {price: "150L", name: "Fanta Ekzotik",  image: "/kearatares/ekzotik.png"},
      {price: "150L", name: "Limon Soda",  image: "/tokedhedet/s2/lemon-soda.jpg"},
      {price: "150L", name: "Orange Soda",  image: "/tokedhedet/s2/orange-soda.jpg"},
      {price: "150L", name: "Lipton Pjeshke",  image: "/tokedhedet/s2/lipton.jpg"},
      {price: "150L", name: "Lipton Limon",  image: "/kearatares/lipton-limon.png"},
      {price: "300L", name: "Red Bull",  image: "/tokedhedet/s2/red-bull.jpg"},
      {price: "150L", name: "Schweppes tonic",  image: "/tokedhedet/s2/sweps.jpg"},
      {price: "150L", name: "Sprite",  image: "/kearatares/sprite.jpg"},
      {price: "150L", name: "Crodino",  image: "/kearatares/crodino.jpg"},
      {price: "150L", name: "San Bitter",  image: "/kearatares/biter.jpg"},
      {price: "100L", name: "Lajthiza 0,3",  image: "/kearatares/uje-lajthiza03.jpg"},
      {price: "250L", name: "Lajthiza 0,75",  image: "/kearatares/uje-lajthiza03.jpg"},
      
    ],
    Caffè:[
      {price: "100L", name: "Tè al limone",  image: "/tokedhedet/s2/caj.jpg"},
      {price: "100L", name: "Espresso",  image: "/tokedhedet/s2/kafe.jpg"},
      {price: "150L", name: "Cacao",  image: "/tokedhedet/s2/kakao.jpg"},
      {price: "120L", name: "Cappuccino",  image: "/tokedhedet/s2/kapucino.jpg"},
      {price: "150L", name: "Americano",  image: "/kearatares/americano.jpg"},
      {price: "150L", name: "Nescafe",  image: "/kearatares/nescafe.jpg"},
      {price: "200L", name: "Latte Macchiato",  image: "/tokedhedet/s2/makjato.jpg"},
      {price: "150L", name: "Salep",  image: "/tokedhedet/s2/salep.jpg"},
    ]
  };

  const [activeCategory, setActiveCategory] = useState(categories[0]);
  

  return (
    <div className="relative mb-16">
     
      {/* Category Menu */}
      <div
       className="w-full md:px-4 px-3 pt-4 text-white shadow-lg overflow-x-auto whitespace-nowrap flex space-x-2 p-2 snap-x snap-mandatory"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-lg transition-all ${
              activeCategory === category
                ? "bg-blue-600 text-white"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Menu Content (Only show selected category) */}
      <div className="pt-3 p-4 text-gray-700  dark:text-gray-300">
        <h2 className="text-2xl font-semibold mb-4">{activeCategory}</h2>
        <div className="grid gap-4  md:grid-cols-2 lg:grid-cols-3">
          {content[activeCategory].map((item, index) => (
            <div key={index} className=" bg-gray-500 bg-opacity-25 rounded-lg p-4 ">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover rounded-md mb-2"
              />
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <h3 className="text-base font-extralight">{item.display}</h3>
              <p className="text-md ">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
