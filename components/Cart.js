const Cart = ({data}) => {
    return (
        <div className=" w-60">
            <img src={data.image} alt="" />
            <p>{data.name}</p>
        </div>
    );
};

export default Cart;