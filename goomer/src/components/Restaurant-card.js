import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const RestaurantCardContainer = styled.div`
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 2px 4px #00000029;
    border-radius: 4px;
    padding: 5px;
    :hover {
        transform: scale(1.05);
        cursor: pointer;
    }
    transition: 0.5s;
`;

export const RestaurantCard = ({name, address, id, onClick}) => {
    const navigatin = useNavigate();
    return (
        <RestaurantCardContainer onClick={()=>navigatin(`/details/${id}`)}>
            <p>{name}</p>
            <p>{address}</p>
        </RestaurantCardContainer>
    )
}