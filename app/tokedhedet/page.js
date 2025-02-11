"use client"
import Image from "next/image";
import MenuWithFixedButtons from "../components/tokedhedetmenu/page";
import Head from "next/head";

export default function TokeDheDet(){


        const handleCall = () => {
          window.location.href = "tel:+355697540908"; // Replace with your phone number
        };

    return(
        <div >
                <Head>
                    <title>Toke & Det Restaurant Menu - Fresh Seafood & More</title>
                    <meta name="description" content="Shijoni një ndërthurje të shijeve të tokës dhe detit në Restorantin Toke & Det. Porosit online tani!" />
                    <meta property="og:title" content="Toke & Det Restaurant - Një shije e oqeanit" />
                    <meta property="og:description" content="Shijoni një përvojë unike të ushqimit të detit ku toka takohet me detin." />
                    <meta property="og:url" content="https://tap-menu.vercel.app/tokedhedet" />
                    <meta property="og:site_name" content="Tap Menu" />
                    <meta property="og:image" content="https://yourwebsite.com/og-image.jpg" />
                    <meta property="og:type" content="website" />
                    <meta name="canonical" content="https://tap-menu.vercel.app/tokedhedet" />
                </Head>

            {/*add the background photo*/}
            <div className="relative w-full ">
    {/* Video Background */}
    <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
    >
        <source src="/tokedhedet/tokedhedetvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
    </video>

    {/* Content on top of the video */}
    <div className="relative w-full h-16 flex items-center justify-between px-6 bg-opacity-50 bg-gray-700">
        <p className="text-2xl font-bold">Tap Menu</p>
        <div>
            <p className="py-2 ml-6 rounded-lg hidden px-5 bg-green-600 md:hidden inline-block">Shqip</p>
            <button onClick={handleCall} className="py-2 ml-6 hidden rounded-lg px-5 bg-green-600 md:inline-block">
                Porosit Online
            </button>
            <button
                onClick={handleCall}
                className="fixed w-80 bottom-4 z-50 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg md:hidden"
            >
                Porosit Online Tani
            </button>
        </div>
    </div>

    <div className="relative w-full px-6 pt-8 md:pt-12 flex bg-opacity-25 bg-black h-64 md:items-end items-center">
        <div className="md:my-6 mx-1 md:mx-8 text-white">
            <p className="text-5xl font-bold mb-2">Toke & Det Restaurant</p>
            <p className="md:text-xl text-lg">
                Aty ku bashkohet Toka me Detin per tju sjelle specialitetin e rradhes.
            </p>
            <p className="text-lg mt-6 flex self-end font-semibold">Shkruani Review:</p>
        </div>
    </div>

    <div className="relative w-full h-16 flex px-6 bg-opacity-25 bg-black">
        <div className="flex flex-col md:flex-row md:items-start text-center md:text-left">
            <div className="flex justify-center md:justify-start gap-4">
                <p className="px-5 rounded-xl md:py-2 flex items-center text-gray-700 bg-white">
                    <Image src="/google.png" alt="Google logo" className="mr-2" width={25} height={25} priority />
                    Google
                </p>
                <p className="px-5 hidden rounded-xl md:py-2 md:flex items-center text-gray-700 bg-white">
                    <Image src="/instagram.png" alt="Instagram logo" className="mr-2" width={25} height={25} priority />
                    Instagram
                </p>
                <p className="px-5 rounded-xl py-2 flex items-center text-gray-700 bg-white">
                    <Image src="/tripadvisor.png" alt="Trip Advisor logo" className="mr-2" width={25} height={25} priority />
                    Trip Advisor
                </p>
            </div>
        </div>
    </div>
</div>

            <MenuWithFixedButtons></MenuWithFixedButtons>



        </div>
    );
}