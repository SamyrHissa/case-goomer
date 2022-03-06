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
        transform: scale(1.1);
        cursor: pointer;
    }
    transition: 0.5s;
    >img {
        width: 100px;
        margin-right: 10px;
    };
    display: flex;
    
`;

export const RestaurantCard = ({restaurant, onClick}) => {
    const navigation = useNavigate();
    const { setters } = useContext(GlobalContext);
    const onClickCard = (restaurant) => {
        setters.setRestaurantSelected(restaurant);
        navigation(`/details/${restaurant.id}`)
    }
    return (
        <RestaurantCardContainer onClick={()=>onClickCard(restaurant)}>
            <img className="card-img-left" src={restaurant.image} alt="Imagem de capa do card" />
            <div>
            <p>{restaurant.name}</p>
            <p>{restaurant.address}</p>
            </div>
        </RestaurantCardContainer>
    )
}