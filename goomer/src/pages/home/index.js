import React, { useContext, useState } from "react";
import { RestaurantCard, PageTitle, SearchBox } from "../../components";
import GlobalContext from "../../global/GlobalContext";
import { HomeContainer,
        RestaurantCardContainer
} from "./styles";

export const HomePage = () => {

    const { states } = useContext(GlobalContext);
    const [searchTerm, setSearchTerm] = useState('');

    const onChangeSearchTerm = (e) => {
        setSearchTerm(e.target.value)
    }

    const filterRestaurants = (restaurant) => {
        if(searchTerm === "") return true;
        if(restaurant.name.toUpperCase().includes(searchTerm.toUpperCase())) return true;
        return false;
    }
    return (

        <HomeContainer>
            <PageTitle />
            <SearchBox value={searchTerm} onChange={onChangeSearchTerm} title='Buscar estabelecimento' />
            <RestaurantCardContainer>
                {states.restaurants.filter(filterRestaurants).map((restaurant)=>(
                    <RestaurantCard key={restaurant.id} restaurant={restaurant}/>
                    ))
                }
            </RestaurantCardContainer>
            
    
        
        </HomeContainer>
        
    )
}