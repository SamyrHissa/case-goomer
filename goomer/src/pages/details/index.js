import { useContext, useEffect, useState } from "react";
import { DetailsPageContainer,
        DropdownStyle
    } from "./styles";
import GlobalContext from "../../global/GlobalContext";
import { SearchBox, ItemMenuCard, RestaurantDetailCard, FoodCard } from "../../components";
// import { RestaurantDetailCard } from "../../components/Restaurant-Detail-Card";
// import { FoodCard } from "../../components/Food-card";


export const DetailsPage = () => {
    const { states, setters, requests } = useContext(GlobalContext);
    const [searchTerm, setSearchTerm] = useState('');
    const [itemSelected, setItemSelected] = useState(false);

    useEffect(()=>{
        requests.getMenu(states.restaurantSelected.id);
    }, [])

    const onChangeSearchTerm = (e) => {
        setSearchTerm(e.target.value)
    }
    
    const filterMenus = (item) => {
        if(searchTerm === '') return true;
        if(item.toUpperCase().includes(searchTerm.toUpperCase())) return true;
        return false;
    }
    const selectItem = (foodSelected) => {
        setters.setFoodSelected(foodSelected);
        if(itemSelected){
        }
        setItemSelected(!itemSelected);
    }
    const ItemMenuGroup = (item) => {
        const newMenuItem = states.menu.filter((itemMenu)=>{
            return itemMenu.group === item
        })
        return (
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" >
                {newMenuItem.map((food, item)=>{
                    return(
                    <div key={item} onClick={()=>selectItem(food)}  data-toggle="modal" data-target="#ExemploModalCentralizado">
                        <ItemMenuCard title={food.name} image={food.image} price={food.price} sales={food.sales} />
                    </div>
                    )
                })}
            </div>
        )
    }
    const MenuGroup = () => {
        const newMenuGroup = Array.from(new Set(states.menu.map((item)=>{
            return item.group
        })));
        
        return (
            <DropdownStyle>
                {newMenuGroup.filter(filterMenus).map((item)=>{
                    return(
                        <div className="dropdown" key={item}>
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {item}
                                </button>
                                {ItemMenuGroup(item)}
                                
                        </div>
                    )
                })}
            </DropdownStyle>
        )
    };
    
    return (
        
        <DetailsPageContainer >
            {states.restaurantSelected && 
                <RestaurantDetailCard image={states.restaurantSelected.image} 
                    name={states.restaurantSelected.name} 
                    address={states.restaurantSelected.address} 
                    hours={states.restaurantSelected.hours} />}
                <SearchBox value={searchTerm} onChange={onChangeSearchTerm} title='Buscar cardápio' />
                <MenuGroup filterMenus={filterMenus}/>
                {itemSelected && <FoodCard unSelectFood={()=>selectItem()} />}
        </DetailsPageContainer>
    )
}