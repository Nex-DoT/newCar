import Link from "next/link";
import Sedan from "@/components/icons/Sedan";
import Sport from "@/components/icons/Sport";
import Hatchback from "@/components/icons/Hatchback";
import Suv from "@/components/icons/Suv";
const Category = () => {
    return (
        <div className="flex items-center justify-around w-80 m-auto mt-5"> 
            <Link href="/category/sedan">
                <div className=" bg-white/60 w-16 rounded-md flex flex-col items-center cursor-pointer transition-all hover:bg-white/80">
                    <Sedan className=""/>
                    <p className="text-black text-center text-xs">Sedan</p>
                </div>
            </Link>

            <Link href="/category/sport">
                <div className=" bg-white/60 text-black w-16 z-30 rounded-md flex transition-all flex-col items-center cursor-pointer hover:bg-white/80">
                    <Sport className=""/>
                    <p className="text-black text-center text-xs">Sport</p>
                </div>
            </Link>

            <Link href="/category/hatchback">
                <div className=" bg-white/60 text-black w-16 z-30 rounded-md flex flex-col items-center cursor-pointer hover:bg-white/80 transition-all">
                    <Hatchback className=""/>
                    <p className="text-black text-center text-xs">Hatchback</p>
                </div>
            </Link>

            <Link href="/category/suv">
                <div className=" bg-white/60 text-black z-30 w-16 rounded-md flex flex-col items-center cursor-pointer hover:bg-white/80 transition-all">
                    <Suv className=""/>
                    <p className="text-black text-center text-xs">Suv</p>
                </div>
            </Link>
        </div>
    );
};

export default Category;