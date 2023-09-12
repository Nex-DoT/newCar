import { useRouter } from "next/router";
import carsData from "@/data/carsData";
import Cars from "@/components/Cars";
const number = () => {
    let [min , max] = useRouter().query.number || [];
    const gtr = carsData.filter( car => car.price > min && car.price < max);
    if(! gtr.length) return <div className=" h-100 flex items-center justify-center">
        <p className=" text-2xl">Not find any car</p>
    </div> 
    return (
        <div>
            <Cars data={gtr}/>
        </div>
    );

};

export default number;