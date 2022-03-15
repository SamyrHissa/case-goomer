import GlobalContext from "./GlobalContext";
import { useState } from "react";
import { useRequestData } from "../hooks/useRequestData";
import axios from "axios";
import { openedClosened } from "../utils/function";


const GlobalStatesContext = (props) => {
    const [restaurants, isLoadingRestaurant, errorRestaurant] = useRequestData('https://challange.goomer.com.br/restaurants', []);
    const [restaurants1, setRestaurants1] = useState([]);
    const [restaurantSelected, setRestaurantSelected] = useState();
    const [menu, setMenu] = useState([])
    const [foodSelected, setFoodSelected] = useState();
    const [ shoppingCart, setShoppingCart ] = useState([]);
    const [open, setOpen] = useState(false);
    
    const getRestaurants = () => {
        axios
            .get(`https://challange.goomer.com.br/restaurants`)
            .then((res) => {
                const data = res.data;
                // console.log('data', data);
                const newRestaurants = data.map((restaurant) => {
                    restaurant.open = openedClosened(restaurant.hours);
                    return restaurant
                });
                
                // console.log('newRestaurants', newRestaurants);
                setRestaurants1(newRestaurants)
            })
            .catch((err)=>{
                console.log(err)
            })
    }

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

    const states = { restaurants, restaurants1, restaurantSelected, menu, foodSelected, shoppingCart, open }
    const setters = { setRestaurants1, setRestaurantSelected, setFoodSelected, setShoppingCart, setOpen }
    const requests = {
        getRestaurants,
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