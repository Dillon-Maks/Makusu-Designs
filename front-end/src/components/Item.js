import styled from 'styled-components';
import { useHistory } from 'react-router';


const Item = ({ data, rotation }) => {
    const { push } = useHistory();

    const handleClick = (e) => {
        push(`/product/${data.id}`)
    }

    const Image = styled.img`
    width: 200px;
    height: 250px;
    margin-bottom: 15px;
    transform: rotate(${rotation}deg);
`

    return(
        <ItemContainer onClick={handleClick}>
            <Image src={data.data().images[0]} />
            <span>${data.data().price}</span>
        </ItemContainer>
    )
}

export default Item;


const ItemContainer = styled.div`
    margin: 1% 4%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`