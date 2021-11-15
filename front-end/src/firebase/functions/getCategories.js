import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../index.js';


const getCategories = async () => {
    const categories = [];
    const q = query(collection(db, "categories"));
    const querySnap = await getDocs(q);

    querySnap.forEach((doc) => {
        categories.push(doc.id);
    });

    return(categories);
}

export default getCategories;