import styled from 'styled-components'

const RestaurantCardContainer = styled.div`
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 2px 4px #00000029;
    border-radius: 4px;
    /* border: 1px solid black; */
    padding: 5px;
`;

export const RestaurantCard = ({name, address}) => {
    return (
        <RestaurantCardContainer>
            <p>{name}</p>
            <p>{address}</p>
        </RestaurantCardContainer>
    )
}