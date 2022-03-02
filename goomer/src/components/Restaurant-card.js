import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useContext } from 'react';
import GlobalContext from '../global/GlobalContext';


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

export const RestaurantCard = ({restaurant, onClick}) => {
    const navigation = useNavigate();
    const { states, setters } = useContext(GlobalContext);
    const onClickCard = (restaurant) => {
        setters.setRestaurantSelected(restaurant);
        navigation(`/details/${restaurant.id}`)
    }
    return (
        <RestaurantCardContainer 
            // onClick={()=>navigation(`/details/${restaurant.id}`)}
            onClick={()=>onClickCard(restaurant)}
            >
            <p>{restaurant.name}</p>
            <p>{restaurant.address}</p>
        </RestaurantCardContainer>
    )
}