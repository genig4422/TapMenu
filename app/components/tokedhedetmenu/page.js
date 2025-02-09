"use client";
import { useState, useEffect } from "react";

export default function MenuWithFixedButtons() {
  const categories = ["Supa","Sallata","Antipasta","Pasta","Rizoto","Peshk", "Mish", "Verat","Kokteile","Alkolike","Birra","Pije","Kafe"];

  const content = {
    Kokteile:[
      {name: "Mohito", price: "250L", image: "/tokedhedet/Supe-me-perime.jpg"},
      {name: "Caipirinha", price: "250L", image: "/tokedhedet/Supe-me-perime.jpg"},
      {name: "Capiroska", price: "250L", image: "/tokedhedet/Supe-me-perime.jpg"},
      {name: "Old Fashioned", price: "250L", image: "/tokedhedet/Supe-me-perime.jpg"},
      {name: "Long Island", price: "250L", image: "/tokedhedet/Supe-me-perime.jpg"},
      {name: "Sex On The Beach", price: "250L", image: "/tokedhedet/Supe-me-perime.jpg"},
      {name: "Aperol Spriz", price: "250L", image: "/tokedhedet/Supe-me-perime.jpg"},
      {name: "Hugo Spriz", price: "250L", image: "/tokedhedet/Supe-me-perime.jpg"},
      {name: "Manhattan", price: "250L", image: "/tokedhedet/Supe-me-perime.jpg"},
      {name: "Negroni", price: "250L", image: "/tokedhedet/Supe-me-perime.jpg"},
      {name: "Land & Sea", price: "250L", image: "/tokedhedet/Supe-me-perime.jpg"},
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
      { name: "Aleksandria e Bardhe", price: "$1.99", image: "/tokedhedet/vere.jpg" },
      { name: "Chardonnay", price: "$2.99", image: "/tokedhedet/birre.jpg" },
      {name: "Chianti", price: "250L", image: "/tokedhedet/Supe-me-perime.jpg"},
      {name: "Fiano Di Avellino", price: "250L", image: "/tokedhedet/Supe-me-perime.jpg"},
      {name: "Greco Di Tufo", price: "250L", image: "/tokedhedet/Supe-me-perime.jpg"},
      {name: "Montepulciano", price: "250L", image: "/tokedhedet/Supe-me-perime.jpg"},
      {name: "Mulleer Thrugau", price: "250L", image: "/tokedhedet/Supe-me-perime.jpg"},
      {name: "Pinot Grigo 1500", price: "250L", image: "/tokedhedet/Supe-me-perime.jpg"},
      {name: "Proseco Riviani", price: "250L", image: "/tokedhedet/Supe-me-perime.jpg"},
      {name: "Salice Salento", price: "250L", image: "/tokedhedet/Supe-me-perime.jpg"},
      {name: "Toscana Bianco", price: "250L", image: "/tokedhedet/Supe-me-perime.jpg"},
      {name: "Toscana Rosso", price: "250L", image: "/tokedhedet/Supe-me-perime.jpg"},
      {name: "Trebiano", price: "250L", image: "/tokedhedet/Supe-me-perime.jpg"},
      {name: "Valpolicella", price: "250L", image: "/tokedhedet/Supe-me-perime.jpg"},
      {name: "Vere e Hapur", price: "250L", image: "/tokedhedet/Supe-me-perime.jpg"},
      {name: "Vere me Gote", price: "250L", image: "/tokedhedet/Supe-me-perime.jpg"},
      
      
    ],

    Alkolike:[
      {name: "Bacardi", price: "250L", image: "/tokedhedet/Supe-me-perime.jpg"},
      {name: "Branca", price: "250L", image: "/tokedhedet/Supe-me-perime.jpg"},
      {name: "Chivas", price: "250L", image: "/tokedhedet/Supe-me-perime.jpg"},
      {name: "Disarono", price: "250L", image: "/tokedhedet/Supe-me-perime.jpg"},
      {name: "Gordons", price: "250L", image: "/tokedhedet/Supe-me-perime.jpg"},
      {name: "Hendrix", price: "250L", image: "/tokedhedet/Supe-me-perime.jpg"},
      {name: "Jagermaster", price: "250L", image: "/tokedhedet/Supe-me-perime.jpg"},
      {name: "Jack Daniel", price: "250L", image: "/tokedhedet/Supe-me-perime.jpg"},
      {name: "Johnnie", price: "250L", image: "/tokedhedet/Supe-me-perime.jpg"},
      {name: "Konjak Skenderbeu", price: "250L", image: "/tokedhedet/Supe-me-perime.jpg"},
      {name: "Metaxa 5", price: "250L", image: "/tokedhedet/Supe-me-perime.jpg"},
      {name: "Montenegro", price: "250L", image: "/tokedhedet/Supe-me-perime.jpg"},
      {name: "Raki", price: "250L", image: "/tokedhedet/Supe-me-perime.jpg"},
      {name: "Vecchia", price: "250L", image: "/tokedhedet/Supe-me-perime.jpg"},
      {name: "Vodka", price: "250L", image: "/tokedhedet/Supe-me-perime.jpg"},
    ],

    Birra:[
      {name: "Birra pa alkol", price: "250L", image: "/tokedhedet/Supe-me-perime.jpg"},
      {name: "Elbar", price: "250L", image: "/tokedhedet/Supe-me-perime.jpg"},
      {name: "Heniken 0", price: "250L", image: "/tokedhedet/Supe-me-perime.jpg"},
      {name: "Heniken", price: "250L", image: "/tokedhedet/Supe-me-perime.jpg"},
      {name: "Paulaner", price: "250L", image: "/tokedhedet/Supe-me-perime.jpg"},
      {name: "Peroni", price: "250L", image: "/tokedhedet/Supe-me-perime.jpg"},
    ],

    Pije: [
      {name: "B52", price: "150L", image: "/tokedhedet/Supe-me-perime.jpg"},
      {name: "Bravo", price: "150L", image: "/tokedhedet/Supe-me-perime.jpg"},
      {name: "Coca Cola", price: "150L", image: "/tokedhedet/Supe-me-perime.jpg"},
      {name: "Limon Soda", price: "150L", image: "/tokedhedet/Supe-me-perime.jpg"},
      {name: "Lipton", price: "150L", image: "/tokedhedet/Supe-me-perime.jpg"},
      {name: "Orange Soda", price: "150L", image: "/tokedhedet/Supe-me-perime.jpg"},
      {name: "Red Bull", price: "250L", image: "/tokedhedet/Supe-me-perime.jpg"},
      {name: "Shveps", price: "150L", image: "/tokedhedet/Supe-me-perime.jpg"},
      {name: "Suko", price: "100L", image: "/tokedhedet/Supe-me-perime.jpg"},
      {name: "Uje Qafshtama", price: "60L", image: "/tokedhedet/Supe-me-perime.jpg"},
      {name: "Uje Qafshtama Qelqi", price: "250L", image: "/tokedhedet/Supe-me-perime.jpg"},
      {name: "Uje Vitamina", price: "100L", image: "/tokedhedet/Supe-me-perime.jpg"},
    ],
    Kafe:[
      {name: "Caj", price: "250L", image: "/tokedhedet/Supe-me-perime.jpg"},
      {name: "Cokollate e ngrohte", price: "250L", image: "/tokedhedet/Supe-me-perime.jpg"},
      {name: "Kafe", price: "250L", image: "/tokedhedet/Supe-me-perime.jpg"},
      {name: "Kakao", price: "250L", image: "/tokedhedet/Supe-me-perime.jpg"},
      {name: "Kapucino", price: "250L", image: "/tokedhedet/Supe-me-perime.jpg"},
      {name: "Kapucino Bustine", price: "250L", image: "/tokedhedet/Supe-me-perime.jpg"},
      {name: "Makiato", price: "250L", image: "/tokedhedet/Supe-me-perime.jpg"},
      {name: "Salep", price: "250L", image: "/tokedhedet/Supe-me-perime.jpg"},
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
                className="w-full h-48 object-cover rounded-md mb-2"
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
