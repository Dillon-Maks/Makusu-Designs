import { getStorage, ref } from "firebase/storage";
import { storage } from "../firebase";


const Item = ({ data }) => {
    const imageRef = ref(storage, data.images[0])

    console.log(data.images[0])

    return(
        <div>
            <div>
                <img src={data.images[0]}/>
            </div>
            <p>{data.name}</p>
        </div>
    )
}

export default Item;