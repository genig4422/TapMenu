"use client";
import { useState, useEffect } from "react";

export default function MenuWithFixedButtons() {
  const categories = ["Supa","Sallata","Antipasta","Pasta","Rizoto","Peshk", "Mish", "Verat","Kokteile","Alkolike","Birra","Pije","Kafe"];
 

  const content = {
    Kokteile:[
      {name: "Mohito",  image: "/tokedhedet/s2/mohito.jpg"},
      {name: "Caipirinha",  image: "/tokedhedet/s2/caipirnha.jpg"},
      {name: "Capiroska",  image: "/tokedhedet/s2/caipiroska.jpg"},
      {name: "Old Fashioned",  image: "/tokedhedet/s2/old-fashioned.jpg"},
      {name: "Long Island",  image: "/tokedhedet/s2/long-island.jpg"},
      {name: "Sex On The Beach",  image: "/tokedhedet/s2/sex-on-the-Beach.jpg"},
      {name: "Aperol Spriz",  image: "/tokedhedet/s2/aperol-spritz.jpg"},
      {name: "Hugo Spriz",  image: "/tokedhedet/s2/hugo-Spritz.jpg"},
      {name: "Manhattan",  image: "/tokedhedet/s2/manhattan.jpg"},
      {name: "Negroni",  image: "/tokedhedet/s2/negroni.jpg"},
      {name: "Land & Sea",  image: "/tokedhedet/s2/land-And-Sea.jpg"},
    ],
    Supa:[
        {name: "Supe me Perime",  image: "/tokedhedet/Supe-me-perime.jpg"},
        {name: "Supe Pule",  image: "/tokedhedet/supe-pule.jpg"},
        {name: "Supe Peshku",  image: "/tokedhedet/supe-peshku.jpg"}
    ],
    Sallata:[
        {name: "Sallate Jeshile",  image: "/tokedhedet/sallate-jeshile.jpg"},
        {name: "Sallate Fshati",  image: "/tokedhedet/sallate-fshati.jpg"}
    ],
    Antipasta:[
        {name: "Sallate Oktapodi",  image: "/tokedhedet/sallate-oktapod.jpg"},
        {name: "Djath",  image: "/tokedhedet/djath.jpg"},
        {name: "Brusketa",  image: "/tokedhedet/Supe-me-perime.jpg"},
        {name: "Karkalec Pana",  image: "/tokedhedet/brusketa.jpg"},
        {name: "Patate te Skuqura",  image: "/tokedhedet/patate-te-skuqura.jpg"},
        {name: "Karkalec Friture",  image: "/tokedhedet/karkalec-friture].jpg"},
        {name: "Kallamar Friture",  image: "/tokedhedet/kallamar-friture.jpg"},
        {name: "Mix Fritur",  image: "/tokedhedet/mix-friture.jpg"}
    ],
    Pasta:[
        {name: "Linguini Fruta Deti",  image: "/tokedhedet/linguini-fruta-deti.jpg"},
        {name: "Linguini Karkalec Kungull",  image: "/tokedhedet/linguini-karkalec-kungull.jpg"},
        {name: "Pene Arabiata",  image: "/tokedhedet/pene-arabiata.jpg"},
        {name: "Pene Ton & Ullinj",  image: "/tokedhedet/pene-ton-ullinj.jpg"}
    ],
    Rizoto:[
        {name: "Rizoto Fruta Deti",  image: "/tokedhedet/rizoto-fruta-deti.jpg"},
        {name: "Rizoto Karkalec Kungull",  image: "/tokedhedet/rizoto-karkalec-kungull.jpg"},
        {name: "Rizoto Perime",  image: "/tokedhedet/rizoto-perime.jpg"}
    ],
    Peshk: [
      { name: "Levrek Zgare",  image: "/tokedhedet/levrek-zgare.jpg" },
      { name: "Koc Zgare",  image: "/tokedhedet/koc-zgare.jpg" },
      {name: "Karkalec Zgare",  image: "/tokedhedet/karkalec-zgare.jpg"},
      {name: "Kallamar Zgare",  image: "/tokedhedet/kallamar-zgare.png"},
      {name: "Oktapod Zgare",  image: "/tokedhedet/oktapod-zgare.jpg"},
      {name: "Mix Zgare",  image: "/tokedhedet/mix-zgare.jpg"}
    ],
    Mish: [
      { name: "Brinje Qingji",  image: "/tokedhedet/Brinje-qingji.jpg" },
      { name: "Biftek Viçi",  image: "/tokedhedet/biftek-vici.jpg" },
      {name: "Pule Kotolet",  image: "/tokedhedet/kotoleta-pule.jpg"},
      {name: "Pule me Jufka",  image: "/tokedhedet/pule-jufka.jpg"},
      {name: "Pule me Pilaf",  image: "/tokedhedet/pule-pilaf.jpg"}
    ],
    Verat: [
      { name: "Aleksandria e Bardhe.99", image: "/tokedhedet/s2/aleksiandra-bardhe.png" },
      { name: "Chardonnay.99", image: "/tokedhedet/s2/chardoney.png" },
      {name: "Chianti",  image: "/tokedhedet/s2/chianti.jpg"},
      {name: "Fiano Di Avellino",  image: "/tokedhedet/s2/fiano-di-avellino.jpg"},
      {name: "Greco Di Tufo",  image: "/tokedhedet/s2/greco-di-tufo.jpg"},
      {name: "Montepulciano",  image: "/tokedhedet/s2/montepilciano.png"},
      {name: "Mulleer Thrugau",  image: "/tokedhedet/s2/muller-thurgau.jpg"},
      {name: "Pinot Grigio",  image: "/tokedhedet/s2/pinot-grigio.jpg"},
      {name: "Proseco Riviani",  image: "/tokedhedet/s2/proseco-rivani.jpg"},
      {name: "Salice Salento",  image: "/tokedhedet/s2/salice-salentino.jpg"},
      {name: "Toscana Bianco",  image: "/tokedhedet/s2/bianco.jpg"},
      {name: "Toscana Rosso",  image: "/tokedhedet/s2/rosso-toscana.jpg"},
      {name: "Trebiano",  image: "/tokedhedet/s2/trebiano.jpg"},
      {name: "Valpolicella",  image: "/tokedhedet/s2/valpolicella.jpg"},
      {name: "Vere e Hapur",  image: "/tokedhedet/s2/vere-kane.jpg"},
      {name: "Vere me Gote",  image: "/tokedhedet/s2/vere-gote.jpg"},
      
      
    ],

    Alkolike:[
      {name: "Bacardi",  image: "/tokedhedet/s2/bacardi.png"},
      {name: "Branca",  image: "/tokedhedet/s2/branca.jpg"},
      {name: "Chivas",  image: "/tokedhedet/s2/chivas.jpg"},
      {name: "Disaronno",  image: "/tokedhedet/s2/disaronno.jpg"},
      {name: "Gordons",  image: "/tokedhedet/s2/gordons.jpg"},
      {name: "Hendrick",  image: "/tokedhedet/s2/hendrick.jpg"},
      {name: "Jagermeister",  image: "/tokedhedet/s2/jagermeister.png"},
      {name: "Jack Daniels",  image: "/tokedhedet/s2/jack-daniel.png"},
      {name: "Johnnie Walker",  image: "/tokedhedet/s2/johnnie-walker.jpg"},
      {name: "Konjak Skenderbeu",  image: "/tokedhedet/s2/konjak-skenderbeu.jpg"},
      {name: "Metaxa 5",  image: "/tokedhedet/s2/metaxa.jpg"},
      {name: "Montenegro",  image: "/tokedhedet/s2/montenegro.png"},
      {name: "Raki",  image: "/tokedhedet/s2/raki.jpg"},
      {name: "Vecchia",  image: "/tokedhedet/s2/vecchia.png"},
      {name: "Vodka",  image: "/tokedhedet/s2/vodka.png"},
    ],

    Birra:[
      {name: "Bavaria pa alkol",  image: "/tokedhedet/s2/bavaria.jpg"},
      {name: "Elbar",  image: "/tokedhedet/s2/elbar.jpg"},
      {name: "Heniken 0.0",  image: "/tokedhedet/s2/heineken.jpg"},
      {name: "Heniken",  image: "/tokedhedet/s2/heineken-alkol.jpg"},
      {name: "Paulaner",  image: "/tokedhedet/s2/paulaner.jpg"},
      {name: "Peroni",  image: "/tokedhedet/s2/peroni.jpg"},
    ],

    Pije: [
      {name: "B52",  image: "/tokedhedet/s2/b52.jpg"},
      {name: "Bravo",  image: "/tokedhedet/s2/bravo.jpg"},
      {name: "Coca Cola",  image: "/tokedhedet/s2/coca-cola.jpg"},
      {name: "Golden Eagle",  image: "/tokedhedet/s2/golden-eagle.jpg"},
      {name: "Fanta",  image: "/tokedhedet/s2/fanta.jpg"},
      {name: "Glina",  image: "/tokedhedet/s2/glina.jpg"},
      {name: "Limon Soda",  image: "/tokedhedet/s2/lemon-soda.jpg"},
      {name: "Lipton",  image: "/tokedhedet/s2/lipton.jpg"},
      {name: "Orange Soda",  image: "/tokedhedet/s2/orange-soda.jpg"},
      {name: "Red Bull",  image: "/tokedhedet/s2/red-bull.jpg"},
      {name: "Shveps",  image: "/tokedhedet/s2/sweps.jpg"},
      {name: "Suko",  image: "/tokedhedet/s2/suko.jpg"},
      {name: "Uje Qafshtama",  image: "/tokedhedet/s2/qafshtama.jpg"},
      {name: "Uje me shishe Qelqi",  image: "/tokedhedet/s2/uje-qelqi.png"},
      {name: "Uje Vitamina",  image: "/tokedhedet/s2/uje-vitamina.jpg"},
    ],
    Kafe:[
      {name: "Caj",  image: "/tokedhedet/s2/caj.jpg"},
      {name: "Cokollate e ngrohte",  image: "/tokedhedet/s2/cokollat.jpg"},
      {name: "Kafe",  image: "/tokedhedet/s2/kafe.jpg"},
      {name: "Kakao",  image: "/tokedhedet/s2/kakao.jpg"},
      {name: "Kapucino",  image: "/tokedhedet/s2/kapucino.jpg"},
      {name: "Kapucino Bustine",  image: "/tokedhedet/s2/kapucino.jpg"},
      {name: "Makiato",  image: "/tokedhedet/s2/makjato.jpg"},
      {name: "Salep",  image: "/tokedhedet/s2/salep.jpg"},
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
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
