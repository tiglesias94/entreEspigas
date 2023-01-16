import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {getAllProducts} from "../../Utils/productFetch"
import SignUp from "../Auth/SignUp";
import ProductCard from "./ProductCard";


const  ProductGrid= () => {

    const [products, setProducts] = useState([])
    
    useEffect(()=>{
        getAllProducts()
        .then((data) => setProducts(data))
        .catch((error) => console.warn(error))
    },[])

    console.log(products)

    return ( 
        <>

        <h1>Product List:</h1>
        <div>
            {products.map((item) => (
                <ProductCard key={item.id} product={item} />
            ))}
        </div>
        </>
     );
}
 
export default ProductGrid;
