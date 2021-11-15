import { collection, query, getDocs } from "firebase/firestore";
import { db } from '../index.js';


const getCategories = async () => {
    const categories = [];
    const q = query(collection(db, "categories"));
    const querySnap = await getDocs(q);

    querySnap.forEach((doc) => {
        categories.push(doc.data().name)
    });

    return(categories);
}

export default getCategories;