import styled from 'styled-components';
import { useHistory } from 'react-router';


const Item = ({ data }) => {
    const { push } = useHistory();

    const handleClick = (e) => {
        push(`/${data.id}`)
    }

    return(
        <ItemContainer onClick={handleClick}>
            <Image src={data.data().images[0]} />
            <span>${data.data().price}</span>
        </ItemContainer>
    )
}

export default Item;

const Image = styled.img`
    width: 200px;
    height: 250px;
`

const ItemContainer = styled.div`
    margin: 1% 4%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`