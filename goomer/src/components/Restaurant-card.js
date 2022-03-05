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
    const { states, setters } = useContext(GlobalContext);
    const onClickCard = (restaurant) => {
        setters.setRestaurantSelected(restaurant);
        navigation(`/details/${restaurant.id}`)
    }
    return (
        <RestaurantCardContainer onClick={()=>onClickCard(restaurant)}>
            {/* <div className="card" style="width: 18rem;">
                <img className="card-img-top" src={restaurant.image} alt="Imagem de capa do card" />
                <div className="card-body">
                    <h5 className="card-title">{restaurant.name}</h5>
                    <p className="card-text">{restaurant.address}</p>
                </div> */}
                {/* <ul className="list-group list-group-flush">
                    <li className="list-group-item">Cras justo odio</li>
                    <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Vestibulum at eros</li>
                </ul>
                <div className="card-body">
                    <a href="#" class="card-link">Link do card</a>
                    <a href="#" class="card-link">Outro link</a>
                </div> */}
            {/* </div> */}
            <img className="card-img-left" src={restaurant.image} alt="Imagem de capa do card" />
            <div>
            <p>{restaurant.name}</p>
            <p>{restaurant.address}</p>
            </div>
        </RestaurantCardContainer>
    )
}