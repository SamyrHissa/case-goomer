import { useContext, useEffect, useState } from "react";
import { DetailsPageContainer,
        DropdownStyle
    } from "./styles";
import GlobalContext from "../../global/GlobalContext";
import { SearchBox, ItemMenuCard } from "../../components";
import { RestaurantDetailCard } from "../../components/Restaurant-Detail-Card";

export const DetailsPage = () => {
    const { states, requests } = useContext(GlobalContext);
    const [searchTerm, setSearchTerm] = useState('');

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
    const ItemMenuGroup = (item) => {
        const newMenuItem = states.menu.filter((itemMenu)=>{
            return itemMenu.group === item
        })
        // console.log('states.menu',states.menu);
        return (
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {newMenuItem.map((prato, item)=>{
                    return(
                    <div key={item}>
                        <ItemMenuCard title={prato.name} image={prato.image} price={prato.price} sales={prato.sales}/>
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
                {MenuGroup()}
        </DetailsPageContainer>
    )
}