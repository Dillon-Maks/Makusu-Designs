import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../index.js';


const getProducts = async (categoryQuery) => {
    const products = []
    let q = ''

    if (categoryQuery) {
        q = query(collection(db, "products"), where ("category", "==", categoryQuery));
    } else {
        q = query(collection(db, "products"));
    }
    const querySnap = await getDocs(q);
    querySnap.forEach((doc) => {
        products.push(doc);
    });

    return(products);
}

export default getProducts;