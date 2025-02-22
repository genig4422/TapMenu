"use client";
import { useState, useEffect } from "react";

export default function MenuWithFixedButton() {
  const categories = ["Picat","Sallata","Antipasta","Pasta","Rizoto","Supat", "Mish","Embelsirat","Verat","Alkolike","Birra","Pije","Kafe"];
 

  const content = {
    Picat:[
      {price: "600L", name: "Margarita",  image: "/kearatares/margarita.jpg",display:"Salce domate,mocarela,borzilok"},
      {price: "700L", name: "Proshute",  image: "/kearatares/proshute.jpg"},
      {price: "700L", name: "Sallam",  image: "/kearatares/proshut.jpg"},
      {price: "800L", name: "Diavola",  image: "/kearatares/diavola.jpg",display:"sallam pikant,ullinj,spec djeges"},
      {price: "1.000L", name: "Kater Stinet",  image: "/kearatares/stinet.jpg",display:"proshute,sallam,angjinare,speca"},
      {price: "1.000L", name: "Kater Diathera",  image: "/kearatares/diatherat.jpg",display:"mocarela,rikota,gorgonzola,parmixhano"},
      {price: "1.000L", name: "Capricciosa",  image: "/kearatares/capricosa.jpg",display:"proshute,kerpudha,angjinare,ullinj"},
      {price: "900L", name: "Peshk Ton Dhe Qepe",  image: "/kearatares/ton.jpg"},
      {price: "1.100L", name: "Fruta Deti",  image: "/kearatares/deti.jpg"},
      {price: "800L", name: "Proshut Dhe Patate",  image: "/kearatares/patate.jpg"},
      {price: "700L", name: "Kerpudha",  image: "/kearatares/kerpudh.jpg"},
      {price: "1.000L", name: "Parma",  image: "/kearatares/parma.jpg",display:"proshute Parma,rukola,domate qershi,djathe parmixhano"},
      {price: "800L", name: "Romana",  image: "/kearatares/romana.jpg",display:" acuge,ullinj,kaperi"},
      {price: "1.100L", name: "Bologna",  image: "/kearatares/bologna.jpg",display:"mortadela,mocarele bufalo,pistak"},
    ],

    Sallata:[
        {price: "350L", name: "Sallate Fshati",  image: "/kearatares/fshati.jpg",display:"sallat jeshile,djath i bardhe,domate,kastravec,qepe"},
        {price: "600L", name: "Sallat Cezar",  image: "/kearatares/cesar.jpg",display:"gjoks pule,buke e thekur,domate,sallat jeshile,salce cezar"},
        {price: "500L", name: "Sallate Rukola",  image: "/kearatares/rukola.jpg",display:"rukola,djathe parmixhano,stika,domate qershi"},
        {price: "300L", name: "Sallat Domate Dhe Qepe",  image: "/kearatares/domate.jpg",},
    ],

    Antipasta:[
        {price: "300L", name: "Brusketa",  image: "/kearatares/brusket.jpg",display:"buke e thekur me copa domatesh dhe majdanoz"},
        {price: "550L", name: "Rosto Vici",  image: "/kearatares/rosto.jpg",display:"me krem djathi parmixhano"},
        {price: "500L", name: "Vic me Peshk Ton",  image: "/kearatares/vic.jpg",display:"rosto vici me salce peshku ton"},
        {price: "1200L", name: "Antipaste Tradicionale",  image: "/kearatares/antipast.jpg",display:"Antipaste tradicionale shqiptare dhe italiane per 2 persona"},
        {price: "2400L", name: "Antipaste Tradicionale",  image: "/kearatares/antipast.jpg",display:"Antipaste tradicionale shqiptare dhe italiane per 4 persona"},
        {price: "200", name: "Ajke Speci",  image: "/kearatares/ajke-speci.png"},
        {price: "200", name: "Patate Fritte",  image: "/kearatares/patate-fritte.jpg"},
        {price: "200", name: "Perime Zgare",  image: "/kearatares/perime-zgare.jpg"},
        {price: "200", name: "Salce Kosi",  image: "/kearatares/salce_kosi.jpg"},
       
    ],
    Pasta:[
        {price: "700L", name: "Spageti Karbonara",  image: "/kearatares/karbonara.jpg",display:"mish faqeje,e verdh e vezes,diath pekorino"},
        {price: "600L", name: "Pene Me Djathe Dhe Piper",  image: "/kearatares/piper.jpg",display:"djath pekorino,piper i zi i thekur"},
        {price: "700L", name: "Pene Ala Gricia",  image: "/kearatares/grice.jpg",display:"mish faqeje,diath pekorino"},
        {price: "800L", name: "Bukatini Al'amatriciana",  image: "/kearatares/bucatini.jpg",display:"mish faqeje,qepe,salce domate"},
        {price: "700L", name: "Tagliatelle Ala Bolognese",  image: "/kearatares/ala.jpg"},
        {price: "800L", name: "Lazanja Me Salce Me Mish",  image: "/kearatares/lazanja.jpg"},
        {price: "700L", name: "Tortelini Me Krem Gjalpi Dhe Proshut",  image: "/kearatares/krem.jpg"},
        {price: "600L", name: "Spageti Me Hurdhra Vai Dhe Spec Djeges",  image: "/kearatares/djegs.jpg"},
        {price: "700L", name: "Linguini Al Pesto",  image: "/kearatares/pesto.jpg"},
        {price: "700L", name: "Penne Al'arrabbiata",  image: "/kearatares/pene.jpg",display:"salce domate,spec djeges"},
        {price: "1.000L", name: "Calamarata Fruta Deti Dhe Krem Pistaku",  image: "/kearatares/calamar.jpg",display:""},
        {price: "800L", name: "Bucatini Ala Palermitana",  image: "/kearatares/sardele.jpg",display:"sardele,koper,stika,rrush i that"},
        {price: "1.000L", name: "Pakeri Salsice Dhe Bizele",  image: "/kearatares/bizele.jpg"},
        {price: "1.000L", name: "Pakeri Ala Genovese(Napolitana)",  image: "/kearatares/genovese.jpg",display:"mish vici i gatuar ne vere dhe qepe"},
        
       
    ],
    Rizoto:[
        {price: "1.000L", name: "Rizoto Fruta Deti",  image: "/kearatares/frutadeti.jpg"},
        {price: "900L", name: "Rizoto Karkalec Kungull",  image: "/kearatares/rizoto-karkalec-kungulli.jpg"},
       
    ],
    Supat: [
      { price: "300L", name: "Makarona Me Patate",  image: "/kearatares/sup.jpg" },
      { price: "300L", name: "Fasule",  image: "/kearatares/fasule.jpg" },
      { price: "300L", name: "Pule Dhe Makarona Te Vogla" ,  image: "/kearatares/pule.jpg"},
     
    ],
    Mish: [
      { price: "1.600L", name: "Qingj Ne Leng",  image: "/kearatares/neleng.jpg" },
      { price: "800L", name: "Gjoks Pule Ala Picaiola",  image: "/kearatares/paciola.jpg" },
      {price: "1.500L", name: "Ossobuco Alla Milanese",  image: "/kearatares/osobuko.jpg"},
      {price: "1.500L", name: "Miks Mishrash i Pjekur Ne Zgare",  image: "/kearatares/miks.jpg"},
      {price: "1.700L", name: "Kofshe Qingji",  image: "/kearatares/kofshe.jpg"},
      {price: "1.600L", name: "Fileto E Pjekur Ne Zgare",  image: "/kearatares/fileto.jpg"},
      {price: "400L", name: "Fiorentina 100.gr",  image: "/kearatares/fiorentina.jpg"},
      {price: "400L", name: "Tagliatela 100.gr",  image: "/kearatares/taliatela.jpg"},
      {price: "400L", name: "Tomahawk 100.gr",  image: "/kearatares/tomahok.jpg"},
      {price: "1.300L", name: "Eskallop Ne Vere Te Bardhe",  image: "/kearatares/eskalop.jpg"},
      {price: "1.500L", name: "Eskallop Ala Milaneze",  image: "/kearatares/eskalopmilanez.jpg"},
      {price: "2.500L", name: "Pule Fshati Ne Furre",  image: "/kearatares/pilaf.jpg",display:"me oriz"},
      {price: "2.500L", name: "Pule Fshati Ne Furre",  image: "/kearatares/patatee.jpg",display:"me patate"},
      {price: "2.500L", name: "Pule Fshati Ne Furre",  image: "/kearatares/ptaliatel.jpg",display:"me jufka"},
      {price: "2.500L", name: "Pule Fshati Ne Furre",  image: "/kearatares/me qull.jpg",display:"qull me miell integral"},
      
    ],
    Embelsirat:[
        {price: "300L", name: "Tiramisu",  image: "/kearatares/1.jpg"},
        {price: "250L", name: "Trelece",  image: "/kearatares/2.jpg"},
        {price: "300L", name: "Panna Cotta",  image: "/kearatares/3.jpg"}, 
    ],
    Verat: [
      {price: "2.600L", name: "Terrebaciate Merlot", image: "/kearatares/merlot.jpg" ,display:"Rajoni:Abruzzo,Itali"},
      {price: "6.000L", name: "Aru Monica",  image: "/kearatares/aru.jpg",display:"Rajoni:Sardenja,Itali"},
      {price: "3.600L", name: "Malamore Montepulciano Riserva",  image: "/kearatares/malamore.jpg",display:"Rajoni:Abruzzo,Itali"},
      {price: "3.600L", name: "Eremo San Quirico",  image: "/kearatares/eremo.jpg",display:"Rajoni:Campania,Italia e Jugut"},
      {price: "7.000L", name: "Brunello Di Montalcino Castelli Martinozzi",  image: "/kearatares/brunello.jpg",display:"Rajoni:Toscana,Itali"},
      {price: "1.600L", name: "Imuri Negroamaro",  image: "/kearatares/imuri.jpg",display:"Rajoni:Puglia,Itali"},
      {price: "2.600L", name: "Saragat Cannonau Di Sardegna",  image: "/kearatares/saragat.jpg",display:"Rajoni:Sardenja,Itali"},
      {price: "1.600L", name: "Campo Del Re",  image: "/kearatares/campo.jpg",display:"Rajoni:Puglia,Itali"},
      {price: "2.000L", name: "Caldora Montepulciano D'abruzzo",  image: "/kearatares/caldora.jpg",display:"Rajoni:Abruzzo,Itali"},
      {price: "5.600L", name: "Riondo Amarone Della Valpolicella",  image: "/kearatares/amarone.jpg",display:"Rajoni:Veneto,Itali"},
      {price: "3.200L", name: "Prive",  image: "/kearatares/prive.jpg",display:"Rajoni:Puglia,Itali"},
      {price: "2.800L", name: "Pipoli Aglianico Del Vulture",  image: "/kearatares/piqoli.jpg",display:"Rajoni:Basilicata,Itali"},
      {price: "3.000L", name: "Suadens Rosso",  image: "/kearatares/suadens.jpg",display:"Rajoni:Campania,Italia e Jugut"},
      {price: "3.500L", name: "Antorino Primitivo",  image: "/kearatares/antorino.jpg",display:"Rajoni:Puglia,Itali"},
      {price: "1.600L", name: "Ducaminimo Montepulciano",  image: "/kearatares/montepulciano.jpg",display:"Rajoni:Villamagna,Itali"},
      {price: "250L", name: "Bianco 0,25L",  image: "/kearatares/vere-gote-bardhe.jpg",display:"vera e shtepise"},
      {price: "500L", name: "Bianco 0,5L",  image: "/kearatares/vere-gote-bardhe.jpg",display:"vera e shpis"},
      {price: "1.000L", name: "Bianco 1L",  image: "/kearatares/vere-gote-bardhe.jpg",display:"vera e shpis"},
      {price: "250L", name: "Rosso 0,25",  image: "/tokedhedet/s2/vere-gote.jpg",display:"vera e shpis"},
      {price: "500L", name: "Rosso 0,5",  image: "/tokedhedet/s2/vere-kane.jpg",display:"vera e shpis"},
      {price: "1.000L", name: "Rosso 1,00",  image: "/tokedhedet/s2/vere-kane.jpg",display:"vera e shpis"},
      
   ],
   Alkolike:[
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
      {price: "150L", name: "Kriko Korca 0,25",  image: "/kearatares/0.5.jpg"},
      {price: "300L", name: "Kriko Korca 0,5",  image: "/kearatares/0.3.jpg"},
      {price: "200L", name: "Kriko Veltins 0,25",  image: "/kearatares/0.5.jpg"},
      {price: "400L", name: "Kriko Veltins 0,5",  image: "/kearatares/0.3.jpg"},
      {price: "250L", name: "Heniken",  image: "/tokedhedet/s2/heineken-alkol.jpg"},
      {price: "400L", name: "Paulaner Weizen",  image: "/tokedhedet/s2/paulaner.jpg"},
      {price: "200L", name: "Peroni",  image: "/tokedhedet/s2/peroni.jpg"},
      {price: "250L", name: "Peroni Nastro Azzurro",  image: "/kearatares/roni.jpg"},
      {price: "300L", name: "Corona",  image: "/kearatares/rona.jpg"},
      {price: "200L", name: "Korca",  image: "/kearatares/korca-shishe.jpg"},
      {price: "200L", name: "Peja",  image: "/kearatares/peja.jpg"},
      {price: "500L", name: "Artizanale Bionda",  image: "/kearatares/bionda.jpg"},
      {price: "500L", name: "Artizanale Rossa",  image: "/kearatares/rossa.jpg"},

    ],

    Pije: [
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
      {price: "100L", name: "Uje Lajthiza 0,3",  image: "/kearatares/uje-lajthiza03.jpg"},
      {price: "250L", name: "Uje Lajthiza 0,75",  image: "/kearatares/uje-lajthiza03.jpg"},
      
    ],
    Kafe:[
      {price: "100L", name: "Caj Limoni",  image: "/tokedhedet/s2/caj.jpg"},
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
