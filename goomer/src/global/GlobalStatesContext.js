import GlobalContext from "./GlobalContext";
import { useState } from "react";
import { useRequestData } from "../hooks/useRequestData";
import axios from "axios";


const GlobalStatesContext = (props) => {
    const [restaurants, isLoadingRestaurant, errorRestaurant] = useRequestData('https://challange.goomer.com.br/restaurants', []);
    const [restaurantSelected, setRestaurantSelected] = useState();
    const [menu, setMenu] = useState([])
    const [foodSelected, setFoodSelected] = useState();
    const [ shoppingCart, setShoppingCart ] = useState([]);
    
    // const [menu, isLoadingMenu, errorMenu] = useRequestData(`https://challange.goomer.com.br/restaurants/${restaurantSelected.id}/menu`, []);

    const getMenu = (id) => {
        axios
            .get(`https://challange.goomer.com.br/restaurants/${id}/menu`)
            .then((res) => {
                
                setMenu(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
    }
    const addCartItem = (cartItem) => {
        
        const newShoppingCart = [...shoppingCart, cartItem];
    
        setShoppingCart(newShoppingCart);
    }

    const states = { restaurants, restaurantSelected, menu, foodSelected, shoppingCart }
    const setters = { setRestaurantSelected, setFoodSelected, setShoppingCart }
    const requests = {
        getMenu
    }
    const functions = { addCartItem }
    
    return (
        <GlobalContext.Provider value={{ states, setters, requests, functions }}>
            {props.children}
        </GlobalContext.Provider>
    )

}
export default GlobalStatesContext;