import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Collections(props) {
    const { dataCol } = props;
    const [collections] = useState(dataCol);

    function CreateCollectionCard(name) {
        return (
            <div>
                <Link to={`${name}`}><h1>{name}</h1></Link>
            </div>
        )
    }

    return (
        <div>
            {collections.map(col => CreateCollectionCard(col))}
        </div>
    )
}