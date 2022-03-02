import GlobalContext from "./GlobalContext";
import { useState } from "react";
import { useRequestData } from "../hooks/useRequestData";


const GlobalStatesContext = (props) => {
    const [restaurants, isLoadingRestaurant, errorRestaurant] = useRequestData('https://challange.goomer.com.br/restaurants', []);
    const [restaurantSelected, setRestaurantSelected] = useState();
    const [menu, setMenu] = useState([]);
    // const [menu, isLoadingMenu, errorMenu] = useRequestData(`https://challange.goomer.com.br/restaurants/${restaurantSelected.id}/menu`, []);

    const states = { restaurants, restaurantSelected }
    const setters = { setRestaurantSelected }
    
    
    return (
        <GlobalContext.Provider value={{states, setters}}>
            {props.children}
        </GlobalContext.Provider>
    )

}
export default GlobalStatesContext;