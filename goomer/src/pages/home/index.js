import { useEffect, useState } from "react"
import { RestaurantCard, PageTitle, SearchBox } from "../../components";
import { useRequestData } from "../../hooks/useRequestData";
import { getRestaurants } from "../../utils/api";
import { HomeContainer,
        SeachContainer,
        RestaurantCardContainer
} from "./styles";

export const HomePage = () => {
    const [restaurants, isLoading, error] = useRequestData('https://challange.goomer.com.br/restaurants', []);
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
            <SearchBox value={searchTerm} onChange={onChangeSearchTerm} />
            <RestaurantCardContainer>
                {restaurants.filter(filterRestaurants).map((restaurant)=>(
                    <RestaurantCard key={restaurant.id} 
                                    name={restaurant.name}
                                    address={restaurant.address} />
                                    ))
                }
            </RestaurantCardContainer>
            
    
        
        </HomeContainer>
        
    )
}