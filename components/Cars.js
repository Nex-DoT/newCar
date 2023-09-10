import Cart from "./Cart";
const Cars = ({data}) => {
    return (
        <div className="w-5/4 m-auto flex flex-col items-center">
            <h1 className=" text-4xl m-12">Cars</h1>
            <div className="w-2/3 flex  flex-wrap justify-center " >
                {data.map(e => <Cart key={e.id} data={e}/>)}
            </div>
        </div>
    );
};

export default Cars;