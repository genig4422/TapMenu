"use client";
import { useState, useEffect } from "react";

export default function MenuWithFixedButtons() {
  const categories = ["Supa","Sallata","Antipasta","Pasta","Rizoto","Peshk", "Mish", "Verat","Kokteile","Alkolike","Birra","Pije","Kafe"];

  const content = {
    Kokteile:[
      {name: "Mohito", price: "250L", image: "/tokedhedet/s2/mohito.jpg"},
      {name: "Caipirinha", price: "250L", image: "/tokedhedet/s2/caipirnha.jpg"},
      {name: "Capiroska", price: "250L", image: "/tokedhedet/s2/caipiroska.jpg"},
      {name: "Old Fashioned", price: "250L", image: "/tokedhedet/s2/old-fashioned.jpg"},
      {name: "Long Island", price: "250L", image: "/tokedhedet/s2/long-island.jpg"},
      {name: "Sex On The Beach", price: "250L", image: "/tokedhedet/s2/sex-on-the-Beach.jpg"},
      {name: "Aperol Spriz", price: "250L", image: "/tokedhedet/s2/aperol-spritz.jpg"},
      {name: "Hugo Spriz", price: "250L", image: "/tokedhedet/s2/hugo-Spritz.jpg"},
      {name: "Manhattan", price: "250L", image: "/tokedhedet/s2/manhattan.jpg"},
      {name: "Negroni", price: "250L", image: "/tokedhedet/s2/negroni.jpg"},
      {name: "Land & Sea", price: "250L", image: "/tokedhedet/s2/land-And-Sea.jpg"},
    ],
    Supa:[
        {name: "Supe me Perime", price: "250L", image: "/tokedhedet/Supe-me-perime.jpg"},
        {name: "Supe Pule", price: "300L", image: "/tokedhedet/supe-pule.jpg"},
        {name: "Supe Peshku", price: "300L", image: "/tokedhedet/supe-peshku.jpg"}
    ],
    Sallata:[
        {name: "Sallate Jeshile", price: "200L", image: "/tokedhedet/sallate-jeshile.jpg"},
        {name: "Sallate Fshati", price: "350L", image: "/tokedhedet/sallate-fshati.jpg"}
    ],
    Antipasta:[
        {name: "Sallate Oktapodi", price: "1000L", image: "/tokedhedet/sallate-oktapod.jpg"},
        {name: "Djath", price: "300L", image: "/tokedhedet/djath.jpg"},
        {name: "Brusketa", price: "300L", image: "/tokedhedet/Supe-me-perime.jpg"},
        {name: "Karkalec Pana", price: "550L", image: "/tokedhedet/brusketa.jpg"},
        {name: "Patate te Skuqura", price: "200L", image: "/tokedhedet/patate-te-skuqura.jpg"},
        {name: "Karkalec Friture", price: "1800L", image: "/tokedhedet/karkalec-friture].jpg"},
        {name: "Kallamar Friture", price: "1800L", image: "/tokedhedet/kallamar-friture.jpg"},
        {name: "Mix Fritur", price: "1800L", image: "/tokedhedet/mix-friture.jpg"}
    ],
    Pasta:[
        {name: "Linguini Fruta Deti", price: "500L", image: "/tokedhedet/linguini-fruta-deti.jpg"},
        {name: "Linguini Karkalec Kungull", price: "600L", image: "/tokedhedet/linguini-karkalec-kungull.jpg"},
        {name: "Pene Arabiata", price: "350L", image: "/tokedhedet/pene-arabiata.jpg"},
        {name: "Pene Ton & Ullinj", price: "400L", image: "/tokedhedet/pene-ton-ullinj.jpg"}
    ],
    Rizoto:[
        {name: "Rizoto Fruta Deti", price: "500L", image: "/tokedhedet/rizoto-fruta-deti.jpg"},
        {name: "Rizoto Karkalec Kungull", price: "600L", image: "/tokedhedet/rizoto-karkalec-kungull.jpg"},
        {name: "Rizoto Perime", price: "400L", image: "/tokedhedet/rizoto-perime.jpg"}
    ],
    Peshk: [
      { name: "Levrek Zgare", price: "1500L", image: "/tokedhedet/levrek-zgare.jpg" },
      { name: "Koc Zgare", price: "1400L", image: "/tokedhedet/koc-zgare.jpg" },
      {name: "Karkalec Zgare", price: "1800L", image: "/tokedhedet/karkalec-zgare.jpg"},
      {name: "Kallamar Zgare", price: "1800L", image: "/tokedhedet/kallamar-zgare.png"},
      {name: "Oktapod Zgare", price: "1000L", image: "/tokedhedet/oktapod-zgare.jpg"},
      {name: "Mix Zgare", price: "1800L", image: "/tokedhedet/mix-zgare.jpg"}
    ],
    Mish: [
      { name: "Brinje Qingji", price: "2000L", image: "/tokedhedet/Brinje-qingji.jpg" },
      { name: "Biftek Viçi", price: "700L", image: "/tokedhedet/biftek-vici.jpg" },
      {name: "Pule Kotolet", price: "400L", image: "/tokedhedet/kotoleta-pule.jpg"},
      {name: "Pule me Jufka", price: "2500L", image: "/tokedhedet/pule-jufka.jpg"},
      {name: "Pule me Pilaf", price: "2500L", image: "/tokedhedet/pule-pilaf.jpg"}
    ],
    Verat: [
      { name: "Aleksandria e Bardhe", price: "$1.99", image: "/tokedhedet/s2/aleksiandra-bardhe.png" },
      { name: "Chardonnay", price: "$2.99", image: "/tokedhedet/s2/chardoney.png" },
      {name: "Chianti", price: "250L", image: "/tokedhedet/s2/chianti.jpg"},
      {name: "Fiano Di Avellino", price: "250L", image: "/tokedhedet/s2/fiano-di-avellino.jpg"},
      {name: "Greco Di Tufo", price: "250L", image: "/tokedhedet/s2/greco-di-tufo.jpg"},
      {name: "Montepulciano", price: "250L", image: "/tokedhedet/s2/montepilciano.png"},
      {name: "Mulleer Thrugau", price: "250L", image: "/tokedhedet/s2/muller-thurgau.jpg"},
      {name: "Pinot Grigio", price: "250L", image: "/tokedhedet/s2/pinot-grigio.jpg"},
      {name: "Proseco Riviani", price: "250L", image: "/tokedhedet/s2/proseco-rivani.jpg"},
      {name: "Salice Salento", price: "250L", image: "/tokedhedet/s2/salice-salentino.jpg"},
      {name: "Toscana Bianco", price: "250L", image: "/tokedhedet/s2/bianco.jpg"},
      {name: "Toscana Rosso", price: "250L", image: "/tokedhedet/s2/rosso-toscana.jpg"},
      {name: "Trebiano", price: "250L", image: "/tokedhedet/s2/trebiano.jpg"},
      {name: "Valpolicella", price: "250L", image: "/tokedhedet/s2/valpolicella.jpg"},
      {name: "Vere e Hapur", price: "250L", image: "/tokedhedet/s2/vere-kane.jpg"},
      {name: "Vere me Gote", price: "250L", image: "/tokedhedet/s2/vere-gote.jpg"},
      
      
    ],

    Alkolike:[
      {name: "Bacardi", price: "250L", image: "/tokedhedet/s2/bacardi.png"},
      {name: "Branca", price: "250L", image: "/tokedhedet/s2/branca.jpg"},
      {name: "Chivas", price: "250L", image: "/tokedhedet/s2/chivas.jpg"},
      {name: "Disaronno", price: "250L", image: "/tokedhedet/s2/disaronno.jpg"},
      {name: "Gordons", price: "250L", image: "/tokedhedet/s2/gordons.jpg"},
      {name: "Hendrick", price: "250L", image: "/tokedhedet/s2/hendrick.jpg"},
      {name: "Jagermeister", price: "250L", image: "/tokedhedet/s2/jagermeister.png"},
      {name: "Jack Daniels", price: "250L", image: "/tokedhedet/s2/jack-daniel.png"},
      {name: "Johnnie Walker", price: "250L", image: "/tokedhedet/s2/johnnie-walker.jpg"},
      {name: "Konjak Skenderbeu", price: "250L", image: "/tokedhedet/s2/konjak-skenderbeu.jpg"},
      {name: "Metaxa 5", price: "250L", image: "/tokedhedet/s2/metaxa.jpg"},
      {name: "Montenegro", price: "250L", image: "/tokedhedet/s2/montenegro.png"},
      {name: "Raki", price: "250L", image: "/tokedhedet/s2/raki.jpg"},
      {name: "Vecchia", price: "250L", image: "/tokedhedet/s2/vecchia.png"},
      {name: "Vodka", price: "250L", image: "/tokedhedet/s2/vodka.png"},
    ],

    Birra:[
      {name: "Bavaria pa alkol", price: "250L", image: "/tokedhedet/s2/bavaria.jpg"},
      {name: "Elbar", price: "250L", image: "/tokedhedet/s2/elbar.jpg"},
      {name: "Heniken 0.0", price: "250L", image: "/tokedhedet/s2/heineken.jpg"},
      {name: "Heniken", price: "250L", image: "/tokedhedet/s2/heineken-alkol.jpg"},
      {name: "Paulaner", price: "250L", image: "/tokedhedet/s2/paulaner.jpg"},
      {name: "Peroni", price: "250L", image: "/tokedhedet/s2/peroni.jpg"},
    ],

    Pije: [
      {name: "B52", price: "150L", image: "/tokedhedet/s2/b52.jpg"},
      {name: "Bravo", price: "150L", image: "/tokedhedet/s2/bravo.jpg"},
      {name: "Coca Cola", price: "150L", image: "/tokedhedet/s2/coca-cola.jpg"},
      {name: "Golden Eagle", price: "150L", image: "/tokedhedet/s2/golden-eagle.jpg"},
      {name: "Fanta", price: "150L", image: "/tokedhedet/s2/fanta.jpg"},
      {name: "Glina", price: "150L", image: "/tokedhedet/s2/glina.jpg"},
      {name: "Limon Soda", price: "150L", image: "/tokedhedet/s2/lemon-soda.jpg"},
      {name: "Lipton", price: "150L", image: "/tokedhedet/s2/lipton.jpg"},
      {name: "Orange Soda", price: "150L", image: "/tokedhedet/s2/orange-soda.jpg"},
      {name: "Red Bull", price: "250L", image: "/tokedhedet/s2/red-bull.jpg"},
      {name: "Shveps", price: "150L", image: "/tokedhedet/s2/sweps.jpg"},
      {name: "Suko", price: "100L", image: "/tokedhedet/s2/suko.jpg"},
      {name: "Uje Qafshtama", price: "60L", image: "/tokedhedet/s2/qafshtama.jpg"},
      {name: "Uje Qafshtama Qelqi", price: "250L", image: "/tokedhedet/s2/uje-qelqi.jpg"},
      {name: "Uje Vitamina", price: "100L", image: "/tokedhedet/s2/uje-vitamina.jpg"},
    ],
    Kafe:[
      {name: "Caj", price: "250L", image: "/tokedhedet/s2/caj.jpg"},
      {name: "Cokollate e ngrohte", price: "250L", image: "/tokedhedet/s2/cokollat.jpg"},
      {name: "Kafe", price: "250L", image: "/tokedhedet/s2/kafe.jpg"},
      {name: "Kakao", price: "250L", image: "/tokedhedet/s2/kakao.jpg"},
      {name: "Kapucino", price: "250L", image: "/tokedhedet/s2/kapucino.jpg"},
      {name: "Kapucino Bustine", price: "250L", image: "/tokedhedet/s2/kapucino.jpg"},
      {name: "Makiato", price: "250L", image: "/tokedhedet/s2/makjato.jpg"},
      {name: "Salep", price: "250L", image: "/tokedhedet/s2/salep.jpg"},
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
              <p className="text-gray-400">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
