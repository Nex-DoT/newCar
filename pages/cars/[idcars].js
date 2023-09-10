import Details from "@/components/Details";
import { useRouter } from "next/router";
const cars = () => {
    const router = useRouter();
    let number = +router.query.idcars -1;
    return (
        <div>
            <Details router={number} />
        </div>
    );
};

export default cars;