import { useState } from "react"
import { RestaurantCard, PageTitle, SearchBox } from "../../components";
import { useRequestData } from "../../hooks/useRequestData";
import { HomeContainer,
        RestaurantCardContainer
} from "./styles";

export const HomePage = () => {
    const [restaurants, isLoading, error] = useRequestData('https://challange.goomer.com.br/restaurants', []);
    const [searchTerm, setSearchTerm] = useState('');
    const [restaurantSelected, setRestaurantSelected] = useState();

    const onChangeSearchTerm = (e) => {
        setSearchTerm(e.target.value)
    }

    const filterRestaurants = (restaurant) => {
        if(searchTerm === "") return true;
        if(restaurant.name.toUpperCase().includes(searchTerm.toUpperCase())) return true;
        return false;
    }
    const onClickRestaurantSelected = (id) => {
        console.log("id", id);
    }
    return (

        <HomeContainer>
            <PageTitle />
            <SearchBox value={searchTerm} onChange={onChangeSearchTerm} />
            <RestaurantCardContainer>
                {restaurants.filter(filterRestaurants).map((restaurant)=>(
                    <RestaurantCard key={restaurant.id} 
                                    name={restaurant.name}
                                    address={restaurant.address}
                                    id={restaurant.id}
                                    onClick={onClickRestaurantSelected} />
                                    ))
                }
            </RestaurantCardContainer>
            
    
        
        </HomeContainer>
        
    )
}