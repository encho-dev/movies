import{Link} from "react-router-dom"
const Products =()=>{
    const products=[
        {
            id: 1,
            name:"iphone 14",
            Prise:10000,
            discription: "this is the letest iphone",
        },
        {
            id: 2,
            name:"iphone 14 Pro",
            Prise:10000,
            discription: "this is the letest iphone Pro",
        },
        {
            id: 3,
            name:"iphone 14 Pro max",
            Prise:10000,
            discription: "this is the letest iphone pro max",
        },
        {
            id: 4,
            name:"  Mackbook",
            Prise:10000,
            discription: "this is the letest Mackbook",
        },
        {
            id: 5,
            name:" Mackbook pro",
            Prise:10000,
            discription: "this is the letest Mackbook Pro"
        }
    ]
    return(
        <div style = {{display:"flex", flexWrap: "Wrap"}}>
        {products.map((product) => {
            return(
                <Link to={`/product/${product.id}`}>
                <div
                style={{
                    width:"300px",
                    height:"300px",
                    border:"1px solid black",
                }}
                >
                <h3>{product.name}</h3>
                <p>{product.Prise}</p>
                </div>
                </Link>
            );
        })}
        </div>
    );
};
export default Products;