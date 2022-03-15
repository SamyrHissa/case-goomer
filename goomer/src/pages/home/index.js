import React, { useContext, useEffect, useState } from "react";
import { RestaurantCard, PageTitle, SearchBox } from "../../components";
import GlobalContext from "../../global/GlobalContext";
import { openedClosened } from "../../utils/function";
import { HomeContainer,
        RestaurantCardContainer
} from "./styles";

export const HomePage = () => {

    const { states, setters, requests } = useContext(GlobalContext);
    const [searchTerm, setSearchTerm] = useState('');
    const [open, setOpen] = useState(false);

    useEffect(()=>{
        requests.getRestaurants();
    }, [])
    const onChangeSearchTerm = (e) => {
        setSearchTerm(e.target.value)
    }

    const filterRestaurants = (restaurant) => {
        if(searchTerm === "") return true;
        if(restaurant.name.toUpperCase().includes(searchTerm.toUpperCase())) return true;
        return false;
    }

    const verifyOpen = (hours) => {
        // setOpen(!open)
        // setOpen(openedClosened(hours))
        // const modify = 
        let modifed = false;
        const modify = states.restaurants1.map((restaurant)=>{
            if(restaurant.open !== openedClosened(restaurant.hours)){
                restaurant.open = !restaurant.hours;
                modifed = true
            }
            
            return restaurant
        })
        if(modifed){
            console.log('true');
        } else {
            console.log('false');
        }
        // 

    }
    console.log('states.restaurants1', states.restaurants1);
    return (

        <HomeContainer>
            {setInterval(()=>verifyOpen(), 10000)}
            <PageTitle />
            <SearchBox value={searchTerm} onChange={onChangeSearchTerm} title='Buscar estabelecimento' />
            <RestaurantCardContainer>
                {states.restaurants1.filter(filterRestaurants).map((restaurant)=>{
                    // setOpen(openedClosened(restaurant.hours))
                    // setInterval(()=>verifyOpen(restaurant.hours), 2000)
                    return <RestaurantCard key={restaurant.id} restaurant={restaurant} open={open} />
                }
                    )
                }
            </RestaurantCardContainer>
            
    
        
        </HomeContainer>
        
    )
}