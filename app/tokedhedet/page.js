import Image from "next/image";
import MenuWithFixedButtons from "../components/tokedhedetmenu/page";

export default function TokeDheDet(){

    return(
        <div >
            {/*add the background photo*/}
           <div className="bg-cover bg-center bg-no-repeat " style={{backgroundImage: "url('/download.jpg')"}}>
                <div className="w-full h-16 flex items-center justify-between px-6 bg-opacity-50 bg-gray-700">
                    <p className="text-2xl font-bold">Tap Menu</p>
                <div className="">
                    <p className="py-2 ml-6 rounded-lg  hidden px-5 bg-green-600  md:hidden inline-block">Shqip</p>
                    <p className="py-2 ml-6 hidden  rounded-lg  px-5 bg-green-600  md:inline-block">Porosit Online</p>
                    <button className="fixed w-80 bottom-4 z-50 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg md:hidden">
  Porosit Online Tani
</button>

                </div>
                </div>
                <div className="w-full px-6 pt-8 md:pt-12 flex bg-opacity-25 bg-black h-64 md:items-end  items-center">
                    <div className=" md:my-6 mx-1 md:mx-8 text-white ">
                        <p className="text-5xl font-bold mb-2 ">Toke & Det Restaurant</p>
                        <p className="md:text-xl text-lg">Aty ku bashkohet Toka me Detin per tju sjelle specialitetin e rradhes.</p>
                        <p className="text-lg mt-6 flex self-end font-semibold ">Shkruani Review:</p>
                    </div>
                </div>
                <div className="w-full h-16 flex   px-6 bg-opacity-25 bg-black">
                <div className="flex flex-col md:flex-row  md:items-start text-center md:text-left">
                    
                    <div className="flex  justify-center md:justify-start gap-4">
                        <p className="px-5 rounded-xl  md:py-2 flex items-center text-gray-700 bg-white">
                        <Image src="/google.png" alt="Google logo" className="mr-2" width={25} height={25} priority />
                        Google
                        </p>
                        <p className="px-5 hidden  rounded-xl md:py-2 md:flex items-center text-gray-700 bg-white">
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