"use client";
import { useState, useEffect } from "react";

export default function MenuWithFixedButtonsOnline() {
  const categories = ["Kokteile","Supa","Sallata","Antipasta","Pasta","Rizoto","Peshk", "Mish", "Verat","Alkolike","Birra","Pije","Kafe"];
 

  const content = {
    Kokteile:[
      {price: "600L", name: "Mohito",  image: "/tokedhedet/s2/mohito.jpg"},
      {price: "500L", name: "Aperol Spriz",  image: "/tokedhedet/s2/aperol-spritz.jpg"},
      {price: "600L", name: "Negroni",  image: "/tokedhedet/s2/negroni.jpg"},
      {price: "700L", name: "Land & Sea",  image: "/tokedhedet/s2/land-And-Sea.jpg"},
    ],
    Supa:[
        {price: "250L", name: "Supe me Perime",  image: "/tokedhedet/Supe-me-perime.jpg"},
        {price: "300L", name: "Supe Pule",  image: "/tokedhedet/supe-pule.jpg"},
        {price: "300L", name: "Supe Peshku",  image: "/tokedhedet/supe-peshku.jpg"}
    ],
    Sallata:[
        {price: "200L", name: "Sallate Jeshile",  image: "/tokedhedet/sallate-jeshile.jpg"},
        {price: "350L", name: "Sallate Fshati",  image: "/tokedhedet/sallate-fshati.jpg"}
    ],
    Antipasta:[
        {price: "1000L", name: "Sallate Oktapodi",  image: "/tokedhedet/sallate-oktapod.jpg"},
        {price: "300L", name: "Djath",  image: "/tokedhedet/djath.jpg"},
        {price: "300L", name: "Brusketa",  image: "/tokedhedet/Supe-me-perime.jpg"},
        {price: "550L", name: "Karkalec Pana",  image: "/tokedhedet/brusketa.jpg"},
        {price: "200L", name: "Patate te Skuqura",  image: "/tokedhedet/patate-te-skuqura.jpg"},
        {price: "2400L", name: "Karkalec Friture 1 kg",  image: "/tokedhedet/karkalec-friture].jpg"},
        {price: "2400L", name: "Kallamar Friture 1 kg",  image: "/tokedhedet/kallamar-friture.jpg"},
        {price: "2400L", name: "Mix Fritur 1 kg",  image: "/tokedhedet/mix-friture.jpg"}
    ],
    Pasta:[
        {price: "300L", name: "Aglio Olio Peperonchino",  image: "/tokedhedet/pene-ton-ullinj.jpg"},
        {price: "500L", name: "Linguini Fruta Deti",  image: "/tokedhedet/linguini-fruta-deti.jpg"},
        {price: "600L", name: "Linguini Karkalec Kungull",  image: "/tokedhedet/linguini-karkalec-kungull.jpg"},
        {price: "350L", name: "Pene Arabiata",  image: "/tokedhedet/pene-arabiata.jpg"},
        {price: "400L", name: "Pene Ton & Ullinj",  image: "/tokedhedet/pene-ton-ullinj.jpg"},
        {price: "500L", name: "Pene Ragu",  image: "/tokedhedet/pene-ton-ullinj.jpg"}
    ],
    Rizoto:[
        {price: "500L", name: "Rizoto Fruta Deti",  image: "/tokedhedet/rizoto-fruta-deti.jpg"},
        {price: "600L", name: "Rizoto Karkalec Kungull",  image: "/tokedhedet/rizoto-karkalec-kungull.jpg"},
        {price: "400L", name: "Rizoto Perime",  image: "/tokedhedet/rizoto-perime.jpg"}
    ],
    Peshk: [
      { price: "800L", name: "Levrek Zgare 350 - 450 gr",  image: "/tokedhedet/levrek-zgare.jpg" },
      { price: "750L", name: "Koce Zgare 350 - 450 gr",  image: "/tokedhedet/koc-zgare.jpg" },
      {price: "2400L", name: "Karkalec Zgare 1 kg" ,  image: "/tokedhedet/karkalec-zgare.jpg"},
      {price: "2400L", name: "Kallamar Zgare 1 kg",  image: "/tokedhedet/kallamar-zgare.png"},
      {price: "1000L", name: "Oktapod Zgare",  image: "/tokedhedet/oktapod-zgare.jpg"},
      {price: "2400L", name: "Mix Zgare 1 kg",  image: "/tokedhedet/mix-zgare.jpg"}
    ],
    Mish: [
      { price: "2400L", name: "Brinje Qingji 1 kg",  image: "/tokedhedet/Brinje-qingji.jpg" },
      { price: "750L", name: "Biftek Viçi",  image: "/tokedhedet/biftek-vici.jpg" },
      {price: "600L", name: "Pule Kotolet",  image: "/tokedhedet/kotoleta-pule.jpg"},
      {price: "2500L", name: "Pule me Jufka",  image: "/tokedhedet/pule-jufka.jpg"},
      {price: "2500L", name: "Pule me Pilaf",  image: "/tokedhedet/pule-pilaf.jpg"}
    ],
    Verat: [
      { price: "1300L", name: "Aleksandria e Bardhe", image: "/tokedhedet/s2/aleksiandra-bardhe.png" },
      {price: "1600L", name: "Mulleer Thrugau",  image: "/tokedhedet/s2/muller-thurgau.jpg"},
      {price: "1400L", name: "Pinot Grigio",  image: "/tokedhedet/s2/pinot-grigio.jpg"},
      {price: "2200L", name: "Proseco Riviani",  image: "/tokedhedet/s2/proseco-rivani.jpg"},
      {price: "1600L", name: "Toscana Bianco",  image: "/tokedhedet/s2/bianco.jpg"},
      {price: "1800L", name: "Toscana Rosso",  image: "/tokedhedet/s2/rosso-toscana.jpg"},
      {price: "2000L", name: "Valpolicella",  image: "/tokedhedet/s2/valpolicella.jpg"},
      {price: "700L", name: "Vere e Hapur 1L",  image: "/tokedhedet/s2/vere-kane.jpg"},
      {price: "200L", name: "Vere me Gote",  image: "/tokedhedet/s2/vere-gote.jpg"},
      
      
    ],

    Alkolike:[
      {price: "300L", name: "Bacardi",  image: "/tokedhedet/s2/bacardi.png"},
      {price: "250L", name: "Branca",  image: "/tokedhedet/s2/branca.jpg"},
      {price: "400L", name: "Chivas",  image: "/tokedhedet/s2/chivas.jpg"},
      {price: "300L", name: "Disaronno",  image: "/tokedhedet/s2/disaronno.jpg"},
      {price: "250L", name: "Gordons",  image: "/tokedhedet/s2/gordons.jpg"},
      {price: "700L", name: "Hendrick",  image: "/tokedhedet/s2/hendrick.jpg"},
      {price: "300L", name: "Jagermeister",  image: "/tokedhedet/s2/jagermeister.png"},
      {price: "400L", name: "Jack Daniels",  image: "/tokedhedet/s2/jack-daniel.png"},
      {price: "300L", name: "Johnnie Walker",  image: "/tokedhedet/s2/johnnie-walker.jpg"},
      {price: "80L", name: "Konjak Skenderbeu",  image: "/tokedhedet/s2/konjak-skenderbeu.jpg"},
      {price: "250L", name: "Metaxa 5",  image: "/tokedhedet/s2/metaxa.jpg"},
      {price: "300L", name: "Montenegro",  image: "/tokedhedet/s2/montenegro.png"},
      {price: "70L", name: "Raki",  image: "/tokedhedet/s2/raki.jpg"},
      {price: "250L", name: "Vecchia",  image: "/tokedhedet/s2/vecchia.png"},
      {price: "300L", name: "Vodka",  image: "/tokedhedet/s2/vodka.png"},
    ],

    Birra:[
      {price: "250L", name: "Bavaria pa alkol",  image: "/tokedhedet/s2/bavaria.jpg"},
      {price: "150L", name: "Elbar",  image: "/tokedhedet/s2/elbar.jpg"},
      {price: "300L", name: "Heniken 0.0",  image: "/tokedhedet/s2/heineken.jpg"},
      {price: "250L", name: "Heniken",  image: "/tokedhedet/s2/heineken-alkol.jpg"},
      {price: "300L", name: "Paulaner",  image: "/tokedhedet/s2/paulaner.jpg"},
      {price: "180L", name: "Peroni",  image: "/tokedhedet/s2/peroni.jpg"},
    ],

    Pije: [
      {price: "150L", name: "B52",  image: "/tokedhedet/s2/b52.jpg"},
      {price: "150L", name: "Bravo",  image: "/tokedhedet/s2/bravo.jpg"},
      {price: "150L", name: "Coca Cola",  image: "/tokedhedet/s2/coca-cola.jpg"},
      {price: "150L", name: "Golden Eagle",  image: "/tokedhedet/s2/golden-eagle.jpg"},
      {price: "150L", name: "Fanta",  image: "/tokedhedet/s2/fanta.jpg"},
      {price: "60L", name: "Glina",  image: "/tokedhedet/s2/glina.jpg"},
      {price: "150L", name: "Limon Soda",  image: "/tokedhedet/s2/lemon-soda.jpg"},
      {price: "150L", name: "Lipton",  image: "/tokedhedet/s2/lipton.jpg"},
      {price: "150L", name: "Orange Soda",  image: "/tokedhedet/s2/orange-soda.jpg"},
      {price: "300L", name: "Red Bull",  image: "/tokedhedet/s2/red-bull.jpg"},
      {price: "130L", name: "Shveps",  image: "/tokedhedet/s2/sweps.jpg"},
      {price: "60L", name: "Suko",  image: "/tokedhedet/s2/suko.jpg"},
      {price: "60L", name: "Uje Qafshtama",  image: "/tokedhedet/s2/qafshtama.jpg"},
      {price: "200L", name: "Uje me shishe Qelqi",  image: "/tokedhedet/s2/uje-qelqi.png"},
      {price: "130L", name: "Uje Vitamina",  image: "/tokedhedet/s2/uje-vitamina.jpg"},
    ],
    Kafe:[
      {price: "60L", name: "Caj",  image: "/tokedhedet/s2/caj.jpg"},
      {price: "150L", name: "Cokollate e ngrohte",  image: "/tokedhedet/s2/cokollat.jpg"},
      {price: "60L", name: "Kafe",  image: "/tokedhedet/s2/kafe.jpg"},
      {price: "150L", name: "Kakao",  image: "/tokedhedet/s2/kakao.jpg"},
      {price: "150L", name: "Kapucino",  image: "/tokedhedet/s2/kapucino.jpg"},
      {price: "150L", name: "Kapucino Bustine",  image: "/tokedhedet/s2/kapucino.jpg"},
      {price: "70L", name: "Makiato",  image: "/tokedhedet/s2/makjato.jpg"},
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
              <p className="text-md ">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
