import {collection, doc, getDoc, getDocs, getFirestore, query, where} from "firebase/firestore";



export const getAllProducts = () => {

    const database = getFirestore();
    const collectionReference = collection(database, "products")

    return getDocs(collectionReference)
    .then((snapshot)=>{
        
        const productList = snapshot.docs.map((product)=>({
            id: product.id,
            ...product.data()
        }));
        console.log (productList)
        return(productList)
    })  
    .catch(error => console.warn(error))

};

export const getProduct = () => {

    const database = getFirestore();
    const itemReference = collection(database, "products")

    return getDocs(itemReference)
    .then((snapshot)=>{
        if (snapshot.exists()){
        const singleProduct = {
            id: snapshot.id,
            ...snapshot.data()
        };
        return(singleProduct)
    }
    })  
    .catch(error => console.warn(error))
};


