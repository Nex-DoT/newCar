import carsData from "@/data/carsData";
import Cars from "./Cars";
const Filteredcars = ({data}) => {
    let newData = carsData.filter(c => c.category === data)
    return (
        <div>
            <Cars data={newData} name={data}/>
        </div>
    );
};

export default Filteredcars;