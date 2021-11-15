import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../index.js';


const getProducts = async (categoryQuery) => {
    const products = []

    console.log(categoryQuery);

    if (categoryQuery) {
        const q = query(collection(db, "products"), where ("category", "array-contains", categoryQuery));
        const querySnap = await getDocs(q);
    
        querySnap.forEach((doc) => {
            products.push(doc.data());
        });
    }

    return(products);
}

export default getProducts;