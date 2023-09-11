import { useRouter } from "next/router";
import Filteredcars from "@/components/Filteredcars";
const carcategory = () => {
    let routername = useRouter().query.carcategory;

    return (
        <div>
            <Filteredcars data={routername}/>
        </div>
    );
};

export default carcategory;