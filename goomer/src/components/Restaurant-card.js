import styled from 'styled-components'

const RestaurantCardContainer = styled.div`
border: 1px solid black
`;
export const RestaurantCard = ({name, address}) => {
    return (
        <RestaurantCardContainer>
            <p>{name}</p>
            <p>{address}</p>
        </RestaurantCardContainer>
    )
}