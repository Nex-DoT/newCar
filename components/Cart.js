import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";
const Cart = ({data}) => {
    return (
        <div className=" w-60 h-82 border flex flex-col items-center m-5 rounded-sm opacity-90 transition-opacity hover:opacity-100">
            <div className="w-52 h-40 flex items-center justify-center m-4 "> 
                 <img className="w-full h-full object-contain rounded-md" src={data.image} alt="png" />
            </div>
            <div className="w-full pl-4 pr-4">
                <p className=" m-1">{data.name}</p>
                <p className=" m-1">${data.price}</p>
                <Link href={`/cars/${data.id}`}  className=" text-blue-500 m-1">details</Link>
                <div className="flex w-full items-center justify-between mt-4">
                    <button className=" transition-all border w-16 text-xs h-8 rounded-sm bg-green-800 hover:bg-green-600">BUY</button>
                     <h4 className="text-sm flex"><CiLocationOn className="white text-lg text"/>{data.location}</h4>
                </div>
            </div>
        </div>
    );
};

export default Cart;