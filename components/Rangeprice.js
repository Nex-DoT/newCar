import { useState } from "react";
import { useRouter } from "next/router";
const Rangeprice = () => {
    const router = useRouter();
    const [min , setMin] = useState();
    const [max , setMax] = useState();
    const clickHandeler = ()=>{
        if(min & max){
            router.push(`/filtered/${min}/${max}`);
        }else{
            alert("type a number in input field")
        }
    }
    return (
        <div className="flex  w-1/2 m-auto items-center justify-center mt-5">
            <div className="h-20 flex flex-col items-center justify-around">
                <input className="bg-black border rounded-sm outline-none text-sm pl-4 w-18 h-10" type="number" placeholder="min-price"value={min} onChange={e=>setMin(e.target.value)} />
                <br/>
                <input className="bg-black border rounded-sm outline-none text-sm pl-4 w-18 h-10" type="number" placeholder="max-price"value={max} onChange={e=>setMax(e.target.value)} />
            </div>
            <button onClick={clickHandeler} className="bg-white/50 border ml-5 p-1 rounded-sm">Search</button>
        </div>
    );
};

export default Rangeprice;