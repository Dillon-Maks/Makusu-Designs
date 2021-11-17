import { doc, getDoc } from "firebase/firestore";
import { db } from '../index.js';


const getProducts = async (id) => {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);    

    if (docSnap.exists()) {
        return(docSnap.data())
    }
}
export default getProducts;