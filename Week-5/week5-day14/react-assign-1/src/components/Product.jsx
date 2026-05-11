function Product(props) {
    const {productObj} = props;
    // state
    // return a react element
    return (
        <div className="shadow-2xl">
            <h2 className=" font-bold text-2xl text-blue-700">{productObj.name}</h2>
            <p className="font-medium">{productObj.email}</p>
            <p className="font-bold">{productObj.image}</p>
        </div>
    )
}

export default Product