import { getStorage, ref } from "firebase/storage";
import { storage } from "../firebase";


const Item = ({ data }) => {
    const imageRef = ref(storage, data.images[0])
    
    console.log(imageRef);

    return(
        <div>
            <div>
                <img />
            </div>
            <p>{data.name}</p>
        </div>
    )
}

export default Item;