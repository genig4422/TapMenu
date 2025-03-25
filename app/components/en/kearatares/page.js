"use client";
import { useState, useEffect } from "react";

export default function MenuWithFixedButton() {
  const categories = ["Pizzas","Salads","Antipasti","Pasta","Risotto","Soups", "Meat","Desserts","Wines","Alcoholic","Beer","Drinks","Coffee"];
 

  const content = {
    Pizzas:[
      {price: "600L", name: "Pizza Margarita",  image: "/kearatares/margarita.jpg",display:"Tomato Sauce, Mozzarella, Basil"},
      {price: "700L", name: "Pizza Ham",  image: "/kearatares/proshute.jpg"},
      {price: "700L", name: "Pizza Salami",  image: "/kearatares/proshut.jpg"},
      {price: "800L", name: "Pizza Diavola",  image: "/kearatares/diavola.jpg",display:"Spicy Sausage, Olives, Chili Pepper"},
      {price: "1.000L", name: "Pizza Four Seasons",  image: "/kearatares/stinet.jpg",display:"Ham, Salami, Artichokes, Pepers"},
      {price: "1.000L", name: "Pizza Four Cheeses",  image: "/kearatares/diatherat.jpg",display:"Mozzarella, Ricotta, Gorgonzola, Parmesan"},
      {price: "1.000L", name: "Pizza Capricciosa",  image: "/kearatares/capricosa.jpg",display:"Ham, Mushrooms, Artichokes, Olives"},
      {price: "900L", name: "Pizza Tuna and Onion",  image: "/kearatares/ton.jpg"},
      {price: "1.100L", name: "Pizza Seafood",  image: "/kearatares/deti.jpg"},
      {price: "800L", name: "Pizza Ham and Potatoes",  image: "/kearatares/patate.jpg"},
      {price: "700L", name: "Pizza Mushrooms",  image: "/kearatares/kerpudh.jpg"},
      {price: "1.000L", name: "Pizza Parma",  image: "/kearatares/parma.jpg",display:"Parma Ham, Arugula, Cherry Tomatoes, Parmesan Cheese"},
      {price: "800L", name: "Pizza Romana",  image: "/kearatares/romana.jpg",display:"Anchovies, Olives, Capers"},
      {price: "1.100L", name: "Pizza Bologna",  image: "/kearatares/bologna.jpg",display:"Mortadella, Buffalo Mozzarella, Pistachios"},
    ],

    Salads:[
        {price: "350L", name: "Village Salad",  image: "/kearatares/fshati.jpg",display:"Green Salad, White Cheese, Tomato, Cucumber, Onion"},
        {price: "600L", name: "Caesar Salad",  image: "/kearatares/cesar.jpg",display:"Chicken Breast, Toasted Bread, Tomatoes, Green Salad, Caesar Dressing"},
        {price: "500L", name: "Arugula salad",  image: "/kearatares/rukola.jpg",display:"Arugula, Parmesan Cheese, Tomatoes, Cherry Tomatoes"},
        {price: "300L", name: "Tomato And Onion Salads",  image: "/kearatares/domate.jpg",},
    ],

    Antipasti:[
        {price: "300L", name: "Bruschetta",  image: "/kearatares/brusket.jpg",display:"Toasted Bread With Tomato Slices and Parsley"},
        {price: "550L", name: "Roast Beef",  image: "/kearatares/rosto.jpg",display:"With Parmesan Cheese Cream"},
        {price: "500L", name: "Veal with tuna fish sauce",  image: "/kearatares/vic.jpg",display:"Roast Beef With Funa Fish Sauce"},
        {price: "1200L", name: "Traditional Antipasti",  image: "/kearatares/antipast.jpg",display:"Traditional Albanian and Italian Antipasti for 2 People"},
        {price: "2400L", name: "Traditional Antipasti",  image: "/kearatares/antipast.jpg",display:"Traditional Albanian and Italian Antipasti for 4 People"},
        {price: "200", name: "Pepper Cream",  image: "/kearatares/ajke-speci.png"},
        {price: "200", name: "French Fries",  image: "/kearatares/patate-fritte.jpg"},
        {price: "200", name: "Grilled Vegetables",  image: "/kearatares/perime-zgare.jpg"},
        {price: "200", name: "Yogurt Sauce",  image: "/kearatares/salce_kosi.jpg"},
       
    ],
    Pasta:[
        {price: "700L", name: "Spaghetti Carbonara",  image: "/kearatares/karbonara.jpg",display:"Cheek Meat, Egg Yolk, Pecorino Cheese"},
        {price: "600L", name: "Penne With Cheese And Pepper",  image: "/kearatares/piper.jpg",display:"Pecorino Cheese, Roasted Black Pepper"},
        {price: "700L", name: "Alla Gricia Pena",  image: "/kearatares/grice.jpg",display:"Cheek Meat, Pecorino Cheese"},
        {price: "800L", name: "Bucatini Al'amatriciana",  image: "/kearatares/bucatini.jpg",display:"Beef Cheek, Onion, Tomato Sauce"},
        {price: "700L", name: "Tagliatelle Alla Bolognese",  image: "/kearatares/ala.jpg"},
        {price: "800L", name: "Lasagna with Meat Sauce",  image: "/kearatares/lazanja.jpg"},
        {price: "700L", name: "Tortellini With Butter Cream And Ham",  image: "/kearatares/krem.jpg"},
        {price: "600L", name: "Spaghetti With Garlic And Hot Peppers",  image: "/kearatares/djegs.jpg"},
        {price: "700L", name: "Linguine with Pesto",  image: "/kearatares/pesto.jpg"},
        {price: "700L", name: "Penne Al'arrabbiata",  image: "/kearatares/pene.jpg",display:"Tomato Sauce, Chili Pepper"},
        {price: "1.000L", name: "Seafood Calamarata And Pistachio Cream",  image: "/kearatares/calamar.jpg",display:""},
        {price: "800L", name: "Bucatini Alla Palermitana",  image: "/kearatares/sardele.jpg",display:"Sardines, Dill, Cilantro, Raisins"},
        {price: "1.000L", name: "Sausage and Pea Packer",  image: "/kearatares/bizele.jpg"},
        {price: "1.000L", name: "Pakeri Ala Genovese (Napolitana)",  image: "/kearatares/genovese.jpg",display:"Beef Cooked in Wine and Onions"},
        
       
    ],
    Risotto:[
        {price: "1.000L", name: "Seafood Risotto",  image: "/kearatares/frutadeti.jpg"},
        {price: "900L", name: "Shrimp Pumpkin Risotto",  image: "/kearatares/rizoto-karkalec-kungulli.jpg"},
       
    ],
    Soups: [
      { price: "300L", name: "Pasta with Potatoes",  image: "/kearatares/sup.jpg" },
      { price: "300L", name: "Beans",  image: "/kearatares/fasule.jpg" },
      { price: "300L", name: "Chicken and Small Pasta" ,  image: "/kearatares/pule.jpg"},
     
    ],
    Meat: [
      { price: "1.600L", name: "Lamb in Juice",  image: "/kearatares/neleng.jpg" },
      { price: "800L", name: "Chicken Breast Ala Picaiola",  image: "/kearatares/paciola.jpg" },
      {price: "1.500L", name: "Ossobuco Milanese",  image: "/kearatares/osobuko.jpg"},
      {price: "1.500L", name: "Grilled Meat Mix",  image: "/kearatares/miks.jpg"},
      {price: "1.700L", name: "Lamb Pulp",  image: "/kearatares/pulp.jpg"},
      {price: "1.600L", name: "Grilled Fillet",  image: "/kearatares/fileto.jpg"},
      {price: "400L", name: "Fiorentina 100.gr",  image: "/kearatares/fiorentina.jpg"},
      {price: "400L", name: "Tagliatelle 100.gr",  image: "/kearatares/taliatela.jpg"},
      {price: "400L", name: "Tomahawk 100.gr",  image: "/kearatares/tomahok.jpg"},
      {price: "1.300L", name: "Escalope in White Wine",  image: "/kearatares/eskalop.jpg"},
      {price: "1.500L", name: "Scallops Milanese Style",  image: "/kearatares/eskalopmilanez.jpg"},
      {price: "2.500L", name: "Village Chicken In The Oven",  image: "/kearatares/pilaf.jpg",display:"With Rice"},
      {price: "2.500L", name: "Village Chicken In The Oven",  image: "/kearatares/patatee.jpg",display:"With Potatoes"},
      {price: "2.500L", name: "Village Chicken In The Oven",  image: "/kearatares/ptaliatel.jpg",display:"With Tagliata"},
      {price: "2.500L", name: "Village Chicken In The Oven",  image: "/kearatares/me qull.jpg",display:"With Wholemeal Flour Gruel"},
      
    ],
    Desserts:[
        {price: "300L", name: "Tiramisu",  image: "/kearatares/1.jpg"},
        {price: "250L", name: "Tres Leces Cake",  image: "/kearatares/2.jpg"},
        {price: "300L", name: "Panna Cotta",  image: "/kearatares/3.jpg"}, 
    ],
    Wines: [
      {price: "2.600L", name: "Terrebaciate Merlot", image: "/kearatares/merlot.jpg" ,display:"Region:Abruzzo,Italy"},
      {price: "6.000L", name: "Aru Monica",  image: "/kearatares/aru.jpg",display:"Region:Sardinia,Italy"},
      {price: "3.600L", name: "Malamore Montepulciano Riserva",  image: "/kearatares/malamore.jpg",display:"Region:Abruzzo,Italy"},
      {price: "3.600L", name: "Eremo San Quirico",  image: "/kearatares/eremo.jpg",display:"Region:Campania,Southern Italy"},
      {price: "7.000L", name: "Brunello Di Montalcino Castelli Martinozzi",  image: "/kearatares/brunello.jpg",display:"Region: Tuscany, Italy"},
      {price: "1.600L", name: "Imuri Negroamaro",  image: "/kearatares/imuri.jpg",display:"Region:Puglia,Italy"},
      {price: "2.600L", name: "Saragat Cannonau Di Sardegna",  image: "/kearatares/saragat.jpg",display:"Region:Sardinia,Italy"},
      {price: "1.600L", name: "Campo Del Re",  image: "/kearatares/campo.jpg",display:"Region:Puglia,Italy"},
      {price: "2.000L", name: "Caldora Montepulciano D'abruzzo",  image: "/kearatares/caldora.jpg",display:"Region:Abruzzo,Italy"},
      {price: "5.600L", name: "Riondo Amarone Della Valpolicella",  image: "/kearatares/amarone.jpg",display:"Region:Veneto,Italy"},
      {price: "3.200L", name: "Prive",  image: "/kearatares/prive.jpg",display:"Region:Puglia,Italy"},
      {price: "2.800L", name: "Pipoli Aglianico Del Vulture",  image: "/kearatares/piqoli.jpg",display:"Region: Basilicata, Italy"},
      {price: "3.000L", name: "Suadens Rosso",  image: "/kearatares/suadens.jpg",display:"Region:Campania,Southern Italy"},
      {price: "3.500L", name: "Antorino Primitivo",  image: "/kearatares/antorino.jpg",display:"Region:Puglia,Italy"},
      {price: "1.600L", name: "Ducaminimo Montepulciano",  image: "/kearatares/montepulciano.jpg",display:"Region:Villamagna,Italy"},
      {price: "250L", name: "Bianco 0,25L",  image: "/kearatares/vere-gote-bardhe.jpg",display:"House Wine"},
      {price: "500L", name: "Bianco 0,5L",  image: "/kearatares/vere-gote-bardhe.jpg",display:"House Wine"},
      {price: "1.000L", name: "Bianco 1L",  image: "/kearatares/vere-gote-bardhe.jpg",display:"House Wine"},
      {price: "250L", name: "Rosso 0,25L",  image: "/tokedhedet/s2/vere-gote.jpg",display:"House Wine"},
      {price: "500L", name: "Rosso 0,5L",  image: "/tokedhedet/s2/vere-kane.jpg",display:"House Wine"},
      {price: "1.000L", name: "Rosso 1L",  image: "/tokedhedet/s2/vere-kane.jpg",display:"House Wine"},
      
   ],
   Alcoholic:[
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

    Beer:[
      {price: "150L", name: "Jack Korca 0,25",  image: "/kearatares/0.5.jpg"},
      {price: "300L", name: "Jack Korca 0,5",  image: "/kearatares/0.3.jpg"},
      {price: "200L", name: "Jack Veltins 0,25",  image: "/kearatares/0.5.jpg"},
      {price: "400L", name: "Jack Veltins 0,5",  image: "/kearatares/0.3.jpg"},
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

    Drinks: [
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
      {price: "100L", name: "Lajthiza Water 0,3",  image: "/kearatares/uje-lajthiza03.jpg"},
      {price: "250L", name: "Lajthiza Water 0,75",  image: "/kearatares/uje-lajthiza03.jpg"},
      
    ],
    Coffee:[
      {price: "100L", name: "Lemon Tea",  image: "/tokedhedet/s2/caj.jpg"},
      {price: "100L", name: "Espresso",  image: "/tokedhedet/s2/Coffee.jpg"},
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
