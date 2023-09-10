import Cart from "./Cart";
const Cars = ({data}) => {
    return (
        <div className="w-3/4 m-auto flex flex-col items-center">
            <h1 className=" text-4xl">Cars</h1>
            <div className="w-2/3 flex  flex-wrap " >
                {data.map(e => <Cart key={e.id} data={e}/>)}
            </div>
        </div>
    );
};

export default Cars;