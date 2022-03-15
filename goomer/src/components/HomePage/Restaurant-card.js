import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useContext, useEffect, useState } from 'react';
import GlobalContext from '../../global/GlobalContext';
import { openedClosened, sleep } from '../../utils/function';


const RestaurantCardContainer = styled.div`
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 2px 4px #00000029;
    border-radius: 4px;
    padding: 5px;
    display: flex;
    margin: 30px;
    :hover {
        transform: scale(1.1);
        cursor: pointer;
    }
    transition: 0.5s;
    .description{
        display: flex;
    }
    img {
        width: 100px;
        margin-right: 10px;
    };
    
    .bothon{
        width: 60px;
        height: 60px;
        border-radius: 70px;
        background: #2B0D61;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        top: -30%;
        right: -15%;
    }

`;

export const RestaurantCard = ({restaurant, open}) => {

    const navigation = useNavigate();
    const { states, setters } = useContext(GlobalContext);
    // const [open, setOpen] = useState(false);

    // useEffect(()=>{
        // setOpen(openedClosened(restaurant.hours));
        // console.log('passei');
    // },[open]);

    const onClickCard = (restaurant) => {
        setters.setRestaurantSelected(restaurant);
        navigation(`/details/${restaurant.id}`)
    }

   
    const verifyOpen = () => {
        // const myInternal = setInterval(() => {
            // setOpen(!open)
        // }, 3000);
        
    }
    return (
        <RestaurantCardContainer onClick={()=>onClickCard(restaurant)}>
            {/* <script> */}
                {/* {setInterval(verifyOpen, 2000)} */}
            {/* </script> */}
            <div className='description'>
                <img className="card-img-left" src={restaurant.image} alt="Imagem de capa do card" />
                <div>
                    <p>{restaurant.name}</p>
                    <p>{restaurant.address}</p>
                </div>
            </div>
            
            <div className='bothon'>
                    {restaurant.open ? `aberto` : `fechado`}
            </div>
        </RestaurantCardContainer>
    )
}