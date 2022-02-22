import { useEffect, useState } from "react"
import { RestaurantCard } from "../../components";
import { useRequestData } from "../../hooks/useRequestData";
import { getRestaurants } from "../../utils/api";

export const HomePage = () => {
    const [restaurants, isLoading, error] = useRequestData('https://challange.goomer.com.br/restaurants', []);
    
    return (

        <>
            <h1>HomePage</h1>
            {restaurants.map((restaurant)=>(
                <RestaurantCard key={restaurant.id} 
                                name={restaurant.name}
                                address={restaurant.address} />
                                ))
            }
    
        
        </>
        
    )
}