function Product(props) {
    const {productObj} = props;
    // state
    // return a react element
    return (
        <div className="shadow-2xl">
            <h2 className=" font-bold text-2xl text-blue-700">{productObj.title}</h2>
            <p className="font-medium">{productObj.price}</p>
            <p className="font-bold">{productObj.description}</p>
        </div>
    )
}

export default Product