import styled from 'styled-components';


const Item = ({ data }) => {


    return(
        <ItemContainer>
            <Image src={data.images[0]} />
            <Name>{data.name}</Name>
            <span>${data.price}</span>
        </ItemContainer>
    )
}

export default Item;

const Image = styled.img`
    width: 200px;
    height: 250px;
`

const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Name = styled.span`
    font-size: 40px;
`